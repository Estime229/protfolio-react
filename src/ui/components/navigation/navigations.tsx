import { Logo } from "@/ui/design-system/logo/logo"
import { Container } from "../container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import { Button } from "@/ui/design-system/button/button"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import { useAuth } from "@/context/AuthUserContext"
import { DiVim } from "react-icons/di"
import { AccountAvatarNavigationLink } from "./account-avatar-link"

interface Props {

}

export const Navigation = ({ }) => {
    const { authUser } = useAuth();
    console.log("authUser", authUser);
    



    return (

        <div className="">
            <Container className="flex items-center justify-between gap-7 py-7">
                <Link href="/">
                    <div className="flex items-center gap-2.5">
                     
                        <div className="flex flex-col">
                            <div className="text-gray font-extrabold text-[20px]">Fred.dev</div>
                         
                        </div>

                    </div>
                </Link>
                <div className="flex items-center gap-10">
                    <Typography variant="caption3" component="div" theme="gray-600" className="flex items-center gap-7">
                        <ActiveLink href="/">Home </ActiveLink>
                        <Link href="#ABOUT ME">About </Link>
                        <Link href="#PORTFOLIO">Projects </Link>
                        <Link href="#CONTACT">Contacts </Link>
                    </Typography>
                 

             




                </div>
            </Container>
        </div>
    )
}
