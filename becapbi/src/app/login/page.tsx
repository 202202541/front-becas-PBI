import UserLogin from "@/app/components/UserLogin"

const Login = () => {
  return (
    <section className="w-full h-screen bg-[url('/PBI.svg')] bg-cover bg-center flex flex-col justify-center items-center gap-6">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-customRed flex flex-col">
        <span>Bienvenido Al</span>
        <span>Sistema de</span>
        <span>Becas <span className="text-customBlue">PBI</span></span>
      </h2>

      <UserLogin />
    </section>
  )
}

export default Login
