import React from 'react'

export const TestimonialsSection = ({ data }: { data: any }) => {
  const testimonials = data?.testimonialsItems || [1,2,3];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.testimonialsHeadline || 'Testimonials'}</h2>
          <p className="text-brand-accent font-medium text-base uppercase">
            {data?.testimonialsSubtitle || 'VOICES THAT INSPIRE US'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test: any, i: number) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-lg group cursor-pointer">
              {test?.image?.url ? (
                <img src={test.image.url} alt="Donor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-gray-400"></div>
              )}
              <div className="absolute inset-0 [background-image:var(--gradient-image-overlay)] p-8 flex flex-col justify-end text-center transition-colors">
                 <p className="text-white/95 text-sm italic mb-6 leading-relaxed">"{test?.quote || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'}"</p>
                 <h4 className="text-white font-bold text-lg">- {test?.author || 'Donor Name'}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
