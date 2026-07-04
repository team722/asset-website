import React from 'react'
import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const PolicyContent = ({ data }: { data: any }) => {
  const sections = data?.sections || [
    {
      heading: 'Purpose of the Area Visit',
      content: null // Fallback handles this
    },
    {
      heading: 'Activities During Visit',
      content: null
    },
    {
      heading: 'Documentation',
      content: null
    },
    {
      heading: 'Outcome',
      content: null
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg-alt min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Intro */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-dark mb-8 leading-tight">
            {data?.title || 'Area Visit – Field Observation & Community Assessment'}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {data?.introText || 'Our field team conducts regular Area Visits to understand the living conditions, challenges, and development needs of tribal communities. Each visit is planned to gather accurate insights that help us design effective programs.'}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-16">
          {sections.map((section: any, index: number) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text-dark">
                {section.heading}
              </h2>
              <div className="prose prose-lg prose-gray max-w-none text-gray-700">
                {section.content ? (
                  <RichText data={section.content} />
                ) : (
                  <ul className="list-disc pl-5 space-y-2">
                    <li>This is a placeholder bullet point.</li>
                    <li>Update this content in the Payload CMS dashboard.</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Donate Button */}
        <div className="mt-20 text-center pb-8">
          <Link 
            href="/donate"
            className="inline-block bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-xl px-16 py-4 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            Donate
          </Link>
        </div>

      </div>
    </section>
  )
}
