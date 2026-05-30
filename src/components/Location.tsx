import { shopInfo } from '../data/faq'

export default function Location() {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-charcoal-light sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Find Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal dark:text-cream sm:text-4xl">
              Location & Hours
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal dark:text-cream">Address</h3>
                  <p className="mt-1 text-charcoal/70 dark:text-cream/70">
                    {shopInfo.address}<br />{shopInfo.city}
                  </p>
                  <a
                    href={shopInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-light"
                  >
                    Get Directions
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal dark:text-cream">Phone</h3>
                  <a
                    href={shopInfo.phoneLink}
                    className="mt-1 block text-lg font-semibold text-gold hover:text-gold-light"
                  >
                    {shopInfo.phone}
                  </a>
                  <p className="text-sm text-charcoal/50 dark:text-cream/50">Tap to call</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal dark:text-cream">Email</h3>
                  <a
                    href={shopInfo.emailLink}
                    className="mt-1 block text-charcoal/70 hover:text-gold dark:text-cream/70"
                  >
                    {shopInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal dark:text-cream">Hours</h3>
                  <dl className="mt-2 space-y-1">
                    {shopInfo.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-8 text-sm">
                        <dt className="text-charcoal/70 dark:text-cream/70">{h.days}</dt>
                        <dd className="font-medium text-charcoal dark:text-cream">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 text-xs text-charcoal/50 dark:text-cream/50">
                    After-hours appointments: +$10
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-charcoal/10 dark:border-white/10">
            <iframe
              title="Nick's Barbershop location map"
              src="https://maps.google.com/maps?q=55-52+Myrtle+Ave,+Flushing,+NY+11385&output=embed"
              className="h-[350px] w-full sm:h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
