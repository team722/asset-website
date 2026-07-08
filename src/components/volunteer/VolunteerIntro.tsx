import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { VolunteerForm } from './VolunteerForm'

export const VolunteerIntro = ({ data }: { data: any }) => {
  const imageUrl = typeof data?.introImage === 'object' && data?.introImage?.url 
    ? data.introImage.url 
    : 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop';
    
  const imageAlt = typeof data?.introImage === 'object' && data?.introImage?.alt 
    ? data.introImage.alt 
    : 'Smiling children';

  return (
    <section className="py-16 md:py-24 bg-brand-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text-dark">
            {data?.title || 'Volunteer With Asset'}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Image and Text */}
          <div className="flex flex-col space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
              {data?.introText ? (
                <RichText data={data.introText} />
              ) : (
                <p>
                  Adivasi Social Service Educational Trust (ASSET) is a registered Non-Governmental Organization working with dedication towards the upliftment and empowerment of tribal and underprivileged communities in Tamil Nadu. Since its establishment on 21 November 2012, ASSET has focused on improving the social, economic, educational, health, and cultural wellbeing of marginalized groups, especially women, children, youth, and older persons. Our work is rooted in the belief that every individual deserves equal opportunities, dignity, and access to basic rights. Through community participation, capacity building, and sustainable development programs, we strive to create long-lasting positive change in tribal communities.
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="h-full">
            <VolunteerForm />
          </div>

        </div>
      </div>
    </section>
  )
}
