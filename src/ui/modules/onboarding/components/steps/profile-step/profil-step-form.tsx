import { FormType } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props {
    form: FormType
}


export const ProfileStepForm = ({ form }: Props) => {
    const { register, errors, isLoading } = form;

    return (
        <form className="w-full max-w-md space-y-4">

            <Input
                label="Nom d'utilisateur"
                isLoading={isLoading}
                placeholder="john doe"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner un pseudo"
                id="displayName"
            />


            <Input
                label="Expertise"
                isLoading={isLoading}
                placeholder="Dev front-end React freelance"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ton expertise"
                id="expertise"
            />
             <Textarea
                label="Biographie"
                isLoading={isLoading}
                placeholder="Renseigne nous sur ta biographie"
                rows={5}
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ta biographie"
                id="biography"
                required={false}
             />
          
        </form>
    )

}