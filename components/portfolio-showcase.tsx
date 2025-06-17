"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioCategories } from "@/data/portfolio-categories"
import { CATEGORY_THUMBNAILS } from "@/data/category-thumbnails"
import { CategoryGallery } from "@/components/category-gallery"

export function PortfolioShowcase() {
  // Select a few featured categories to highlight
  const featuredCategories = portfolioCategories.slice(0, 4)
  
  // State to manage the gallery dialogs
  const [openGallery, setOpenGallery] = useState<string | null>(null)
  
  return (
    <div className="pt-16 pb-16 bg-[rgba(250,165,27,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Featured Categories</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio across specialized publishing categories.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {featuredCategories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-80 lg:h-96 bg-white flex items-center justify-center">
                <Image 
                  src={`/images/categories/${category.name}/${CATEGORY_THUMBNAILS[category.name] || "placeholder.svg"}`} 
                  alt={category.name} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <Badge 
                    className="bg-[rgb(250,165,27)] hover:bg-[rgb(250,165,27)]/90 active:scale-95 text-white cursor-pointer text-xs sm:text-xs md:text-sm lg:text-base px-4 py-1.5 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out rounded-md hover:-translate-y-0.5"
                    onClick={() => setOpenGallery(category.id)}
                  >
                    {category.name}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Featured Publications:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.images.slice(0, 3).map((image, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(250,165,27)] rounded-full"></div>
                          <span>{image.title}</span>
                        </li>
                      ))}
                    </ul>
                    {category.images.length > 3 && (
                      <div className="text-right mt-2">
                        <button
                          onClick={() => setOpenGallery(category.id)}
                          className="text-[rgb(250,165,27)] text-sm hover:text-[rgb(250,165,27)]/80 transition-colors inline-flex items-center gap-1"
                        >
                          View all {category.images.length} publications
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  <CategoryGallery 
                    category={category.name} 
                    images={category.images}
                    isOpen={openGallery === category.id}
                    setIsOpen={(open) => {
                      if (!open) setOpenGallery(null);
                    }}
                    showThumbnail={false} // Hide the thumbnail in the featured portfolio cards
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
