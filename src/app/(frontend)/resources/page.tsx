import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ResourcesHero } from '@/components/resources/ResourcesHero'
import { NewsGallery } from '@/components/resources/NewsGallery'
import { BlogGrid } from '@/components/resources/BlogGrid'

export default async function ResourcesRoute() {
  const payload = await getPayload({ config })
  
  // Fetch Globals
  let pageData = null;
  let headerData = null;
  let footerData = null;
  
  try {
    pageData = await payload.findGlobal({ slug: 'resources-page' })
  } catch (e) {}
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {}
  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {}

  // Fetch Collections
  const newsRes = await payload.find({ collection: 'news', limit: 20, sort: '-createdAt' })
  const blogsRes = await payload.find({ collection: 'blogs', limit: 8, sort: '-createdAt' })

  // Fallback data if empty (for previewing the UI)
  const dummyNews = newsRes.docs.length > 0 ? newsRes.docs : [
    { title: 'News 1', image: null },
    { title: 'News 2', image: null },
    { title: 'News 3', image: null },
  ];
  
  const dummyBlogs = blogsRes.docs.length > 0 ? blogsRes.docs : [
    { title: 'Blog 1', excerpt: 'We empower tribal and rural communities through education, health support, women and child development, cultural preservation...', coverImage: null },
    { title: 'Blog 2', excerpt: 'We empower tribal and rural communities through education, health support, women and child development, cultural preservation...', coverImage: null },
    { title: 'Blog 3', excerpt: 'We empower tribal and rural communities through education, health support, women and child development, cultural preservation...', coverImage: null },
    { title: 'Blog 4', excerpt: 'We empower tribal and rural communities through education, health support, women and child development, cultural preservation...', coverImage: null },
  ];

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-brand-bg-alt">
        <ResourcesHero data={pageData} />
        <NewsGallery newsItems={dummyNews} />
        <BlogGrid blogItems={dummyBlogs} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
