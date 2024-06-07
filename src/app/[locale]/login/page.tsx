import { LoginForm } from "@/components/forms/login-form"
import { LoginButton } from "@/components/login-button"
import { useTranslations } from "next-intl"
import Image from "next/image"

const LoginPage = () => {
  const t = useTranslations('LoginForm')
  return (
    <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-2xl md:text-4xl mb-10">{t('signIn')}</h1>
        <section className="flex justify-center items-center gap-10">
            <section className="w-1/2 flex justify-between flex-col gap-4 items-center">
              <LoginForm />
              <LoginButton />
            </section>
            <section className="w-1/2 flex justify-center items-center">
                <Image src="/register.svg" alt="register" width={500} height={500}/>
            </section>
        </section>
    </div>
  )
}

export default LoginPage