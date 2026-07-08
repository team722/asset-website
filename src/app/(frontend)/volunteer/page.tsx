import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { VolunteerIntro } from '@/components/volunteer/VolunteerIntro'
import { VolunteerTestimonials } from '@/components/volunteer/VolunteerTestimonials'

export const metadata = {
  title: 'Volunteer With ASSET | Adivasi Social Service Educational Trust',
  description: 'Join ASSET as a volunteer to help empower tribal and underprivileged communities in Tamil Nadu.',
}

export default async function VolunteerRoute() {
  const payload = await getPayload({ config })
  
  let headerData = null;
  let footerData = null;
  let volunteerData = null;
  
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {}
  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {}
  try {
    volunteerData = await payload.findGlobal({ slug: 'volunteer-page' })
  } catch (e) {}

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <VolunteerIntro data={volunteerData} />
        <VolunteerTestimonials data={volunteerData} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
