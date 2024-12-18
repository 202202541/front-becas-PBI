import FormRegister from "@/app/components/FormRegister"

const Register = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div className="fixed inset-0 bg-[url('/PBI.svg')] bg-cover bg-center bg-fixed -z-10" />

      <div className="flex w-full items-center justify-center py-8">
        <FormRegister />
      </div>
    </section>
  )
}

export default Register
