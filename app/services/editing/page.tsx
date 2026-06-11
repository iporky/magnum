import type { Metadata } from "next"
import { Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Book Editing and Proofreading Services India | Magnum Custom Publishing Delhi",
  description:
    "Structural and line editing for authors, first-time writers, and corporates. British and American English. Manuscript polished and publication-ready. Based in Delhi NCR.",
  openGraph: {
    title: "Book Editing and Proofreading Services India | Magnum Custom Publishing Delhi",
    description:
      "Structural and line editing for authors, first-time writers, and corporates. British and American English. Manuscript polished and publication-ready. Based in Delhi NCR.",
    url: "https://magnumcustompublishing.com/services/editing",
  },
}

export default function EditingPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-[rgb(250,165,27)] font-semibold text-sm">Our Services</p>
            <h1 className="text-4xl font-bold text-gray-900">Editing &amp; Proofreading</h1>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-gray-800 border-l-4 border-[rgb(250,165,27)] pl-6 py-2 bg-orange-50 rounded-r-xl">
            A manuscript is only as strong as its final edit. Our editing service works at two levels – structural
            editing that strengthens the flow, logic, and organisation of your content, and line editing that refines
            language, grammar, and consistency throughout.
          </p>
          <p>
            For authors writing in English as a second language, or those new to long-form writing, our editing ensures
            the final manuscript reads with clarity and authority without losing your original voice. We follow standard
            publishing conventions and can work in British or American English as required.
          </p>
          <p>
            Final proofreading catches every last error before the text goes to layout, so what reaches the printer is
            clean, polished, and publication-ready.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {["Structural Editing", "Line Editing", "Final Proofreading"].map((type) => (
            <div key={type} className="p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl text-center">
              <div className="font-semibold text-gray-900">{type}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(250,165,27)] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg">
            Get a quote <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[rgb(250,165,27)] text-[rgb(250,165,27)] font-bold rounded-xl hover:bg-orange-50 transition-colors">
            All services
          </Link>
        </div>
      </div>
    </div>
  )
}
