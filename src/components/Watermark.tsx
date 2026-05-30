import { bonoanLabsLogoSrc } from '../data/site'

export default function Watermark() {
  return (
    <div
      className="pointer-events-none fixed bottom-24 left-3 z-30 rounded-md bg-white/90 px-2 py-1 opacity-50 sm:bottom-5 sm:left-5 sm:opacity-60"
      aria-label="Designed by Bonoan Labs"
    >
      <img
        src={bonoanLabsLogoSrc}
        alt="Bonoan Labs"
        className="h-5 w-auto sm:h-6"
        draggable={false}
      />
    </div>
  )
}
