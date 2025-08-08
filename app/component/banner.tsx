import Image from 'next/image'

export default function Banner() {
  return (
    <div className="min-h-screen">
      {/* Method 1: Background Image with Tailwind bg-* utilities */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('Banner.jpg')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-50"></div>
        
        {/* Content over background */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Book Your Table
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Experience fine dining at its best
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Reserve Now
            </button>
          </div>
        </div>
      </section>
       </div>
  )
}

// Alternative: Using Tailwind config for custom background images
// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         'hero-pattern': "url('/images/hero-bg.jpg')",
//         'restaurant-interior': "url('/images/restaurant.jpg')",
//         'food-texture': "url('/images/food-pattern.jpg')",
//       }
//     }
//   }
// }

// Then use in component:
// <div className="bg-hero-pattern bg-cover bg-center h-screen">
//   Content here
// </div>