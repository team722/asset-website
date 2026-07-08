import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PolicyContent } from '@/components/policy/PolicyContent'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Policy & Procedures | ASSET',
  description: 'Learn about ASSET Trust field observations, area visits, and community assessment policies.',
}

export default async function PolicyRoute() {
  const payload = await getPayload({ config })
  
  let headerData = null;
  let footerData = null;
  let policyData = null;
  
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {}
  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {}
  try {
    policyData = await payload.findGlobal({ slug: 'policy-page' })
  } catch (e) {}

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <PolicyContent data={policyData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
