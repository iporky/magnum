import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Magnum Custom Publishing | Professional Publishing Services Delhi",
  description:
    "Magnum Custom Publishing — professional book publishing, ghostwriting, editing, layout design and cover design services in New Delhi, India. Serving clients since 2005.",
  keywords:
    "custom publishing, book publishing, ghostwriting Delhi, editing proofreading India, layout design, cover design, self-publishing Delhi NCR, publishing services India",
  authors: [{ name: "Magnum Custom Publishing" }],
  creator: "Magnum Custom Publishing",
  publisher: "Magnum Custom Publishing",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Magnum Custom Publishing | Professional Publishing Services Delhi",
    description:
      "Professional book publishing, ghostwriting, editing, layout design and cover design services in New Delhi, India. Serving clients since 2005.",
    url: "https://magnumcustompublishing.com",
    siteName: "Magnum Custom Publishing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnum Custom Publishing | Professional Publishing Services Delhi",
    description:
      "Professional book publishing, ghostwriting, editing, layout design and cover design services in New Delhi, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Magnum Custom Publishing",
  description:
    "Professional custom publishing services in New Delhi including ghostwriting, editing, layout design, and cover design for authors, corporates, and government agencies.",
  url: "https://magnumcustompublishing.com",
  telephone: "+91-9811097054",
  email: "arvind@magnumcustompublishing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-27-B Gangotri Enclave, Alaknanda, opp Alaknanda Market",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110019",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5355,
    longitude: 77.2507,
  },
  areaServed: ["New Delhi", "Delhi NCR", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", "India"],
  foundingDate: "2005",
  priceRange: "$$",
  serviceType: [
    "Ghostwriting",
    "Book Editing",
    "Proofreading",
    "Book Layout Design",
    "Book Cover Design",
    "Self-Publishing Services",
    "Custom Publishing",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <SiteFooter />
        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/919811097054?text=I'm%20interested%20in%20publishing%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
          style={{ backgroundColor: "#25D366" }}
        >
          <Image src="/WhatsApp.webp" alt="WhatsApp" width={32} height={32} className="object-contain" />
        </a>
      </body>
    </html>
  )
}
