'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type HeaderData = {
  logo?: {
    url?: string | null
    alt?: string | null
  } | null
  navLinks?: {
    label?: string | null
    url?: string | null
  }[] | null
}

const fallbackNavLinks = [
  { label: 'Home', url: '#' },
  { label: 'About Us', url: '#' },
  { label: 'Our Work', url: '#' },
  { label: 'Get Involved', url: '#' },
  { label: 'Resources', url: '#' },
  { label: 'Contact', url: '#' },
]

export const Header = ({ data }: { data: HeaderData | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = data?.navLinks?.length ? data.navLinks : fallbackNavLinks

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {data?.logo?.url ? (
              <img src={data.logo.url} alt={data.logo.alt || 'Logo'} className="h-12 w-auto" />
            ) : (
              <div className="text-2xl font-bold text-green-700">Logo</div>
            )}
          </div>
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link, i) => (
              <Link key={`${link.label}-${i}`} href={link.url || '#'} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button type="button" className="text-gray-600 hover:text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button type="button" className="text-gray-600 hover:text-green-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
            <button
              type="button"
              className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden border-t border-gray-100 bg-white transition-[max-height,opacity,transform] duration-300 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          {navLinks.map((link, i) => (
            <Link
              key={`${link.label}-mobile-${i}`}
              href={link.url || '#'}
              className="block py-3 text-gray-700 hover:text-green-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
