import React from 'react'

export const ResourcesHero = ({ data }: { data: any }) => {
  const bgUrl = data?.heroBackgroundImage?.url || 'https://images.unsplash.com/photo-1542810634-71277d95dc8a?q=80&w=2000&auto=format&fit=crop'
  
  return (
    <section className="px-4 pt-16 sm:pt-24 bg-brand-bg-alt">
      <div 
        className="relative w-full h-[350px] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-lg"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/80 to-brand-secondary/40 mix-blend-multiply"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
            {data?.title || 'Resources'}
          </h1>
          <p className="text-base md:text-lg text-white/95 font-medium max-w-2xl mx-auto drop-shadow">
            {data?.subtitle || 'Every Tribe Deserves Justice and Equality.'}
          </p>
        </div>
      </div>
    </section>
  )
}
