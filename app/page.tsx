"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Mail, Phone, ArrowRight, BookOpen, Users, Award, Zap } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { CategoryGallery } from "@/components/category-gallery"
import { getDisplayableCategories } from "@/data/portfolio-categories"

export default function MagnumPublishingSPA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

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

  const portfolioItems = [
    {
      title: "The Struggles of a Bonsai: Partition Blues: Divine Heroes",
      category: "Literature",
      image: "/images/bonsai-struggles.jpeg",
      description: "A profound literary work by Dr B.D. Bhushan exploring themes of partition and resilience",
      author: "Dr B.D. Bhushan",
    },
    {
      title: "Sanchi Rediscovered: A Journey Through Time",
      category: "History",
      image: "/images/sanchi-rediscovered.jpeg",
      description: "Historical exploration of Bipin Ghosal's work from 1875-1930, compiled by Susheila Ghosal",
      author: "Compiled by Susheila Ghosal",
    },
    {
      title: "Enchanting World of the Lepchas",
      category: "Cultural Studies",
      image: "/images/enchanting-lepchas.jpeg",
      description: "An immersive exploration of Lepcha culture and traditional craftsmanship",
      author: "Cultural Documentation",
    },
    {
      title: "Click! Stories of Human Relationships",
      category: "Self-Help",
      image: "/images/click-relationships.jpeg",
      description: "Stories of human relationships and their journeys by Vineet Arora",
      author: "Vineet Arora",
    },
    {
      title: "Best Foot Forward",
      category: "Social Studies",
      image: "/images/best-foot-forward.jpeg",
      description: "A compelling narrative about community and cultural gatherings",
      author: "Rebecca de Regt",
    },
    {
      title: "Ruskin Bond: A Study of Human Emotions",
      category: "Literary Analysis",
      image: "/images/ruskin-bond-emotions.jpeg",
      description: "An in-depth analysis of human emotions in Ruskin Bond's works",
      author: "Sangeeta Paul Budhiraja",
    },
    {
      title: "WOW! A Mosaic of Trivia and Tales",
      category: "Music & Entertainment",
      image: "/images/wow-music-world.jpeg",
      description: "A mosaic of trivia and tales from the music world",
      author: "Vineet Arora",
    },
    {
      title: "Tawang - The Abode of Prayers",
      category: "Spirituality",
      image: "/images/tawang-prayers.jpeg",
      description: "A spiritual journey through the sacred monasteries of Tawang",
      author: "Spiritual Documentation",
    },
  ]

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MAGNUM</h1>
                <p className="text-xs text-orange-500 font-medium">CUSTOM PUBLISHING</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {section === "portfolio" ? "Our Work" : section}
                </button>
              ))}
              <a
                href="mailto:arvind@magnumcustompublishing.com"
                className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
              >
                arvind@magnumcustompublishing.com
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-4">
              {["home", "about", "services", "portfolio", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors capitalize"
                >
                  {section === "portfolio" ? "Our Work" : section}
                </button>
              ))}
              <a
                href="mailto:arvind@magnumcustompublishing.com"
                className="block text-gray-600 hover:text-orange-500 transition-colors"
              >
                arvind@magnumcustompublishing.com
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Sun className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MAGNUM CUSTOM
              <span className="block text-orange-500">PUBLISHING</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A leader in custom publishing solutions. We provide comprehensive 360-degree publishing and printing
              solutions with a strong emphasis on quality, precision, and timeliness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => scrollToSection("portfolio")}
              >
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main About Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Magnum Custom Publishing</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a renowned provider of comprehensive 360-degree publishing and printing solutions, serving diverse
              clientele with quality, precision, and timeliness at the forefront of everything we do.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What is Custom Publishing?</h3>
              </div>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Custom publishing refers to the tailored creation of publications and reports for organizations,
                  institutions, businesses, and individuals seeking self-publishing services. This process involves
                  producing high-quality materials that effectively communicate an organization&apos;s message, values, and
                  goals.
                </p>
                <p>
                  We serve various sectors, including research institutions, think tanks, trade organizations,
                  government agencies, NGOs, and corporate entities. The benefits include building brand awareness,
                  engaging target audiences, developing long-lasting relationships, and contributing to the bottom line.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Story & Expertise</h3>
              </div>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  As a custom publisher, our story is told through the diverse range of publications we&apos;ve produced. Our
                  titles cover a broad spectrum of subjects, including Climate Change, Educational Materials, Children&apos;s
                  Books, Government Publications, Defence and Security, and reports for Global Consultants and Trade
                  Organizations.
                </p>
                <p>
                  We&apos;ve successfully published personal and corporate publications, such as annual reports, white
                  papers, research papers, books, magazines, and eBooks, using state-of-the-art equipment and processes.
                  Our digital print-on-demand facilities enable us to meet tight deadlines and deliver high-quality
                  publications quickly.
                </p>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Publications</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work closely with clients to understand their unique needs and goals, providing personalized guidance
                throughout the publishing process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Partnership</h4>
                <p className="text-gray-600">
                  We work as your trusted partner, understanding your vision and bringing it to life.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality & Speed</h4>
                <p className="text-gray-600">
                  State-of-the-art equipment and processes ensure high-quality results on time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Service</h4>
                <p className="text-gray-600">
                  From concept to completion, we handle every aspect of your publishing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end services from ideation to print production, as well as standalone services to meet
              your specific publishing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-orange-500">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Services</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">International-grade printing</Badge>
                <Badge variant="secondary">Digital print-on-demand</Badge>
                <Badge variant="secondary">eBook conversion</Badge>
                <Badge variant="secondary">Distribution services</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our diverse portfolio of publications across various industries and formats.
            </p>
          </div>

          {/* Find the section with id="portfolio" and replace the grid of portfolioItems with this: */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {getDisplayableCategories().map((category) => (
              <CategoryGallery key={category.id} category={category.name} images={category.images} />
            ))}

            {/* Keep some of the original portfolio items that aren't in categories yet */}
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-white p-6 w-full">
                      <Badge className="mb-3 bg-orange-500 hover:bg-orange-600">{item.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-gray-200 mb-2 line-clamp-2">{item.description}</p>
                      <p className="text-xs text-orange-200 font-medium">{item.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <PortfolioShowcase />

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Complete Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your publishing project to life? Let&apos;s discuss how we can help you create high-quality
              publications that exceed your expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:arvind@magnumcustompublishing.com"
                      className="text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      arvind@magnumcustompublishing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">Available for quick consultations</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-3">Why Choose Magnum?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Comprehensive 360-degree solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Quality, precision, and timeliness</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Trusted partner in publishing industry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Personalized guidance throughout</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Project</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select project type</option>
                    <option>Book Publishing</option>
                    <option>Corporate Publication</option>
                    <option>Research Report</option>
                    <option>Magazine/Journal</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">MAGNUM CUSTOM PUBLISHING</h3>
                <p className="text-sm text-gray-400">Quality • Precision • Timeliness</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Magnum Custom Publishing. All rights reserved.</p>
              <a
                href="mailto:arvind@magnumcustompublishing.com"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                arvind@magnumcustompublishing.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
