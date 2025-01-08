import React from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import FormFieldInput from './FormFieldInput'
import FormSelect from './FormSelect'
import { useFormContext } from "@/app/components/formProvider"
import { IDatosPr } from "@/models/clasificadoresPostula"

interface DatosPadresProps<T extends FieldValues> {
  form: {
    control: Control<T>
  }
}
const DatosPadres = <T extends FieldValues>({ form }: DatosPadresProps<T>) => {
  const {clasificadoresResponse, getSelectObjects} = useFormContext()
  return (
    <>
      <FormFieldInput
        control={form.control}
        name={"direccion_padres" as Path<T>}
        label="Direccion de los padres"
        maxLength={50}
        placeholder="Ingrese la direccion de sus padres"
        isRequired
        type="text"
      />
      <FormFieldInput
        control={form.control}
        name={"telefono_padres" as Path<T>}
        label="Telefono de sus padres"
        maxLength={50}
        placeholder="Ingrese el telefono de sus padres"
        isRequired
        type="text"
      />
      <FormFieldInput
        control={form.control}
        name={"celular_padres" as Path<T>}
        label="Celular de los padres"
        maxLength={50}
        placeholder="Ingrese el celular de sus padres"
        isRequired
        type="text"
      />
      <FormFieldInput
        control={form.control}
        name={"referencia_padres" as Path<T>}
        label="Referencia de los padres"
        maxLength={50}
        placeholder="Ingrese la referencia de sus padres"
        isRequired
        type="text"
      />
      <FormSelect
        form={form}
        name={"tipo_vivienda_pad" as Path<T>}
        label="tipo de vivienda de los padres"
        placeholder='Seleccione el tipo de vivienda'
        options={getSelectObjects(clasificadoresResponse?.lista_tipo_vivienda || {})}  // Usamos la función aquí
        isRequired
      />
    </>
  )
}

export default DatosPadres