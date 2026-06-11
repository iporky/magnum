import type { Metadata } from "next"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Professional Ghostwriting Services in Delhi NCR | Magnum Custom Publishing",
  description:
    "Expert ghostwriting for memoirs, business books, and institutional histories. We write in your voice while you remain the author. Complete confidentiality guaranteed. Based in New Delhi.",
  openGraph: {
    title: "Professional Ghostwriting Services in Delhi NCR | Magnum Custom Publishing",
    description:
      "Expert ghostwriting for memoirs, business books, and institutional histories. We write in your voice while you remain the author. Complete confidentiality guaranteed. Based in New Delhi.",
    url: "https://magnumcustompublishing.com/services/ghostwriting",
  },
}

export default function GhostwritingPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-[rgb(250,165,27)] font-semibold text-sm">Our Services</p>
            <h1 className="text-4xl font-bold text-gray-900">Writing &amp; Ghostwriting</h1>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-gray-800 border-l-4 border-[rgb(250,165,27)] pl-6 py-2 bg-orange-50 rounded-r-xl">
            Many people have a compelling story, deep expertise, or a lifetime of experience worth sharing – but not the
            time or the words to put it on paper. Our ghostwriting service bridges that gap.
          </p>
          <p>
            We work closely with you through conversations, notes, and drafts to capture your voice, your story, and
            your ideas in a book that is authentically yours. Whether you are a business leader writing a
            thought-leadership book, a professional documenting your career journey, or an individual preserving a family
            memoir, we handle the writing while you remain the author.
          </p>
          <p>
            We have ghostwritten books across genres including memoirs, business books, and institutional histories.
            Complete confidentiality is maintained as a matter of course.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {["Memoirs & Autobiographies", "Business & Leadership Books", "Institutional Histories"].map((type) => (
            <div key={type} className="p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl text-center">
              <div className="font-semibold text-gray-900">{type}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(250,165,27)] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg">
            Discuss your book <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[rgb(250,165,27)] text-[rgb(250,165,27)] font-bold rounded-xl hover:bg-orange-50 transition-colors">
            All services
          </Link>
        </div>
      </div>
    </div>
  )
}
