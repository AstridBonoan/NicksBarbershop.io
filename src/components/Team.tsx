import { barbers } from '../data/team'

interface TeamProps {
  onBookClick: (serviceId?: string, barberId?: string) => void
}

export default function Team({ onBookClick }: TeamProps) {
  return (
    <section id="team" className="bg-white py-20 dark:bg-charcoal-light sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">The Crew</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal dark:text-cream sm:text-4xl">
            Meet Your Barbers
          </h2>
          <p className="mt-4 text-charcoal/60 dark:text-cream/60">
            The team behind every cut, every style, and every good vibe at Nick&apos;s.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <article
              key={barber.id}
              className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={barber.image}
                  alt={`${barber.name} — ${barber.role}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display text-xl font-bold text-cream">{barber.name}</h3>
                  <p className="text-sm text-gold">{barber.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">{barber.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {barber.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-charcoal/50 dark:text-cream/50">
                    {barber.experience}
                  </span>
                  <button
                    onClick={() => onBookClick(undefined, barber.id)}
                    className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-charcoal transition-all hover:bg-gold-light"
                  >
                    Book with {barber.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
