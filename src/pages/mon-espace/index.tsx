import { REGISTERED } from '@/lib/session-status';

import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'

import { ProfileContainer } from '@/ui/modules/user-profile/profile/profile.container';




export default function Home() {
  return (

    <>
      <Seo title="Mon espace" description="Descrption.." />

      <Layout withSidebar sessionStatus={REGISTERED}>
      <ProfileContainer />
      </Layout>
    </>

  );
}
