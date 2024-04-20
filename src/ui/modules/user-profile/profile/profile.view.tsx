import { Typography } from "@/ui/design-system/typography/typography"
import { ProfileForm } from "./profile.form"
import { FormType } from "@/types/forms";
interface Props {
    imagePreview: string | ArrayBuffer | null,
    uploadProgress: number,
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) =>void;
    form: FormType
}
export const ProfileView = ({form, 
    imagePreview,uploadProgress,handleImageSelect


}: Props) => {
    return (
        <div>
            <Typography variant="h1" component="h1">
                Mon compte

            </Typography>
            <ProfileForm
             imagePreview={imagePreview}
             uploadProgress={uploadProgress}
             handleImageSelect={handleImageSelect} 
            
            
            form={form} />
        </div>
    );
};