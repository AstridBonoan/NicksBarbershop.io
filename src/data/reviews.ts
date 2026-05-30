export interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  highlight?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Delta P.',
    rating: 5,
    text: "Honestly I don't really write reviews but this place warranted one. Nick's Barbershop is the only place that deserves a perfect five star rating in NYC — from the atmosphere to the services. JayFlawless has been stuck with me for years.",
    date: '6 months ago',
    highlight: 'Perfect 5-star NYC barbershop',
  },
  {
    id: '2',
    name: 'Juan F.',
    rating: 5,
    text: 'Been going there for years. Good barber shop, not the typical social club. I never spend more than 30 minutes there. Nick is running a tight ship.',
    date: '2 months ago',
  },
  {
    id: '3',
    name: 'Curtis C.',
    rating: 5,
    text: 'One of the most professional spots I have ever been to — nice clean atmosphere, fast service, walk-ins or by appointment. When you finish you will be ready for your photo shoot.',
    date: '4 months ago',
  },
  {
    id: '4',
    name: 'Khanan K.',
    rating: 5,
    text: 'Came here for the first time and got a fresh fade/scissors cut by Jay. It was indeed flawless. Best haircut I have gotten in a while.',
    date: '6 months ago',
  },
  {
    id: '5',
    name: 'Arianna M.',
    rating: 5,
    text: 'I had the best experience here — took my son and he loves his haircut! Greeted you right away. Would totally recommend!',
    date: '6 months ago',
  },
  {
    id: '6',
    name: 'Jonathan F.',
    rating: 5,
    text: 'Danny is the go-to man, he is A+. Must book an appointment for him — worth the wait.',
    date: '6 months ago',
  },
]

export const averageRating = 5.0
export const totalReviews = 171
