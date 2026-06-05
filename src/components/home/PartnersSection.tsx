import React from 'react'

export const PartnersSection = ({ data }: { data: any }) => {
  const logos = data?.partnersLogos || [1,2,3,4];
  
  return (
    <section className="py-12 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.partnersHeadline || 'Our Partners'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.partnersSubtitle || 'Collaborating for Collective Impact'}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {logos.map((logo: any, i: number) => (
            <div key={i} className="w-56 h-56 flex items-center justify-center rounded p-4 transition-shadow">
              {logo?.logo?.url ? (
                 <img src={logo.logo.url} alt="Partner Logo" className="w-full h-full object-contain transition-all" />
              ) : (
                 <div className="text-gray-400 font-bold">LOGO</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
