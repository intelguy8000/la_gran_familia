export type GalleryCategory = 'all' | 'hospital' | 'retreats' | 'community' | 'events' | 'spiritual';

export interface GalleryItem {
  id: string;
  src: string;
  category: Exclude<GalleryCategory, 'all'>;
  title: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  src: string;
  title: string;
  description?: string;
  poster?: string;
}

export const galleryItems: GalleryItem[] = [
  // Hospital - 4 fotos
  {
    id: 'hospital-1',
    src: '/images/gallery/hospital/San_vicente_fundación.jpg',
    category: 'hospital',
    title: 'Hospital San Vicente Fundación',
    description: 'Llevando esperanza a niños hospitalizados'
  },
  {
    id: 'hospital-2',
    src: '/images/gallery/hospital/CPF.jpg',
    category: 'hospital',
    title: 'Centro de Protección Familiar',
    description: 'Apoyo en centros de salud'
  },
  {
    id: 'hospital-3',
    src: '/images/gallery/hospital/Fundación_San_Vicente.jpg',
    category: 'hospital',
    title: 'Visita Hospital Infantil',
    description: 'Actividades de arte terapia con niños'
  },
  {
    id: 'hospital-4',
    src: '/images/gallery/hospital/Fundación sv.jpg',
    category: 'hospital',
    title: 'Momentos de Alegría',
    description: 'Compartiendo sonrisas en el hospital'
  },

  // Comunidad - 4 fotos
  {
    id: 'community-1',
    src: '/images/gallery/comunidad/Comunidad.jpg',
    category: 'community',
    title: 'Encuentro Comunitario',
    description: 'Unidos en fe y esperanza'
  },
  {
    id: 'community-2',
    src: '/images/gallery/comunidad/Comunidad 1.jpg',
    category: 'community',
    title: 'La Gran Familia Unida',
    description: 'Celebrando juntos'
  },
  {
    id: 'community-3',
    src: '/images/gallery/comunidad/Comunidad 2.jpg',
    category: 'community',
    title: 'Trabajo en Comunidad',
    description: 'Construyendo lazos de amor'
  },
  {
    id: 'community-4',
    src: '/images/gallery/comunidad/Comunidad..jpg',
    category: 'community',
    title: 'Familias Reunidas',
    description: 'Momentos de encuentro y reflexión'
  },

  // Retiros - 1 foto
  {
    id: 'retreat-1',
    src: '/images/gallery/retiros/Retiro.jpg',
    category: 'retreats',
    title: 'Retiro Espiritual',
    description: 'Renovando el espíritu en comunidad'
  },

  // Eventos - 8 fotos
  {
    id: 'event-1',
    src: '/images/gallery/eventos/Fundación1.jpg',
    category: 'events',
    title: 'Evento La Gran Familia',
    description: 'Celebrando nuestra misión'
  },
  {
    id: 'event-2',
    src: '/images/gallery/eventos/Fundación 3.jpg',
    category: 'events',
    title: 'Fundación en Acción',
    description: 'Tocando corazones'
  },
  {
    id: 'event-3',
    src: '/images/gallery/eventos/Fundación 4.jpg',
    category: 'events',
    title: 'Evento Comunitario',
    description: 'Llevando esperanza'
  },
  {
    id: 'event-4',
    src: '/images/gallery/eventos/Fundación 6.jpg',
    category: 'events',
    title: 'Celebración Especial',
    description: 'Momentos inolvidables'
  },
  {
    id: 'event-5',
    src: '/images/gallery/eventos/Fundación 7.jpg',
    category: 'events',
    title: 'Actividad Familiar',
    description: 'Unidos por el amor de Dios'
  },
  {
    id: 'event-6',
    src: '/images/gallery/eventos/Fundación_Yambori.jpg',
    category: 'events',
    title: 'Yambori Familiar',
    description: 'Encuentro de familias'
  },
  {
    id: 'event-7',
    src: '/images/gallery/eventos/Yambori.jpg',
    category: 'events',
    title: 'Gran Yambori',
    description: 'Día de celebración y fe'
  },
  {
    id: 'event-8',
    src: '/images/gallery/eventos/Consagración_Familia.jpg',
    category: 'events',
    title: 'Consagración de Familias',
    description: 'Momentos sagrados'
  },

  // Espiritual - 1 foto
  {
    id: 'spiritual-1',
    src: '/images/gallery/espiritual/Jesus_eucaristia.jpg',
    category: 'spiritual',
    title: 'Jesús en la Eucaristía',
    description: 'El centro de nuestra fe'
  },
];

export const videoItems: VideoItem[] = [
  {
    id: 'video-1',
    src: '/videos/Regalo_.mp4',
    title: 'Un Regalo de Esperanza',
    description: 'Conoce el impacto de nuestro trabajo'
  },
  {
    id: 'video-2',
    src: '/videos/Fundación.mp4',
    title: 'La Gran Familia en Acción',
    description: 'Nuestra misión de llevar amor y esperanza'
  },
];

// Helper function para obtener conteo por categoría
export function getCategoryCount(category: GalleryCategory): number {
  if (category === 'all') return galleryItems.length;
  return galleryItems.filter(item => item.category === category).length;
}

// Helper function para filtrar por categoría
export function filterByCategory(category: GalleryCategory): GalleryItem[] {
  if (category === 'all') return galleryItems;
  return galleryItems.filter(item => item.category === category);
}
