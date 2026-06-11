import type { Metadata } from "next"
import { BookOpen, Users, Award, Zap } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Magnum Custom Publishing | 20 Years of Publishing Excellence Delhi",
  description:
    "Based in New Delhi, Magnum Custom Publishing has delivered 500+ publications for authors, government agencies, think tanks, NGOs and global consultants since 2005.",
  openGraph: {
    title: "About Magnum Custom Publishing | 20 Years of Publishing Excellence Delhi",
    description:
      "Based in New Delhi, Magnum Custom Publishing has delivered 500+ publications for authors, government agencies, think tanks, NGOs and global consultants since 2005.",
    url: "https://magnumcustompublishing.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.06)] to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-4 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Magnum Custom Publishing</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a renowned provider of comprehensive 360-degree publishing and printing solutions, serving diverse
              clientele since the year 2005 with quality, precision, and timeliness at the forefront of everything we do.
            </p>
            {/* Geographic paragraph — SEO Task magnum-d3k */}
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
              Based in New Delhi, we have been serving authors, corporates, government agencies, NGOs, and research
              institutions across India since 2005. Our clients come to us from across Delhi NCR – including Gurgaon,
              Noida, Faridabad, and Ghaziabad – as well as from Mumbai, Bangalore, Chennai, Hyderabad, and
              internationally. Because publishing and editorial work is delivered digitally, we work seamlessly with
              clients anywhere in India and abroad. If you are looking for professional publishing services in Delhi, a
              ghostwriter in Delhi NCR, or book editing and design services in India, we are glad to hear from you.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-[rgb(250,165,27)]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">What is Custom Publishing?</h2>
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

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-[rgb(250,165,27)]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">Our Story &amp; Expertise</h2>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    As a custom publisher, our story is told through the diverse range of publications we&apos;ve produced.
                    Our titles cover a broad spectrum including Climate Change, Government Publications, Defence and
                    Security, reports for Global Consultants and Trade Organizations, Educational Materials and
                    Children&apos;s Books.
                  </p>
                  <p className="text-lg">
                    We&apos;ve successfully published personal and corporate publications, such as self-published books,
                    annual reports, white papers, research papers, books, magazines, and eBooks, using state-of-the-art
                    equipment and processes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-[rgba(250,165,27,0.05)] rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-[rgb(250,165,27)] mb-2">500+</div>
                    <div className="text-sm font-semibold text-gray-600">Publications</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-[rgba(250,165,27,0.05)] rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-[rgb(250,165,27)] mb-2">20+</div>
                    <div className="text-sm font-semibold text-gray-600">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.3)] to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.2)] to-transparent rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-8 shadow-2xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Approach</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We work closely with clients to understand their unique needs and goals, providing personalized guidance
                  throughout the publishing process.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Users, title: "Collaborative Partnership", desc: "We work as your trusted partner, understanding your vision and bringing it to life with precision and care." },
                  { icon: Zap, title: "Quality & Speed", desc: "State-of-the-art equipment and processes ensure high-quality results delivered on time, every time." },
                  { icon: Award, title: "End-to-End Service", desc: "From concept to completion, we handle every aspect of your publishing journey with expertise." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[rgb(250,165,27)] transition-colors duration-300">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(250,165,27)] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg hover:shadow-xl">
                Explore Our Services <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
