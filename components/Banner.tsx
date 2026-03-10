
import Link from "next/link"

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        
       
        <span className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
          🔥 Limited Time Offer
        </span>

    
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Up to <span className="text-yellow-300">50% OFF</span> <br className="hidden md:block" />
          on Selected Products!
        </h2>

        
        <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Don't miss out on our biggest sale of the season. Shop now and save big on top-rated items.
        </p>

       
        <div className="flex justify-center gap-6 mb-10">
          {["Free Shipping", "Easy Returns", "Secure Payment"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium text-indigo-100">
              <span className="text-yellow-300">✓</span> {item}
            </div>
          ))}
        </div>

        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/items"
            className="px-8 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-full hover:bg-yellow-300 transition text-lg shadow-lg"
          >
            Shop Now →
          </Link>
          <Link
            href="/register"
            className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition text-lg shadow-lg"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </section>
  )
}