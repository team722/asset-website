import React from 'react'

export const TrustSection = ({ data }: { data: any }) => {
  const reasons = data?.trustReasons || [
    { text: 'Transparent work. Proven results.' },
    { text: '12+ years serving tribal communities.' },
    { text: 'Programs built with community participation.' },
    { text: 'Experienced and dedicated field team.' }
  ];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-text-dark">Why Trust Us?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason: any, i: number) => (
            <div key={i} className="bg-brand-primary p-6 rounded-lg shadow-md flex items-center justify-center text-center min-h-[120px] transition-transform hover:-translate-y-1">
              <p className="text-white font-bold text-base">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
