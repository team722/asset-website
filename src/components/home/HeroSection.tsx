import React from 'react'
import Link from 'next/link'

export const HeroSection = ({ data }: { data: any }) => {
  const bgUrl = data?.heroBackgroundImage?.url || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop'
  
  return (
    <section 
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-12">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
          {data?.heroHeadline || 'YOUR EDUCATION, EMPOWERING YOUR COMMUNITY'}
        </h1>
        <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto font-medium shadow-sm">
          {data?.heroSubheadline || 'You can format positive, lasting change. Choose the non-profit working for your community.'}
        </p>
        <Link 
          href={data?.heroCtaLink || '#donate'} 
          className="inline-block bg-brand-primary hover:bg-brand-primary-hover text-white font-bold py-3 px-10 rounded-full transition-colors text-lg tracking-wider shadow-lg"
        >
          {data?.heroCtaText || 'DONATE'}
        </Link>
      </div>
    </section>
  )
}
