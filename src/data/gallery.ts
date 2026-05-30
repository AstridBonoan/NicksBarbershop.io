export type GalleryCategory = 'all' | 'fades' | 'beards' | 'modern' | 'classic' | 'interior'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: Exclude<GalleryCategory, 'all'>
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop',
    alt: 'Fresh skin fade haircut',
    category: 'fades',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop',
    alt: 'Barber at work on a client',
    category: 'modern',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37c788f90?w=600&h=600&fit=crop',
    alt: 'Classic barbershop interior',
    category: 'interior',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop',
    alt: 'Precision beard shaping',
    category: 'beards',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1622288432456-1561289040366?w=600&h=600&fit=crop',
    alt: 'Modern styled haircut',
    category: 'modern',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop',
    alt: "Classic gentleman's cut",
    category: 'classic',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=600&fit=crop',
    alt: 'Barbershop chairs and mirrors',
    category: 'interior',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1593702274477-2c8720f86381?w=600&h=600&fit=crop',
    alt: 'Detailed fade line work',
    category: 'fades',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1620331316778-6eaa9038f0a2?w=600&h=600&fit=crop',
    alt: 'Beard trim and hot towel',
    category: 'beards',
  },
]

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fades', label: 'Fades' },
  { id: 'beards', label: 'Beards' },
  { id: 'modern', label: 'Modern' },
  { id: 'classic', label: 'Classic' },
  { id: 'interior', label: 'Shop' },
]
