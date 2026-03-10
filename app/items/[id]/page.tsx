import clientPromise from "../../../lib/mongodb"
import { ObjectId } from "mongodb"
import Link from "next/link"

export default async function ItemDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  
  const client = await clientPromise
  const db = client.db("minimart")
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) })

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/items" className="text-blue-600 hover:underline">Back to Products</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <img
        src={product.imageUrl || "https://via.placeholder.com/600x300?text=No+Image"}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.fullDesc}</p>
      <div className="space-y-2 mb-6">
        <p><span className="font-semibold">Price:</span> ${product.price}</p>
        {product.date && <p><span className="font-semibold">Date:</span> {product.date}</p>}
        {product.priority && <p><span className="font-semibold">Priority:</span> {product.priority}</p>}
      </div>
      <Link href="/items" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Back to Products
      </Link>
    </div>
  )
}