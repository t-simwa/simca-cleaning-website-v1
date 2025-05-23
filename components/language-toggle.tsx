"use client"

import { useState } from "react"
import { Globe, ChevronDown } from "lucide-react"

export default function LanguageToggle() {
  const [language, setLanguage] = useState("en")
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en")
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-all duration-300 group"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 mr-1.5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-medium">{language === "en" ? "English" : "Swahili"}</span>
        <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50">
          <button
            onClick={() => {
              setLanguage("en")
              setIsOpen(false)
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              language === "en" ? "text-add8e6 font-medium" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            English
          </button>
    <button
            onClick={() => {
              setLanguage("sw")
              setIsOpen(false)
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              language === "sw" ? "text-add8e6 font-medium" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Swahili
    </button>
        </div>
      )}
    </div>
  )
}
