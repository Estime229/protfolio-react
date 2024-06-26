import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboarding-tabs";


export const WelcomeStep = ({ next, isFirstStep, isFinalStep, prev, stepList,getCurrentStep }: BaseComponentProps) => {
   return <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
         < Container className="grid h-full grid-cols-12">
            <div className="relative z-10 flex items-center h-full col-span-6 py-10">
               <div className="w-full space-y-5 pb-4.5">
               <OnboardingTabs
               tabs={stepList}
               getCurrentStep={getCurrentStep}
               />
                  <Typography variant="h1" component="h1">
                      Bienvenu sur l'appli des singes codeurs
                  </Typography>
                  <Typography variant="body-base" component="p" theme="gray">
                     Viens trainer avec des développeurs aussi fous
                     que toi , montre tes projets persos et recois des feedbacks
                     constructifs ( ou fais toi  carrément descendres).
                     Pret à créer destrucs incroyables?
                  </Typography>

               </div>
            </div>
            <div className="flex items-center h-full col-span-6">
               <div className="w-full ">
                  <Image
                     src="/assets/svg/rocket.svg"
                     alt="roquect"
                     width={811}
                     height={596}

                  />

               </div>
            </div>

         </Container>
      </div>
      <OnboardingFooter
         // prev={prev}
         next={next}
         isFirstStep={isFirstStep}
         isFinalStep={isFinalStep}
      />


   </div>
};