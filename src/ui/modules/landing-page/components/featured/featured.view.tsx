import { Container } from "@/ui/components/container/container"
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

interface FeaturesListInterface {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string,
}



const featuresData: FeaturesListInterface[] = [
    {
        imagePath: "/assets/svg/disket.svg",
        imageAlt: "illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources pour les devs",
    },

    {
        imagePath: "/assets/svg/joystick.svg",
        imageAlt: "illustration",
        title: "Entrainement",
        description: "Entraine-toi à devenir meilleur et trouve de l'inspiration",
    },

    {
        imagePath: "/assets/svg/loudspeacker.svg",
        imageAlt: "illustration",
        title: "Visibilité",
        description: "Expose tes projets et crée toi des opportunités",
    },

    {
        imagePath: "/assets/svg/compass.svg",
        imageAlt: "illustration",
        title: "Relations",
        description: "Connecte-toi avec des devs web et booste ta carrrière",
    },


]

export const FeaturedView = () => {

    const featuredList = featuresData.map((feature) => (
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-5 p-10 overflow-hidden">
            <Image  fill
                src={feature.imagePath}
                alt={feature.imageAlt}
               className="object-scale-down blur-2xl"  />
              
                <Image  fill
                src={feature.imagePath}
                alt={feature.imageAlt}
               className="object-scale-down" />
            </div>


            <Typography variant="lead" component="h3" weight="meduim" className="text-center mb-2.5" >
                {feature.title}
            </Typography>

            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>

    ));



    return (
        <div className="bg-gray-300  " id="ABOUT ME">

            <Container className="grid grid-cols-12 gap-24 py-24  ">
                <div className="grid  col-span-7 gap-5 relative">
                
                <Image fill src="assets/images/teamwork.jpg" alt="illustration gateau" />
                </div>


                <div className="flex flex-col justify-between  col-span-5 gap-10 py-5">
                    <div>
                        <Typography variant="h5" component="h3" theme="primary" className="mb-5" >
                         ABOUT ME
                        </Typography>

                        <Typography variant="h5" component="p" theme="black" className="mb-8" >
                        A dedicated Full-Stack Developper based in Africa, Benin 🎈 
                        </Typography>

                        <Typography variant="body-base" component="div" theme="gray-600" className="mb-4" >
                         As a junior Full-Stack Developper, I possess on impressive arsenal of skills in
                         Javascript, Php, typescript  and Framework Next-js, React , Vue JS , Tailwind CSS, 
                         Laravel. I excel in designing and maintaining responsives websites that offer a smooth
                         user experience. My expertise les in crafting dynamic, engaging interfaces trougth 
                         writing and optimized code and utilizing cuming-edge developpement tools and techniques.
                         I am also a team player thelves collaborating with cross-functional teams to produce
                         outstanding web applications.

                        </Typography>
                    </div>

                    <div >
                   

                       
                    </div>
                </div>
            </Container>

        </div>
    )
}