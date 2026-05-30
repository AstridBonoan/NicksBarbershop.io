export interface Barber {
  id: string
  name: string
  role: string
  bio: string
  specialties: string[]
  experience: string
  image: string
}

const img = (path: string) =>
  `https://nicksbarbershopny.com/wp-content/uploads/${path}`

export const barbers: Barber[] = [
  {
    id: 'nick',
    name: 'Nick',
    role: 'Founder & Master Barber',
    bio: 'The heart of the shop. Nick built this barbershop on consistency, community, and cuts that keep clients coming back for years.',
    specialties: ['Classic Cuts', 'Business Styles', 'Shop Leadership'],
    experience: '25+ years',
    image: img('2022/08/6-1a.jpg'),
  },
  {
    id: 'jay',
    name: 'JayFlawless',
    role: 'Lead Stylist',
    bio: 'Known across NYC for flawless fades and precision line work. Jay brings artistry and energy to every chair.',
    specialties: ['Skin Fades', 'Hair Design', 'Modern Styles'],
    experience: '12+ years',
    image: img('2026/04/download-4.jpg'),
  },
  {
    id: 'danny',
    name: 'Danny',
    role: 'Senior Barber',
    bio: 'Appointment-only excellence. Danny is the go-to for clients who want a meticulous cut and a great conversation.',
    specialties: ['Fades', 'Beard Work', 'Detail Cuts'],
    experience: '10+ years',
    image: img('2026/04/download-20.jpg'),
  },
  {
    id: 'isaac',
    name: 'Isaac',
    role: 'Barber',
    bio: 'Delivers some of the best fades in NYC with fast, friendly service. Walk-ins welcome.',
    specialties: ['Skin Fades', 'Shape Ups', 'Kids Cuts'],
    experience: '8+ years',
    image: img('2026/04/Haircut-done-by-bigraydabarber-at-the-wyckoff-location.jpg'),
  },
  {
    id: 'jacob',
    name: 'Jacob',
    role: 'Barber',
    bio: 'Flawless technique and a calm, professional demeanor. Clients trust Jacob for consistent, sharp results.',
    specialties: ['Fades', 'Classic Cuts', 'Beard Trims'],
    experience: '7+ years',
    image: img('2026/04/638860063_18571967467037893_7217465911722088726_n.jpg'),
  },
]
