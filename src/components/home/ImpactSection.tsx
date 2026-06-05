import React from 'react'

export const ImpactSection = ({ data }: { data: any }) => {
  const stats = data?.impactStats || [
    { number: '10+', label: 'Government schemes unleashed' },
    { number: '2000+', label: 'Youths trained & benefited' },
    { number: '15000+', label: 'Women artisans benefiting from SHG scheme grants' },
    { number: '3+', label: 'Awards across panchayats in different villages' },
    { number: '10+', label: 'Unorganized sector workers' },
    { number: '15000+', label: 'Tribal Rights Beneficiaries' },
  ];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.impactHeadline || 'Impact'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.impactSubtitle || 'Changing lives every day'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
             {data?.impactMainImage?.url ? (
               <img src={data.impactMainImage.url} alt="Impact" className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full bg-gray-300"></div>
             )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat: any, i: number) => (
              <div key={i} className="bg-gradient-to-br from-green-100 to-brand-gradient-end p-6 rounded-xl flex flex-col justify-center border border-green-200 shadow-sm transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-sm font-medium text-gray-800 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
