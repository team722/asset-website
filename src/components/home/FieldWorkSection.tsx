import React from 'react'

export const FieldWorkSection = ({ data }: { data: any }) => {
  const images = data?.fieldWorkImages || [1,2,3,4,5];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{data?.fieldWorkHeadline || 'Field Work Policy'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.fieldWorkSubtitle || 'Commitment to Ethical actions'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {images.slice(0, 2).map((img: any, i: number) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3] group shadow-md cursor-pointer">
              {img?.image?.url ? (
                <img src={img.image.url} alt={img.caption || "Field work"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-gray-300"></div>
              )}
              <div className="absolute inset-0 [background-image:var(--gradient-image-overlay)] flex items-end">
                <h3 className="text-white font-bold text-xl p-6 w-full text-center">{img?.caption || (i === 0 ? 'Area visit' : 'Village people meeting')}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.slice(2, 5).map((img: any, i: number) => (
            <div key={i} className="relative rounded-xl overflow-hidden aspect-[16/9] group shadow-md cursor-pointer">
              {img?.image?.url ? (
                <img src={img.image.url} alt={img.caption || "Field work"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-gray-300"></div>
              )}
              <div className="absolute inset-0 [background-image:var(--gradient-image-overlay)] flex items-end">
                <h3 className="text-white font-bold text-md p-4 w-full text-center leading-snug">{img?.caption || 'Field Work'}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
