"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const featuredWorks = [
  {
    title: "Literary Excellence",
    description:
      "Showcasing our expertise in publishing profound literary works that explore complex themes and human experiences.",
    image: "/images/bonsai-struggles.jpeg",
    category: "Literature & Fiction",
    highlights: ["Contemporary Literature", "Historical Fiction", "Cultural Narratives", "Personal Stories"],
    books: ["The Struggles of a Bonsai", "Best Foot Forward"],
  },
  {
    title: "Cultural & Historical Documentation",
    description:
      "Preserving and presenting cultural heritage and historical insights through meticulously crafted publications.",
    image: "/images/sanchi-rediscovered.jpeg",
    category: "Heritage & Culture",
    highlights: ["Historical Research", "Cultural Studies", "Archaeological Documentation", "Spiritual Traditions"],
    books: ["Sanchi Rediscovered", "Enchanting World of the Lepchas", "Tawang - The Abode of Prayers"],
  },
]

export function PortfolioShowcase() {
  return (
    <div className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Featured Portfolio</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Highlighting our most impactful publications across various categories and industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {featuredWorks.map((work, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 lg:h-80">
                <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white">{work.category}</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{work.title}</h4>
                <p className="text-gray-600 mb-6">{work.description}</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Areas:</h5>
                    <div className="flex flex-wrap gap-2">
                      {work.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Featured Publications:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {work.books.map((book, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
