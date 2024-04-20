import { ForgetPasswordFormFielsType, LoginFormFielsType } from "@/types/forms";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget-password.view";
import { sendEmailToResetPasword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
const router= useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        handleSubmit,
        formState: { errors },
        register,
        reset,
    } = useForm<ForgetPasswordFormFielsType>();

    const handleResetPassword = async ({ email }: ForgetPasswordFormFielsType) => {
        const { error } = await sendEmailToResetPasword(email);
        if (error) {
            setIsLoading(false);
            toast.error(error.message)
            return;
            
        }
        toast.success( `Un email a été expédié à l'addresse ${email} `)
        setIsLoading(false);
        reset()
         router.push("/connexion")
    }

    const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (FormData) => {
        setIsLoading(true);
        handleResetPassword(FormData)

    }



    return <ForgetPasswordView
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading,
        }}

    />

};