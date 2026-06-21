import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Magnum Custom Publishing | Publishing Services Delhi NCR",
  description:
    "Get in touch with Magnum Custom Publishing for ghostwriting, editing, book design, and publishing services. Based in Alaknanda, New Delhi. Call, WhatsApp, or email us today.",
  openGraph: {
    title: "Contact Magnum Custom Publishing | Publishing Services Delhi NCR",
    description:
      "Get in touch with Magnum Custom Publishing for ghostwriting, editing, book design, and publishing services. Based in Alaknanda, New Delhi. Call, WhatsApp, or email us today.",
    url: "https://magnumcustompublishing.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.06)] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your publishing project to life? We offer professional publishing services across Delhi NCR —
            including Gurgaon, Noida, Faridabad, and Ghaziabad — and work with clients anywhere in India and
            internationally. Let&apos;s discuss how we can help you.
          </p>
        </div>

        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden mb-8">
          <CardContent className="p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full" />
              Contact Information
              <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full" />
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-[rgb(250,165,27)]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Address</h3>
                  <address className="text-gray-600 not-italic leading-relaxed">
                    C-27-B Gangotri Enclave, Alaknanda,<br />
                    opp Alaknanda Market,<br />
                    New Delhi 110019
                  </address>
                  <p className="text-sm text-gray-500 mt-1">
                    Serving all Delhi NCR: Gurgaon, Noida, Faridabad, Ghaziabad
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-[rgb(250,165,27)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                  <a href="mailto:arvind@magnumcustompublishing.com" className="text-[rgb(250,165,27)] hover:text-orange-600 transition-colors text-lg font-medium break-all">
                    arvind@magnumcustompublishing.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image src="/WhatsApp.webp" alt="WhatsApp" width={24} height={24} className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">WhatsApp</h3>
                  <a href="https://wa.me/919811097054?text=I'm%20interested%20in%20publishing%20services" target="_blank" rel="noopener noreferrer" className="text-[rgb(250,165,27)] hover:text-orange-600 transition-colors text-lg font-medium">
                    +91 98110 97054
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Instant messaging support — preferred by most clients</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-orange-50/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-[rgb(250,165,27)]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                  <a href="tel:+919811097054" className="text-[rgb(250,165,27)] hover:text-orange-600 transition-colors text-lg font-medium">
                    +91 98110 97054
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why choose Magnum */}
        <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[rgba(250,165,27,0.2)] to-transparent rounded-full blur-2xl" />
          <h2 className="font-bold text-white text-xl mb-6 relative z-10">
            Why Choose Magnum Custom Publishing?
          </h2>
          <ul className="space-y-4 text-gray-300 relative z-10">
            {[
              "Professional publishing services in Delhi NCR since 2005",
              "Comprehensive 360-degree solutions — writing, editing, design, printing",
              "Serving authors, corporates, government agencies and NGOs across India",
              "Quality, precision, and timeliness guaranteed",
              "Work seamlessly with clients anywhere in India and internationally",
            ].map((item) => (
              <li key={item} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
