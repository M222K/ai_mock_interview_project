"use client"  //whenevr you use a client side server component you need to add this directive at the top
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { email, z } from "zod"
import Image from 'next/image';
import Link from "next/link";
import { toast } from "sonner";


import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const AuthFormSchema = (type: FormType) => {
    return
    z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional,
        email: z.string().email(),
        password: z.string().min(3),
    })
}

const authform = ({ type }: { type: FormType }) => {

    const FormSchema = AuthFormSchema(type);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            if (type === 'sign-up') {
                console.log('sign-up', values);
            } else {
                console.log('sign-in', values);
            }
        } catch (error) {
            console.log(error);
            toast.error(`There was an error:${error}`)
        }
        console.log(values)
    }

    const isSignIn = type === 'sign-in';
    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" height={32} width={38} />
                    <h2 className="text-primary-100">PrepPal AI</h2>
                </div>
                <h3 className="text-center">Practice Job Interviews with AI</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && <p>Name</p>}
                        <p>Email</p>
                        <p>Password</p>
                        <Button type="submit" className="btn">{isSignIn ? 'Sign-In' : 'Create an Account'}</Button>
                    </form>
                    <p className="text-center">{isSignIn ? 'No account yet ?' : 'Have an account already'}
                        <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">{!isSignIn ? 'Sign-In' : 'Sign-up'}</Link>
                    </p>
                </Form>

            </div>
        </div>
    )
}

export default authform
