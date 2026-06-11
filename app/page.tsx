import type { Metadata } from "next"
import { ArrowRight, Award, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import reviewsData from "@/data/reviews.json"

export const metadata: Metadata = {
  title: "Magnum Custom Publishing | Book Publishing Services Delhi NCR",
  description:
    "Professional publishing services in Delhi since 2005. Ghostwriting, editing, book cover design, layout and print production for authors, corporates, and institutions across India.",
  openGraph: {
    title: "Magnum Custom Publishing | Book Publishing Services Delhi NCR",
    description:
      "Professional publishing services in Delhi since 2005. Ghostwriting, editing, book cover design, layout and print production for authors, corporates, and institutions across India.",
    url: "https://magnumcustompublishing.com",
  },
}

export default function HomePage() {
  const featuredReviews = reviewsData.reviews.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[rgba(250,165,27,0.12)] via-orange-50/40 to-white relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-br from-[rgba(250,165,27,0.15)] to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="Magnum Custom Publishing Logo" width={80} height={80} priority />
            </div>

            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">MAGNUM</span>{" "}
                <span className="inline-block hover:scale-105 transition-transform duration-300">CUSTOM</span>
                <span className="block text-[rgb(250,165,27)] hover:scale-105 transition-transform duration-300 mt-2">
                  PUBLISHING
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 mx-auto rounded-full" />
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
              A leader in custom publishing solutions. We provide comprehensive{" "}
              <span className="text-[rgb(250,165,27)] font-semibold">360-degree publishing</span> and{" "}
              <span className="text-[rgb(250,165,27)] font-semibold">printing solutions</span> with a strong emphasis on
              quality, precision, and timeliness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              {[["500+", "Publications"], ["20+", "Years Experience"], ["100%", "Client Satisfaction"]].map(([n, l]) => (
                <div key={l} className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-[rgb(250,165,27)] mb-2 group-hover:scale-110 transition-transform duration-300">{n}</div>
                  <div className="text-gray-600 font-medium">{l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/portfolio">
                <Button size="lg" className="group bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg w-full sm:w-auto">
                  <span className="mr-2">View Our Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="group border-2 border-[rgb(250,165,27)] text-[rgb(250,165,27)] hover:bg-[rgb(250,165,27)] hover:text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg w-full sm:w-auto">
                  <span className="mr-2">Get Started</span>
                  <div className="w-2 h-2 bg-current rounded-full group-hover:scale-150 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-start justify-center gap-8 text-gray-500 pl-6 sm:pl-0">
              {([
                [Award, "International Quality"],
                [Zap, "Collaborative Approach"],
                [Users, "Trusted Worldwide"],
              ] as const).map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-2 w-full sm:w-auto justify-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick-links strip */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/about", label: "About Us", desc: "Our story & expertise" },
              { href: "/services", label: "Our Services", desc: "Writing, editing, design" },
              { href: "/portfolio", label: "Our Work", desc: "500+ publications" },
              { href: "/contact", label: "Get In Touch", desc: "Start your project" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-bold text-gray-900 group-hover:text-[rgb(250,165,27)] transition-colors mb-1">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
                <ArrowRight className="w-4 h-4 text-[rgb(250,165,27)] mt-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A few recent testimonials from authors and institutions we have worked with.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <article key={review.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <p className="text-gray-700 leading-relaxed italic mb-6">&ldquo;{review.review}&rdquo;</p>
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="text-sm text-[rgb(250,165,27)] font-medium">{review.designation}</div>
                {review.company && <div className="text-sm text-gray-500 mt-1">{review.company}</div>}
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials">
              <Button size="lg" className="bg-[rgb(250,165,27)] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl">
                View all testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
