'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { LuLogOut } from "react-icons/lu";

export const LogoutButton = () => {
  return (
    <button className='bg-gray-500 font-normal hover:bg-red-600 inline-flex gap-2 items-center' onClick={()=>signOut({callbackUrl:'/'})}>Salir <LuLogOut className='h-6'/></button>
  )
}
