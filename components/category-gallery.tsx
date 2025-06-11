"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog"

interface GalleryImage {
  title: string
  description: string
  image: string
  author?: string
}

interface CategoryGalleryProps {
  category: string
  images: GalleryImage[]
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  showThumbnail?: boolean // Control whether to show the thumbnail
}

export function CategoryGallery({ 
  category, 
  images, 
  isOpen: externalIsOpen, 
  setIsOpen: externalSetIsOpen,
  showThumbnail = true // Default to showing thumbnail
}: CategoryGalleryProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  
  // Use external controls if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = externalSetIsOpen || setInternalIsOpen

  // First image is used as the category thumbnail
  const thumbnailImage = images[0]

  return (
    <>
      {/* Only render the thumbnail if showThumbnail is true */}
      {showThumbnail && (
        <div className="group cursor-pointer" onClick={() => setIsOpen(true)}>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="aspect-[3/4] relative">
              <Image
                src={thumbnailImage.image || "/placeholder.svg"}
                alt={thumbnailImage.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="text-white p-6 w-full">
                <Badge className="mb-3 bg-orange-500 hover:bg-orange-600">{category}</Badge>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{thumbnailImage.title}</h3>
                <p className="text-sm text-gray-200 mb-2 line-clamp-2">{thumbnailImage.description}</p>
                {thumbnailImage.author && <p className="text-xs text-orange-200 font-medium">{thumbnailImage.author}</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-full p-0 bg-white h-[80vh] max-h-[800px] overflow-hidden">
          <DialogHeader className="p-4 sm:p-6 border-b sticky top-0 bg-white z-10">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">{category}</DialogTitle>
            <DialogDescription className="text-gray-600 text-sm sm:text-base">Browse all images in this category</DialogDescription>
          </DialogHeader>
          <div className="p-4 sm:p-6 overflow-y-auto" style={{ maxHeight: "calc(80vh - 80px)" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="text-white p-4 w-full">
                        <h3 className="text-base font-semibold mb-1 line-clamp-2">{image.title}</h3>
                        <p className="text-xs text-gray-200 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl w-full p-0 bg-white max-h-[90vh] overflow-auto">
            <button
              className="absolute right-4 top-4 z-10 bg-white/80 rounded-full p-1 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[3/4] w-full sm:max-h-[60vh]">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-2">{selectedImage.description}</p>
              {selectedImage.author && <p className="text-xs sm:text-sm text-gray-500">By {selectedImage.author}</p>}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
