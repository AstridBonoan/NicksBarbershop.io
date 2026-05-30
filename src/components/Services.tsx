import { services } from '../data/services'

interface ServicesProps {
  onBookClick: (serviceId?: string) => void
}

export default function Services({ onBookClick }: ServicesProps) {
  return (
    <section id="services" className="bg-charcoal-mid py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">What We Do</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Services & Pricing
          </h2>
          <p className="mt-4 text-cream/60">
            Professional grooming tailored to you. After-hours appointments available for $10 extra.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-gold/30 hover:bg-white/10"
            >
              <span className="text-3xl" aria-hidden="true">{service.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-cream">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">{service.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs text-cream/40">Starting at</p>
                  <p className="font-display text-xl font-bold text-gold">{service.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-cream/40">Duration</p>
                  <p className="text-sm font-medium text-cream/80">{service.duration}</p>
                </div>
              </div>
              <button
                onClick={() => onBookClick(service.id)}
                className="mt-4 w-full rounded-full border border-gold/30 py-2.5 text-sm font-semibold text-gold transition-all group-hover:bg-gold group-hover:text-charcoal"
              >
                Book This Service
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
