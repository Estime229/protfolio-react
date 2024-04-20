
import { Layout } from '@/ui/components/layout/layout';

import { Seo } from '@/ui/components/seo/seo'

import { LandingPageContainer } from '@/ui/modules/landing-page/landing-page.container';




export default function Home() {
  return (

    <>
      <Seo title="Codeur Monkeys" description="Descrption.." />

      <Layout isDisplayBreadcrumbs={false}>
        <LandingPageContainer />
      </Layout>
    </>

  );
}
