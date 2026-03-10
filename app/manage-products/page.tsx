"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ManageProductsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/items")
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/items/${id}`, { method: "DELETE" })
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id))
      }
    } catch (error) {
      console.error("Delete failed:", error)
    } finally {
      setDeletingId(null)
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

  
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">Manage Products</h1>
          <p className="text-gray-500 mt-1">View, manage and delete your products.</p>
        </div>
        <Link
          href="/add-product"
          className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition shadow-md"
        >
          ➕ Add New Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl">
          <p className="text-5xl mb-4">📦</p>
          <p className="text-xl font-bold text-gray-700">No products found</p>
          <p className="text-gray-500 mb-6">Start by adding your first product.</p>
          <Link href="/add-product" className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
            Add Product
          </Link>
        </div>
      ) : (
        <>
         
          <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left">#</th>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Priority</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, index) => (
                  <tr key={p._id} className="border-b border-gray-100 hover:bg-indigo-50 transition">
                    <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">{p.title}</td>
                    <td className="px-6 py-4 text-indigo-600 font-bold">${p.price}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        p.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : p.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}>
                        {p.priority || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{p.date || "—"}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <Link
                          href={`/items/${p._id}`}
                          className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold hover:bg-indigo-200 transition"
                        >
                          👁 View
                        </Link>
                        <button
                          onClick={() => handleDelete(p._id)}
                          disabled={deletingId === p._id}
                          className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold hover:bg-red-200 transition disabled:opacity-50"
                        >
                          {deletingId === p._id ? "..." : "🗑 Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

      
          <div className="md:hidden space-y-4">
            {products.map((p, index) => (
              <div key={p._id} className="bg-white rounded-2xl shadow-md p-5 border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800">{p.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    p.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : p.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}>
                    {p.priority || "N/A"}
                  </span>
                </div>
                <p className="text-indigo-600 font-bold mb-1">${p.price}</p>
                <p className="text-gray-400 text-sm mb-4">{p.date || "No date"}</p>
                <div className="flex gap-2">
                  <Link
                    href={`/items/${p._id}`}
                    className="flex-1 text-center px-3 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold hover:bg-indigo-200 transition"
                  >
                    👁 View
                  </Link>
                  <button
                    onClick={() => handleDelete(p._id)}
                    disabled={deletingId === p._id}
                    className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold hover:bg-red-200 transition disabled:opacity-50"
                  >
                    {deletingId === p._id ? "Deleting..." : "🗑 Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm mt-4 text-right">
            Total: {products.length} product{products.length !== 1 ? "s" : ""}
          </p>
        </>
      )}
    </div>
  )
}
