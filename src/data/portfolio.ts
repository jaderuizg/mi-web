
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  thumbnail: string;
  image: string;
  tags: string[];
  content: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Identidad Visual Eco-Friendly',
    slug: 'eco-branding',
    category: 'Diseño Gráfico',
    description: 'Creación de marca para una startup de productos sostenibles.',
    thumbnail: 'https://via.placeholder.com/800x600',
    image: 'https://via.placeholder.com/800x600', // Luego cambias por tus fotos a 72ppp
    tags: ['Illustrator', 'Branding', 'Sostenibilidad'],
    content: 'En este proyecto se trabajó la paleta de colores tierra y tipografías orgánicas...'
  },
  {
    id: '2',
    title: 'App de Gestión de Tareas',
    slug: 'task-app',
    category: 'Desarrollo Web',
    description: 'Interfaz reactiva construida con Vue 3 y Tailwind CSS.',
    thumbnail: 'https://via.placeholder.com/800x600',
    image: 'https://via.placeholder.com/800x600',
    tags: ['Vue.js', 'TypeScript', 'UI/UX'],
    content: 'El reto principal fue la gestión de estados complejos en tiempo real...'
  }
];

export const education = [
  { degree: 'Grado en Diseño y Desarrollo', center: 'Tu Universidad', year: '2022 - 2026' }
];

export const skills = ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git'];
