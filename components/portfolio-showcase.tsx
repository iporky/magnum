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
  // Get all categories to display
  const featuredCategories = portfolioCategories
    // State to manage the gallery dialogs
  const [openGallery, setOpenGallery] = useState<string | null>(null)

  return (
    <div className="py-6 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.06)] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-4 shadow-lg">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio across publishing categories, showcasing our expertise in delivering high-quality publications.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredCategories.map((category, index) => (            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm group overflow-hidden"
            >              <div 
                className="relative h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center overflow-hidden cursor-pointer bg-white"
                onClick={() => setOpenGallery(category.id)}
              >                {/* Enhanced Image Display */}
                <div className="relative w-full h-full p-2 md:p-3">
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
                    <Image 
                      src={`/images/categories/${category.name}/${CATEGORY_THUMBNAILS[category.name] || "placeholder.svg"}`} 
                      alt={category.name} 
                      fill 
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-1 md:p-2 shadow-2xl drop-shadow-xl rounded-lg" 
                    />
                  </div>                  {/* Enhanced Overlay - Touch/hover activated */}
                  <div className="absolute inset-2 md:inset-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 flex items-end rounded-lg">
                    <div className="text-white p-4 md:p-6 w-full">
                      <div className="flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        <p className="text-xs md:text-sm font-semibold">Click to view gallery</p>
                      </div>
                    </div>
                  </div>
                  {/* Floating Badge - Touch/hover activated */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-[rgb(250,165,27)] text-white shadow-lg text-xs">
                      {category.images.length} Publications
                    </Badge>
                  </div>
                </div>
              </div>              <CardContent className="p-3 md:p-4 lg:p-5">
                {/* Enhanced Category Header */}
                <div className="text-center mb-3 md:mb-4">
                  <Badge 
                    className="bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white cursor-pointer px-4 md:px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl"
                    onClick={() => setOpenGallery(category.id)}
                  >
                    {category.name}
                  </Badge>
                </div>                {/* Enhanced Description */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3 md:mb-4 text-center px-2">{category.description}</p>                  {/* Enhanced Featured Publications */}
                <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-3 md:p-4 border border-gray-100 shadow-lg">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                    <h5 className="font-bold text-gray-900 text-base md:text-lg">Featured Publications</h5>
                    <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full"></div>
                  </div>                  <ul className="space-y-1 mb-2 md:mb-3">
                    {category.images.slice(0, 3).map((image, idx) => (
                      <li key={idx} className="flex items-start space-x-2 p-1 rounded-lg hover:bg-orange-50/30 transition-all duration-200">
                        <div className="w-2 h-2 bg-[rgb(250,165,27)] rounded-full flex-shrink-0 mt-1.5"></div>
                        <span className="text-gray-700 font-normal leading-tight flex-1 text-xs md:text-sm">{image.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {category.images.length > 3 && (
                    <div className="text-center">
                      <button
                        onClick={() => setOpenGallery(category.id)}
                        className="group inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[rgb(250,165,27)] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
                      >
                        <span>View all {category.images.length} publications</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                  showThumbnail={false}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
