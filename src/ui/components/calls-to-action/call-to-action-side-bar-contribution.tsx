import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CallsToActionSideBarContribution = () => {
    return (
        <div className="relative flex flex-col justify-center gap-5 px-8  py-12 overflow-hidden rounded pb-44 bg-primary">
            <Typography variant="lead" theme="white" weight="meduim" className="text-center  ">
                Récompense mes efforts
            </Typography>

            <div className="flex justify-center">
                <Button variant="success" baseUrl="https/google.com" linkType="external">
                    Faire un don libre
                </Button>
            </div>

            <Image width={183} height={183} alt="" src="/assets/img/piga.png" className="absolute -bottom-7 transform -translate-x-1/2 left"/>
       
      
       
        </div>
          
          


    )
    
}