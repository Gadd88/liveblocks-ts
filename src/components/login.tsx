'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import { LoginButton } from "./login-button"

// bg-clip-text text-transparent
export const Login = () => {

  return (
<div className="w-full pt-6 text-center flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
    <article className="w-full md:w-1/2 flex items-center justify-center rounded-md">
        <Image src='/boards.svg' alt='boards image' height={500} width={500} className="max-w-full h-auto" />
    </article>
    <article className="flex flex-col space-y-5 items-center w-full md:w-1/2 p-5 gap-5">
        <h1 className="text-center text-2xl md:text-4xl">
            Bienvenido a <span className="bg-gradient-to-bl from-[#008793] to-[#a8eb12]  p-2 text-white">TaskEase</span>
        </h1>
        <div className="text-slate-500">
            <p className="text-sm md:text-base text-start leading-7">Con TaskEase, puedes crear y gestionar tus tareas de manera eficiente. Personaliza completamente tu experiencia añadiendo, editando y eliminando columnas según tus necesidades.
            </p>
            <hr className="border-2 border-lime-500 rounded-full w-5/6 mx-auto my-5"/>
            <p className="text-sm md:text-base text-start leading-7">Colabora con tu equipo en tiempo real, compartiendo listas de tareas y asignando responsabilidades. Todo esto, en una interfaz intuitiva y fácil de usar, diseñada para mejorar tu productividad y mantenerte enfocado en lo que realmente importa.</p>
            <p className="text-sm md:text-base text-center w-full leading-7 mt-5 italic">
                Ingresa con tu cuenta de <strong>Google</strong> o <strong>Regístrate</strong> en nuestra base de datos
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <LoginButton />
            <button 
                type='button' 
                className="w-full md:w-auto font-normal bg-gray-300 text-slate-800 hover:text-white"
                >
                    Registrarse
            </button>
        </div>
    </article>
</div>
  )
}
