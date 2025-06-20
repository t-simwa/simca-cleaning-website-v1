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
        src="/simca-logo.png"
        alt="Simca Agencies Logo"
        fill
        className={`object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
      />
    </div>
  )
}
