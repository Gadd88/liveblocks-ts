'use client'

import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl";

export function RegisterForm() {
    const t = useTranslations('RegisterForm');
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const fullName = formData.get('fullName')
        const email = formData.get('email')
        const password = formData.get('password')
        const repassword = formData.get('repassword')
        if(!fullName || !email || !password || !repassword){
            return alert('Todos los campos son obligatorios')
        }
        if(password !== repassword) return alert('Las contraseñas no coinciden')
        const data = {
            fullName: fullName,
            email: email,
            password: password,
        }
        const handleRegister = async (data: any) => {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(!response.ok) return alert('Ocurrió un error al registrarse')
            const result = await response.json()
            return result
        }
        const result = await handleRegister(data)
        alert(result.message)
        setTimeout(() => {
            router.push('/')
        }, 500)

    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 w-full max-w-lg">
        <div className="flex flex-col space-y-3">
            <label htmlFor="fullName">{t('fullName')}</label>
            <input type="text" name="fullName" id="fullName" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="email">{t('mail')}</label>
            <input type="email" name="email" id="email" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="password">{t('password')}</label>
            <input type="password" name="password" id="password" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="repassword">{t('password2')}</label>
            <input type="password" name="repassword" id="repassword" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <input type="submit" value={t('registerButton')} className="bg-lime-500 text-white font-medium text-center rounded-lg py-4 cursor-pointer hover:bg-lime-700" />
        </div>
    </form>
  )
}
