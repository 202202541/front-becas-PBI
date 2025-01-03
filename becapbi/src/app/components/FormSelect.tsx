"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { IOption } from "@/models/clasificadores"


interface FormSelectProps {
  form: any
  name: string
  options?: IOption[]
  label: string
  placeholder?: string
  isRequired?: boolean
  className?: string
  isValueNumber?: boolean
  defaultValue?: string
  disabled?: boolean
  onSetValue?: (value: string) => void
}

const FormSelect: React.FC<FormSelectProps> = ({
  form,
  name,
  options,
  label,
  placeholder = "Select an option",
  isRequired = false,
  className = "",
  isValueNumber = false,
  disabled = false,
  defaultValue = "",
  onSetValue,
}) => {
  
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="font-bold">
            {label}
            {isRequired && <span className="text-red-600 ml-1">*</span>}
          </FormLabel>

          <FormControl>
            <Select
              onValueChange={(value) => {
                if (isValueNumber) {
                  field.onChange(Number(value))
                } else {
                  field.onChange(value.toString())
                }
              }}
              value={defaultValue?defaultValue:String(field.value || "")}
              disabled={disabled}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {defaultValue? defaultValue: options?.map((option) => (
                  <SelectItem key={option.value} value={String(option.value)}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormSelect
