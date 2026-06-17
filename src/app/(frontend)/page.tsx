import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const dynamic = 'force-dynamic'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { JourneySection } from '@/components/home/JourneySection'
import { ImpactSection } from '@/components/home/ImpactSection'
import { ProgrammesSection } from '@/components/home/ProgrammesSection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { GoalsSection } from '@/components/home/GoalsSection'
import { FieldWorkSection } from '@/components/home/FieldWorkSection'
import { AwardsSection } from '@/components/home/AwardsSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'

export default async function Page() {
  const payload = await getPayload({ config })
  
  // Fetch Globals
  let homeData = null;
  let headerData = null;
  let footerData = null;
  
  try {
    homeData = await payload.findGlobal({ slug: 'home-page' })
  } catch (e) {
    console.log("HomePage global not fully seeded yet");
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
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-bg-alt">
        <HeroSection data={homeData} />
        <JourneySection data={homeData} />
        <ImpactSection data={homeData} />
        <ProgrammesSection data={homeData} />
        <PartnersSection data={homeData} />
        <GoalsSection data={homeData} />
        <FieldWorkSection data={homeData} />
        <AwardsSection data={homeData} />
        <TestimonialsSection data={homeData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
