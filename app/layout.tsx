import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Nunito } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyMobileCTA from "@/components/sticky-mobile-cta"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/ui/page-transition"
import { MobileMenuProvider } from "@/contexts/mobile-menu-context"
import OrganizationSchema from "@/components/schema/organization-schema"

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
  title: "Simca Agencies Ltd | Professional Cleaning Services in Kenya | Since 2005",
  description:
    "Simca Agencies Ltd offers professional cleaning services across Kenya including Mombasa, Kisumu, Lamu, and more. Contract cleaning, specialized cleaning, hygiene supplies, landscaping, and labour outsourcing for hospitals, hotels, offices, and industrial facilities.",
  keywords: [
    "cleaning services Kenya",
    "contract cleaning Mombasa",
    "professional cleaning Kenya",
    "hospital cleaning Kenya",
    "hotel cleaning services",
    "office cleaning Mombasa",
    "fumigation services Kenya",
    "pest control Mombasa",
    "hygiene supplies Kenya",
    "landscaping services Kenya",
    "labour outsourcing Kenya",
    "Simca Agencies"
  ],
  authors: [{ name: "Simca Agencies Ltd" }],
  creator: "Simca Agencies Ltd",
  publisher: "Simca Agencies Ltd",
  icons: {
    icon: "/simca-logo.png",
    apple: "/simca-logo.png"
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://simcaagencies.com",
    siteName: "Simca Agencies Ltd",
    title: "Simca Agencies Ltd | Professional Cleaning Services in Kenya",
    description: "Professional cleaning services across Kenya since 2005. Contract cleaning, specialized cleaning, hygiene supplies, landscaping, and labour outsourcing.",
    images: [
      {
        url: "/simca-logo.png",
        width: 512,
        height: 512,
        alt: "Simca Agencies Ltd Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Simca Agencies Ltd | Professional Cleaning Services in Kenya",
    description: "Professional cleaning services across Kenya since 2005. Contract cleaning, specialized cleaning, hygiene supplies, landscaping, and labour outsourcing.",
    images: ["/simca-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code" // Replace with actual verification code
  },
  alternates: {
    canonical: "https://simcaagencies.com"
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
        {/* Global Organization & LocalBusiness Schema for AI Search Optimization */}
        <OrganizationSchema />
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
          <MobileMenuProvider>
          <Header />
          <PageTransition>
            <main className="pt-14 md:pt-20">{children}</main>
          </PageTransition>
          <Footer />
          <StickyMobileCTA />
          </MobileMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
