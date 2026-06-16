import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { portfolioCategories } from "@/data/portfolio-categories"
import { CATEGORY_THUMBNAILS } from "@/data/category-thumbnails"

export const metadata: Metadata = {
  title: "Publishing Portfolio | 500+ Publications | Magnum Custom Publishing Delhi",
  description:
    "Browse our portfolio of 500+ publications across self-publishing, government, think tanks, CSR, climate change, school books, and more. Two decades of publishing excellence from New Delhi.",
  openGraph: {
    title: "Publishing Portfolio | 500+ Publications | Magnum Custom Publishing Delhi",
    description:
      "Browse our portfolio of 500+ publications across self-publishing, government, think tanks, CSR, climate change, school books, and more. Two decades of publishing excellence from New Delhi.",
    url: "https://magnumcustompublishing.com/portfolio",
  },
}

// URL-slug to category-id mapping
export const slugToId: Record<string, string> = {
  "self-publishing": "self-publishing",
  "think-tanks-defence-security": "think-tanks-defence-security",
  "global-consultants-trade": "global-consultants-trade-organisations",
  "foreign-languages": "foreign-languages",
  "climate-change": "Climate Change Mitigation and Adaptation",
  "government-of-india": "government-of-india",
  "csr": "Corporate Social Responsibility",
  "school-books": "school-books",
  "childrens-books-regional-languages": "Children's Books in Regional Languages",
}

export const categorySlug: Record<string, string> = {
  "self-publishing": "self-publishing",
  "think-tanks-defence-security": "think-tanks-defence-security",
  "global-consultants-trade-organisations": "global-consultants-trade",
  "Climate Change Mitigation and Adaptation": "climate-change",
  "Corporate Social Responsibility": "csr",
  "school-books": "school-books",
  "Children's Books in Regional Languages": "childrens-books-regional-languages",
  "foreign-languages": "foreign-languages",
  "government-of-india": "government-of-india",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-4 shadow-lg">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio across publishing categories, showcasing our expertise in delivering
            high-quality publications for authors, corporates, government agencies, and research institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category) => {
            const slug = categorySlug[category.id] ?? category.id
            const thumbnailName = CATEGORY_THUMBNAILS[category.name]
            const thumbnailImage = category.images.find((img) => img.image.includes(thumbnailName)) ?? category.images[0]
            const thumbnailAlt = thumbnailImage?.altText ?? thumbnailImage?.title ?? category.name

            return (
              <Link
                key={category.id}
                href={`/portfolio/${slug}`}
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden bg-white">
                  {thumbnailImage && (
                    <Image
                      src={thumbnailImage.image}
                      alt={thumbnailAlt}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-white p-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-semibold">View gallery</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-gray-900 text-lg group-hover:text-[rgb(250,165,27)] transition-colors duration-300 mb-1">
                    {category.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{category.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
