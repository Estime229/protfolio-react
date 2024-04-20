import { FormType } from "@/types/forms"
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { Typography } from "@/ui/design-system/typography/typography";


interface Props {
    imagePreview: string | ArrayBuffer | null,
    uploadProgress: number,
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) =>void;
    form: FormType;
}



export const ProfileForm = ({ form,imagePreview,uploadProgress,handleImageSelect }: Props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } = form;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">


            <div className="flex items-center justify-between py-5">

                <div>
                    <UploadAvatar
                        handleImageSelect={handleImageSelect}
                        imagePreview={imagePreview}
                        uploadProgress={uploadProgress}
                        isLoading={isLoading}
                        variant="outline"
                    />


                </div>

                <div className="flex items-end gap-1">
                    <Typography variant="h1" component="div">
                        857
                    </Typography>

                    <Typography variant="caption4" component="div" theme="gray-600" className="mb-3">
                        Abonnés
                    </Typography>
                </div>


            </div>


            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-6 space-y-4">
                    <Input
                        label="Nom d'utilisateur"
                        isLoading={isLoading}
                        placeholder="Fred"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner un pseudo"
                        id="displayName" />

                    <Input
                        label="Expertise"
                        isLoading={isLoading}
                        placeholder="Dev Freelance"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner un pseudo"
                        id="displayName" />



                </div>

                <div className="col-span-6 space-y-4">
                    <Input
                        label="Linkedin"
                        isLoading={isLoading}
                        placeholder="linkedin.com/...."
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner ton profil linkedin"
                        id="displayName"
                        required={false} />

                    <Input
                        label="Github"
                        isLoading={isLoading}
                        placeholder="github.com/....."
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner ton profil Github"
                        id="displayName"
                        required={false} />


                </div>

            </div>

            <Textarea
                label="Biographie"
                rows={16}
                isLoading={isLoading}
                placeholder="Indique ta Bio...."
                register={register}
                errors={errors}
                errorMsg="Tu dois rensigner ta bio......"
                id="biograpy"
                required={false} />

            <div className="flex justify-end">
                <Button isLoading={isLoading} type="submit">
                    Enregistrer
                </Button>
            </div>

        </form>
    )

};