import FormLogin from "@/app/components/FormLogin"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Login = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-customRed flex flex-col">
        <span>Bienvenido Al</span>
        <span>Sistema de</span>
        <span>Becas <span className="text-customBlue">PBI</span></span>
      </h2>

      <Card className="w-11/12 max-w-md bg-[#F3F4F7]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Inicio de Sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
      </Card>
    </section>
  )
}

export default Login
