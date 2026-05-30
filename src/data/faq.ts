export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Do you accept walk-ins?',
    answer:
      'Yes! Walk-ins are welcome during business hours. For specific barbers like Danny, we recommend booking an appointment to guarantee your spot.',
  },
  {
    id: '2',
    question: 'What are your hours?',
    answer:
      'Monday through Saturday: 9 AM – 8 PM. Sunday: 9 AM – 6 PM. After-hours appointments are available for an additional $10.',
  },
  {
    id: '3',
    question: 'Do you cut kids\' hair?',
    answer:
      'Absolutely. We welcome clients of all ages. Kids\' haircuts start at $35 and our barbers are patient and friendly with younger clients.',
  },
  {
    id: '4',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash and all major credit/debit cards. Gift certificates are also available for purchase in-shop or online.',
  },
  {
    id: '5',
    question: 'How long does a typical haircut take?',
    answer:
      'Most haircuts take 25–35 minutes. Specialty services like hair design or full grooming packages may take 45 minutes or more.',
  },
  {
    id: '6',
    question: 'Do you offer gift cards?',
    answer:
      'Yes! Gift certificates are available in any amount and make a great gift for birthdays, holidays, or any occasion.',
  },
]

export const shopInfo = {
  name: "Nick's Barbershop",
  address: '55-52 Myrtle Ave',
  city: 'Flushing, NY 11385',
  fullAddress: '55-52 Myrtle Ave, Flushing, NY 11385',
  phone: '(347) 294-0492',
  phoneLink: 'tel:+13472940492',
  email: 'INFO@nicksbarbershopny.com',
  emailLink: 'mailto:INFO@nicksbarbershopny.com',
  instagram: 'https://www.instagram.com/nicksbarbershop/',
  googleMaps: 'https://maps.google.com/?q=55-52+Myrtle+Ave,+Flushing,+NY+11385',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=55-52+Myrtle+Ave,+Flushing,+NY+11385',
  hours: [
    { days: 'Mon – Sat', time: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 6:00 PM' },
  ],
  yearsExperience: 25,
}
