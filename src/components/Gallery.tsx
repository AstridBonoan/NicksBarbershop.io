import { useState } from 'react'
import { galleryItems, galleryFilters, type GalleryCategory } from '../data/gallery'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all')

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="bg-charcoal-mid py-20 dark:bg-charcoal sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Work</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Fresh Cuts Gallery
          </h2>
          <p className="mt-4 text-cream/60">
            Skin fades, beard work, modern styles, and classic cuts — see what we do best.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Gallery filters"
        >
          {galleryFilters.map((filter) => (
            <button
              key={filter.id}
              role="tab"
              aria-selected={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gold text-charcoal'
                  : 'border border-white/20 text-cream/70 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {filtered.map((item) => (
            <figure
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-charcoal/90 to-transparent p-4 transition-transform group-hover:translate-y-0">
                <p className="text-sm font-medium text-cream">{item.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
