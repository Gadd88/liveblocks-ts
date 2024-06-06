'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export const LoginButton = () => {
  return (
    <button 
        type='button' 
        className="w-fit bg-gradient-to-bl from-[#008793] to-[#a8eb12] p-2 text-white hover:bg-black"
        onClick={() => signIn('google')}
        >
            Ingresa con <span className="font-medium">Google</span>
    </button>
  )
}
