'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

export function LoginForm() {
    const t = useTranslations('LoginForm');
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        if(!email || !password){
            return alert('Todos los campos son obligatorios')
        }
        const result = await signIn('credentials', {
            redirect: true,
            email: email,
            password: password,
            callbackUrl: 'http://localhost:3000/'
        })
        // const data = {
        //     email: email,
        //     password: password,
        // }
        // const handleLogin = async (data: any) => {
        //     const response = await fetch('/api/auth/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     if(!response.ok) return alert('Ocurrió un error al ingresar')
        //     const result = await response.json()
        //     return result
        // }
        // const result = await handleLogin(data)
        // localStorage.setItem('token', JSON.stringify(result.token))
        // localStorage.setItem('user', JSON.stringify(result.userNoPassword))
        // alert(result.message)
        // setTimeout(() => {
        //     router.push('/')
        // }, 500)
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full max-w-lg">
        <div className="flex flex-col space-y-3">
            <label htmlFor="email">{t('email')}</label>
            <input type="email" name="email" id="email" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="password">{t('password')}</label>
            <input type="password" name="password" id="password" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <input type="submit" value={t('signIn')} className="bg-lime-500 text-white font-medium text-center rounded-lg py-4 cursor-pointer hover:bg-lime-700" />
        </div>
    </form>
  )
}
