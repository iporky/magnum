import type { Metadata } from "next"
import { BookOpen, Users, Award, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Publishing Services India | Ghostwriting, Editing, Design | Magnum Custom Publishing",
  description:
    "End-to-end publishing services including ghostwriting, manuscript editing, book cover design, and layout. Serving clients across Delhi NCR and all of India since 2005.",
  openGraph: {
    title: "Publishing Services India | Ghostwriting, Editing, Design | Magnum Custom Publishing",
    description:
      "End-to-end publishing services including ghostwriting, manuscript editing, book cover design, and layout. Serving clients across Delhi NCR and all of India since 2005.",
    url: "https://magnumcustompublishing.com/services",
  },
}

const services = [
  {
    icon: BookOpen,
    title: "Writing & Ghostwriting",
    href: "/services/ghostwriting",
    summary: "We capture your voice, your story, and your ideas in a book that is authentically yours.",
    description:
      "Many people have a compelling story, deep expertise, or a lifetime of experience worth sharing – but not the time or the words to put it on paper. Our ghostwriting service bridges that gap. We work closely with you through conversations, notes, and drafts to capture your voice, your story, and your ideas in a book that is authentically yours. Whether you are a business leader writing a thought-leadership book, a professional documenting your career journey, or an individual preserving a family memoir, we handle the writing while you remain the author. We have ghostwritten books across genres including memoirs, business books, and institutional histories. Complete confidentiality is maintained as a matter of course.",
  },
  {
    icon: Users,
    title: "Editing & Proofreading",
    href: "/services/editing",
    summary: "Structural and line editing to ensure your manuscript reads with clarity and authority.",
    description:
      "A manuscript is only as strong as its final edit. Our editing service works at two levels – structural editing that strengthens the flow, logic, and organisation of your content, and line editing that refines language, grammar, and consistency throughout. For authors writing in English as a second language, or those new to long-form writing, our editing ensures the final manuscript reads with clarity and authority without losing your original voice. We follow standard publishing conventions and can work in British or American English as required. Final proofreading catches every last error before the text goes to layout, so what reaches the printer is clean, polished, and publication-ready.",
  },
  {
    icon: Award,
    title: "Layout & Design",
    href: "/services/layout-design",
    summary: "Professionally typeset publications with considered choices in typography, spacing, and image placement.",
    description:
      "The interior design of a book is what makes it genuinely readable – or tiring to read. Our layout service takes your edited manuscript and transforms it into a professionally typeset publication with considered choices in typography, spacing, margins, running heads, chapter openers, and image placement. We work on books across categories including corporate publications, research reports, institutional histories, government documents, coffee table books, and trade paperbacks. Every layout is designed for the specific character of that publication – a policy report reads differently from a memoir, and a children's book requires entirely different treatment from a defence research paper. We deliver print-ready files as well as screen-optimised formats for digital distribution.",
  },
  {
    icon: Zap,
    title: "Cover Design",
    href: "/services/cover-design",
    summary: "Visually compelling covers prepared for both print and digital formats.",
    description:
      "A book cover is the first and often only thing that determines whether someone picks up your book or passes it by. Our cover design service creates covers that are visually compelling, appropriate to the genre and audience, and technically prepared for both print and digital formats. We have designed covers across a wide range – self-published memoirs, academic monographs, corporate histories, think tank reports, children's books, and trade publications. Each cover goes through multiple concept stages with your feedback before finalisation. We supply print-ready high-resolution files, spine and back cover included, along with digital versions optimised for online retail and promotion.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-6 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer end-to-end services from ideation to print production as well as standalone services to meet your
              specific publishing needs. Based in New Delhi, we serve clients across India and internationally.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {services.map(({ icon: Icon, title, href, summary, description }) => (
              <Card key={href} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-[rgb(250,165,27)]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">{title}</h2>
                      <p className="text-[rgb(250,165,27)] font-medium mb-4">{summary}</p>
                      <p className="text-gray-600 leading-relaxed text-lg mb-4">{description}</p>
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(250,165,27)] text-white font-semibold rounded-xl hover:bg-orange-500 transition-colors shadow-md hover:shadow-lg"
                      >
                        Learn more about {title} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional services */}
          <div className="text-center">
            <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900">Additional Services</h3>
                <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full" />
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {["International-grade printing", "Digital print-on-demand", "Offset printing", "Hardcase binding", "Section sewing and perfect binding"].map((s) => (
                  <span key={s} className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-[rgb(250,165,27)] border border-orange-200 rounded-lg text-sm font-semibold">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
