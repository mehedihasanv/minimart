"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function AddProductPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [shortDesc, setShortDesc] = useState("")
  const [fullDesc, setFullDesc] = useState("")
  const [price, setPrice] = useState("")
  const [date, setDate] = useState("")
  const [priority, setPriority] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const product = {
      title,
      shortDesc,
      fullDesc,
      price: Number(price),
      date,
      priority,
      imageUrl,
    }

    try {
      const res = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      })

      if (res.ok) {
        const data = await res.json()
        setMessage("✅ Product added successfully! ID: " + data.insertedId)
        // reset form
        setTitle("")
        setShortDesc("")
        setFullDesc("")
        setPrice("")
        setDate("")
        setPriority("")
        setImageUrl("")
      } else {
        setMessage("❌ Failed to add product")
      }
    } catch (error) {
      setMessage("❌ Error: " + (error as Error).message)
    }
  }

  if (status === "loading") {
    return <p className="text-center py-10">Loading...</p>
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Short Description"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          placeholder="Full Description"
          value={fullDesc}
          onChange={(e) => setFullDesc(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          rows={4}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
