import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const leagueSpartan = League_Spartan({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Armor Sphere | Premium Security Safes",
  description:
    "Protect what matters most with Armor Sphere's premium heavy-duty security safes, engineered for ultimate protection and peace of mind.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${leagueSpartan.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'