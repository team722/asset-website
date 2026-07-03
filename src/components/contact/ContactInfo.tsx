import React from 'react'

export const ContactInfo = ({ data }: { data: any }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Brand Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 md:p-14">
          
          <div className="space-y-10">
            {/* Website URL */}
            {data?.websiteUrl && (
              <div className="flex flex-col sm:flex-row items-center gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-bg-hover flex items-center justify-center border-2 border-brand-primary/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="flex-1 pb-4 border-b-2 border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                  <a href={`https://${data.websiteUrl.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-brand-text-dark tracking-wide uppercase hover:text-brand-primary transition-colors">
                    {data.websiteUrl}
                  </a>
                </div>
              </div>
            )}

            {/* Social Handle */}
            {data?.socialHandle && (
              <div className="flex flex-col sm:flex-row items-center gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-bg-hover flex items-center justify-center border-2 border-brand-primary/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div className="flex-1 pb-4 border-b-2 border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                  <span className="text-xl md:text-2xl font-bold text-brand-text-dark tracking-wide uppercase">
                    {data.socialHandle}
                  </span>
                </div>
              </div>
            )}

            {/* Phone Number */}
            {data?.phoneNumber && (
              <div className="flex flex-col sm:flex-row items-center gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-bg-hover flex items-center justify-center border-2 border-brand-primary/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 pb-4 border-b-2 border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                  <a href={`tel:${data.phoneNumber}`} className="text-xl md:text-2xl font-bold text-brand-text-dark tracking-wide uppercase hover:text-brand-primary transition-colors">
                    {data.phoneNumber}
                  </a>
                </div>
              </div>
            )}

            {/* Email Address */}
            {data?.emailAddress && (
              <div className="flex flex-col sm:flex-row items-center gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-bg-hover flex items-center justify-center border-2 border-brand-primary/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 pb-4 border-b-2 border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                  <a href={`mailto:${data.emailAddress}`} className="text-xl md:text-2xl font-bold text-brand-text-dark tracking-wide uppercase hover:text-brand-primary transition-colors break-all">
                    {data.emailAddress}
                  </a>
                </div>
              </div>
            )}
            
            {/* Physical Address */}
            {data?.physicalAddress && (
              <div className="flex flex-col sm:flex-row items-center gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-bg-hover flex items-center justify-center border-2 border-brand-primary/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 shadow-sm">
                  <svg className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 pb-4 border-b-2 border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                  <span className="text-lg md:text-xl font-bold text-brand-text-dark tracking-wide uppercase whitespace-pre-wrap">
                    {data.physicalAddress}
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-3xl font-black text-brand-secondary uppercase tracking-tight mb-2">Connect With Us!</h3>
            {data?.mapEmbedCode ? (
              <div className="mt-6 w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md">
                <div dangerouslySetInnerHTML={{ __html: data.mapEmbedCode }} />
              </div>
            ) : (
              <p className="mt-4 text-gray-600 text-sm md:text-base">
                Map is not available at the moment. Please check back later.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
