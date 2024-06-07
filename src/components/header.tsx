
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { LogoutButton } from "./logout-button"
import { LoginButton } from "./login-button"
import LocalSwitcher from './local-switcher';
import Link from "next/link"


export async function Header(){
    const session = await getServerSession(authOptions)
  return (
    <header className="bg-gray-400 flex flex-col md:flex-row justify-between items-center px-5 py-4">
    <section className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="taskease logo" height={50} width={50} className="rounded-full p-2 bg-white" />
        <h1 className="text-2xl text-white font-medium">TaskEase</h1>
      </Link>
      <div className="md:hidden ml-4">
        <LocalSwitcher />
      </div>
    </section>

    <section className="hidden md:flex flex-col md:flex-row items-center gap-4">
      <div className="mb-2 md:mb-0 md:mr-4">
        <LocalSwitcher />
      </div>
      {session ? (
        <article className="flex items-center gap-2 text-white font-medium">
          Hola, {session?.user?.name}
          <LogoutButton />
        </article>
      ) : (
        <div className="mt-2 md:mt-0">
          <LoginButton />
        </div>
      )}
    </section>
  </header>
  )
}
