import React from 'react'
import FormFieldInput from './FormFieldInput'
import { Control, Path } from 'react-hook-form'
import FormDatePicker from './FormDatePicker'
import FormSelect from './FormSelect'
import { FieldValues } from 'react-hook-form'
import { useFormContext } from './formProvider'

interface DatosDependienteProps<T extends FieldValues> {
  form: {
    control: Control<T>
  }
}

const DatosDependiente = <T extends FieldValues>({
  form
}: DatosDependienteProps<T>) => {
  const { clasificadoresResponse, getSelectObjects, mapToSelectOptions } = useFormContext()
  return (
    <>
      <FormFieldInput
        control={form.control}
        name={"nombres_apellidos_responsable" as Path<T>}
        label="Nombres y apellidos del responsable"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormSelect
        form={form}
        options={mapToSelectOptions(clasificadoresResponse?.lista_parentesco || {})}
        name={"parentesco" as Path<T>}
        label="Parentesco del Responsable"
        placeholder="selccione el parentesco"
        isRequired
      ></FormSelect>
      <FormDatePicker
        form={form}
        name={"fecha_nacimiento" as Path<T>}
        label="Fecha de Nacimiento"
        isRequired
      >
      </FormDatePicker>
      <FormSelect
        form={form}
        options={getSelectObjects(clasificadoresResponse?.lista_sexo || {})}
        name={"estado_civil" as Path<T>}
        label="Estado Civil"
        placeholder=""
        isRequired
      ></FormSelect>
      <FormFieldInput
        control={form.control}
        name={"nro_integrantes_familia" as Path<T>}
        label="Numero de integrantes de la familia"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"ocupacion" as Path<T>}
        label="Ocupacion"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"institucion_trabajo" as Path<T>}
        label="Institucion de trabajo"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"telefono_trabajo" as Path<T>}
        label="Telefono de trabajo"
        placeholder=""
        isRequired
        onlyNumber
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"salario_ingreso" as Path<T>}
        label="Salario de ingreso"
        placeholder=""
        isRequired
        onlyNumber
        ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"otro_ingreso" as Path<T>}
        label="Otro ingreso"
        placeholder=""
        isRequired
        onlyNumber
      ></FormFieldInput>
      <FormSelect
        form={form}
        options={getSelectObjects(clasificadoresResponse?.lista_dedicacion || {})}
        name={"sector_trabajo" as Path<T>}
        label="Sector de trabajo"
        placeholder="seleccione el sector"
        isRequired
      ></FormSelect>
      <FormSelect
        form={form}
        options={getSelectObjects(clasificadoresResponse?.lista_sector_trabajo || {})}
        name={"categoria_ocupacional" as Path<T>}
        label="Categoria ocupacional"
        placeholder="seleccione la categoria"
        isRequired
      ></FormSelect>
    </>
  )
}

export default DatosDependiente