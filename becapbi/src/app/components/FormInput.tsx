import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface FormInputProps {
  form: any
  name: string
  label: string
  placeholder?: string
  type?: 'text' | 'number' | 'email' | 'password'
  isRequired?: boolean
  validation?: 'numeric' | 'alphanumeric' | 'none'
}

const FormInput: React.FC<FormInputProps> = ({ 
  form, 
  name, 
  label, 
  placeholder = '', 
  type = 'text',
  isRequired = true,
  validation = 'none'
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    let value = e.target.value

    switch(validation) {
      case 'numeric':
        value = value.replace(/\D/g, "")
        break
      case 'alphanumeric':
        value = value.replace(/[^a-zA-Z0-9]/g, "")
        break
      default:
        break
    }

    onChange(value)
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              onChange={(e) => handleChange(e, field.onChange)}
              required={isRequired}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormInput