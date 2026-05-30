import { useState } from 'react'
import { services } from '../data/services'
import { barbers } from '../data/team'
import { shopInfo } from '../data/faq'

type Step = 'service' | 'barber' | 'datetime' | 'contact' | 'confirm'

interface BookingData {
  serviceId: string
  barberId: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  notes: string
}

interface BookingProps {
  preselectedService?: string
  preselectedBarber?: string
}

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
]

const steps: { id: Step; label: string }[] = [
  { id: 'service', label: 'Service' },
  { id: 'barber', label: 'Barber' },
  { id: 'datetime', label: 'Date & Time' },
  { id: 'contact', label: 'Contact' },
  { id: 'confirm', label: 'Confirm' },
]

function getMinDate() {
  const d = new Date()
  return d.toISOString().split('T')[0]
}

export default function Booking({ preselectedService, preselectedBarber }: BookingProps) {
  const [step, setStep] = useState<Step>('service')
  const [data, setData] = useState<BookingData>({
    serviceId: preselectedService || '',
    barberId: preselectedBarber || '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const currentStepIndex = steps.findIndex((s) => s.id === step)

  const update = (partial: Partial<BookingData>) => setData((d) => ({ ...d, ...partial }))

  const next = () => {
    const idx = currentStepIndex
    if (idx < steps.length - 1) setStep(steps[idx + 1].id)
  }

  const back = () => {
    const idx = currentStepIndex
    if (idx > 0) setStep(steps[idx - 1].id)
  }

  const selectedService = services.find((s) => s.id === data.serviceId)
  const selectedBarber = barbers.find((b) => b.id === data.barberId)

  const canProceed = () => {
    switch (step) {
      case 'service': return !!data.serviceId
      case 'barber': return !!data.barberId
      case 'datetime': return !!data.date && !!data.time
      case 'contact': return !!data.name && !!data.phone
      default: return true
    }
  }

  const handleConfirm = () => {
    setStep('confirm')
  }

  const resetBooking = () => {
    setData({
      serviceId: '',
      barberId: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      notes: '',
    })
    setStep('service')
  }

  return (
    <section id="booking" className="bg-charcoal-mid py-20 dark:bg-charcoal sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Book Online</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Schedule Your Cut
          </h2>
          <p className="mt-4 text-cream/60">
            Quick and easy — book in under a minute from your phone.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-10 flex items-center justify-between" aria-label="Booking progress">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-1 items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  i <= currentStepIndex
                    ? 'bg-gold text-charcoal'
                    : 'border border-white/20 text-cream/40'
                }`}
                aria-current={step === s.id ? 'step' : undefined}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mx-1 h-0.5 flex-1 ${
                    i < currentStepIndex ? 'bg-gold' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          {step === 'service' && (
            <div>
              <h3 className="font-display text-xl font-semibold text-cream">Choose a Service</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => update({ serviceId: service.id })}
                    className={`rounded-xl border p-4 text-left transition-all ${
                      data.serviceId === service.id
                        ? 'border-gold bg-gold/10'
                        : 'border-white/10 hover:border-gold/30'
                    }`}
                  >
                    <span className="text-xl" aria-hidden="true">{service.icon}</span>
                    <p className="mt-2 font-semibold text-cream">{service.name}</p>
                    <p className="text-sm text-gold">{service.price} · {service.duration}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'barber' && (
            <div>
              <h3 className="font-display text-xl font-semibold text-cream">Choose Your Barber</h3>
              <div className="mt-4 grid gap-3">
                <button
                  onClick={() => update({ barberId: 'any' })}
                  className={`rounded-xl border p-4 text-left transition-all ${
                    data.barberId === 'any'
                      ? 'border-gold bg-gold/10'
                      : 'border-white/10 hover:border-gold/30'
                  }`}
                >
                  <p className="font-semibold text-cream">No Preference</p>
                  <p className="text-sm text-cream/60">First available barber</p>
                </button>
                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    onClick={() => update({ barberId: barber.id })}
                    className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                      data.barberId === barber.id
                        ? 'border-gold bg-gold/10'
                        : 'border-white/10 hover:border-gold/30'
                    }`}
                  >
                    <img
                      src={barber.image}
                      alt=""
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-cream">{barber.name}</p>
                      <p className="text-sm text-cream/60">{barber.role}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'datetime' && (
            <div>
              <h3 className="font-display text-xl font-semibold text-cream">Pick Date & Time</h3>
              <label className="mt-4 block">
                <span className="text-sm font-medium text-cream/70">Date</span>
                <input
                  type="date"
                  min={getMinDate()}
                  value={data.date}
                  onChange={(e) => update({ date: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </label>
              <div className="mt-4">
                <span className="text-sm font-medium text-cream/70">Time</span>
                <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => update({ time })}
                      className={`rounded-lg border py-2 text-sm transition-all ${
                        data.time === time
                          ? 'border-gold bg-gold text-charcoal font-semibold'
                          : 'border-white/10 text-cream/70 hover:border-gold/30'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 'contact' && (
            <div>
              <h3 className="font-display text-xl font-semibold text-cream">Your Information</h3>
              <div className="mt-4 space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-cream/70">Full Name *</span>
                  <input
                    type="text"
                    required
                    value={data.name}
                    onChange={(e) => update({ name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="John Doe"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-cream/70">Phone *</span>
                  <input
                    type="tel"
                    required
                    value={data.phone}
                    onChange={(e) => update({ phone: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="(347) 555-0123"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-cream/70">Email</span>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => update({ email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-cream/70">Notes (optional)</span>
                  <textarea
                    value={data.notes}
                    onChange={(e) => update({ notes: e.target.value })}
                    rows={3}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-cream focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Any special requests..."
                  />
                </label>
              </div>
            </div>
          )}

          {step === 'confirm' && (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-cream">You&apos;re All Set!</h3>
              <p className="mt-2 text-cream/60">
                Your appointment request has been submitted. We&apos;ll confirm shortly.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-charcoal p-5 text-left">
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-cream/50">Service</dt>
                    <dd className="font-medium text-cream">{selectedService?.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cream/50">Barber</dt>
                    <dd className="font-medium text-cream">
                      {data.barberId === 'any' ? 'First Available' : selectedBarber?.name}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cream/50">Date</dt>
                    <dd className="font-medium text-cream">{data.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cream/50">Time</dt>
                    <dd className="font-medium text-cream">{data.time}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-cream/50">Name</dt>
                    <dd className="font-medium text-cream">{data.name}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={shopInfo.phoneLink}
                  className="rounded-full bg-gold px-6 py-3 font-semibold text-charcoal transition-all hover:bg-gold-light"
                >
                  Call to Confirm: {shopInfo.phone}
                </a>
                <button
                  onClick={resetBooking}
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-cream hover:border-gold hover:text-gold"
                >
                  Book Another
                </button>
              </div>
            </div>
          )}

          {step !== 'confirm' && (
            <div className="mt-8 flex justify-between">
              <button
                onClick={back}
                disabled={currentStepIndex === 0}
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-cream/60 transition-all hover:text-gold disabled:invisible"
              >
                Back
              </button>
              {step === 'contact' ? (
                <button
                  onClick={handleConfirm}
                  disabled={!canProceed()}
                  className="rounded-full bg-gold px-8 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light disabled:opacity-40"
                >
                  Confirm Booking
                </button>
              ) : (
                <button
                  onClick={next}
                  disabled={!canProceed()}
                  className="rounded-full bg-gold px-8 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-gold-light disabled:opacity-40"
                >
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
