import { useState, useEffect } from 'react'
import { shopInfo } from '../data/faq'
import { logoSrc } from '../data/site'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: shopInfo.bookingUrl, label: 'Book', external: true },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-charcoal' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="block h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
          <img
            src={logoSrc}
            alt="Nick's Barber Shop"
            className="h-full w-full scale-[1.35] object-cover"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm font-semibold text-cream [text-shadow:0_1px_4px_rgba(0,0,0,0.9)] transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={shopInfo.phoneLink}
            className="hidden rounded-full p-2 text-cream [text-shadow:0_1px_4px_rgba(0,0,0,0.9)] transition-colors hover:bg-white/10 hover:text-gold sm:block"
            aria-label="Call us"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          <a
            href={shopInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light sm:block"
          >
            Book Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-cream [text-shadow:0_1px_4px_rgba(0,0,0,0.9)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[57px] z-40 bg-charcoal lg:hidden"
        >
          <ul className="flex flex-col px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={closeMenu}
                  className="block border-b border-white/10 py-4 text-lg font-medium text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-6 flex flex-col gap-3">
              <a
                href={shopInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full rounded-full bg-gold py-3.5 text-center font-semibold text-charcoal"
              >
                Book Appointment
              </a>
              <a
                href={shopInfo.phoneLink}
                className="w-full rounded-full border border-gold py-3.5 text-center font-semibold text-gold"
              >
                Call {shopInfo.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
