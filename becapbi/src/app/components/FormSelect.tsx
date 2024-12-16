"use client";

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string | number;
  label: string;
}

interface FormSelectProps {
  form: any; // Form instance from react-hook-form
  name: string; // Field name
  options: Option[]; // List of options with value and label
  label: string; // Label for the select
  placeholder?: string; // Placeholder text
  isRequired?: boolean; // Whether the field is required
  className?: string; // Additional CSS classes
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
          <FormLabel>
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
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
  );
};

export default FormSelect;
