import React from 'react'

export const ContactHero = ({ data }: { data: any }) => {
  const bgUrl = data?.heroBackgroundImage?.url || 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop'
  
  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgUrl})` }}
      />
      
      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/95 via-brand-secondary/70 to-brand-primary/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl tracking-tight">
          {data?.title || 'Contact Us'}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {data?.subtitle || 'Get in touch with us for any inquiries.'}
        </p>
      </div>

      {/* Decorative Bottom Wave/Curve */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.3,191.7,101.4,236.93,88.1,280.9,71.21,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  )
}
