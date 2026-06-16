import React from 'react'
import Link from 'next/link'

export const DonateCTA = ({ data }: { data: any }) => {
  return (
    <section className="py-16 bg-brand-bg-alt flex justify-center pb-24">
      <Link 
        href={data?.ctaLink || '#donate'} 
        className="inline-block bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-4 px-24 rounded-full transition-transform hover:-translate-y-1 text-xl shadow-lg hover:shadow-xl"
      >
        {data?.ctaText || 'Donate'}
      </Link>
    </section>
  )
}
