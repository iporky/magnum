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
    }, 20000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };
  return (
    <section className="w-full relative bg-gradient-to-br from-[rgba(250,165,27,0.04)] via-orange-50/30 to-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[rgba(250,165,27,0.1)] to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.08)] to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(250,165,27)] to-orange-500 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our clients trust us with their most important publishing projects
          </p>
        </div>
        
        <div className="relative">
          <Card className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-700 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex flex-col justify-between border border-gray-100 relative overflow-hidden group">
            {/* Card background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgba(250,165,27,0.05)] to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="text-center md:text-center mb-8 relative z-10">
              {/* Removed quote symbol, moved text up */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-8 italic text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto text-left md:text-center mt-0">
                {reviews[currentIndex].review}
              </p>
            </div>
            
            <div className="text-center relative z-10">
              {/* Removed initials in circle */}
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-3">
                {reviews[currentIndex].name}
              </h4>
              <p className="text-sm md:text-base text-gray-600 mb-2">{reviews[currentIndex].designation}</p>
              <p className="text-sm md:text-base text-[rgb(250,165,27)] font-semibold">{reviews[currentIndex].company}</p>
            </div>
          </Card>          
          {/* Navigation buttons */}
          <div className="flex justify-center gap-8 mt-16">
            <button 
              onClick={prev}
              className="group p-5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-gray-100 hover:bg-[rgb(250,165,27)] hover:text-white transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="group p-5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl border border-gray-100 hover:bg-[rgb(250,165,27)] hover:text-white transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-4 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-8 h-4 bg-[rgb(250,165,27)] rounded-full shadow-lg' 
                    : 'w-4 h-4 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
                }`}
                aria-label={`Go to review ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-[rgb(250,165,27)] rounded-full animate-pulse opacity-70"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
