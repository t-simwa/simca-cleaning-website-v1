import Image from "next/image"
import type { HTMLAttributes } from "react"

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: "default" | "white"
}

export default function Logo({ className, variant = "default", ...props }: LogoProps) {
  return (
    <div className={className} {...props}>
      <Image
        src="/simca-logo.png"
        alt="Simca Cleaning Logo"
        width={40}
        height={40}
        className={`w-full h-full object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
      />
    </div>
  )
}
