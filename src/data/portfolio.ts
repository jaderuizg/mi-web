
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
      '/imagenes/portafolio/Ilustracion_sin_titulo_18.jpg',
      '/imagenes/portafolio/Ilustracion_sin_titulo_19.jpg',
      '/imagenes/portafolio/Raíces_Animación.gif'
    ],
    
    content: 'Creación de tipografia creativa para proyecto "30 days of type". Letras G, M y A.'
  },

  {
    id: '4',
    title: 'Diseño Editorial',
    slug: 'Diseño',
    category: 'Diseño',
    
    thumbnail: '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
    image: '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
    images: [
      '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
      '/imagenes/portafolio/MOCKUP DOBLE PAGINA.png',
      '/imagenes/portafolio/GUARDAS.jpg',
      '/imagenes/portafolio/coraline_1DA.jpeg'
    ],
    
    content: 'Proyecto de diseño de libro ilustrado, en este caso del libro "Coraline", en el que se diseñaron tanto las ilustraciones de dentro, como la portada, contraportada y guardas.'
  },

  {
    id: '5',
    title: 'Carteles',
    slug: 'Diseño',
    category: 'Diseño',
    
    thumbnail: '/imagenes/portafolio/GULA FOTO.jpg',
    image: '/imagenes/portafolio/GULA FOTO.jpg',
    images: [
      '/imagenes/portafolio/Cartel_Ruiz_Garcia_Jade.jpg',
      '/imagenes/portafolio/MOCKUP DOBLE PAGINA.png',
      '/imagenes/portafolio/GUARDAS.jpg',
      '/imagenes/portafolio/coraline_1DA.jpeg'
    ],
    
    content: 'Proyecto de diseño de libro ilustrado, en este caso del libro "Coraline", en el que se diseñaron tanto las ilustraciones de dentro, como la portada, contraportada y guardas.'
  },

  {
    id: '6',
    title: 'Proyectos libres',
    slug: 'Ilustración',
    category: 'Diseño',
    
    thumbnail: '/imagenes/portafolio/Random.jpg',
    image: '/imagenes/portafolio/Random.jpg',
    images: [
      '/imagenes/portafolio/Random2.jpg',
      '/imagenes/portafolio/MOCKUP DOBLE PAGINA.png',
      '/imagenes/portafolio/GUARDAS.jpg',
      '/imagenes/portafolio/coraline_1DA.jpeg'
    ],
    
    content: 'Proyectos personales de ilustración libre, todo hecho en digital.'
  }


];


