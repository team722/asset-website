import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProgrammesHero } from '@/components/programmes/ProgrammesHero'
import { ProgrammesList } from '@/components/programmes/ProgrammesList'
import { DonateCTA } from '@/components/programmes/DonateCTA'

export default async function ProgrammesRoute() {

  console.log("Fetching Programmes Page data...",{config});
  
  const payload = await getPayload({ config })
  
  // Fetch Globals
  let pageData = null;
  let headerData = null;
  let footerData = null;
  
  try {
    pageData = await payload.findGlobal({ slug: 'programmes-page' })
  } catch (e) {
    console.log("ProgrammesPage global not fully seeded yet");
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
        <ProgrammesHero data={pageData} />
        <ProgrammesList data={pageData} />
        <DonateCTA data={pageData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
