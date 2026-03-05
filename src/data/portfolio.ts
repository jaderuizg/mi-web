
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  image: string;
  
  content: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cómic',
    slug: 'ilustracion',
    category: 'Ilustración',
    
    thumbnail: '/imagenes/portafolio/COMICCOLOR.jpg',
    image: '/imagenes/portafolio/COMICCOLOR.jpg',
    
    content: 'Creación de comic mediante dibujo tradicional y coloreado digital.'
  },
  {
    id: '2',
    title: 'Maquetación',
    slug: 'maquetacion',
    category: 'Maquetación',
    
    thumbnail: '/imagenes/portafolio/ARTICULO ILUSTRACIÓN.PNG',
    image: '/imagenes/portafolio/ARTICULO ILUSTRACIÓN.PNG',

    content: 'Proyecto de maquetación de articulo, e ilustración acorde al texto. Dibujo y coloreado tradicional.'
  },

  {
    id: '3',
    title: 'Tipografía',
    slug: 'digital',
    category: 'Digital',
   
    thumbnail: '/imagenes/portafolio/Ilustración_sin_título 17.jpg',
    image: 'https://via.placeholder.com/800x600',
    
    content: 'El reto principal fue la gestión de estados complejos en tiempo real...'
  },

  {
    id: '4',
    title: 'Diseño Editorial',
    slug: 'diseño',
    category: 'diseño',
    
    thumbnail: 'https://via.placeholder.com/800x600',
    image: 'https://via.placeholder.com/800x600',
    
    content: 'Proyecto de diseño de libro ilustrado, en este caso del libro "Coraline", en el que se diseñaron tanto las ilustraciones de dentro, como la portada, contraportada y guardas.'
  }


];

export const education = [
  { degree: 'Grado en Diseño y Desarrollo', center: 'Tu Universidad', year: '2022 - 2026' }
];

export const skills = ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git'];
