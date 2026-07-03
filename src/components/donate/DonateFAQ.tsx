import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export const DonateFAQ = ({ data }: { data: any }) => {
  const faqs = data?.faqs || [
    { question: 'What does ASSET do for tribal communities?' },
    { question: 'How can I contribute or support your work?' },
    { question: 'Where does ASSET operate?' },
    { question: 'How are donations used?' },
  ];

  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-text-dark mb-16">
          {data?.faqTitle || 'Frequently Asked Questions'}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => (
            <details 
              key={index} 
              className="group bg-brand-bg-hover rounded-xl overflow-hidden cursor-pointer [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 text-lg font-medium text-brand-text-dark select-none">
                <span>{faq.question}</span>
                <span className="flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-brand-primary/10 pt-4">
                {faq.answer ? (
                   <div className="prose prose-sm max-w-none text-gray-700">
                     <RichText data={faq.answer} />
                   </div>
                ) : (
                   <p>This is a placeholder answer. Please update the CMS to provide detailed information for this question.</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
