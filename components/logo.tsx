import Image from "next/image"
import type { HTMLAttributes } from "react"

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: "default" | "white"
}

export default function Logo({ className, variant = "default", ...props }: LogoProps) {
  return (
    <div className={`relative ${className}`} {...props}>
      <Image
        src="/simca-logo-full.webp"
        alt="Simca Agencies Logo"
        fill
        className={`object-fit ${variant === "white" ? "brightness-0 invert" : ""}`}
        sizes="(max-width: 768px) 240px, (max-width: 1024px) 240px, 240px"
        quality={90}
        priority={false}
      />
    </div>
  )
}
