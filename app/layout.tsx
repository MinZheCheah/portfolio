import type React from "react"
import type { Metadata } from "next"
import { Geist, Oswald } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const display = Oswald({ subsets: ["latin"], display: "swap", variable: "--font-display" })

export const metadata: Metadata = {
  title: "Min Zhe Cheah — Engineer & Builder",
  description: "Min Zhe Cheah is a software engineer in San Francisco working across full-stack systems, applied AI, and thoughtful digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
