import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DonateIntro } from '@/components/donate/DonateIntro'
import { SupportAreas } from '@/components/donate/SupportAreas'
import { DonateFAQ } from '@/components/donate/DonateFAQ'

export const metadata = {
  title: 'Donate | ASSET',
  description: 'Support ASSET Trust and make a contribution that changes lives.',
}

export default async function DonateRoute() {
  const payload = await getPayload({ config })
  
  let headerData = null;
  let footerData = null;
  let donateData = null;
  
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {}
  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {}
  try {
    donateData = await payload.findGlobal({ slug: 'donate-page' })
  } catch (e) {}

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <DonateIntro data={donateData} />
        <SupportAreas data={donateData} />
        <DonateFAQ data={donateData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
