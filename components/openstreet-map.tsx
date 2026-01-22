"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

interface OpenStreetMapProps {
  address: string
  height?: string
  zoom?: number
  markers?: Array<{
    position: string
    popup: string
  }>
}

type LatLngTuple = [number, number]

// Known coordinates for specific locations
const KNOWN_COORDINATES: { [key: string]: LatLngTuple } = {
  "Kaimosi Friends University, Kaimosi Town, Vihiga County, Western Kenya": [0.1697, 34.7525],
  "Kimathi Street, Central Business District, Nairobi, Kenya": [-1.2833, 36.8172],
  "PO BOX 16584, 80100, Mombasa": [-4.0435, 39.6682],
  "Uganda Road, Eldoret Town, Uasin Gishu County, Rift Valley, Kenya": [0.5204, 35.2697]
}

function OpenStreetMapComponent({ address, height = "400px", zoom = 15, markers }: OpenStreetMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!mapRef.current) return

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default
        await import("leaflet/dist/leaflet.css")

        // Fix Leaflet default icon issue
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        })

        // Initialize map with a default view of Kenya
        const map = L.map(mapRef.current as HTMLElement).setView([0.0236, 37.9062] as LatLngTuple, zoom)
        mapInstanceRef.current = map

        // Add OpenStreetMap tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map)

        // Check if we have known coordinates for this address
        const knownCoordinates = KNOWN_COORDINATES[address]
        if (knownCoordinates) {
          map.setView(knownCoordinates, zoom)
          const marker = L.marker(knownCoordinates)
            .addTo(map)
            .bindPopup(address)
          marker.openPopup()
          setIsLoading(false)
          return
        }

        // If no known coordinates, use geocoding
        const geocodeAddress = async (addr: string): Promise<LatLngTuple | null> => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addr)}&countrycodes=ke&limit=1&addressdetails=1`
            )
            const data = await response.json()
            
            if (data && data[0]) {
              const { lat, lon, display_name } = data[0]
              const coordinates: LatLngTuple = [parseFloat(lat), parseFloat(lon)]
              
              // Set view to the coordinates
              map.setView(coordinates, zoom)
              
              // Add marker
              const marker = L.marker(coordinates)
                .addTo(map)
                .bindPopup(display_name || addr)
              marker.openPopup()

              return coordinates
            } else {
              console.error("No results found for address:", addr)
              return null
            }
          } catch (error) {
            console.error("Error geocoding address:", error)
            return null
          }
        }

        // If markers are provided, add them all
        if (markers && markers.length > 0) {
          const geocodePromises = markers.map(marker => {
            // Check if we have known coordinates for this marker
            const knownMarkerCoordinates = KNOWN_COORDINATES[marker.position]
            if (knownMarkerCoordinates) {
              const markerInstance = L.marker(knownMarkerCoordinates)
                .addTo(map)
                .bindPopup(marker.popup)
              // Show popup on hover
              markerInstance.on('mouseover', function() { markerInstance.openPopup(); });
              markerInstance.on('mouseout', function() { markerInstance.closePopup(); });
              return Promise.resolve(knownMarkerCoordinates)
            }

            // If no known coordinates, use geocoding
            return fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(marker.position)}&countrycodes=ke&limit=1&addressdetails=1`)
              .then(res => res.json())
              .then(data => {
                if (data && data[0]) {
                  const { lat, lon } = data[0]
                  const coordinates: LatLngTuple = [parseFloat(lat), parseFloat(lon)]
                  const markerInstance = L.marker(coordinates)
                    .addTo(map)
                    .bindPopup(marker.popup)
                  // Show popup on hover
                  markerInstance.on('mouseover', function() { markerInstance.openPopup(); });
                  markerInstance.on('mouseout', function() { markerInstance.closePopup(); });
                  return coordinates
                }
                return null
              })
              .catch(error => {
                console.error("Error geocoding marker:", error)
                return null
              })
          })

          // Wait for all markers to be added, then fit bounds
          Promise.all(geocodePromises).then(results => {
            const validCoordinates = results.filter((coord): coord is LatLngTuple => coord !== null)
            if (validCoordinates.length > 0) {
              const bounds = L.latLngBounds(validCoordinates)
              map.fitBounds(bounds, { padding: [50, 50] })
            } else {
              // If no markers were added successfully, fall back to the main address
              geocodeAddress(address)
            }
            setIsLoading(false)
          })
        } else {
          // If no markers, just show the main address
          await geocodeAddress(address)
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error initializing map:", error)
        setIsLoading(false)
      }
    }

    initMap()

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
    }
  }, [address, zoom, markers])

  return (
    <div
      ref={mapRef}
      style={{ height, width: "100%", zIndex: 'auto', position: 'static' }}
      className="rounded-lg overflow-hidden shadow-lg leaflet-no-zindex"
    >
      {isLoading && (
        <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800" style={{height: '100%', width: '100%', zIndex: 'auto', position: 'static'}}>
          <div className="text-gray-500 dark:text-gray-400">Loading map...</div>
        </div>
      )}
    </div>
  )
}

// Export a dynamically loaded version of the component
export default dynamic(() => Promise.resolve(OpenStreetMapComponent), {
  ssr: false,
  loading: () => (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800" style={{ height: "400px" }}>
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">Loading map...</div>
      </div>
    </div>
  ),
}) 