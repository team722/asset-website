import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const ProgrammesList = ({ data }: { data: any }) => {
  const programmes = data?.programmes || [
    {
      title: 'Tribal Rights',
      layoutDirection: 'left',
      image: null,
      description: null
    },
    {
      title: 'What We Do',
      layoutDirection: 'right',
      image: null,
      description: null
    },
    {
      title: 'Impact 2024-25',
      layoutDirection: 'left',
      image: null,
      description: null
    }
  ];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        {programmes.map((prog: any, i: number) => {
          const isImageRight = prog.layoutDirection === 'right';
          
          return (
            <div key={i} className={`flex flex-col ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start`}>
              {/* Image Side */}
              <div className="flex-1 w-full max-w-2xl lg:max-w-none">
                 <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] w-full group">
                    {prog?.image?.url ? (
                      <img src={prog.image.url} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-medium">Programme Image</div>
                    )}
                 </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 w-full">
                 <h2 className="text-4xl font-bold text-brand-text-dark mb-6">{prog.title}</h2>
                 <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed">
                   {prog.description ? (
                     <RichText data={prog.description} />
                   ) : (
                     <>
                       {i === 0 && <p>We advocate for tribal rights, land security, social justice, and dignity, ensuring awareness and protection under constitutional and legal frameworks.</p>}
                       {i === 1 && <p>We work closely with rural and tribal communities to improve livelihoods, protect rights, and promote sustainable development through education, health, culture, and access to government support.</p>}
                       {i === 2 && (
                         <ul className="list-disc pl-5 space-y-2">
                           <li>Supported 320+ tribal children with education and evening classes.</li>
                           <li>Empowered 210 women through SHGs and livelihood training.</li>
                           <li>Reached 450+ people through health camps and screenings.</li>
                           <li>Guided 115 families to access government welfare schemes.</li>
                           <li>Strengthened 12 village committees for community development.</li>
                         </ul>
                       )}
                     </>
                   )}
                 </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
