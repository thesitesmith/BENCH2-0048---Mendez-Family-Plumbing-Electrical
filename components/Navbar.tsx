'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#services', label: `Services` },
  { href: '#feature', label: `Service Area` },
  { href: '#testimonials', label: `Reviews` },
  { href: '#faq', label: `FAQ` },
  { href: '#contact', label: `Contact` },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-brand-primary border-b border-brand-text/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image src="/images/logo.png" alt="Mendez Family logo mark" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="text-xl md:text-2xl font-heading font-700 tracking-tight text-brand-background">Mendez Family</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap text-sm font-semibold transition-colors ${
                active === l.href ? 'text-brand-accent' : 'text-brand-background/80 hover:text-brand-background'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15128130488"
            className="whitespace-nowrap bg-brand-accent text-brand-text font-semibold px-5 py-2.5 rounded-none hover:bg-brand-accent/90 transition-colors"
          >
            Call Us
          </a>
        </div>

        <button
          className="lg:hidden text-brand-background"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary border-t border-brand-text/10 px-4 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="whitespace-nowrap text-brand-background/90 font-semibold py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15128130488"
            onClick={() => setIsMenuOpen(false)}
            className="whitespace-nowrap bg-brand-accent text-brand-text font-semibold px-5 py-3 text-center rounded-none"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  )
}
