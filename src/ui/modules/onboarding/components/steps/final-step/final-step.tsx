
import { useAuth } from "@/context/AuthUserContext";
import { useToogle } from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Logo } from "@/ui/design-system/logo/logo";
import { useCallback, useEffect, useRef } from "react";
import { firestoreUpdateDocment } from "@/api/firestore";
import { toast } from "react-toastify";
import ReactCanvasConfetti from "react-canvas-confetti";

export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
    const { authUser, reloadAuthUserData } = useAuth();
    const { value: isLoading, toggle } = useToogle();
    // setting confetti animation
    const refAnimationInstance = useRef<((opts: any) => void) | null>(null)
    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;

    }, []);
    const makeShot = useCallback((particleRatio: number, opts: any) => {
        if (refAnimationInstance.current !== null) {
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio)
            })
        }
    }, [])


    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            starVelocity: 55,
        });
        makeShot(0.2, {
            spread: 60,

        })
        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,

        });
        makeShot(0.1, {
            spread: 120,
            starVelocity: 258,
            decay: 0.92,
            scalar: 1.2,

        });
    }, [makeShot]);

    useEffect(() => {
        setTimeout(() => {
            fire();
        }, 55)
    }, [])

    const handleCloseOnboarding = async () => {
        toggle();
       
        const { error } = await firestoreUpdateDocment("users", authUser.uid, {
            onboardingIsCompleted:true
        } );
       
    };

    return (
        <>


            <ReactCanvasConfetti refConfetti={getInstance}
                style={
                    {
                        zIndex: 9999,
                        position: "fixed",
                        width: "100",
                        height: "100%",
                        top: -80,
                        left: -0,
                    }
                }
            />

            <div className="relative h-screen pb-[91px]">
                <div className="h-full overflow-auto">
                    <Container className="h-full ">
                        <div className="relative z-10 flex items-center h-full py-10">
                            <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">

                                <div className="flex justify-center">

                                    <Logo size="large" />
                                </div>

                                <Typography variant="h1" component="h1" className="text-center">
                                    Félicitation!
                                </Typography>

                                <Typography variant="body-base" component="p" theme="gray" className="text-center">
                                    Tu fais maintenant partie de la tribu des
                                    singes codeurs ! Nous sommes ravis de
                                    t'accueillir parmi nous.Tu vas pouvoir te
                                    lancer dans l'aventure, partager tes projets
                                    les plus fous et rencontrer  des développeurs
                                    aussi pationnées que toi .Alors prépare-toi,
                                    car notre communauté est prete à te secouer
                                    et à te faire grimper au sommet
                                    de l'arbre du developpement web !
                                </Typography>

                            </div>
                        </div>




                    </Container>             </div>
                <OnboardingFooter
                    isFinalStep={isFinalStep}
                    next={handleCloseOnboarding}
                    isLoading={isLoading}
                />
            </div>

        </>
    )
}