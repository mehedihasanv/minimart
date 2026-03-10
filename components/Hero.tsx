import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-28 overflow-hidden">

      
      <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-400 opacity-5 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">

        
        <span className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
          🛒 Welcome to MiniMart
        </span>

       
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Discover Amazing <br />
          <span className="text-yellow-300">Products</span> Online
        </h1>

        
        <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Shop the latest trends at unbeatable prices. Fast delivery, secure payments, and hassle-free returns — all in one place.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <Link
            href="/items"
            className="px-8 py-4 bg-yellow-400 text-yellow-900 font-bold rounded-full hover:bg-yellow-300 transition text-lg shadow-xl"
          >
            Shop Now →
          </Link>
          <Link
            href="/register"
            className="px-8 py-4 bg-white bg-opacity-20 text-white font-bold rounded-full hover:bg-opacity-30 transition text-lg border border-white border-opacity-40"
          >
            Get Started Free
          </Link>
        </div>

        
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {[
            { value: "10,000+", label: "Products" },
            { value: "50,000+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-extrabold text-yellow-300">{stat.value}</p>
              <p className="text-indigo-200 text-sm mt-1">{stat.value === "4.9★" ? "⭐ " : ""}{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}