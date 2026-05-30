import { useState } from 'react'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="bg-charcoal-mid py-20 dark:bg-charcoal sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-semibold text-cream">{item.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 py-4">
                    <p className="text-sm leading-relaxed text-cream/70">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
