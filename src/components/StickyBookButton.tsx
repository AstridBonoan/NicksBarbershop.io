import { shopInfo } from '../data/faq'

export default function StickyBookButton() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-4 sm:hidden">
      <a
        href={shopInfo.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-4 font-semibold text-charcoal shadow-lg shadow-gold/20 transition-all active:scale-[0.98]"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Book Appointment
      </a>
    </div>
  )
}
