import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const StorySection = ({ data }: { data: any }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-brand-text-dark">Our Story</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
             {data?.storyImage?.url ? (
               <img src={data.storyImage.url} alt="Our Story" className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full bg-gray-200"></div>
             )}
          </div>
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed">
             {data?.storyText ? (
                <RichText data={data.storyText} />
             ) : (
                <>
                  <p>Adigal Social Service Educational Trust (ASSET) is a registered Non-Governmental Organization working with dedication towards the upliftment and empowerment of tribal and underprivileged communities in Tamil Nadu. Since its establishment on 21 November 2012, ASSET has focused on improving the socio-economic, educational, health, and cultural wellbeing of marginalized groups, especially women, children, youth, and elderly persons.</p>
                  <p className="mt-4">Our work is rooted in the belief that every individual deserves equal opportunities, dignity, and access to basic rights. Through community participation, capacity building, and sustainable development programs, we strive to create long-lasting positive change in local communities.</p>
                </>
             )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-[#E6F0F9] border-2 border-brand-accent/20 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-text-dark mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">{data?.visionText || 'To build an ideal community that is socially, economically, educationally, culturally, and health-wise empowered, and self-reliant.'}</p>
           </div>
           <div className="bg-brand-bg-hover border-2 border-brand-primary/20 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-brand-text-dark mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">{data?.missionText || 'To create and support tribal communities comprising women, children, youth, and the elderly by promoting socio-economic, grassroots-level right-based processes, and active community participation for sustainable development.'}</p>
           </div>
        </div>
      </div>
    </section>
  )
}
