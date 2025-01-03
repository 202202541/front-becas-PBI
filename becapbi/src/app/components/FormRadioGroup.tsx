import React from 'react'
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Control, FieldValues, Path } from 'react-hook-form'

interface FormRadioGroupProps<T extends FieldValues> {
  form: {
    control: Control<T>
  },
  name: Path<T>,
  label: string,
  children?: React.ReactNode,
  onValueChange?: (value: string) => void;
}

const FormRadioGroup = <T extends FieldValues>({ form, name, label, children, onValueChange }: FormRadioGroupProps<T>) => {
  return (
    <>
      <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold">{label}</FormLabel>
              <FormControl>
                <RadioGroup
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                  onValueChange={(value) => {
                    field.onChange(value)
                    if (onValueChange) onValueChange(value)
                  }}
                >
                  {children}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
    </>
  )
}

export default FormRadioGroup