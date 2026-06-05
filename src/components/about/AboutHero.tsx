import React from 'react'

export const AboutHero = ({ data }: { data: any }) => {
  const bgUrl = data?.heroBackgroundImage?.url || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop'
  
  return (
    <section className="px-4 py-6">
      <div 
        className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-lg"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-brand-secondary/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            {data?.title || 'About Us'}
          </h1>
          <p className="text-lg md:text-xl text-white/95 font-medium max-w-2xl mx-auto drop-shadow">
            {data?.subtitle || 'Empowering Tribal Communities With Opportunity and Dignity'}
          </p>
        </div>
      </div>
    </section>
  )
}
