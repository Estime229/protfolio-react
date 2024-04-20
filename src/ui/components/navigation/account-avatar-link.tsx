import { useAuth } from "@/context/AuthUserContext"
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () => {
    const {authUser}=useAuth();

    const { photoURL,displayName} = authUser;
    return (
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src={photoURL} alt={displayName ? `avatar de ${displayName}` : "avatar de l-utilsateur"} size="large"    />
            <div className="max-w-[160]">
            <Typography variant="caption2" weight="meduim" className="truncate">
                {displayName ? displayName: "Bienvenue" }
            </Typography>
            <Typography variant="caption4" weight="meduim" theme="gray">
                 Mon compte
            </Typography>
            </div>
        </Link>
    )
}