export default {
  global: {
    componenteFormativo: 'Plan de auditoría',
    descripcionCurso:
      'En este componente formativo, se profundizará en los sistemas de gestión, tanto de medio ambiente como de salud y seguridad en el trabajo, haciendo énfasis en las buenas prácticas ambientales y de producción agropecuaria, junto con los instrumentos utilizados para la recolección de información que será utilizada para la planificación y presentación del plan de auditoría.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Sistema de gestión ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Norma ISO 14001',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Sistema de Gestión de Seguridad y Salud en el Trabajo SG-SST',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Buenas prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'HACCP',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación de auditoría ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Instrumentos y métodos de recolección de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presentación del plan de auditoría ',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_7221005.zip',
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
      tema: '1. Sistema de gestión ambiental',
      referencia:
        'Rama Judicial (2015). Sistema de gestión ambiental. Requisitos con orientación para su uso (NTC-ISO 14001).',
      tipo: 'Norma Técnica',
      link:
        'https://www.ramajudicial.gov.co/documents/8957139/22744716/NORMA+14001+%281%29%281%29.pdf/c26b5d90-20ba-4af0-8e4a-3ae1c45315e2',
    },
    {
      tema: 'Tipos',
      referencia:
        'Agencia para la Reincorporación y la Normalización [ARN]. (2021). Excombatientes fortalecen las buenas prácticas pecuarias en el Catatumbo. GOV.CO.',
      tipo: 'Artículo',
      link:
        'https://www.reincorporacion.gov.co/es/sala-de-prensa/noticias/Paginas/2021/Excombatientes-fortalecen-las-buenas-practicas-pecuarias-en-el-Catatumbo.aspx',
    },
    {
      tema: '3. Planificación de auditoría ',
      referencia:
        'Martínez, C. [UCAM Universidad Católica de Murcia]. (2015a). Auditoría - Planificación de la Auditoría: Fase de Planificación - Carmen María Martínez Franco [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VppLGbFPU88',
    },
    {
      tema: '3. Planificación de auditoría ',
      referencia:
        'Martínez, C. [UCAM Universidad Católica de Murcia]. (2015b). Auditoría - Planificación de la Auditoría: Fase Previa - Carmen María Martínez Franco [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SiSaV4PftEc',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'proceso sistemático, independiente y documentado para obtener evidencias objetivas y evaluarlas de manera objetiva, con el fin de determinar el grado en que se cumplen los criterios de auditoría.',
    },
    {
      termino: 'Buenas prácticas',
      significado:
        'todas aquellas experiencias que se guíen por principios, objetivos y procedimientos apropiados, que se adecúen a alguna determinada perspectiva normativa.',
    },
    {
      termino: 'Entrevista',
      significado:
        'este es un gran recurso para recolectar testimonios reales de personas que pueden estar involucradas en la investigación.',
    },
    {
      termino: 'ISO 14001',
      significado:
        'el objetivo de esta norma es brindar un apoyo hacia la protección ambiental y la armonización entre la prevención de la contaminación, entendiendo las necesidades socioeconómicas de cada organización.',
    },
    {
      termino: 'Plan de auditoría',
      significado:
        'descripción de las actividades y de los detalles acordados de una auditoría.',
    },
    {
      termino: 'Programa de auditoría',
      significado:
        'acuerdos para un conjunto de una o más auditorías planificadas para un periodo de tiempo determinado y dirigidas hacia un propósito específico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto 1072 de 2015. Ministerio del Trabajo. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos FEDEGAN. (s. f.). Aspectos verificados durante el diagnóstico y el seguimiento de BPG. ',
      link:
        'https://www.fedegan.org.co/programas/aspectos-verificados-durante-el-diagnostico-y-el-seguimiento-de-bpg',
    },
    {
      referencia:
        'Food and Agriculture Organization. (1997). Sistema de análisis de peligros y de puntos críticos de control (HACCP) y directrices para su aplicación. ',
      link: 'https://www.fao.org/3/y1579s/y1579s03.htm',
    },
    {
      referencia:
        'nternational Dynamic Advisors [Intedya]. (s. f.). Buenas Prácticas de Manufactura (BPM). ',
      link:
        'https://www.intedya.com/internacional/103/consultoria-buenas-practicas-de-manufactura-bpm.html',
    },
    {
      referencia: 'Logihfrutic. (s. f.). Buenas prácticas agrícolas (BPA). ',
      link: 'https://logihfrutic.unibague.edu.co/buenas-practicas/agricolas',
    },
    {
      referencia:
        'Subgerencia de protección y regulación pecuaria. (s. f.). Buenas Prácticas Ganaderas en la producción de ganado bovino y bufalino destinado al sacrificio para el consumo humano. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/35f0d70e-b2dd-4bfc-ac1f-ba169b5ccdca/Publicacion-5.aspx ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Carolina Sánchez Rodríguez',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andres Herrera',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboarde Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
