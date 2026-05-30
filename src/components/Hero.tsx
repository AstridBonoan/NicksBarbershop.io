interface HeroProps {
  onBookClick: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal" aria-label="Hero">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37c788f90?w=1920&h=1080&fit=crop"
          alt="Nick's Barbershop interior with barbers at work"
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-24 pt-32 sm:px-6 sm:pb-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold opacity-0 animate-fade-up">
            Ridgewood, Queens
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-cream opacity-0 animate-fade-up stagger-1 sm:text-5xl md:text-6xl lg:text-7xl">
            Classic Cuts.
            <br />
            <span className="text-gold">Modern Style.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80 opacity-0 animate-fade-up stagger-2 sm:text-lg">
            Queens&apos; trusted neighborhood barbershop — where precision haircuts,
            professional service, and good vibes have kept the community coming
            back for over 25 years.
          </p>

          <div className="mt-8 flex flex-col gap-3 opacity-0 animate-fade-up stagger-3 sm:flex-row sm:gap-4">
            <button
              onClick={onBookClick}
              className="rounded-full bg-gold px-8 py-4 text-center font-semibold text-charcoal transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Book an Appointment
            </button>
            <a
              href="#services"
              className="rounded-full border border-cream/30 px-8 py-4 text-center font-semibold text-cream transition-all hover:border-gold hover:text-gold"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 opacity-0 animate-fade-up stagger-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-cream/70">5.0 · 171+ Google Reviews</span>
            </div>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" aria-hidden="true" />
            <span className="text-sm text-cream/70">25+ Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
