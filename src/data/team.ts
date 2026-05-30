export interface Barber {
  id: string
  name: string
  role: string
  bio: string
  specialties: string[]
  experience: string
  image: string
}

export const barbers: Barber[] = [
  {
    id: 'nick',
    name: 'Nick',
    role: 'Founder & Master Barber',
    bio: 'The heart of the shop. Nick built this barbershop on consistency, community, and cuts that keep clients coming back for years.',
    specialties: ['Classic Cuts', 'Business Styles', 'Shop Leadership'],
    experience: '25+ years',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=500&fit=crop&crop=face',
  },
  {
    id: 'jay',
    name: 'JayFlawless',
    role: 'Lead Stylist',
    bio: 'Known across NYC for flawless fades and precision line work. Jay brings artistry and energy to every chair.',
    specialties: ['Skin Fades', 'Hair Design', 'Modern Styles'],
    experience: '12+ years',
    image:
      'https://images.unsplash.com/photo-1622288432456-1561289040366?w=400&h=500&fit=crop&crop=face',
  },
  {
    id: 'danny',
    name: 'Danny',
    role: 'Senior Barber',
    bio: 'Appointment-only excellence. Danny is the go-to for clients who want a meticulous cut and a great conversation.',
    specialties: ['Fades', 'Beard Work', 'Detail Cuts'],
    experience: '10+ years',
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=500&fit=crop&crop=face',
  },
  {
    id: 'isaac',
    name: 'Isaac',
    role: 'Barber',
    bio: 'Delivers some of the best fades in NYC with fast, friendly service. Walk-ins welcome.',
    specialties: ['Skin Fades', 'Shape Ups', 'Kids Cuts'],
    experience: '8+ years',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37c788f90?w=400&h=500&fit=crop&crop=face',
  },
  {
    id: 'jacob',
    name: 'Jacob',
    role: 'Barber',
    bio: 'Flawless technique and a calm, professional demeanor. Clients trust Jacob for consistent, sharp results.',
    specialties: ['Fades', 'Classic Cuts', 'Beard Trims'],
    experience: '7+ years',
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=500&fit=crop&crop=face',
  },
]
