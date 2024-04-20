import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxBlankCircleLine, RiCheckboxCircleLine, RiEye2Fill, RiGithubFill, RiLiveFill } from "react-icons/ri";


export const HighlightListView = () => {
    return (

        <div id="PORTFOLIO">
        <Container className="py-24 space-y-10" >
            <Typography variant="h5" component="h2" theme="primary">
                PORTFOLIO
            </Typography>

            <Typography variant="h5" component="h2" theme="black">
                Each projects is a unique piece of developpement ✨
            </Typography>


            <div className="flex justify-center gap-24 space-y-7  py-10">

                <div className="w-[670px] h-[400px] relative mt-10 bg-gray-400 mr-8 ">
                    <Image fill src="assets/images/coders1.png" alt="illustration gateau" />
                </div>

                <div className="max-w-md space-y-8">

                    <Typography variant="h5" component="h2"  >
                        Coders Monkeys 🐵
                    </Typography>

                    <div className="space-y-5">
                        <Typography variant="caption1" component="h2"  >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sapiente qui excepturi minima accusamus error commodi soluta asperiores obcaecati neque?
                            Illum dignissimos, nihil atque nulla rem corrupti deleniti sed neque magni?
                        </Typography>
                    </div>

                    <div className=" flex space-x-10 relative ml-20 py-5" >
                        <Typography variant="h5" component="h2" theme="primary" className="border border-bg-gray "  >
                            Next Js
                        </Typography>

                        <Typography variant="h5" component="h2" theme="secondary" className="border border-bg-gray h-[40px]  "  >
                            Firebase
                        </Typography>
                    </div>

                    <div className="flex space-x-10 reative py-10 ml-20  ">
                        <div className="flex relative space-x-1 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Live Demo
                            </Typography>
                            <RiEye2Fill size={30} />
                        </div>

                        <div className="flex relative space-x-2 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Code
                            </Typography>
                            <RiGithubFill size={30} />
                        </div>



                    </div>

                </div>
            </div>

            <div className="flex justify-center gap-24 space-y-7 py-10">

                <div className="max-w-md space-y-8">

                    <Typography variant="h5" component="h2" >
                        Nolido 💱
                    </Typography>

                    <div className="space-y-5">
                        <Typography variant="caption1" component="h2"  >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sapiente qui excepturi minima accusamus error commodi soluta asperiores obcaecati neque?
                            Illum dignissimos, nihil atque nulla rem corrupti deleniti sed neque magni?
                        </Typography>
                    </div>

                    <div className=" flex space-x-10 relative ml-20 py-5" >
                        <Typography variant="h5" component="h2" theme="primary" className="border border-bg-gray "  >
                            Next Js
                        </Typography>

                        <Typography variant="h5" component="h2" theme="secondary" className="border border-bg-gray h-[40px]  "  >
                            Firebase
                        </Typography>
                    </div>

                    <div className="flex space-x-10 reative py-10 ml-20  ">
                        <div className="flex relative space-x-1 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Live Demo
                            </Typography>
                            <RiEye2Fill size={30} />
                        </div>

                        <div className="flex relative space-x-2 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Code
                            </Typography>
                            <RiGithubFill size={30} />
                        </div>



                    </div>

                </div>

                <div className="w-[670px] h-[400px] relative mt-10 bg-gray-400 mr-8 space-y-7">
                    <Image fill src="assets/images/NOLIDO2.png" alt="illustration gateau" />
                </div>
            </div>

            <div className="flex justify-center gap-24 space-y-7 py-10">

                <div className="w-[670px] h-[400px] relative mt-10 bg-gray-400 mr-8 ">
                    <Image fill src="assets/images/belalliance1.png" alt="illustration gateau" />
                </div>

                <div className="max-w-md space-y-8">

                    <Typography variant="h5" component="h2"  >
                        Bel Alliance 🏛️
                    </Typography>

                    <div className="space-y-5">
                        <Typography variant="caption1" component="h2"  >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sapiente qui excepturi minima accusamus error commodi soluta asperiores obcaecati neque?
                            Illum dignissimos, nihil atque nulla rem corrupti deleniti sed neque magni?
                        </Typography>
                    </div>

                    <div className=" flex space-x-10 relative ml-20 py-5" >
                        <Typography variant="h5" component="h2" theme="primary" className="border border-bg-gray "  >
                            Next Js
                        </Typography>

                        <Typography variant="h5" component="h2" theme="secondary" className="border border-bg-gray h-[40px]  "  >
                            Firebase
                        </Typography>
                    </div>

                    <div className="flex space-x-10 reative py-10 ml-20  ">
                        <div className="flex relative space-x-1 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Live Demo
                            </Typography>
                            <RiEye2Fill size={30} />
                        </div>

                        <div className="flex relative space-x-2 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Code
                            </Typography>
                            <RiGithubFill size={30} />
                        </div>



                    </div>

                </div>
            </div>


            <div className="flex justify-center gap-24 space-y-7 py-10">

                <div className="max-w-md space-y-8 py-5">

                    <Typography variant="h5" component="h2" >
                       Black Market 🛒
                    </Typography>

                    <div className="space-y-5">
                        <Typography variant="caption1" component="h2"  >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sapiente qui excepturi minima accusamus error commodi soluta asperiores obcaecati neque?
                            Illum dignissimos, nihil atque nulla rem corrupti deleniti sed neque magni?
                        </Typography>
                    </div>

                    <div className=" flex space-x-10 relative ml-20 py-5" >
                        <Typography variant="h5" component="h2" theme="primary" className="border border-bg-gray "  >
                            Vue Js
                        </Typography>

                        <Typography variant="h5" component="h2" theme="secondary" className="border border-bg-gray h-[40px]  "  >
                            Firebase
                        </Typography>
                    </div>

                    <div className="flex space-x-10 reative py-10 ml-20  ">
                        <div className="flex relative space-x-1 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Live Demo
                            </Typography>
                            <RiEye2Fill size={30} />
                        </div>

                        <div className="flex relative space-x-2 ">
                            <Typography
                                variant="caption1" theme="gray-600" weight="meduim" className="mb-4" >
                                Code
                            </Typography>
                            <RiGithubFill size={30} />
                        </div>



                    </div>

                </div>

                <div className="w-[670px] h-[400px] relative mt-10 bg-gray-400 mr-8 space-y-7">
                    <Image fill src="assets/images/BLACK MARKET.png" alt="illustration gateau" />
                </div>
            </div>

        </Container>
        </div>
    )
};



interface Props {
    children: React.ReactNode;
}


const ListPoint = ({ children }: Props) => {
    return (
        <div className="flex items-start gap-2">
            <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
            <Typography variant="body-lg" component="span">
                {children}
            </Typography>
        </div>
    )
}