import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const LeadershipSection = ({ data }: { data: any }) => {
  const members = data?.teamMembers || [
    {
      name: 'Mr. A. Balaji',
      title: 'is the Founder Trustee of ASSET Trust...',
      layoutDirection: 'left',
      bio: null // Will fallback in UI
    },
    {
      name: 'Ms. Sornalatha',
      title: 'is the Director of ASSET Trust...',
      layoutDirection: 'right',
      bio: null // Will fallback in UI
    }
  ];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        {members.map((member: any, i: number) => {
          const isImageRight = member.layoutDirection === 'right';
          
          return (
            <div key={i} className={`flex flex-col ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Text Side */}
              <div className="flex-1">
                 <h2 className="text-3xl font-bold text-brand-text-dark mb-4">{member.name}</h2>
                 <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed">
                   {member.bio ? (
                     <RichText data={member.bio} />
                   ) : (
                     <>
                       <p>{member.title}</p>
                       <p>As a founder of ASSET Trust, his roles and responsibilities include community mobilization, programme organization, team coordination, and active interaction with government officials, including IAS officers and senior administrators, to facilitate effective implementation of development programmes...</p>
                       <p>In recognition of his outstanding work, he has received the Tamil Nadu Forest Department in 2012 for planting over 50,000 tree saplings...</p>
                     </>
                   )}
                 </div>
              </div>
              
              {/* Image Side */}
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                 <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full">
                    {member?.image?.url ? (
                      <img src={member.image.url} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-medium">Portrait</div>
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
