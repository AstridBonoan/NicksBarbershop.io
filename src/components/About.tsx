import { shopInfo } from '../data/faq'

export default function About() {
  return (
    <section id="about" className="bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=500&fit=crop"
                alt="Barbershop chairs and vintage mirrors"
                className="rounded-2xl object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1622288432456-1561289040366?w=400&h=500&fit=crop"
                alt="Barber giving a precision haircut"
                className="mt-8 rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-gold px-6 py-4 shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-bold text-charcoal">{shopInfo.yearsExperience}+</p>
              <p className="text-sm font-medium text-charcoal/70">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              More Than a Haircut — It&apos;s a Tradition
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/70">
              <p>
                Nick&apos;s Barbershop started with a simple belief: every person
                deserves to walk out feeling like the best version of themselves.
                What began as a single chair in Ridgewood has grown into one of
                Queens&apos; most trusted grooming destinations — not because of
                flashy marketing, but because of consistency.
              </p>
              <p>
                Walk in and you&apos;ll feel it immediately. The energy is real.
                The barbers know your name. The fades are sharp. And whether
                you&apos;re prepping for a wedding, a job interview, or just a
                Tuesday, you leave looking like you mean business.
              </p>
              <p>
                We respect the tradition of the craft while delivering looks that
                fit today&apos;s style perfectly. That&apos;s why families bring
                their kids here, seniors trust us for classic cuts, and young
                professionals keep coming back.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: 'Walk-ins Welcome', icon: '🚶' },
                { label: 'Community Focused', icon: '🤝' },
                { label: 'Premium Equipment', icon: '✨' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <p className="mt-2 text-sm font-medium text-cream">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
