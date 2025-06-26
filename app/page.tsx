"use client"

import { useState, useEffect } from "react"
import { Menu, X, Mail, ArrowRight, BookOpen, Users, Award, Zap, ArrowUp, Phone, MessageCircle, MapPin } from "lucide-react"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { ReviewCarousel } from "@/components/review-carousel"
import reviewsData from "@/data/reviews.json"

export default function MagnumPublishingSPA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Select project type',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })
  const [status, setStatus] = useState<'pending' | 'ok' | 'error' | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleShowScrollTop = () => {
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleShowScrollTop)
    return () => window.removeEventListener("scroll", handleShowScrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Portfolio items are now managed through category galleries

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Writing & Ghostwriting",
      description:
        "Professional writing services to bring your ideas to life with compelling narratives and expert storytelling.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Editing & Proofreading",
      description:
        "Comprehensive editing services to ensure your content is polished, error-free, and publication-ready.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Layout & Design",
      description: "Professional layout design that enhances readability and creates visually appealing publications.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cover Design",
      description: "Eye-catching cover designs that capture attention and effectively communicate your book's essence.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-md">
                <Image src="/logo.png" alt="Magnum Logo" width={48} height={48} priority />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">MAGNUM</h1>
                <p className="text-sm text-[rgb(250,165,27)] font-semibold tracking-wide">CUSTOM PUBLISHING</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 capitalize rounded-lg hover:bg-gray-50 ${
                    activeSection === section 
                      ? "text-[rgb(250,165,27)] bg-orange-50" 
                      : "text-gray-700 hover:text-[rgb(250,165,27)]"
                  }`}
                >
                  {section === "portfolio" ? "Our Work" : section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[rgb(250,165,27)] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Contact */}
              <div className="hidden xl:flex items-center space-x-4">
                <a
                  href="mailto:arvind@magnumcustompublishing.com"
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-[rgb(250,165,27)] transition-colors rounded-lg hover:bg-gray-50"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
                <a
                  href="https://wa.me/919811097054?text=I&apos;m%20interested%20in%20publishing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-[rgb(250,165,27)] text-white text-sm font-semibold rounded-lg hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Image 
                    src="/WhatsApp.webp" 
                    alt="WhatsApp" 
                    width={16} 
                    height={16} 
                    className="object-contain" 
                  />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
            <div className="px-6 py-6 space-y-1">
              {/* Navigation Links */}
              <div className="space-y-1 mb-6">
                {["home", "about", "services", "portfolio", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)
                    }
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 capitalize font-medium ${
                      activeSection === section 
                        ? "text-[rgb(250,165,27)] bg-orange-50 border-l-4 border-[rgb(250,165,27)]" 
                        : "text-gray-700 hover:text-[rgb(250,165,27)] hover:bg-gray-50"
                    }`}
                  >
                    {section === "portfolio" ? "Our Work" : section}
                  </button>
                ))}
              </div>

              {/* Contact Section */}
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
                    href="https://wa.me/919811097054?text=I&apos;m%20interested%20in%20publishing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-[rgb(250,165,27)] text-white hover:bg-orange-500 transition-all duration-200 rounded-lg shadow-md"
                  >
                    <Image 
                      src="/WhatsApp.webp" 
                      alt="WhatsApp" 
                      width={20} 
                      height={20} 
                      className="object-contain" 
                    />
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
      </nav>      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-[rgba(250,165,27,0.12)] via-orange-50/40 to-white relative overflow-hidden min-h-screen flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-[rgba(250,165,27,0.15)] to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[rgba(250,165,27,0.05)] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">          
          <div className="text-center max-w-5xl mx-auto">            {/* Logo with enhanced styling */}
<div className="flex justify-center mb-6">
  <div>
    <Image src="/logo.png" alt="Magnum Logo" width={80} height={80} priority />
  </div>
