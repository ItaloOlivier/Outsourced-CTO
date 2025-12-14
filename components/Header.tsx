'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Digital Transformation', href: '/digital-transformation' },
  { text: 'Digital Marketing', href: '/digital-marketing' },
  { text: 'IT Recruitment', href: '/it-recruitment' },
  { text: 'Contact', href: '/contact' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt="Outsourced CTO"
              width={300}
              height={75}
              priority
            />
          </Link>

          <nav className="main-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </>
  )
}
