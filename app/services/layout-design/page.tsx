import type { Metadata } from "next"
import { Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Book Layout and Typesetting Services India | Magnum Custom Publishing Delhi",
  description:
    "Professional book layout and typesetting for trade books, research reports, government publications, and coffee table books. Print-ready and digital formats. Delhi NCR.",
  openGraph: {
    title: "Book Layout and Typesetting Services India | Magnum Custom Publishing Delhi",
    description:
      "Professional book layout and typesetting for trade books, research reports, government publications, and coffee table books. Print-ready and digital formats. Delhi NCR.",
    url: "https://magnumcustompublishing.com/services/layout-design",
  },
}

export default function LayoutDesignPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-[rgb(250,165,27)] font-semibold text-sm">Our Services</p>
            <h1 className="text-4xl font-bold text-gray-900">Layout &amp; Design</h1>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-gray-800 border-l-4 border-[rgb(250,165,27)] pl-6 py-2 bg-orange-50 rounded-r-xl">
            The interior design of a book is what makes it genuinely readable – or tiring to read. Our layout service
            takes your edited manuscript and transforms it into a professionally typeset publication.
          </p>
          <p>
            We make considered choices in typography, spacing, margins, running heads, chapter openers, and image
            placement. We work on books across categories including corporate publications, research reports,
            institutional histories, government documents, coffee table books, and trade paperbacks.
          </p>
          <p>
            Every layout is designed for the specific character of that publication – a policy report reads differently
            from a memoir, and a children&apos;s book requires entirely different treatment from a defence research paper.
            We deliver print-ready files as well as screen-optimised formats for digital distribution.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Corporate Publications", "Research Reports", "Government Documents", "Coffee Table Books", "Trade Paperbacks", "Digital Formats"].map((type) => (
            <div key={type} className="p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl text-center">
              <div className="font-semibold text-gray-900">{type}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(250,165,27)] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg">
            View our layouts <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[rgb(250,165,27)] text-[rgb(250,165,27)] font-bold rounded-xl hover:bg-orange-50 transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
