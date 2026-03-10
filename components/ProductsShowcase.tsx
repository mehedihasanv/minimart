"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function ProductsShowcase() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/items")
        const data = await res.json()
        setProducts(data.slice(0, 6))
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

       
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            🛍️ Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Featured Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our handpicked selection of top-rated products at amazing prices.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group flex flex-col"
            >
            
              <div className="overflow-hidden h-48">
                <img
                  src={product.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

             
              <div className="p-5 flex flex-col flex-grow">
                
                {product.priority && (
                  <span className={`self-start text-xs font-semibold px-2 py-1 rounded-full mb-2 ${
                    product.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : product.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}>
                    {product.priority}
                  </span>
                )}

                <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">{product.shortDesc}</p>

                <div className="flex items-center justify-between mt-auto">
                  <p className="text-indigo-600 font-extrabold text-lg">${product.price}</p>
                  <Link
                    href={`/items/${product._id}`}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

    
        <div className="text-center mt-10">
          <Link
            href="/items"
            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg shadow-md"
          >
            View All Products →
          </Link>
        </div>

      </div>
    </section>
  )
}