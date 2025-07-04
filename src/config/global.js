export default {
  global: {
    Name:
      'Recolección, tratamiento y visualización de datos para inteligencia artificial.',
    Description:
      'Este componente formativo aborda la recolección, tratamiento y visualización de datos para inteligencia artificial. Incluye tipos de datos, fuentes según origen y calidad, principios éticos como el consentimiento informado, y herramientas actuales para el análisis y visualización, facilitando la interpretación y la toma de decisiones basadas en datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recolección y caracterización de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas de definición de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes de información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Principios éticos en el tratamiento de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesamiento y preparación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de limpieza de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Preparación de datos para inteligencia artificial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estadística descriptiva',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Inteligencia Artificial (IA) aplicada al tratamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Concepto, origen y evolución de la inteligencia artificial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Funciones y aplicaciones de la IA en el procesamiento de datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipologías de IA: descriptiva, predictiva y generativa',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'IA generativa: características, usos y retos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Interacción con modelos generativos: el papel del <em>prompt</em>',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis y visualización de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Herramientas de visualización de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas de analítica de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Introducción al aprendizaje automático <em>(machine learning)</em>',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_21720207_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Recolección y caracterización de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Datos e información [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2GkGn3Mei6o',
    },
    {
      tema: '2.3. Estadística descriptiva',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Estadística descriptiva, gráficas e informes estadísticos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v5UMlXHe2nM',
    },
    {
      tema: '3. Inteligencia Artificial (IA) aplicada al tratamiento de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Inteligencia artificial en los datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-hYXrGAUYAE',
    },
    {
      tema:
        '4.3. Introducción al aprendizaje automático <em>(machine learning)</em>',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). <em>Machine Learning</em> con Python [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=noMy4-zjR9Q',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'conjunto de reglas o instrucciones definidas para realizar una tarea o resolver un problema de manera sistemática, especialmente en programación y análisis de datos.',
    },
    {
      termino: 'Analítica de datos',
      significado:
        'conjunto de técnicas que permiten examinar y extraer conclusiones significativas a partir de datos. Puede ser descriptiva, predictiva o prescriptiva.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'información organizada en formatos predefinidos como tablas, filas y columnas, que facilita su almacenamiento y análisis.',
    },
    {
      termino: 'Datos no estructurados',
      significado:
        'información sin un formato predefinido, como imágenes, videos, audios o texto libre, que requiere técnicas especializadas para su procesamiento.',
    },
    {
      termino: 'IA generativa',
      significado:
        'tecnología basada en inteligencia artificial capaz de crear contenido nuevo (texto, audio, imágenes, etc.) a partir de datos y patrones aprendidos.',
    },
    {
      termino: 'Limpieza de datos',
      significado:
        'proceso de detección y corrección de errores, valores faltantes o inconsistencias en un conjunto de datos para asegurar su calidad.',
    },
    {
      termino: '<em>Machine learning</em> (aprendizaje automático)',
      significado:
        'rama de la inteligencia artificial que permite a las máquinas aprender a partir de datos y mejorar su desempeño sin intervención humana directa.',
    },
    {
      termino: '<em>Prompt</em>',
      significado:
        'instrucción o entrada que se da a un modelo de inteligencia artificial generativa para que produzca una salida específica (texto, imagen, código, etc.).',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'representación gráfica de datos mediante gráficos, mapas o diagramas que permite identificar patrones, tendencias y anomalías.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cayla, B. (2024). El dato: Guía de supervivencia en el mundo de los datos. Editorial ENI.',
      link: '',
    },
    {
      referencia:
        'Chollet, F. (2021). Deep learning con Python (2.ª ed.). Ediciones Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Chollet, F. (2022). Deep learning con Python (2.ª ed., J. Barceló, Trad.). Anaya Multimedia. (Obra original publicada en 2021)',
      link: '',
    },
    {
      referencia:
        'Cuatrecasas. (2024). Guía para el uso responsable de IA y datos personales en Colombia.',
      link:
        'https://www.cuatrecasas.com/es/spain/tecnologia-medios-digitales/art/guia-uso-responsable-ia-datos-personales-colombia',
    },
    {
      referencia:
        'De Prado, M. (2023). Inteligencia artificial y análisis de datos: Fundamentos y aplicaciones. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Fernández-Macías, E., & Sánchez, Á. (2022). El impacto de la inteligencia artificial en el empleo y el trabajo. Fundación Cotec.',
      link: '',
    },
    {
      referencia:
        'García, E., & López, F. (2023). Inteligencia artificial: Fundamentos, ética y aplicaciones. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Goodfellow, I., Bengio, Y., & Courville, A. (2022). Deep learning: Introducción práctica con Python (2.ª ed., J. Cordero, Trad.). Marcombo.',
      link: '',
    },
    {
      referencia:
        'González, M. A. (2023). Inteligencia artificial generativa: Fundamentos, herramientas y aplicaciones prácticas. Editorial Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Lind, D. A., Marchal, W. G., & Wathen, S. A. (2022). Estadística aplicada a los negocios y la economía (17.ª ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Maldonado, G. (2021). Estadística aplicada a las ciencias sociales y administrativas. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Provost, F., & Fawcett, T. (2020). Data science para los negocios: Lo que necesitas saber sobre minería de datos y análisis predictivo. O’Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. (2025). Los datos son como piezas de LEGO [Publicación en LinkedIn]. ',
      link:
        'https://www.linkedin.com/posts/manuel-rodriguez-1a1703242_los-datos-son-como-piezas-de-lego-activity-7274364694881054720-fJnz/?originalSubdomain=es',
    },
    {
      referencia:
        'Suárez, E. (2024). Guía práctica sobre los distintos tipos de fuentes de información. Experto Universitario. ',
      link: 'https://expertouniversitario.es/blog/fuentes-de-informacion/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
