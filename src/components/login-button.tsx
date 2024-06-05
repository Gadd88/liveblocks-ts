'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export const LoginButton = () => {
  return (
    <button 
        type='button' 
        className="w-fit font-normal"
        onClick={() => signIn('google')}
        >
            Ingresa con <span className="font-medium">Google</span>
    </button>
  )
}
