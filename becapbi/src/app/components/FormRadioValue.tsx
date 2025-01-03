import React from 'react'
import { FormItem, FormLabel, FormControl } from '@/components/ui/form'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { FieldValue } from 'react-hook-form'

interface FormRadioValueProps {
  value: string,
  label: string,
  disabled?: boolean
}

const FormRadioValue = ({value, label, disabled}:FormRadioValueProps) => {
  return (
    <>
      <FormItem 
        className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value={value} 
          disabled={disabled}/>
        </FormControl>
        <FormLabel className="font-normal">
          {label}
        </FormLabel>
      </FormItem>
    </>
  )
}

export default FormRadioValue