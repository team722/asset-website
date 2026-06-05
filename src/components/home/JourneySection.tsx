import React from 'react'

export const JourneySection = ({ data }: { data: any }) => {
  return (
    <section className="py-20 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-brand-text-dark mb-2">{data?.journeyHeadline || 'Our Journey in Motion'}</h2>
          <p className="text-brand-accent font-medium text-base">
            {data?.journeySubtitle || 'A glimpse of the moments that shaped us and our impact'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 group cursor-pointer shadow-md">
              {data?.featuredVideo?.thumbnail?.url ? (
                <img src={data.featuredVideo.thumbnail.url} alt="Featured Video" className="w-full h-full object-cover" />
              ) : (
                 <div className="w-full h-full bg-gray-300"></div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">{data?.featuredVideo?.title || 'Accessing Government Schemes Made Easy'}</h3>
            <p className="text-brand-accent text-sm font-medium mt-1">{data?.featuredVideo?.duration || '8 years'}</p>
          </div>
          
          <div className="flex flex-col gap-6">
            {(data?.sideVideos || [1,2]).map((video: any, i: number) => (
              <div key={i} className="flex flex-col">
                 <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-200 group cursor-pointer shadow-md mb-3">
                   {video?.thumbnail?.url ? (
                     <img src={video.thumbnail.url} alt={video.title || 'Video'} className="w-full h-full object-cover" />
                   ) : (
                     <div className="w-full h-full bg-gray-300"></div>
                   )}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-lg">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                     </div>
                   </div>
                 </div>
                 <h3 className="text-md font-bold text-gray-900 line-clamp-2 leading-snug">{video?.title || (i === 0 ? 'A key that Unlocks Success' : 'Empowering Tribal Art & Culture')}</h3>
                 <p className="text-brand-accent text-xs font-medium mt-1">{video?.duration || (i === 0 ? '4 years' : '7 years')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
