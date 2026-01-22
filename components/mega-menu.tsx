"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Home,
  Building2,
  Sofa,
  Bug,
  Sprout,
  MapPin,
  Info,
  Users,
  History,
  Award,
} from "lucide-react"

interface MegaMenuProps {
  type: string
  onClose: () => void
}

export default function MegaMenu({ type, onClose }: MegaMenuProps) {
  const servicesMenu = [
    {
      title: "Residential Cleaning",
      description: "Comprehensive cleaning services for homes of all sizes.",
      icon: <Home className="h-6 w-6 text-add8e6" />,
      link: "/services#residential",
      image: "/images/residential-cleaning.png",
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices and commercial properties.",
      icon: <Building2 className="h-6 w-6 text-add8e6" />,
      link: "/services#commercial",
      image: "/images/commercial-cleaning.png",
    },
    {
      title: "Carpet & Upholstery",
      description: "Deep cleaning for carpets, rugs, and upholstered furniture.",
      icon: <Sofa className="h-6 w-6 text-add8e6" />,
      link: "/services#carpet",
      image: "/images/carpet-cleaning.png",
    },
    {
      title: "Fumigation & Pest Control",
      description: "Professional fumigation and pest control services.",
      icon: <Bug className="h-6 w-6 text-add8e6" />,
      link: "/services/fumigation-pest-control",
      image: "/images/pest-control.png",
    },
    {
      title: "Landscaping Services",
      description: "Professional landscaping and garden maintenance services.",
      icon: <Sprout className="h-6 w-6 text-add8e6" />,
      link: "/services/landscaping-services",
      image: "/images/landscaping.png",
    },
  ]

  const locationsMenu = [
    {
      title: "Nairobi",
      description: "Our headquarters serving Kenya's capital city.",
      icon: <MapPin className="h-6 w-6 text-add8e6" />,
      link: "/locations#nairobi",
      image: "/images/nairobi.png",
    },
    {
      title: "Mombasa",
      description: "Serving Kenya's coastal region.",
      icon: <MapPin className="h-6 w-6 text-add8e6" />,
      link: "/locations#mombasa",
      image: "/images/mombasa.png",
    },
    {
      title: "Kaimosi",
      description: "Serving Western Kenya.",
      icon: <MapPin className="h-6 w-6 text-add8e6" />,
      link: "/locations#kaimosi",
      image: "/images/kaimosi.png",
    },
    {
      title: "Eldoret",
      description: "Serving the North Rift region.",
      icon: <MapPin className="h-6 w-6 text-add8e6" />,
      link: "/locations#eldoret",
      image: "/images/eldoret.png",
    },
  ]

  const aboutMenu = [
    {
      title: "Our Story",
      description: "Learn about our journey and mission.",
      icon: <Info className="h-6 w-6 text-add8e6" />,
      link: "/about#story",
      image: "/images/our-story.png",
    },
    {
      title: "Our Team",
      description: "Meet the professionals behind our services.",
      icon: <Users className="h-6 w-6 text-add8e6" />,
      link: "/about#team",
      image: "/images/our-team.png",
    },
    {
      title: "Our History",
      description: "How we've grown since 2015.",
      icon: <History className="h-6 w-6 text-add8e6" />,
      link: "/about#history",
      image: "/images/our-history.png",
    },
    {
      title: "Certifications",
      description: "Our professional qualifications and standards.",
      icon: <Award className="h-6 w-6 text-add8e6" />,
      link: "/about#certifications",
      image: "/images/certifications.png",
    },
  ]

  let menuItems = servicesMenu
  let title = "Our Services"
  let description = "Professional cleaning solutions tailored to your needs"
  let allLink = "/services"

  if (type === "locations") {
    menuItems = locationsMenu
    title = "Our Locations"
    description = "Serving communities across Kenya"
    allLink = "/locations"
  } else if (type === "about") {
    menuItems = aboutMenu
    title = "About Us"
    description = "Learn more about Simca Agencies Company"
    allLink = "/about"
  }

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl rounded-b-lg z-50 animate-fadeIn max-w-7xl mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
          <Link href={allLink} className="text-add8e6 hover:underline font-medium flex items-center" onClick={onClose}>
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group"
              onClick={onClose}
            >
              <div className="relative w-1/3 h-auto">
                <Image
                  src={item.image || "/placeholder.svg?height=200&width=200"}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 w-2/3">
                <div className="flex items-center mb-2">
                  <div className="mr-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-add8e6 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
