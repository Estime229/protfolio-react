import { RegisterFormFielsType } from "@/types/forms";
import { RegisterView } from "./register.view";
import { useForm, SubmitHandler } from "react-hook-form";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";

import { DiVim } from "react-icons/di";
import { toast } from "react-toastify";
import { useToogle } from "@/hooks/use-toggle";
import { Button } from "@/ui/design-system/button/button";
import { firestoreCreateDocment } from "@/api/firestore";


export const RegisterContainer = () => {
    const { value: isLoading, setValue: setIsLoading, toggle }


        = useToogle({ initial: false });

    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFielsType>();

    const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
        const { error } = await firestoreCreateDocment(collectionName, documentID, document);
        if (error) {
            toast.error(error.message)
            return;
        }
        toast.success("Bienvenu sur l'pp des singes codeurs")
        setIsLoading(false);
        reset()
        sendEmailVerificationProcedure();
    }
        const handleCreateUserAuthentication = async ({ email, password, how_did_hear }: RegisterFormFielsType) => {
            const { error, data } = await firebaseCreateUser(email, password);
            if (error) {
                setIsLoading(false)
                toast.error(error.message)
                return;
            }
            const userDocumentData = {
                email: email,
                how_did_hear: how_did_hear,
                uid: data.uid,
                creation_data: new Date(),
            }

            handleCreateUserDocument("users", data.uid, userDocumentData)
        };

        const onSubmit: SubmitHandler<RegisterFormFielsType> = async (FormData) => {
            setIsLoading(true);
            console.log('formData', FormData)

            const { password } = FormData;

            if (password.length <= 5) {
                setError("password", {
                    type: "manual",
                    message: "Ton mot de passe doit compter au moins 6 caractères"
                });
                return;
            }

            handleCreateUserAuthentication(FormData)

        };


        return (
            <>
          

                <RegisterView form={{ errors, register, handleSubmit, onSubmit, isLoading, }} />

            </>



        );
    
    };
