import React from 'react'

export const NewsGallery = ({ newsItems }: { newsItems: any[] }) => {
  if (!newsItems || newsItems.length === 0) return null;

  return (
    <section className="py-16 bg-brand-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-brand-text-dark mb-10">News</h2>
        
        {/* CSS Multi-column layout for Masonry effect */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {newsItems.map((news, i) => (
            <div key={i} className="break-inside-avoid shadow-md rounded-lg overflow-hidden border border-gray-100 bg-white">
              {news?.image?.url ? (
                <img src={news.image.url} alt={news.title} className="w-full h-auto object-cover block" />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium border border-dashed border-gray-300">
                  Newspaper Clipping ({news.title})
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
