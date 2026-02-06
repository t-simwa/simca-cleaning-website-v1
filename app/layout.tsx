import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Nunito } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyMobileCTA from "@/components/sticky-mobile-cta"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/ui/page-transition"

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap", 
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Simca Agencies Company | Professional Cleaning Services in Kenya",
  description:
    "Simca Agencies Company offers professional cleaning services across Kenya including Nairobi, Mombasa, Kaimosi, and Eldoret. Residential, commercial, and specialized cleaning services.",
  icons: {
    icon: "/simca-logo.png",
  },
  generator: 'v0.dev',
  other: {
    'critical-css': 'inline'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --foreground-rgb: 0, 0, 0;
                --background-start-rgb: 255, 255, 255;
                --background-end-rgb: 255, 255, 255;
                --background: 0 0% 100%;
                --foreground: 222.2 84% 4.9%;
                --card: 0 0% 100%;
                --card-foreground: 222.2 84% 4.9%;
                --popover: 0 0% 100%;
                --popover-foreground: 222.2 84% 4.9%;
                --primary: 195 53% 79%;
                --primary-foreground: 210 40% 98%;
                --secondary: 210 40% 96.1%;
                --secondary-foreground: 222.2 47.4% 11.2%;
                --muted: 210 40% 96.1%;
                --muted-foreground: 215.4 16.3% 46.9%;
                --accent: 210 40% 96.1%;
                --accent-foreground: 222.2 47.4% 11.2%;
                --destructive: 0 84.2% 60.2%;
                --destructive-foreground: 210 40% 98%;
                --border: 214.3 31.8% 91.4%;
                --input: 214.3 31.8% 91.4%;
                --ring: 195 53% 79%;
                --radius: 0.5rem;
              }
              body {
                color: rgb(var(--foreground-rgb));
                background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
                margin: 0;
                padding: 0;
              }
              .dark {
                --background: 222.2 84% 4.9%;
                --foreground: 210 40% 98%;
                --card: 222.2 84% 4.9%;
                --card-foreground: 210 40% 98%;
                --popover: 222.2 84% 4.9%;
                --popover-foreground: 210 40% 98%;
                --primary: 195 53% 79%;
                --primary-foreground: 222.2 47.4% 11.2%;
                --secondary: 217.2 32.6% 17.5%;
                --secondary-foreground: 210 40% 98%;
                --muted: 217.2 32.6% 17.5%;
                --muted-foreground: 215 20.2% 65.1%;
                --accent: 217.2 32.6% 17.5%;
                --accent-foreground: 210 40% 98%;
                --destructive: 0 62.8% 30.6%;
                --destructive-foreground: 210 40% 98%;
                --border: 217.2 32.6% 17.5%;
                --input: 217.2 32.6% 17.5%;
                --ring: 195 53% 79%;
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${nunito.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <PageTransition>
            <main className="pt-14 md:pt-20">{children}</main>
          </PageTransition>
          <Footer />
          <StickyMobileCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
