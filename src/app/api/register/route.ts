import clientPromise from "@/lib/connectDB"
import { NextResponse } from "next/server"



export async function POST(request: Request) {

    const data = await request.json()
    const { fullName, email, password } = data

    if(!fullName || !email || !password){
        return new Response("Todos los campos son necesarios", { status: 400 })
    }
    try{
        const client = await clientPromise
        const db = await client.db("taskease")
        const userCollection = await db.collection('users')
        const user = await userCollection.findOne({email})
        if(!user){
            const newUser = { fullName, email, password }
            await userCollection.insertOne(newUser)   
            return NextResponse.json({message: 'Usuario creado', newUser}, {status: 200})
        }
        return NextResponse.json({message:'Ya existe un usuario con ese email'}, {status: 400})
    }catch(err){
        throw new Error('Ocurrió un error')
    }
}