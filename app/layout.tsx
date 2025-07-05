import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/ui/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Simca Agencies Company | Professional Cleaning Services in Kenya",
  description:
    "Simca Agencies Company offers professional cleaning services across Kenya including Nairobi, Mombasa, Kaimosi, and Eldoret. Residential, commercial, and specialized cleaning services.",
  icons: {
    icon: "/simca-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <PageTransition>
            <main className="pt-14 md:pt-20">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
