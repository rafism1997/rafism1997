import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const title = "Rafi Shaik Mohammed | AI Solutions Architect & Forward Deployed Engineer"
const description =
  "AI Solutions Architect and Forward Deployed Engineer with 5+ years shipping production AI: agentic workflows, RAG pipelines, AI-driven SDLC automation and MLOps on AWS, Databricks and Azure, plus edge computer vision and robotics."

export const metadata: Metadata = {
  title,
  description,
  generator: "v0.app",
  keywords: [
    "AI Solutions Architect",
    "Forward Deployed Engineer",
    "Agentic AI",
    "RAG",
    "MLOps",
    "Amazon Bedrock",
    "AgentCore",
    "Databricks",
    "LangGraph",
    "Vision AI",
  ],
  authors: [{ name: "Rafi Shaik Mohammed", url: "https://www.linkedin.com/in/s-m-rafi-911442130/" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#060b10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${archivo.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
