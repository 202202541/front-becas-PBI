import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import FormFieldInput from './FormFieldInput'
import { Control, Path, FieldValues } from 'react-hook-form'
import FormSelect from './FormSelect'
import { Button } from '@/components/ui/button'

interface IntegranteFamiliarProps<T extends FieldValues> {
  name: string
  form: {
    control: Control<T>
  }
  index: number
  onRemove: (index: number) => void
}

const IntegranteFamiliar = <T extends FieldValues>({name, form, index, onRemove }: IntegranteFamiliarProps<T>) => {
  const accordionId = `integrante-${index}`
  return (
    <>
    <Accordion type="single" collapsible defaultValue={accordionId}>
      <AccordionItem value={accordionId}>
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent>
            <FormFieldInput
              control={form.control}
              name={`grupo_familiar.[${index}].nombres` as Path<T>}
              label="Nombres"
              placeholder="Ingrese nombres"
              isRequired
            ></FormFieldInput>
            <FormFieldInput
              control={form.control}
              name={`grupo_familiar.[${index}].apellidos` as Path<T>}
              label="Apellidos"
              placeholder="Ingrese apellidos"
              isRequired
            ></FormFieldInput>
            <FormFieldInput
              control={form.control}
              name={`grupo_familiar.[${index}].edad` as Path<T>}
              label="Edad"
              placeholder="Ingrese edad"
              isRequired
              onlyNumber={true}
            ></FormFieldInput>
            <FormFieldInput
              control={form.control}
              name={`grupo_familiar.[${index}].ocupacion` as Path<T>}
              label="Ocupación"
              placeholder="Ingrese ocupación"
              isRequired
            ></FormFieldInput>
            <FormSelect
              form={form}
              name={`grupo_familiar.[${index}].estado_civil` as Path<T>}
              label="Estado Civil"
              options={[]}
              isRequired
            ></FormSelect>
            <FormSelect
              form={form}
              name={`grupo_familiar.[${index}].parentesco_id` as Path<T>}
              label="Parentesco"
              options={[]}
              isRequired
            ></FormSelect>
            <Button
              onClick={() => onRemove(index)}
              className="bg-red-600 text-white"
            >Eliminar</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default IntegranteFamiliar