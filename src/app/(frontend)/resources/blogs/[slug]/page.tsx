import config from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BlogDetail } from '@/components/resources/BlogDetail'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static routes for all blogs
export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const blogs = await payload.find({
    collection: 'blogs',
    limit: 100,
  })

  return blogs.docs.map((blog) => ({
    slug: blog.slug ? blog.slug.replace(/^\//, '') : '',
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })
  
  const blogs = await payload.find({
    collection: 'blogs',
    where: {
      or: [
        { slug: { equals: slug } },
        { slug: { equals: `/${slug}` } },
      ]
    },
    limit: 1,
  })

  const blog = blogs.docs[0]

  if (!blog) {
    return {
      title: 'Blog Not Found | ASSET',
    }
  }

  return {
    title: `${blog.title} | ASSET Resources`,
    description: blog.excerpt,
  }
}

export default async function BlogRoute({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })
  
  // Fetch Globals
  let headerData = null;
  let footerData = null;
  
  try {
    headerData = await payload.findGlobal({ slug: 'header' })
  } catch (e) {}
  try {
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (e) {}

  // Fetch Blog
  const blogs = await payload.find({
    collection: 'blogs',
    where: {
      or: [
        { slug: { equals: slug } },
        { slug: { equals: `/${slug}` } },
      ]
    },
    limit: 1,
  })

  const blog = blogs.docs[0]

  if (!blog) {
    notFound()
  }

  return (
    <>
      <Header data={headerData} />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <BlogDetail blog={blog} />
      </main>
      <Footer data={footerData} />
    </>
  )
}
