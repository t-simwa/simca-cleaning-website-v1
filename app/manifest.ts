import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Simca Cleaning Company",
    short_name: "Simca Cleaning",
    description: "Professional cleaning services across Kenya",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#add8e6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
