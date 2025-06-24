import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Magnum Custom Publishing",
  description:
    "A leader in custom publishing solutions. We provide comprehensive 360-degree publishing and printing solutions with quality, precision, and timeliness.",
  keywords:
    "custom publishing, book publishing, printing services, self-publishing, corporate publications, Delhi publishing",
  authors: [{ name: "Magnum Custom Publishing" }],
  creator: "Magnum Custom Publishing",
  publisher: "Magnum Custom Publishing",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Magnum Custom Publishing",
    description:
      "A leader in custom publishing solutions with comprehensive 360-degree publishing and printing services.",
    url: "https://magnumcustompublishing.com",
    siteName: "Magnum Custom Publishing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnum Custom Publishing",
    description:
      "A leader in custom publishing solutions with comprehensive 360-degree publishing and printing services.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  )
}
