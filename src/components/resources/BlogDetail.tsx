import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

export const BlogDetail = ({ blog }: { blog: any }) => {
  if (!blog) return null;

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-end justify-center bg-brand-bg-alt">
        {blog?.coverImage?.url && (
          <img 
            src={blog.coverImage.url} 
            alt={blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-secondary/50 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-16 text-center">
          <Link href="/resources" className="inline-block mb-6 text-brand-primary font-medium hover:text-white transition-colors duration-200">
            &larr; Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
            {blog.title}
          </h1>
          {blog.publishedDate && (
            <p className="text-white/80 font-medium tracking-wide">
              {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {blog.excerpt && (
             <p className="text-xl text-gray-600 font-medium leading-relaxed mb-10 italic border-l-4 border-brand-primary pl-6">
               {blog.excerpt}
             </p>
          )}
          <div className="prose prose-lg prose-gray max-w-none prose-headings:text-brand-text-dark prose-a:text-brand-accent hover:prose-a:text-brand-primary prose-img:rounded-xl">
             {blog.content ? (
                <RichText data={blog.content} />
             ) : (
                <p className="text-gray-500 italic">This blog post has no content yet.</p>
             )}
          </div>
        </div>
      </div>
    </article>
  )
}
