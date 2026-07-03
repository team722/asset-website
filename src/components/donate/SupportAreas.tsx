import React from 'react'

export const SupportAreas = ({ data }: { data: any }) => {
  const supportAreas = data?.supportAreasList || [
    { title: 'Education' },
    { title: 'Tribal Development' },
    { title: 'Tribal Rights' },
    { title: 'Child and women development' },
  ];

  return (
    <section className="bg-brand-bg-alt">
      <div className="py-16 bg-brand-bg-alt text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark">
          {data?.supportTitle || 'What Will Your Donation Support'}
        </h2>
      </div>

      <div className="bg-brand-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {supportAreas.map((area: any, index: number) => (
              <div key={index} className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  {area?.icon?.url ? (
                    <img 
                      src={area.icon.url} 
                      alt={area.title} 
                      className="w-full h-full object-contain filter invert brightness-0" 
                    />
                  ) : (
                    <div className="w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                  )}
                </div>
                <h3 className="text-white font-medium text-lg sm:text-xl tracking-wide max-w-[200px]">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
