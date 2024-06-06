import { RegisterForm } from "@/components/forms/register-form"
import Image from "next/image"

const Register = () => {
  return (
    <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-2xl md:text-4xl mb-10">Regístrate</h1>
        <section className="flex justify-center items-center gap-10">
            <RegisterForm />
            <section className="w-1/2 flex justify-center items-center">
                <Image src="/register.svg" alt="register" width={500} height={500}/>
            </section>
        </section>
    </div>
  )
}

export default Register