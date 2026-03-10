
export interface Project {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  image: string;
  images: string[];
  imageDescriptions: string[];
  imageFits?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'comic',
    title: 'Cómic',
   
    
    thumbnail: '/imagenes/portafolio/COMICCOLOR.jpg',
    image: '/imagenes/portafolio/COMICCOLOR.jpg',
    images: [
      '/imagenes/portafolio/COMICCOLOR.jpg',
      '/imagenes/portafolio/secuencial_bn_Ruiz_Garcia_Jade.pdf',
      '/imagenes/portafolio/comic_plantilla_lol.jpg',
      '/imagenes/portafolio/Cómic_Niña.jpg'
    ],
    imageDescriptions: [
      'Proyecto de comic para asignatura de ilustración, entintado tradicional coloreado digital.',
      'Proyecto de comic para asignatura de ilustración, entintado tradicional blanco y negro',
      'Cómic proyecto transversaln todo en digital.',
      'Cómic proyecto transversal 2'
    ],
    
  },
  {
    id: '2',
    slug: 'maquetacion',
    title: 'Maquetación',
    
    
    thumbnail: '/imagenes/portafolio/ARTICULO_ILUSTRACION.png',
    image: '/imagenes/portafolio/ARTICULO_ILUSTRACION.png',
    images: [
      '/imagenes/portafolio/ARTICULO_ILUSTRACION.png',
    ],
    imageDescriptions: [
      'Maquetacion del articulo con ilustracion para asignatura de ilustración, tradicional + maquetado con InDesign..'
    ],
  },

  {
    id: '3',
    slug: 'tipografia',
    title: 'Tipografía',
    
   
    thumbnail: '/imagenes/portafolio/Ilustracion_sin_titulo_17.jpg',
    image: '/imagenes/portafolio/Ilustracion_sin_titulo_17.jpg',
    images: [
      '/imagenes/portafolio/Ilustracion_sin_titulo_17.jpg',
      '/imagenes/portafolio/Ilustracion_sin_titulo_18.jpg',
      '/imagenes/portafolio/Ilustracion_sin_titulo_19.jpg',
      '/imagenes/portafolio/Raíces_Animación.gif'
    ],
    imageDescriptions: [
      'Letra G con trazos organicos.',
      'Letra M con trazos orgánicos.',
      'Letra A con trazos orgánicos.',
      'Animacion tipografica de la letra A.'
    ],
    
  },

  {
    id: '4',
    slug: 'diseno-editorial',
    title: 'Diseño Editorial',
    
    
    thumbnail: '/imagenes/portafolio/Ilustracion_narrativa_JadeRuizGarcia-2.pdf',
    image: '/imagenes/portafolio/Ilustracion_narrativa_JadeRuizGarcia-2.pdf',
    images: [

      '/imagenes/portafolio/Ilustracion_narrativa_JadeRuizGarcia-2.pdf',
      '/imagenes/portafolio/MOCKUP PORTADA CORALINE.png',
      '/imagenes/portafolio/MOCKUP DOBLE PAGINA.png',
      '/imagenes/portafolio/GUARDAS.jpg',
      '/imagenes/portafolio/ILUSTRACION CORALINE.png',
      '/imagenes/portafolio/DOBLE PAGINA CORALINE.png'
    ],
    imageDescriptions: [
      'Portada del libro.',
      'Mockup de la portada',
      'Mockup de la doble página',
      'Guardas del libro.',
      'Maquetación de texto + ilustración',
       'Maquetación de la doble página.',

    ],
    imageFits: [
      'object-contain bg-white',
      'object-contain bg-white',
      'object-contain bg-white',
      'object-contain bg-white'
    ],
    
  },

  {
    id: '5',
    slug: 'carteles',
    title: 'Carteles',
   
    
    thumbnail: '/imagenes/portafolio/GULA FOTO.jpg',
    image: '/imagenes/portafolio/GULA FOTO.jpg',
    images: [
      '/imagenes/portafolio/Cartel_Ruiz_Garcia_Jade.jpg',
      '/imagenes/portafolio/GULA FOTO.jpg',
      '/imagenes/portafolio/GULA TEXTURA.jpg',
      '/imagenes/portafolio/cartel mierda.jpg',
      
      
    ],
    imageDescriptions: [
      'Cartel principal.',
      'Mockup de pagina.',
      'Guardas del proyecto.',
      'Ilustracion adicional.'
    ],
    imageFits: [
      'object-contain bg-white',
      'object-contain bg-white',
      'object-contain bg-white',
      'object-contain bg-white'
    ],
    
  },

  {
    id: '6',
    slug: 'proyectos-libres',
    title: 'Proyectos libres',
   
    
    thumbnail: '/imagenes/portafolio/Random.jpg',
    image: '/imagenes/portafolio/Random.jpg',
    images: [
      '/imagenes/portafolio/Random2.jpg',
      '/imagenes/portafolio/MOCKUP DOBLE PAGINA.png',
      '/imagenes/portafolio/GUARDAS.jpg',
      '/imagenes/portafolio/coraline_1DA.jpeg'
    ],
    imageDescriptions: [
      'Ilustracion libre.',
      'Mockup de presentacion.',
      'Guardas de prueba.',
      'Ilustracion extra.'
    ],
    
  }


];
