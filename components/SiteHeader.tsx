"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Mail } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-md">
              <Image src="/logo.png" alt="Magnum Custom Publishing Logo" width={48} height={48} priority />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 tracking-tight">MAGNUM</div>
              <div className="text-sm text-gray-900 font-semibold tracking-wide">CUSTOM PUBLISHING</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-gray-50 ${
                  isActive(link.href)
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-4">
              <a
                href="mailto:arvind@magnumcustompublishing.com"
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-[rgb(250,165,27)] transition-colors rounded-lg hover:bg-gray-50"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
              <a
                href="https://wa.me/919811097054?text=I'm%20interested%20in%20publishing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Image src="/WhatsApp.webp" alt="WhatsApp" width={16} height={16} className="object-contain" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
          <div className="px-6 py-6 space-y-1">
            <div className="space-y-1 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    isActive(link.href)
                      ? "text-gray-900 bg-gray-100 border-l-4 border-gray-900"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-3">Get in Touch</p>
              <div className="space-y-3">
                <a
                  href="mailto:arvind@magnumcustompublishing.com"
                  className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-[rgb(250,165,27)] hover:bg-gray-50 transition-all duration-200 rounded-lg"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm text-gray-500">arvind@magnumcustompublishing.com</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/919811097054?text=I'm%20interested%20in%20publishing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white hover:bg-black transition-all duration-200 rounded-lg shadow-md"
                >
                  <Image src="/WhatsApp.webp" alt="WhatsApp" width={20} height={20} className="object-contain" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-orange-100">Start a conversation</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
