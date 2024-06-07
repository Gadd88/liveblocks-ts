import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { LogoutButton } from "./logout-button"
import { LoginButton } from "./login-button"
import Link from "next/link"

export async function Header(){
    const session = await getServerSession(authOptions)
  return (
    <header className="bg-gray-400 flex flex-col md:flex-row justify-between items-center px-5">
    <section className="flex justify-center items-center gap-2 p-4 text-white font-medium">
        <Link href='/' className="flex justify-center items-center gap-2">
            <Image src='/logo.png' alt='taskease logo' height={50} width={50} className="rounded-full p-2 bg-white" />
            <h1 className="text-2xl">TaskEase</h1>
        </Link>
    </section>
    <section className="flex flex-col items-center md:flex-row"> 

        {
            session
            ? (
                <article className="flex justify-center items-center gap-2">
                    Hola, {session?.user?.name}
                    <LogoutButton />
                </article>
            )
            : (
                <div className="mt-2 md:mt-0 hidden md:block">
                    <LoginButton />
                </div>
            )
        }
    </section>
</header>
  )
}
