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

interface Option {
  value: string | number
  label: string
}

interface FormSelectProps {
  form: any
  name: string
  options: Option[]
  label: string
  placeholder?: string
  isRequired?: boolean
  className?: string
}

const FormSelect: React.FC<FormSelectProps> = ({
  form,
  name,
  options,
  label,
  placeholder = "Select an option",
  isRequired = false,
  className = "",
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
              onValueChange={(value) =>
                field.onChange(isNaN(Number(value)) ? value : Number(value))
              }
              defaultValue={String(field.value || "")}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
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
