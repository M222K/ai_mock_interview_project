import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Controller, Path, Control, FieldValues } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>
    ({ control, name, label, placeholder, type = "text" }: FormFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) =>
            (
                <FormItem>
                    <FormLabel className="label">{label}</FormLabel>
                    <FormControl>
                        <Input className="input" placeholder={placeholder} type={type}{...field} />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )
            }
        />
    );
};

export default FormField
