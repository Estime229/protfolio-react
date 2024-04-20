import { GUEST, REGISTERED } from '@/lib/session-status';
import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'
import { Sesssion } from '@/ui/components/session/session';
import { OnboardingContainer } from '@/ui/modules/onboarding/onboarding.container';




export default function Onboarding() {
    return (

        <>
            <Seo title="Connexion sur coders monkeys" description="Description de la page onboarding" />

            <Sesssion sessionStatus={REGISTERED}>
            <OnboardingContainer/>
            </Sesssion>
        </>

    );
}
