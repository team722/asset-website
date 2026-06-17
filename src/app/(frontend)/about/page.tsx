import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const dynamic = 'force-dynamic'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/components/about/AboutHero'
import { StorySection } from '@/components/about/StorySection'
import { ObjectivesSection } from '@/components/about/ObjectivesSection'
import { TrustSection } from '@/components/about/TrustSection'
import { LeadershipSection } from '@/components/about/LeadershipSection'

export default async function AboutRoute() {
  const payload = await getPayload({ config })
  
  // Fetch Globals
  let aboutData = null;
  let headerData = null;
  let footerData = null;
  
  try {
    aboutData = await payload.findGlobal({ slug: 'about-page' })
  } catch (e) {
    console.log("AboutPage global not fully seeded yet");
  }
  
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {
    console.log("Header global not fully seeded yet");
  }

  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {
    console.log("Footer global not fully seeded yet");
  }

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <AboutHero data={aboutData} />
        <StorySection data={aboutData} />
        <ObjectivesSection data={aboutData} />
        <TrustSection data={aboutData} />
        <LeadershipSection data={aboutData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
