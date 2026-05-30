import { bonoanLabsLogoSrc } from '../data/site'

export default function Watermark() {
  return (
    <div
      className="pointer-events-none fixed bottom-20 right-0 z-30 opacity-40 sm:bottom-0 sm:opacity-50"
      aria-label="Site by Bonoan Labs"
    >
      <div className="rounded-tl-lg bg-white/95 px-3 py-2 shadow-sm">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
          Site by
        </p>
        <img
          src={bonoanLabsLogoSrc}
          alt="Bonoan Labs"
          className="mt-1 h-7 w-auto sm:h-8"
          draggable={false}
        />
      </div>
    </div>
  )
}
