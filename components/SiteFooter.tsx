"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, MessageCircle, ArrowUp } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[rgb(250,165,27)]/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[rgb(250,165,27)]/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-white/10 rounded-full animate-pulse delay-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div className="text-center lg:text-left space-y-6">
            <Link href="/" className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/logo.png" alt="Magnum Custom Publishing Logo" width={48} height={48} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[rgb(250,165,27)]/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
              </div>
              <div>
                <div className="text-xl font-bold text-white group-hover:text-[rgb(250,165,27)] transition-colors duration-300">
                  MAGNUM CUSTOM PUBLISHING
                </div>
                <p className="text-sm text-gray-400 mt-1">Quality • Precision • Timeliness</p>
              </div>
            </Link>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming ideas into exceptional publications with two decades of expertise in custom publishing solutions.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="mailto:arvind@magnumcustompublishing.com" aria-label="Email Magnum Custom Publishing" className="group relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[rgb(250,165,27)]/20 transition-all duration-300">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[rgb(250,165,27)] transition-colors duration-300" />
              </a>
              <a href="tel:+919811097054" aria-label="Call Magnum Custom Publishing" className="group relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[rgb(250,165,27)]/20 transition-all duration-300">
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-[rgb(250,165,27)] transition-colors duration-300" />
              </a>
              <a href="https://wa.me/919811097054?text=I'm%20interested%20in%20publishing%20services" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp with Magnum Custom Publishing" className="group relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[rgb(250,165,27)]/20 transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-[rgb(250,165,27)] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="text-center space-y-6">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-start justify-center space-x-3">
                <MapPin className="w-5 h-5 text-[rgb(250,165,27)] mt-0.5 flex-shrink-0" />
                <address className="text-gray-300 text-sm not-italic leading-relaxed">
                  C-27-B Gangotri Enclave, Alaknanda,<br />
                  opp Alaknanda Market,<br />
                  New Delhi 110019
                </address>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-4 h-4 text-[rgb(250,165,27)] flex-shrink-0" />
                <a href="mailto:arvind@magnumcustompublishing.com" className="text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">
                  arvind@magnumcustompublishing.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-4 h-4 text-[rgb(250,165,27)] flex-shrink-0" />
                <a href="tel:+919811097054" className="text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">
                  +91 9811097054
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center lg:text-right space-y-6">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              <nav className="space-y-3">
                <Link href="/about" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">About Us</Link>
                <Link href="/services" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Our Services</Link>
                <Link href="/services/ghostwriting" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Writing &amp; Ghostwriting</Link>
                <Link href="/services/editing" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Editing &amp; Proofreading</Link>
                <Link href="/services/layout-design" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Layout &amp; Design</Link>
                <Link href="/services/cover-design" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Cover Design</Link>
                <Link href="/portfolio" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Portfolio</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Contact</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2026 Magnum Custom Publishing. All rights reserved.</p>
              <p className="text-xs text-gray-500 mt-1">Crafting excellence in publishing since 2005</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">Available for projects</span>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }} className="group flex items-center space-x-2 text-xs text-gray-400 hover:text-[rgb(250,165,27)] transition-colors">
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