</div>

            {/* Enhanced heading with animations */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">MAGNUM</span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300">CUSTOM</span>
                <span className="block text-[rgb(250,165,27)] hover:scale-105 transition-transform duration-300 mt-2">
                  PUBLISHING
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 mx-auto rounded-full"></div>
            </div>            {/* Enhanced description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
              A leader in custom publishing solutions. We provide comprehensive{" "}
              <span className="text-[rgb(250,165,27)] font-semibold">360-degree publishing</span> and <span className="text-[rgb(250,165,27)] font-semibold">printing
              solutions</span> with a strong emphasis on quality, precision, and timeliness.
            </p>

            {/* Enhanced statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(250,165,27)] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600 font-medium">Publications</div>
              </div>
              <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(250,165,27)] mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(250,165,27)] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                onClick={() => scrollToSection("portfolio")}
              >
                <span className="mr-2">View Our Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-[rgb(250,165,27)] text-[rgb(250,165,27)] hover:bg-[rgb(250,165,27)] hover:text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                <span className="mr-2">Get Started</span>
                <div className="w-2 h-2 bg-current rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-col sm:flex-row items-start justify-center gap-8 text-gray-500 pl-6 sm:pl-0">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">International Quality</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">Collaborative Approach</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">Trusted Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="about" className="py-10 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.06)] to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">          {/* Main About Content */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-4 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Magnum Custom Publishing</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a renowned provider of comprehensive 360-degree publishing and printing solutions, serving diverse
              clientele since the year 2005 with quality, precision, and timeliness at the forefront of everything we do.
            </p>
          </div>          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* What is Custom Publishing Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-[rgb(250,165,27)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">What is Custom Publishing?</h3>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Custom publishing refers to the tailored creation of publications and reports for organizations,
                    institutions, businesses, and individuals seeking self-publishing services. This process involves
                    producing high-quality materials that effectively communicate an organization&apos;s message, values, and
                    goals.
                  </p>
                  <p className="text-lg">
                    We serve various sectors, including research institutions, think tanks, trade organizations,
                    government agencies, NGOs, and corporate entities. The benefits include building brand awareness,
                    engaging target audiences, developing long-lasting relationships, and contributing to the bottom line.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Story & Expertise Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-[rgb(250,165,27)] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">Our Story & Expertise</h3>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    As a custom publisher, our story is told through the diverse range of publications we&apos;ve produced. Our
                    titles cover a broad spectrum including Climate Change, Government Publications, Defence and Security, reports for Global Consultants and Trade
                    Organizations, Educational Materials and Children&apos;s Books.
                  </p>
                  <p className="text-lg">
                    We&apos;ve successfully published personal and corporate publications, such as self published books, annual reports, white
                    papers, research papers, books, magazines, and eBooks, using state-of-the-art equipment and processes.
                    Our digital print-on-demand and offset facilities enable us to meet tight deadlines and deliver high-quality
                    publications quickly.
                  </p>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-[rgba(250,165,27,0.05)] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-[rgb(250,165,27)] mb-2">500+</div>
                    <div className="text-sm font-semibold text-gray-600">Publications</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-[rgba(250,165,27,0.05)] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-[rgb(250,165,27)] mb-2">20+</div>
                    <div className="text-sm font-semibold text-gray-600">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>          {/* Our Approach Section */}
          <div className="relative">
            {/* Approach Background Card */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.3)] to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.2)] to-transparent rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-8 shadow-2xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Approach</h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    We work closely with clients to understand their unique needs and goals, providing personalized guidance
                    throughout the publishing process.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl">
                      <Users className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">Collaborative Partnership</h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      We work as your trusted partner, understanding your vision and bringing it to life with precision and care.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl">
                      <Zap className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">Quality & Speed</h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      State-of-the-art equipment and processes ensure high-quality results delivered on time, every time.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl">
                      <Award className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">End-to-End Service</h4>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      From concept to completion, we handle every aspect of your publishing journey with expertise.
                    </p>
                  </div>
                </div>

                {/* Bottom CTA or additional info */}
                <div className="text-center mt-12">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <div className="flex -space-x-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-white font-medium ml-2">Trusted by 25+ clients worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Services Section */}
      <section id="services" className="py-10 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-6 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer end-to-end services from ideation to print production as well as standalone 
              services to meet your specific publishing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-[rgb(250,165,27)] group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Additional Services</h3>
                <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 text-[rgb(250,165,27)] border-orange-200 hover:from-[rgb(250,165,27)] hover:to-orange-500 hover:text-white transition-all duration-300 px-4 py-2 text-sm font-semibold">International-grade printing</Badge>
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 text-[rgb(250,165,27)] border-orange-200 hover:from-[rgb(250,165,27)] hover:to-orange-500 hover:text-white transition-all duration-300 px-4 py-2 text-sm font-semibold">Digital print-on-demand</Badge>
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 text-[rgb(250,165,27)] border-orange-200 hover:from-[rgb(250,165,27)] hover:to-orange-500 hover:text-white transition-all duration-300 px-4 py-2 text-sm font-semibold">Offset printing</Badge>
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 text-[rgb(250,165,27)] border-orange-200 hover:from-[rgb(250,165,27)] hover:to-orange-500 hover:text-white transition-all duration-300 px-4 py-2 text-sm font-semibold">Hardcase binding</Badge>
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 text-[rgb(250,165,27)] border-orange-200 hover:from-[rgb(250,165,27)] hover:to-orange-500 hover:text-white transition-all duration-300 px-4 py-2 text-sm font-semibold">Section sewing and perfect binding</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Portfolio Section */}
      <section id="portfolio" className="pt-4 pb-2 bg-white">
        <PortfolioShowcase />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-8 bg-white relative z-0 border-t border-gray-100">
        <ReviewCarousel reviews={reviewsData.reviews} />
      </section>      {/* Contact Section */}
      <section id="contact" className="py-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.06)] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your publishing project to life? Let&apos;s discuss how we can help you create high-quality
              publications that exceed your expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                  Contact Information
                  <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                </h3>
                
                <div className="space-y-8">                  <div className="group flex items-start space-x-3 p-3 rounded-2xl hover:bg-orange-50/50 transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-[rgb(250,165,27)]" />
                    </div><div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Email Us</h4>
                      <a
                        href="mailto:arvind@magnumcustompublishing.com"
                        className="text-[rgb(250,165,27)] hover:text-orange-600 transition-colors text-sm md:text-lg font-medium break-all"
                      >
                        arvind@magnumcustompublishing.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>                  <div className="group flex items-start space-x-3 p-3 rounded-2xl hover:bg-orange-50/50 transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/WhatsApp.webp"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="object-contain md:w-6 md:h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">WhatsApp</h4>
                      <a
                        href="https://wa.me/919811097054?text=I&apos;m%20interested%20in%20publishing%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgb(250,165,27)] hover:text-orange-600 transition-colors text-lg font-medium flex items-center gap-2"
                      >
                        <span>+91 98110 97054</span>
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Instant messaging support</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Magnum Card */}
                <div className="mt-10 p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[rgba(250,165,27,0.2)] to-transparent rounded-full blur-2xl"></div>
                  <h4 className="font-bold text-white text-xl mb-6 relative z-10">Why Choose Magnum?</h4>
                  <ul className="space-y-4 text-gray-300 relative z-10">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full flex-shrink-0"></div>
                      <span className="text-lg">Comprehensive 360-degree solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full flex-shrink-0"></div>
                      <span className="text-lg">Quality, precision, and timeliness</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full flex-shrink-0"></div>
                      <span className="text-lg">Trusted partner in publishing industry</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full flex-shrink-0"></div>
                      <span className="text-lg">Personalized guidance throughout</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                  Start Your Project
                  <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                </h3>                
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  className="space-y-6" 
                  onSubmit={async (e) => {
                  e.preventDefault();
                  if (formData.name.trim() === '') {
                    setErrors({ ...errors, name: 'Name is required' });
                    return;
                  }
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    setErrors({ ...errors, email: 'Please enter a valid email' });
                    return;
                  }
                  if (formData.projectType === 'Select project type') {
                    setErrors({ ...errors, projectType: 'Please select a project type' });
                    return;
                  }
                  if (formData.message.trim().length < 10) {
                    setErrors({ ...errors, message: 'Message must be at least 10 characters long' });
                    return;
                  }

                  try {
                    setStatus('pending');
                    setError(null);
                    const form = e.target as HTMLFormElement;
                    const formDataObj = new FormData(form);
                    const res = await fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: new URLSearchParams([
                        ['form-name', 'contact'],
                        ...Array.from(formDataObj.entries()).map(([key, value]) => [key, value.toString()])
                      ]).toString()
                    });
                    if (res.status === 200) {
                      setStatus('ok');
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Select project type',
                        message: ''
                      });
                    } else {
                      setStatus('error');
                      setError(`${res.status} ${res.statusText}`);
                    }
                  } catch (err) {
                    setStatus('error');
                    setError(`${err}`);
                  }
                }}>
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Name</label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                          errors.name ? 'border-red-500' : 'border-gray-200 hover:border-orange-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-200 hover:border-orange-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Project Type</label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => {
                        setFormData({ ...formData, projectType: e.target.value });
                        if (errors.projectType) setErrors({ ...errors, projectType: '' });
                      }}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                        errors.projectType ? 'border-red-500' : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <option>Select project type</option>
                      <option>Book Publishing</option>
                      <option>Corporate Publication</option>
                      <option>Research Report</option>
                      <option>Magazine/Journal</option>
                      <option>Other</option>
                    </select>
                    {errors.projectType && <p className="mt-2 text-sm text-red-500">{errors.projectType}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200 hover:border-orange-300'
                      }`}
                      placeholder="Tell us about your project in detail..."
                    ></textarea>
                    {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
                    size="lg"
                    disabled={status === 'pending'}
                  >
                    {status === 'pending' ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                  
                  {status === 'ok' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-green-600 font-medium text-center">✨ Message sent successfully! We&apos;ll get back to you soon.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 font-medium text-center">❌ Error: {error}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-2 h-2 bg-[rgb(250,165,27)]/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[rgb(250,165,27)]/30 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-white/10 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 group">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                      <Image src="/logo.png" alt="Magnum Logo" width={48} height={48} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[rgb(250,165,27)]/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[rgb(250,165,27)] transition-colors duration-300">
                    MAGNUM CUSTOM PUBLISHING
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Quality • Precision • Timeliness</p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Transforming ideas into exceptional publications with two decades of expertise in custom publishing solutions.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="mailto:arvind@magnumcustompublishing.com" 
                   className="group relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[rgb(250,165,27)]/20 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-[rgb(250,165,27)] transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-[rgb(250,165,27)]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="tel:+919811097054" 
                   className="group relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[rgb(250,165,27)]/20 transition-all duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-[rgb(250,165,27)] transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-[rgb(250,165,27)]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="#contact" 
                   className="group relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-[rgb(250,165,27)]/20 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-[rgb(250,165,27)] transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-[rgb(250,165,27)]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Contact Information */}
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
                  <a href="mailto:arvind@magnumcustompublishing.com" 
                     className="text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">
                    arvind@magnumcustompublishing.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-4 h-4 text-[rgb(250,165,27)] flex-shrink-0" />
                  <a href="tel:+919811097054" 
                     className="text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">
                    +91 9811097054
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-right space-y-6">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <nav className="space-y-3">
                  <a href="#about" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">About Us</a>
                  <a href="#services" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Our Services</a>
                  <a href="#portfolio" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Portfolio</a>
                  <a href="#reviews" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Client Reviews</a>
                  <a href="#contact" className="block text-gray-300 hover:text-[rgb(250,165,27)] transition-colors text-sm">Contact</a>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2025 Magnum Custom Publishing. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Crafting excellence in publishing since 2005
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Available for projects</span>
                </div>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex items-center space-x-2 text-xs text-gray-400 hover:text-[rgb(250,165,27)] transition-colors"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 p-3 rounded-full bg-[rgb(250,165,27)] text-white shadow-lg hover:bg-[rgb(250,165,27)]/80 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  )
}
