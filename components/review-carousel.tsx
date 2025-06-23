"use client";

import { useState, useEffect } from "react";
import { Card } from "./ui/card";

interface Review {
  name: string;
  designation: string;
  company: string;
  review: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="w-full relative bg-[rgba(250,165,27,0.08)] py-10">
    <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div>
          <Card className="bg-white p-8 rounded-lg shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-300 drop-shadow-xl hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)] min-h-[400px] flex flex-col justify-between">
            <p className="text-lg mb-6 italic">&ldquo;{reviews[currentIndex].review}&rdquo;</p>
            <div className="flex flex-col">
              <span className="font-semibold">{reviews[currentIndex].name}</span>
              <span className="text-sm text-gray-400">{reviews[currentIndex].designation}</span>
              <span className="text-sm text-gray-400">{reviews[currentIndex].company}</span>
            </div>
          </Card>
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md hover:shadow-lg"
              aria-label="Previous review"
            >
              ←
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-md hover:shadow-lg"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
