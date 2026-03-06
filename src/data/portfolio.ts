
export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  image: string;
  images: string[];
  
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
    images: [
      '/imagenes/portafolio/COMICCOLOR.jpg',
      '/imagenes/portafolio/comic_plantilla_lol.jpg',
      '/imagenes/portafolio/Cómic_Niña.jpg'
    ],
    
    content: 'Creación de comic mediante dibujo tradicional y coloreado digital.'
  },
  {
    id: '2',
    title: 'Maquetación',
    slug: 'maquetacion',
    category: 'Maquetación',
    
    thumbnail: '/imagenes/portafolio/ARTICULO_ILUSTRACION.png',
    image: '/imagenes/portafolio/ARTICULO_ILUSTRACION.png',
    images: [
      '/imagenes/portafolio/ARTICULO_ILUSTRACION.png',
      '/imagenes/portafolio/MOCKUP ILUSTRACION.png',
      '/imagenes/portafolio/GULA FOTO.jpg'
    ],

    content: 'Proyecto de maquetación de articulo, e ilustración acorde al texto. Dibujo y coloreado tradicional.'
  },

  {
    id: '3',
    title: 'Tipografía',
    slug: 'digital',
    category: 'Digital',
   
    thumbnail: '/imagenes/portafolio/Ilustracion_sin_titulo_17.jpg',
    image: '/imagenes/portafolio/Ilustracion_sin_titulo_17.jpg',
    images: [
      '/imagenes/portafolio/Ilustracion_sin_titulo_17.jpg',
      '/imagenes/portafolio/Random.jpg',
      '/imagenes/portafolio/Random2.jpg',
      '/imagenes/portafolio/Raíces_Animación.gif'
    ],
    
    content: 'El reto principal fue la gestión de estados complejos en tiempo real...'
  },

  {
    id: '4',
    title: 'Diseño Editorial',
    slug: 'diseño',
    category: 'diseño',
    
    thumbnail: '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
    image: '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
    images: [
      '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
      '/imagenes/portafolio/MOCKUP DOBLE PAGINA.png',
      '/imagenes/portafolio/GUARDAS.jpg',
      '/imagenes/portafolio/coraline_1DA.jpeg'
    ],
    
    content: 'Proyecto de diseño de libro ilustrado, en este caso del libro "Coraline", en el que se diseñaron tanto las ilustraciones de dentro, como la portada, contraportada y guardas.'
  }


];

export const education = [
  { degree: 'Grado en Diseño y Desarrollo', center: 'Tu Universidad', year: '2022 - 2026' }
];

export const skills = ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git'];
