import React from 'react'

export const VolunteerTestimonials = ({ data }: { data: any }) => {
  const testimonials = data?.testimonials || [
    {
      name: 'sara',
      quote: 'My son now gets regular health check-ups and attends school daily. The NGO\'s team visits often and ensures every child is cared for.',
      image: { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' }
    },
    {
      name: 'Ali',
      quote: 'Because of their training programs, I learned new skills and started earning for my family. They treat us with respect and always support us.',
      image: { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' }
    },
    {
      name: 'Gukesh',
      quote: 'The skill training helped me get a stable job. They guided me at every step and encouraged me to believe in myself.',
      image: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' }
    }
  ];

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-dark">
            Volunteer Speak
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item: any, index: number) => {
            const imageUrl = typeof item.image === 'object' && item.image?.url 
              ? item.image.url 
              : 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop';
              
            return (
              <div 
                key={index} 
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img 
                  src={imageUrl} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/95 via-brand-secondary/40 to-transparent"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-center flex flex-col justify-end h-full">
                  <h3 className="text-white text-2xl font-bold mb-4">{item.name}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed max-w-[280px] mx-auto">
                    {item.quote}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
