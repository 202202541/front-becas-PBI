import FormRegister from "@/app/components/FormRegister"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Register = () => {
  return (
    <div className="py-10">
      <Card className="w-11/12 max-w-xl mx-auto bg-[#F3F4F7]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Registro de Cuenta</CardTitle>
        </CardHeader>
        <CardContent>
          <FormRegister />
        </CardContent>
      </Card>
    </div>
  )
}

export default Register
