import React from 'react'
import Link from 'next/link'

type UploadValue =
  | {
      url?: string | null
      alt?: string | null
    }
  | number
  | string
  | null

type FooterData = {
  logo?: UploadValue
  contactInfo?: {
    communication?: string | null
    phone?: string | null
    email?: string | null
  } | null
  socialLinks?: {
    id?: string | null
    platform?: string | null
    icon?: UploadValue
    url?: string | null
    altText?: string | null
  }[] | null
  getInvolvedLinks?: {
    id?: string | null
    linkTitle?: string | null
    linkUrl?: string | null
    displayOrder?: number | null
  }[] | null
}

const getUploadUrl = (upload?: UploadValue) =>
  typeof upload === 'object' && upload !== null ? upload.url || undefined : undefined

const getUploadAlt = (upload?: UploadValue) =>
  typeof upload === 'object' && upload !== null ? upload.alt || undefined : undefined

const getOrderedFooterLinks = (links: FooterData['getInvolvedLinks']) =>
  [...(links || [])]
    .filter((link) => link?.linkTitle && link?.linkUrl)
    .sort((a, b) => {
      const orderA = typeof a.displayOrder === 'number' ? a.displayOrder : Number.MAX_SAFE_INTEGER
      const orderB = typeof b.displayOrder === 'number' ? b.displayOrder : Number.MAX_SAFE_INTEGER

      return orderA - orderB
    })

export const Footer = ({ data }: { data: FooterData | null }) => {
  const logoUrl = getUploadUrl(data?.logo)
  const socialLinks = (data?.socialLinks || []).filter((social) => social?.platform && social?.url)
  const getInvolvedLinks = getOrderedFooterLinks(data?.getInvolvedLinks)

  return (
    <footer className="bg-brand-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <div className="bg-white inline-block p-2 rounded mb-6">
            {logoUrl ? (
              <img src={logoUrl} alt={getUploadAlt(data?.logo) || 'Logo'} className="h-48 w-auto" />
            ) : (
              <div className="w-16 h-16 bg-gray-200 text-black flex items-center justify-center font-bold">LOGO</div>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Get Involved</h3>
          <ul className="space-y-4">
             {getInvolvedLinks.map((link, i) => (
               <li key={link.id || `${link.linkTitle}-${i}`}>
                 <Link href={link.linkUrl || '#'} className="text-gray-300 hover:text-white transition-colors">
                   {link.linkTitle}
                 </Link>
               </li>
             ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-300">
             <li className="flex gap-4 items-center">
                <span className="text-xl">Mobile:</span>
                <span>{data?.contactInfo?.phone || '+1 234 567 8900'}</span>
             </li>
             <li className="flex gap-4 items-start">
                <span className="text-xl">communication:</span>
                <span className="leading-relaxed">{data?.contactInfo?.communication || '7358274670'}</span>
             </li>
             <li className="flex gap-4 items-center">
                <span className="text-xl">Email:</span>
                <span>{data?.contactInfo?.email || 'assettamilnadu@gmail.com'}</span>
             </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#D00C85] text-center text-sm text-gray-400">
         {/* Â© {new Date().getFullYear()} Organization Name. All rights reserved. */}
      </div>
        <div className="max-w-7xl mx-auto flex space-x-4">
            {socialLinks.map((social, i) => {
              const iconUrl = getUploadUrl(social.icon)

              return (
                <Link key={social.id || `${social.platform}-${i}`} href={social.url || '#'} className="w-10 h-10  flex items-center justify-center hover:bg-white/20 transition-colors">
                  {iconUrl ? (
                    <img
                      src={iconUrl}
                      alt={social.altText || getUploadAlt(social.icon) || `${social.platform} icon`}
                      className="h-8 w-12 object-contain"
                    />
                  ) : (
                    <div className="text-xs font-medium capitalize">{social.platform}</div>
                  )}
                </Link>
              )
            })}
          </div>
    </footer>
  )
}
