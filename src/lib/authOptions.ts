import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import clientPromise from "./connectDB";
import { AuthOptions } from "next-auth";

export const authOptions:AuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: 'email' },
            password: { label: "Password", type: 'password' }
          },
          async authorize(credentials: Record<"email" | "password", string> | undefined, req){
            // const user = { id: '1', fullName: 'test', email: 'test@test.com'}
            // return user
            const client = await clientPromise
            const db = client.db("taskease")
            const userCollection = db.collection('users')
            const user = await userCollection.findOne({email: credentials?.email})
            if (!user) throw new Error("No se encontró el usuario");
            if(user.password !== credentials?.password) throw new Error("Email y/o Usuario incorrectos");
            return {
              id: user._id.toString(),
              email: user.email,
              name: user.fullName
            };
          }
        })
      ],
    adapter: MongoDBAdapter(clientPromise),
}