// components/HeroWithSlider.jsx
import Image from 'next/image';
'use client'
import { useState, useEffect } from 'react'
// import Image from 'next/image'

export default function HeroWithSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sample images for the slider
  const sliderImages = [
    {
      src: "burger.jpg",
      alt: "Burger with Fries",
      title: "Burger with Fries"
    },
    {
      src: "dish2.jpg", 
      alt: "Pasta Carbonara",
      title: "Pasta Carbonara"
    },
    {
      src: "fries.jpg",
      alt: "Fries",
      title: "Fries"
    },
    {
      src: "desserts.jpg",
      alt: "Chocolate Dessert",
      title: "Chocolate Dessert"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [sliderImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  const goToSlide = (index ) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/restaurant-interior.jpg"
        alt="Restaurant interior"
       
        className="object-cover"
        
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-amber-300to-transparent"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full px-8">
        <div className="w-full max-w-8xl mx-auto flex items-center justify-between">
          
          {/* Left Content */}
          <div className="max-w-2xl text-black flex-1">
            <h2 className="text-5xl font-bold mb-6">
             Bueger House Authentic Flavors
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Discover culinary excellence with our chef's special menu
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Menu
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Image Slider */}
          <div className="flex-1 max-w-md ml-12 hidden lg:block">
            <div className="relative">
              
              {/* Main Slider Container */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide 
                        ? 'transform translate-x-0' 
                        : index < currentSlide 
                          ? 'transform -translate-x-full'
                          : 'transform translate-x-full'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      
                      className="object-cover"
                    />
                    
                    {/* Image overlay with title */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-semibold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnail Preview (Optional) */}
              <div className="flex justify-center mt-4 space-x-2">
                {sliderImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentSlide 
                        ? 'ring-2 ring-white scale-105' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slider (shown below content on mobile) */}
      <div className="lg:hidden absolute bottom-8 left-8 right-8 z-20">
        <div className="relative h-48 rounded-xl overflow-hidden">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
               
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
          
          {/* Mobile dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}