export type GalleryCategory = 'all' | 'fades' | 'beards' | 'modern' | 'classic'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: Exclude<GalleryCategory, 'all'>
}

const img = (path: string) =>
  `https://nicksbarbershopny.com/wp-content/uploads/${path}`

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: img('2026/04/Haircut-done-by-bigraydabarber-at-the-wyckoff-location.jpg'),
    alt: 'Fresh fade by Big Ray at Nick\'s Barbershop',
    category: 'fades',
  },
  {
    id: '2',
    src: img('2026/04/download-4.jpg'),
    alt: 'Precision haircut at Nick\'s Barbershop',
    category: 'modern',
  },
  {
    id: '4',
    src: img('2026/04/download-20.jpg'),
    alt: 'Clean lineup and beard work',
    category: 'beards',
  },
  {
    id: '5',
    src: img('2026/04/638860063_18571967467037893_7217465911722088726_n.jpg'),
    alt: 'Sharp modern cut at Nick\'s',
    category: 'modern',
  },
  {
    id: '6',
    src: img('2026/04/download-22.jpg'),
    alt: 'Classic gentleman\'s cut',
    category: 'classic',
  },
  {
    id: '8',
    src: img('2026/04/Gemini_Generated_Image_iu1le0iu1le0iu1l.png'),
    alt: 'Detailed fade line work',
    category: 'fades',
  },
]

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fades', label: 'Fades' },
  { id: 'beards', label: 'Beards' },
  { id: 'modern', label: 'Modern' },
  { id: 'classic', label: 'Classic' },
]
