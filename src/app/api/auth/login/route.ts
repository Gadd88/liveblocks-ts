import clientPromise from "@/lib/connectDB"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'

export async function POST(request: Request) {
    const data = await request.json()
    const { email, password } = data

    if(!email || !password){
        return new Response("Todos los campos son necesarios", { status: 400 })
    }
    try{
        const client = await clientPromise
        const db = await client.db("taskease")
        const userCollection = await db.collection('users')
        const user = await userCollection.findOne({email})
        if(!user || user.password !== password){
            return NextResponse.json({message: 'Email y/o Password incorrectos'}, {status: 403})
        }
        const userNoPassword = {...user, password: undefined}
        const token = jwt.sign({email: user.email}, process.env.SECRET as string)
        return NextResponse.json({message: 'Login exitoso', token, userNoPassword}, {status: 200})
    }catch(err){
        throw new Error('Ocurrió un error')
    }
}