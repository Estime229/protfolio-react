import { LoginFormFielsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginView } from "./login.view";
import { useToogle } from "@/hooks/use-toggle";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
    const router = useRouter();
    const { value: isLoading, setValue: setIsLoading }= useToogle();

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFielsType>();

    const handleSignInUser = async ({ email, password ,}: LoginFormFielsType) => {
        const { error } = await firebaseSignInUser(email, password);
        if (error) {
            // setIsLoading(false);
            toast.error(error.message)
            return;
        }
        toast.success("Bienvenue sur Coders Monkeys")
        setIsLoading(false);
        reset()
        router.push("/mon-espace");
    };

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (FormData) => {
        setIsLoading(true);
        console.log("formData", FormData)
        const { password } = FormData;
        if (password.length <= 5) {
            setError("password", {
                type: "manuel",
                message: "Ton mot de passe doit comporter au minimun 6 caratères"

            })
            setIsLoading(false)
            return;
        }

        handleSignInUser(FormData);

    }


    return (<>
        <LoginView
            form={{
                errors,
                register,
                handleSubmit,
                onSubmit,
                isLoading,
            }}

        />
    </>);

};