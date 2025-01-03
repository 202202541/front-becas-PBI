import React from 'react'
import FormFieldInput from './FormFieldInput'
import { Control, Path, FieldValues } from 'react-hook-form'

interface DatosApoderadoProps<T extends FieldValues> {
  form: {
    control: Control<T>
  }
}

const DatosApoderado = <T extends FieldValues>({ form }: DatosApoderadoProps<T>) => {
  return (
    <>
      <FormFieldInput
        control={form.control}
        name={"nombres_apellido_apoderado" as Path<T>}
        label="Nombre y Apellido del Apoderado"
        maxLength={50}
        placeholder="Ingrese el nombre y apellido del apoderado"
        isRequired
        type="text"
      />
      <FormFieldInput
        control={form.control}
        name={"direccion_apoderado" as Path<T>}
        label="Direccion del apoderado "
        maxLength={50}
        placeholder="Ingrese la direccion de sus padres"
        isRequired
        type="text"
      />
      <FormFieldInput
        control={form.control}
        name={"telefono_apoderado" as Path<T>}
        label="Telefono del apoderado"
        maxLength={50}
        placeholder="Ingrese el telefono de sus padres"
        isRequired
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"celular_apoderado" as Path<T>}
        label="Celular del apoderado"
        maxLength={50}
        placeholder="Ingrese el celular de sus padres"
        isRequired
        type="text"
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"referencia_apoderado" as Path<T>}
        label="Referencia del apoderado"
        maxLength={50}
        placeholder="Ingrese la referencia de sus padres"
        isRequired
        type="text"
      ></FormFieldInput>
    </>
  )
}

export default DatosApoderado