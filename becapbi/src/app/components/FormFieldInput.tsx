"use client"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Control, FieldValues, Path } from "react-hook-form"

const typeInputs = {
  text: Input,
  password: PasswordInput,
}

type FormFieldInputProps<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>
  label: string
  type?: keyof typeof typeInputs
  maxLength?: number
  placeholder: string
  isRequired?: boolean
  onlyNumber?: boolean
  disabled?: boolean
}

function FormFieldInput<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  maxLength,
  placeholder,
  isRequired = false,
  onlyNumber = false,
  disabled = false,
}: FormFieldInputProps<T>) {
  const InputComponent = typeInputs[type]

  return (
    <FormField control={control} name={name} render={({ field }) => (
      <FormItem className="w-full">
        <FormLabel className="font-semibold">
          {label}
          {isRequired && <span className="text-red-600 ml-1">*</span>}
        </FormLabel>

        <FormControl>
          <InputComponent
            {...field}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(e) => {
              const value = onlyNumber ? e.target.value.replace(/\D/g, "") : e.target.value
              field.onChange(value)
            }}
            required={isRequired}
            disabled={disabled}
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    )} />
  )
}

export default FormFieldInput
