import type { Metadata } from "next"
import { Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Book Cover Design Services India | Magnum Custom Publishing Delhi NCR",
  description:
    "Eye-catching book cover design for self-published authors, academic publishers, and corporates. Print-ready and digital formats. Multiple concepts provided. Based in New Delhi.",
  openGraph: {
    title: "Book Cover Design Services India | Magnum Custom Publishing Delhi NCR",
    description:
      "Eye-catching book cover design for self-published authors, academic publishers, and corporates. Print-ready and digital formats. Multiple concepts provided. Based in New Delhi.",
    url: "https://magnumcustompublishing.com/services/cover-design",
  },
}

export default function CoverDesignPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-[rgb(250,165,27)] font-semibold text-sm">Our Services</p>
            <h1 className="text-4xl font-bold text-gray-900">Cover Design</h1>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-gray-800 border-l-4 border-[rgb(250,165,27)] pl-6 py-2 bg-orange-50 rounded-r-xl">
            A book cover is the first and often only thing that determines whether someone picks up your book or passes
            it by. Our cover design service creates covers that are visually compelling, appropriate to the genre and
            audience, and technically prepared for both print and digital formats.
          </p>
          <p>
            We have designed covers across a wide range – self-published memoirs, academic monographs, corporate
            histories, think tank reports, children&apos;s books, and trade publications. Each cover goes through multiple
            concept stages with your feedback before finalisation.
          </p>
          <p>
            We supply print-ready high-resolution files, spine and back cover included, along with digital versions
            optimised for online retail and promotion.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Self-published Memoirs", "Academic Monographs", "Corporate Histories", "Think Tank Reports", "Children's Books", "Trade Publications"].map((type) => (
            <div key={type} className="p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl text-center">
              <div className="font-semibold text-gray-900">{type}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(250,165,27)] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg">
            View our covers <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[rgb(250,165,27)] text-[rgb(250,165,27)] font-bold rounded-xl hover:bg-orange-50 transition-colors">
            Start your design
          </Link>
        </div>
      </div>
    </div>
  )
}
