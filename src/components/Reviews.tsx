import { reviews, averageRating, totalReviews } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 dark:bg-charcoal-light sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal dark:text-cream sm:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-6 inline-flex flex-col items-center rounded-2xl border border-charcoal/10 bg-charcoal/5 px-8 py-6 dark:border-white/10 dark:bg-white/5 lg:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 font-display text-4xl font-bold text-charcoal dark:text-cream">
                {averageRating.toFixed(1)}
              </p>
              <p className="text-sm text-charcoal/60 dark:text-cream/60">
                Based on {totalReviews}+ Google reviews
              </p>
            </div>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
              <blockquote
                key={review.id}
                className="rounded-2xl border border-charcoal/10 bg-charcoal/5 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {review.highlight && (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold">
                    {review.highlight}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">
                  &ldquo;{review.text}&rdquo;
                </p>
                <footer className="mt-4 flex items-center justify-between">
                  <cite className="text-sm font-semibold not-italic text-charcoal dark:text-cream">
                    {review.name}
                  </cite>
                  <span className="text-xs text-charcoal/40 dark:text-cream/40">{review.date}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
