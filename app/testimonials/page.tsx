import type { Metadata } from "next"
import { Star } from "lucide-react"
import reviewsData from "@/data/reviews.json"

export const metadata: Metadata = {
  title: "Client Testimonials | Magnum Custom Publishing Delhi NCR",
  description:
    "Read what authors, academics, corporates, and institutions say about working with Magnum Custom Publishing. 20 years of trusted publishing services from New Delhi.",
  openGraph: {
    title: "Client Testimonials | Magnum Custom Publishing Delhi NCR",
    description:
      "Read what authors, academics, corporates, and institutions say about working with Magnum Custom Publishing. 20 years of trusted publishing services from New Delhi.",
    url: "https://magnumcustompublishing.com/testimonials",
  },
}

export default function TestimonialsPage() {
  const reviews = reviewsData.reviews

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-6 shadow-lg">
            <Star className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to have served hundreds of authors, academics, corporates, and institutions across India with
            professional publishing services. Here is what some of them have shared about their experience.
          </p>
        </div>

        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[rgb(250,165,27)] to-orange-300 rounded-l-2xl" />
              <div className="flex gap-1 mb-4 ml-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[rgb(250,165,27)] fill-[rgb(250,165,27)]" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic ml-4">
                &ldquo;{review.review}&rdquo;
              </blockquote>
              <div className="ml-4">
                <div className="font-bold text-gray-900 text-lg">{review.name}</div>
                <div className="text-[rgb(250,165,27)] font-medium">{review.designation}</div>
                {review.company && (
                  <div className="text-gray-500 text-sm mt-1">{review.company}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-6">Join our growing list of satisfied clients across India.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(250,165,27)] text-white font-bold rounded-xl hover:bg-orange-500 transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
