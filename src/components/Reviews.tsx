import { reviews, averageRating, totalReviews } from '../data/reviews'
import { shopInfo } from '../data/faq'

function GoogleLogo({ className = 'h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Google Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-sm text-cream/60">
              Real reviews from verified Google customers — tap any review to read it on Google Maps.
            </p>

            <a
              href={shopInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-8 py-6 transition-all hover:border-gold/30 hover:bg-white/10 lg:items-start"
            >
              <div className="flex items-center gap-2">
                <GoogleLogo className="h-6" />
                <span className="text-sm font-semibold text-cream">Google Rating</span>
              </div>
              <div className="mt-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 font-display text-4xl font-bold text-cream">
                {averageRating.toFixed(1)}
              </p>
              <p className="text-sm text-cream/60">
                Based on {totalReviews} Google reviews
              </p>
              <span className="mt-3 text-sm font-semibold text-gold">
                View all on Google →
              </span>
            </a>

            <a
              href={shopInfo.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:border-gold hover:text-gold"
            >
              <GoogleLogo className="h-4" />
              Review us on Google
            </a>
          </div>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            {reviews.map((review) => (
              <a
                key={review.id}
                href={shopInfo.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-gold/30 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-sm font-semibold text-cream">{review.name}</p>
                      <p className="text-xs text-cream/50">{review.date}</p>
                    </div>
                  </div>
                  <GoogleLogo className="h-4 shrink-0 opacity-80" />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-cream/40">· Posted on Google</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-cream/70 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                <p className="mt-4 text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Read on Google Maps →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
