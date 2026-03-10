import clientPromise from "../../../lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("minimart")
    const items = await db.collection("products").find({}).toArray()

    return Response.json(items)
  } catch (error) {
    return Response.json({ error: "Database connection failed" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db("minimart")
    const result = await db.collection("products").insertOne(body)

    return Response.json({ insertedId: result.insertedId })
  } catch (error) {
    return Response.json({ error: "Insert failed" }, { status: 500 })
  }
}
