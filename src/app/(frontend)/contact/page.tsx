import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const dynamic = 'force-dynamic'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const metadata = {
  title: 'Contact Us | ASSET',
  description: 'Get in touch with Adigal Social Service Educational Trust (ASSET).',
}

export default async function ContactRoute() {
  const payload = await getPayload({ config })
  
  let headerData = null;
  let footerData = null;
  let contactData = null;
  
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {}
  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {}
  try {
    contactData = await payload.findGlobal({ slug: 'contact-page' })
  } catch (e) {}

  // Merge footer contact info if contact page global doesn't have it explicitly defined yet
  const mergedContactData = contactData ? {
    ...contactData,
    websiteUrl: contactData.websiteUrl || 'www.asset.org.in',
    socialHandle: contactData.socialHandle || '@assettrust',
    phoneNumber: contactData.phoneNumber || footerData?.contactInfo?.phone || '+91-9443657781',
    emailAddress: contactData.emailAddress || footerData?.contactInfo?.email || 'assetpmk@gmail.com',
    physicalAddress: contactData.physicalAddress || '8/174, ASSET Trust,\nAlagar Illam, Nehru Nagar,\nParamakudi - 623707,\nRamanathapuram District, Tamil Nadu',
    officeHours: contactData.officeHours || 'Monday - Saturday: 9:00 AM - 6:00 PM',
  } : null;

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <ContactHero data={mergedContactData} />
        <ContactInfo data={mergedContactData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
