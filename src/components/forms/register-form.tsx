

export function RegisterForm() {
  return (
    <form className="flex flex-col space-y-5 w-full max-w-lg">
        <div className="flex flex-col space-y-3">
            <label htmlFor="fullName">Nombre Completo</label>
            <input type="text" name="fullName" id="fullName" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="password">Nombre Completo</label>
            <input type="password" name="password" id="password" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <label htmlFor="repassword">Nombre Completo</label>
            <input type="password" name="repassword" id="repassword" className="border-none"/>
        </div>
        <div className="flex flex-col space-y-3">
            <input type="submit" value="Registrarse" className="bg-lime-500 text-white font-medium text-center rounded-lg py-4 cursor-pointer hover:bg-lime-700" />
        </div>
    </form>
  )
}
