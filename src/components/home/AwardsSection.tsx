import React from 'react'

export const AwardsSection = ({ data }: { data: any }) => {
  const awards = data?.awardsItems || [1,2,3,4,5];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.awardsHeadline || 'Awards'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.awardsSubtitle || 'Recognizing Excellence and Service'}
          </p>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x items-center lg:justify-center lg:justify-start">
          {awards.map((award: any, i: number) => (
            <div key={i} className="flex-none w-64 aspect-[3/4] rounded-lg shadow-md border border-gray-200 overflow-hidden snap-center transition-transform hover:-translate-y-2">
              {award?.image?.url ? (
                <img src={award.image.url} alt="Award" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-white border-[12px] border-brand-award-border p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-brand-gold text-4xl mb-4">🏆</div>
                  <div className="text-sm font-bold text-brand-award-border">CERTIFICATE<br/>OF APPRECIATION</div>
                  <div className="mt-4 border-t border-gray-300 w-full pt-2 text-[10px] text-gray-500">2026</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
