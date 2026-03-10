import clientPromise from "../../../../lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid ID" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("minimart")
    const item = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) })

    if (!item) {
      return Response.json({ error: "Product not found" }, { status: 404 })
    }

    return Response.json(item)
  } catch (error) {
    return Response.json({ error: "Database error" }, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!ObjectId.isValid(id)) {
      return Response.json({ error: "Invalid ID" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("minimart")
    await db.collection("products").deleteOne({ _id: new ObjectId(id) })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Delete failed" }, { status: 500 })
  }
}