import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SonnerProvider } from "@/components/sonner-provider"

export const metadata: Metadata = {
  title: "sunset-sunrise-card",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SonnerProvider />
      </body>
    </html>
  )
}



import './globals.css'