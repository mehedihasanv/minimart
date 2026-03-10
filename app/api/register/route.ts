import clientPromise from "../../../lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return Response.json({ error: "All fields required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("minimart")

    
    const existing = await db.collection("users").findOne({ email })
    if (existing) {
      return Response.json({ error: "Email already registered" }, { status: 400 })
    }

   
    const hashedPassword = await bcrypt.hash(password, 10)
    await db.collection("users").insertOne({ name, email, password: hashedPassword })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: "Registration failed" }, { status: 500 })
  }
}