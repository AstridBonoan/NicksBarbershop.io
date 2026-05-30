export interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
  avatar: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Juan F.',
    rating: 5,
    text: 'Been going there for years. Good barber shop, not the typical social club. I never spend more than 30 minutes there. Nick is running a tight ship.',
    date: '2 months ago',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUtmGp7jGJCo_16ehLqmC43C08t74Uk-JCguPBvyaSNTk5Jc_qL=s120-c-rp-mo-ba2-br100',
  },
  {
    id: '2',
    name: 'carlos (.',
    rating: 5,
    text: 'Jayflawless haircut is toptier his cuthair flawless',
    date: '2 months ago',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjUIZ5XxGlvyJdSu6gj9Q0mUj6LDitL_eqyeCPSrXv2YrTs1_ErJ=s120-c-rp-mo-br100',
  },
  {
    id: '3',
    name: 'Curtis C.',
    rating: 5,
    text: "One of the most professional spots that I have ever been to nice clean atmosphere fast service takes walk-ins or by appointment the prices are good and when you're finished you will be ready for your photo shoot plus they have their own line of hair care products to keep you looking sharp",
    date: '4 months ago',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocIjvZq-LhFU2NKc5wcz7GIO6I1S0JwosAqCm2Oziws1mi3zWw=s120-c-rp-mo-ba2-br100',
  },
  {
    id: '4',
    name: 'Arianna M.',
    rating: 5,
    text: 'I had the best experience here, I took my son here and he loves his haircut!! Greeted you right away!! Would totally recommend!',
    date: '6 months ago',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocLlgGsp6sw3uW8O9zvj72q8mlk9hVmK6kA08jVvenr0j8vKdQ=s120-c-rp-mo-br100',
  },
  {
    id: '5',
    name: 'Jonathan F.',
    rating: 5,
    text: 'Danny, is the go to man, he is A+. Must book a appointment for him, worth the wait',
    date: '6 months ago',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVhaLhbvLIKlw_iM9HzAScc-xSK2T6qLwVcUtMDK38n8ksZLmQm=s120-c-rp-mo-br100',
  },
  {
    id: '6',
    name: 'Delta P.',
    rating: 5,
    text: "Honestly I don't really write reviews but this place warranted one. I have been going to Nick's Barbershop for quite some time and it's the only place that I'm aware of that deserves a perfect five star rating in New York City from the atmosphere to the services they provide. JayFlawless has been stuck with me for years and hopefully many more to come.",
    date: '6 months ago',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjW_O3XnEHH6AcEwBSoAWvWlwQEhPjTzPOu738cSxlUQTL22fYlv=s120-c-rp-mo-br100',
  },
]

export const averageRating = 4.9
export const totalReviews = 171
