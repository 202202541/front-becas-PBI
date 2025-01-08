import React from 'react'
import { Control, Field, FieldValues, Form, Path } from 'react-hook-form'
import FormFieldInput from './FormFieldInput'
import FormSelect from './FormSelect'
import FormDatePicker from './FormDatePicker'
import { useFormContext } from './formProvider'

interface DatosIndependienteProps<T extends FieldValues> {
  form: {
    control: Control<T>
  }
}

const DatosIndependiente = <T extends FieldValues>
  ({ form }: DatosIndependienteProps<T>) => {
  const { clasificadoresResponse, getSelectObjects, mapToSelectOptions } = useFormContext()
  return (
    <>
      <FormFieldInput
        control={form.control}
        name={"Ocupación" as Path<T>}
        label="ocupacion"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"institucion_trabajo" as Path<T>}
        label="Institución de trabajo"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormFieldInput
        control={form.control}
        name={"salario_ingreso" as Path<T>}
        label="Salario de ingreso"
        placeholder=""
        isRequired
      ></FormFieldInput>
      <FormSelect
        form={form}
        name={"dedicacion_trabajo" as Path<T>}
        label="Dedicación de trabajo"
        placeholder="Seleccione la dedicación"
        options={getSelectObjects(clasificadoresResponse?.lista_dedicacion || [])}
        isRequired
      />
      <FormSelect
        form={form}
        options={getSelectObjects(clasificadoresResponse?.lista_sector_trabajo || [])}
        name={"sector_trabajo" as Path<T>}
        label="Sector de trabajo"
        placeholder=""
        isRequired
      ></FormSelect>
      <FormSelect
        form={form}
        options={getSelectObjects(clasificadoresResponse?.lista_categoria_ocupacional || [])}
        name={"categoria_ocupacional" as Path<T>}
        label="Categoria ocupacional"
        placeholder=""
        isRequired
      ></FormSelect>
      <FormSelect
        form={form}
        options={mapToSelectOptions(clasificadoresResponse?.lista_parentesco || [])}
        name={"postulante_vive_con" as Path<T>}
        label="Postulante vive con"
        placeholder=""
        isRequired
      ></FormSelect>
      <FormSelect
        form={form}
        options={getSelectObjects(clasificadoresResponse?.lista_tipo_vivienda || [])}
        name={"tipo_vivienda_pos" as Path<T>}
        label="Tipo de vivienda"
        placeholder=""
        isRequired
      ></FormSelect>
    </>
  )
}

export default DatosIndependiente