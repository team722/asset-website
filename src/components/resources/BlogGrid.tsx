import React from 'react'
import Link from 'next/link'

export const BlogGrid = ({ blogItems }: { blogItems: any[] }) => {
  if (!blogItems || blogItems.length === 0) return null;

  return (
    <section className="py-16 bg-brand-bg-alt pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-brand-text-dark mb-10">Blogs</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogItems.map((blog, i) => {
            const cleanSlug = blog.slug ? blog.slug.replace(/^\//, '') : '';
            return (
            <Link href={cleanSlug ? `/resources/blogs/${cleanSlug}` : '#'} key={i} className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[3/4] cursor-pointer block">
              {blog?.coverImage?.url ? (
                <img src={blog.coverImage.url} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-brand-primary"></div>
              )}
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                 <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 drop-shadow-md">{blog.title}</h3>
                 <p className="text-white/90 text-sm leading-relaxed line-clamp-3 font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                   {blog.excerpt}
                 </p>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}
