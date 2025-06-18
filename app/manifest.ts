import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Simca Agencies Company",
    short_name: "Simca Agencies",
    description: "Professional cleaning services across Kenya",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3e4191",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
