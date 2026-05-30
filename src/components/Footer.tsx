import { shopInfo } from '../data/faq'
import { logoSrc, bonoanLabsLogoSrc } from '../data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <img
                src={logoSrc}
                alt="Nick's Barber Shop"
                className="h-full w-full scale-[1.35] object-cover"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              Elevating the art of grooming through precision techniques, timeless style,
              and a master&apos;s eye for detail.
            </p>
            <a
              href={shopInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1 transition-opacity hover:opacity-80"
            >
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-xs text-cream/50">4.9 · 171 Google reviews</span>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Team', href: '#team' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Book', href: shopInfo.bookingUrl, external: true },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li>{shopInfo.fullAddress}</li>
              <li>
                <a href={shopInfo.phoneLink} className="hover:text-gold">{shopInfo.phone}</a>
              </li>
              <li>
                <a href={shopInfo.emailLink} className="hover:text-gold">{shopInfo.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              {shopInfo.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-cream/80">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/40">
            &copy; {currentYear} Nick&apos;s Barbershop. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-cream/40">Designed by</span>
            <img
              src={bonoanLabsLogoSrc}
              alt="Bonoan Labs"
              className="h-5 w-auto rounded bg-white px-1.5 py-0.5"
            />
          </div>
          <a
            href={shopInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 transition-colors hover:text-gold"
            aria-label="Follow us on Instagram"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
