export default function Loyalty() {
  const tiers = [
    { visits: '5 visits', reward: 'Free Shape Up', icon: '✂️' },
    { visits: '10 visits', reward: 'Free Beard Trim', icon: '🧔' },
    { visits: '20 visits', reward: 'Free Haircut', icon: '⭐' },
  ]

  return (
    <section id="loyalty" className="bg-charcoal-mid py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Loyalty Program</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-cream sm:text-3xl">
            Earn Rewards Every Visit
          </h2>
          <p className="mt-4 text-cream/60">
            The more you come back, the more you save. Ask your barber about our loyalty punch card.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.visits}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-gold/30"
            >
              <span className="text-3xl" aria-hidden="true">{tier.icon}</span>
              <p className="mt-4 font-display text-lg font-bold text-gold">{tier.visits}</p>
              <p className="mt-2 text-sm text-cream/70">{tier.reward}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
