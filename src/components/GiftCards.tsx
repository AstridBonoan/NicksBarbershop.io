import { shopInfo } from '../data/faq'

export default function GiftCards() {
  return (
    <section id="gift-cards" className="bg-charcoal-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gold/10 to-gold/5">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Gift Cards</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-cream sm:text-3xl">
                The Perfect Gift for Any Occasion
              </h2>
              <p className="mt-4 text-cream/70">
                Give the gift of a fresh cut. Nick&apos;s Barbershop gift certificates are
                available in any amount — birthdays, holidays, Father&apos;s Day, or just
                because.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={shopInfo.phoneLink}
                  className="rounded-full bg-gold px-6 py-3 text-center font-semibold text-charcoal transition-all hover:bg-gold-light"
                >
                  Purchase In-Shop
                </a>
                <a
                  href={shopInfo.emailLink}
                  className="rounded-full border border-gold/30 px-6 py-3 text-center font-semibold text-gold transition-all hover:bg-gold/10"
                >
                  Email to Order
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-charcoal p-8 shadow-2xl">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gold/20 blur-2xl" />
                <p className="font-display text-lg font-bold text-gold">Nick&apos;s Barbershop</p>
                <p className="mt-1 text-sm text-cream/60">Gift Certificate</p>
                <p className="mt-8 font-display text-4xl font-bold text-cream">$50</p>
                <p className="mt-2 text-sm text-cream/40">Redeemable for any service</p>
                <div className="mt-8 h-px bg-white/10" />
                <p className="mt-4 text-xs text-cream/30">Valid at 55-52 Myrtle Ave, Queens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
