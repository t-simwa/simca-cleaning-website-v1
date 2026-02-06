"use client"

interface GoogleMapProps {
  height?: string
  className?: string
}

export default function GoogleMap({ height = "400px", className = "" }: GoogleMapProps) {
  // Mombasa Headquarters: New Canon Towers, Moi Avenue, Mombasa
  // Using coordinates for precise red pin placement: -4.0434771, 39.6682065
  const location = "New Canon Towers, Moi Avenue, Mombasa, Kenya"
  const coordinates = "-4.0434771,39.6682065"
  
  // This format shows the red pin marker at the exact location
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}&t=&z=17&ie=UTF8&iwloc=&output=embed`

  return (
    <div 
      className={`relative ${className}`}
      style={{ height, zIndex: 0 }}
    >
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, zIndex: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Simca Agencies Location - New Canon Towers, Moi Avenue, Mombasa"
        className="rounded-lg"
      />
    </div>
  )
}
