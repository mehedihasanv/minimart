"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function ItemsPage() {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/items")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return <p className="text-center py-10">Loading products...</p>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Our Products</h1>
      <p className="text-gray-600 mb-6">Browse through our collection of amazing items.</p>

     
      <div className="flex mb-6 space-x-2">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow border px-3 py-2 rounded"
        />
        <select className="border px-3 py-2 rounded">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Others</option>
        </select>
      </div>

     
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.shortDesc}</p>
              <p className="text-blue-600 font-bold mb-4">${product.price}</p>
              <Link
                href={`/items/${product._id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
