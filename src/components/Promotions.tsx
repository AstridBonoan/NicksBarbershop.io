import { shopInfo } from '../data/faq'

export default function Promotions() {
  const promos = [
    {
      title: 'New Client Special',
      description: '$5 off your first haircut. Walk in or book online.',
      badge: 'New Clients',
    },
    {
      title: 'Senior Discount',
      description: 'Senior haircuts starting at just $25. Respectful, unhurried service.',
      badge: 'Seniors',
    },
    {
      title: 'Refer a Friend',
      description: 'Bring a friend and you both get $5 off your next visit.',
      badge: 'Referral',
    },
  ]

  return (
    <section id="promotions" className="bg-charcoal-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Special Offers</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-cream sm:text-3xl">
            Current Promotions
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {promos.map((promo) => (
            <article
              key={promo.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                {promo.badge}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-cream">
                {promo.title}
              </h3>
              <p className="mt-2 text-sm text-cream/70">{promo.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={shopInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold px-8 py-3 font-semibold text-charcoal transition-all hover:bg-gold-light"
          >
            Claim Your Offer — Book Now
          </a>
        </div>
      </div>
    </section>
  )
}
