import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

interface SocialIconsProps {
  className?: string
}

export default function SocialIcons({ className = "h-4 w-4" }: SocialIconsProps) {
  return (
    <div className="flex space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-[#1877F2] dark:hover:text-[#1877F2] transition-all duration-300 hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook className={className} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] transition-all duration-300 hover:scale-110"
        aria-label="Twitter"
      >
        <Twitter className={className} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-[#E4405F] dark:hover:text-[#E4405F] transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className={className} />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-add8e6 dark:hover:text-add8e6 transition-colors"
        aria-label="TikTok"
      >
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-[#FF0000] dark:hover:text-[#FF0000] transition-all duration-300 hover:scale-110"
        aria-label="YouTube"
      >
        <Youtube className={className} />
      </a>
    </div>
  )
}
