"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

interface FormInputProps {
  form: any
  name: string
  label: string
  isRequired?: boolean
  className?: string
  disabled?: boolean
  placeholder?: string
}

const FormDatePicker: React.FC<FormInputProps> = ({
  form,
  name,
  label,
  isRequired = false,
  className = "",
  disabled = false,
  placeholder = "",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="font-semibold">
            {label}
            {isRequired && <span className="text-red-600 ml-1">*</span>}
          </FormLabel>

          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full h-10 px-4 justify-start text-left font-normal rounded-md text-sm truncate",
                    !field.value && "text-muted-foreground"
                  )}
                  disabled={disabled}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                  {field.value ? (
                    format(new Date(field.value), "dd/MM/yyyy")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full max-w-[300px] p-0">
                <Calendar
                  mode="single"
                  captionLayout="dropdown-buttons"
                  fromYear={1990}
                  toYear={2024}
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) => {
                    field.onChange(date ? new Date(date).toISOString() : "")
                  }}
                  disabled={(date) => date > new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormDatePicker
