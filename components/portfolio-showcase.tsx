"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioCategories } from "@/data/portfolio-categories"
import { CategoryGallery } from "@/components/category-gallery"

export function PortfolioShowcase() {
  // Select a few featured categories to highlight
  const featuredCategories = portfolioCategories.slice(0, 4)
  
  // State to manage the gallery dialogs
  const [openGallery, setOpenGallery] = useState<string | null>(null)
  
  return (
    <div className="pt-16 pb-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Featured Categories</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio across specialized publishing categories.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {featuredCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 lg:h-80">
                <Image 
                  src={category.images[0].image || "/placeholder.svg"} 
                  alt={category.name} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white">{category.name}</Badge>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h4>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Featured Publications:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.images.slice(0, 3).map((image, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{image.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {category.images.length > 3 && (
                    <div className="text-right">
                      <Button 
                        variant="link" 
                        className="text-orange-500 p-0 h-auto font-medium"
                        onClick={() => setOpenGallery(category.id)}
                      >
                        View all {category.images.length} publications
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
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
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
