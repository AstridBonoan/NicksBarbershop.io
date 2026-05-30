export interface Service {
  id: string
  name: string
  description: string
  duration: string
  price: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'haircut',
    name: 'Haircuts',
    description:
      'Precision cuts tailored to your face shape, hair texture, and lifestyle. From classic to contemporary.',
    duration: '30 min',
    price: '$35',
    icon: '✂️',
  },
  {
    id: 'skin-fade',
    name: 'Skin Fades',
    description:
      'Crisp, seamless fades that blend flawlessly. Our signature service — sharp, clean, and always fresh.',
    duration: '35 min',
    price: '$35',
    icon: '💈',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trims',
    description:
      'Expert beard shaping and maintenance to keep your look polished between full grooming sessions.',
    duration: '20 min',
    price: '$20',
    icon: '🧔',
  },
  {
    id: 'beard-shaping',
    name: 'Beard Shaping',
    description:
      'Detailed line work and contouring for a defined, symmetrical beard that complements your haircut.',
    duration: '25 min',
    price: '$30',
    icon: '🪒',
  },
  {
    id: 'kids',
    name: "Kids' Haircuts",
    description:
      'Patient, friendly cuts for the younger crowd. We make every kid feel comfortable and look sharp.',
    duration: '25 min',
    price: '$35',
    icon: '👦',
  },
  {
    id: 'senior',
    name: 'Senior Haircuts',
    description:
      'Respectful, unhurried service with classic styling options at a special rate for our senior clients.',
    duration: '30 min',
    price: '$25',
    icon: '🎩',
  },
  {
    id: 'hot-towel',
    name: 'Hot Towel Services',
    description:
      'The classic hot towel experience — warm, relaxing, and the perfect finish to any shave or trim.',
    duration: '15 min',
    price: '$30',
    icon: '♨️',
  },
  {
    id: 'specialty',
    name: 'Specialty Grooming',
    description:
      'Hair design, royal shaves, black mask treatments, eyebrow shaping, and full grooming packages.',
    duration: '45 min',
    price: '$35+',
    icon: '⭐',
  },
]
