<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Recolección y caracterización de datos

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de datos es un proceso que inicia mucho antes del uso de herramientas estadísticas o informáticas. Parte de una comprensión profunda sobre qué son los datos, cómo se obtienen, de dónde provienen y bajo qué principios deben ser tratados. Por esta razón, en este apartado se abordan los aspectos fundamentales relacionados con la recolección y caracterización de datos, entendiendo que estos constituyen la base sobre la cual se construyen procesos analíticos, diagnósticos y soluciones efectivas a problemas reales.
        br

    p.mb-5(data-aos="fade-down") Para facilitar esta comprensión, se propone la siguiente figura del ciclo de transformación de los datos, presentado a través de bloques de construcción:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Analogía de los datos</i>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img02.svg', alt='En la figura 1 se representa una analogía del ciclo de los datos: muestra datos en bruto, luego datos organizados y limpios en una base de datos, posteriormente analizados, visualizados gráficamente y finalmente interpretados mediante una narrativa comprensible.')
            figcaption Nota. Tomado de Manuel Rodríguez (2025).
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img03.svg', alt='En la figura 1 se representa una analogía del ciclo de los datos: muestra datos en bruto, luego datos organizados y limpios en una base de datos, posteriormente analizados, visualizados gráficamente y finalmente interpretados mediante una narrativa comprensible.')
          figcaption Nota. Tomado de Manuel Rodríguez (2025).

    p.mb-5(data-aos="fade-down") Esta figura permite representar de forma didáctica el proceso que siguen los datos desde su recolección hasta su uso significativo:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          h4.text-center Datos
          p En su estado inicial, los datos aparecen como elementos dispersos, sin organización ni estructura. Representan información cruda recolectada de distintas fuentes, que aún no ha sido procesada.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Limpios en una base de datos
          p En esta etapa, los datos se organizan y depuran para eliminar inconsistencias, errores o duplicaciones. Esta limpieza permite clasificarlos y almacenarlos adecuadamente en una base de datos estructurada.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Analizados
          p Una vez organizados, los datos se someten a análisis para identificar patrones, tendencias o relaciones. Esta fase corresponde al uso de técnicas estadísticas o computacionales para extraer conocimiento útil.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Presentados de forma visual
          p Los resultados del análisis se traducen en representaciones gráficas, visualizaciones o cuadros de datos que permiten una comprensión más clara de la información.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Explicados con una historia
          p Finalmente, los datos analizados y visualizados se contextualizan dentro de una narrativa que permite tomar decisiones informadas, comunicar hallazgos y construir conocimiento. Este paso también implica una reflexión ética sobre cómo se interpretan y comunican los resultados.

    p.mb-0(data-aos="fade-down") Esta secuencia demuestra que el trabajo con datos requiere no solo habilidades técnicas, sino también pensamiento crítico, criterio ético y capacidad de comunicación. En ese sentido, los subtemas de este apartado tipos de datos, técnicas de definición, fuentes de información y principios éticos, permiten al aprendiz comprender de forma integral las primeras etapas de un proceso analítico riguroso y confiable.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos de datos

    p.mb-5(data-aos="fade-down") Los datos pueden definirse como hechos u observaciones concretas, recolectados a partir de diversas fuentes, que por sí mismos pueden carecer de significado hasta que son organizados, procesados y analizados. Es en este proceso cuando se transforman en información útil para la toma de decisiones. En este punto es importante definir cuál es la diferencia entre un dato y la información:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-6.col-12.order-lg-2.order-2
            .cajon.cajon.C01.color-primario.p-4.mb-3
              p.mb-0 Los datos son el insumo bruto, como cifras, palabras , imágenes, sonidos, entre otros. en cambio, la información es el resultado procesado que tiene valor contextual y utilidad. Esta distinción es clave: así como el carbón se convierte  en diamante tras someterse a un proceso riguroso, los datos se transforman en información mediante técnicas de análisis, modelado y presentación.
            p(data-aos="fade-down") La naturaleza de los datos hace referencia a su forma de representación, su nivel de organización y la manera en que pueden ser interpretados o manipulados por sistemas informáticos. Esta clasificación resulta fundamental al momento de diseñar bases de datos, seleccionar herramientas de análisis y determinar los procesos requeridos para transformar los datos en información útil.
          .col-lg-6.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema1/img09.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") En términos generales, los datos pueden clasificarse en tres grandes grupos:

    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Datos estructurados
            p Son aquellos que se organizan de manera ordenada en filas y columnas, como en las bases datos relacionales. Esta organización facilita su búsqueda, análisis y recuperación. Son comunes en sistemas administrativos, registros de usuarios y encuestas cerradas.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img10.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Datos no estructurados
            p Corresponden a aquellos que no siguen un esquema fijo ni una organización tabular. Incluyen archivos de texto libre, imágenes, audios, videos y publicaciones en redes sociales. Aunque son ricos en contenido, requieren herramientas específicas para su procesamiento, como algoritmos de procesamiento de lenguaje natural (PLN) o análisis de imágenes.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img11.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Datos semiestructurados
            p Tienen una estructura flexible, generalmente basada en etiquetas o jerarquías, como ocurre con los archivos XML, JSON, o YAML. Aunque no están organizados en una base relacional, si contienen metadatos que permiten cierta organización lógica y facilitan su interpretación por programas especializados.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img12.jpg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Además, es importante considerar una clasificación más detallada según el tipo específico de dato, que puede incluir representaciones numéricas (enteros o decimales), cadenas de texto, fechas y horas, archivos multimedia o valores booleanos, como se presenta en la siguiente tabla:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Clasificación según el tipo</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 25%") Tipo de dato
                th(style= "width: 50%") Característica principal
                th(style= "width: 25%") Ejemplo
            tbody
              tr
                td Bits y bytes
                td Representación básica binaria de todos los datos digitales
                td 0 y 1
              tr
                td(style="background-color: #F6F6F6") Números enteros
                td(style="background-color: #F6F6F6") Sin decimales
                td(style="background-color: #F6F6F6") 145
              tr
                td Números decimales
                td Con cifras decimales
                td 45.78
              tr
                td(style="background-color: #F6F6F6") Texto
                td(style="background-color: #F6F6F6") Codificado con estándares como ASCII o UTF
                td(style="background-color: #F6F6F6") “SENA”, “Bogotá”
              tr
                td Fecha y hora
                td Referencia temporal, expresada en distintos formatos
                td 2025-05-30, 14:30:00
              tr
                td(style="background-color: #F6F6F6") Imagen
                td(style="background-color: #F6F6F6") Representación visual en pixeles 
                td(style="background-color: #F6F6F6") JPG, PNG
              tr
                td Video
                td Secuencia de imágenes con audio y frecuencia de reproducción (FPS)
                td MP4, AVI, MOV
              tr
                td(style="background-color: #F6F6F6") Booleano 
                td(style="background-color: #F6F6F6") Solo dos valores posibles.
                td(style="background-color: #F6F6F6") Verdadero (1) o Falso (0)

    p.mb-4(data-aos="fade-down") Esta clasificación no solo permite identificar la forma en que se almacenan y presentan los datos, sino que también ayuda a establecer los requerimientos técnicos para su tratamiento posterior, como el tipo de almacenamiento, los métodos de análisis y las herramientas computacionales requeridas. Comprender la naturaleza y el tipo de datos es el primer paso para caracterizarlos adecuadamente, evaluar su calidad y garantizar su utilidad en entornos de análisis de información, modelamiento predictivo y toma de decisiones basadas en datos.
    p.mb-5(data-aos="fade-down") Además de su tipo y estructura, los datos poseen una serie de características complementarias que influyen directamente en su gestión y análisis:

    .row.cajon.BG03.align-items-center.pt-3.mb-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img13.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
                h4.text-center Formato
                p Modo de almacenamiento o presentación (CSV, Excel, JSON).

              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
                h4.text-center Estructura
                p Grado de organización interna (estructurado o no).

              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
                h4.text-center Origen
                p Fuente que los produce (sistema, encuesta, sensor).

              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
                h4.text-center Volumen
                p Cantidad de datos disponibles.

              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
                h4.text-center Velocidad
                p Rapidez con la que se generan.

              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img18.svg' alt='AvatarTop')
                h4.text-center Veracidad
                p Grado de confiabilidad.

              .tarjeta.tarjeta--BG03.p-4
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
                h4.text-center Valor
                p Utilidad que aportan para resolver un problema.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Técnicas de definición de datos
    
    p.mb-4(data-aos="fade-down") <b>Los datos están en constante transformación</b>: se trasladan, se procesan y evolucionan. Su objetivo principal es convertirse rápidamente en información útil que genere el valor que las organizaciones necesitan. Por esta razón, resulta fundamental establecer normas claras de gestión que permitan administrar y controlar eficazmente su ciclo de vida, ya que los datos se han convertido en el motor clave de la transformación digital.
    p.mb-5(data-aos="fade-down") La gestión de los datos no depende exclusivamente de los sistemas informáticos. Su eficacia está directamente relacionada con la alineación entre las personas, los procesos y la tecnología. Para aplicar técnicas de definición de datos, se pueden utilizar herramientas y enfoques organizados en tres categorías principales:
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Herramientas de gestión de datos")
            .col-12.mb-0.mb-md-0
              p Describen las funciones y responsabilidades de los perfiles clave involucrados en el tratamiento y análisis de los datos:
              ul.lista-ul.mb-0
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Data Scientist</b>: especialistas en datos, tradicionalmente con formación en matemáticas o estadística. Su labor se enfoca en analizar grandes volúmenes de datos ya preparados, con el fin de identificar patrones y generar modelos predictivos que respalden la toma de decisiones.
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Data Analyst</b>: se encarga de transformar los datos en información útil y comprensible mediante herramientas analíticas. Su función principal es generar informes e interpretaciones que permitan entender el comportamiento de los datos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 <b>Data Engineer</b>: colabora estrechamente con los analistas y científicos de datos, asegurando que la infraestructura técnica esté preparada para recibir, procesar y organizar los datos de manera óptima.
          .row(titulo="Metadatos")
            .col-12.mb-0.mb-md-0
              p.mb-0 Permiten definir, describir y contextualizar la información. Actúan como etiquetas que eliminan ambigüedades y aseguran una interpretación uniforme. Por ejemplo, un campo como “fecha” puede tener múltiples formatos y significados; el metadato define si se refiere a una fecha de creación, modificación o vencimiento, así como su formato estándar. En este sentido, los metadatos son para los datos lo que una etiqueta es para un producto.
          .row(titulo="Seguridad de los datos")
            .col-12.mb-0.mb-md-0
              p.mb-3 La protección de la información almacenada es un aspecto esencial. Se deben aplicar mecanismos que garanticen su seguridad sin comprometer su accesibilidad. Entre las técnicas más comunes se encuentran:
              ul.lista-ul.mb-0
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Anonimización y seudonimización</b>: modifican los datos para eliminar o sustituir cualquier elemento que permita identificar a una persona, impidiendo así la identificación directa del individuo. La anonimización elimina por completo los identificadores, mientras que la seudonimización los reemplaza por códigos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 <b>Cifrado de información</b>: convierte los datos legibles en información ininteligible mediante algoritmos, tanto cuando los datos están almacenados como cuando están en tránsito. Esto impide que terceros no autorizados puedan acceder a su contenido. Actualmente, servicios como Google Drive, AWS S3 y Microsoft OneDrive protegen los datos mediante cifrado. Asimismo, las páginas web que utilizan HTTPS cifran la información entre el navegador y el servidor mediante protocolos como SSL/TLS.
                  
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img21.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Para complementar las técnicas de definición, es importante comprender las propiedades fundamentales de los datos. Estas propiedades se agrupan en cuatro grandes dimensiones tales como físicas, estructurales, funcionales y de exposición. Comprenderlas permite caracterizar mejor los datos y asegurar su uso eficiente y contextualizado.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <i>Propiedades físicas, estructurales, funcionales y de exposición del dato</i>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img22.svg', alt='La figura 2 presenta las propiedades fundamentales de los datos, organizadas en cuatro dimensiones principales: físicas, estructurales, funcionales y de exposición. Cada una de estas dimensiones describe características esenciales que permiten comprender la naturaleza, el comportamiento y el contexto de uso de los datos.')
            figcaption Nota. Tomado de Benoit Cayla.
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img23.svg', alt='La figura 2 presenta las propiedades fundamentales de los datos, organizadas en cuatro dimensiones principales: físicas, estructurales, funcionales y de exposición. Cada una de estas dimensiones describe características esenciales que permiten comprender la naturaleza, el comportamiento y el contexto de uso de los datos.')
          figcaption Nota. Tomado de Benoit Cayla.

    p.mb-0(data-aos="fade-down") En la actualidad, no es posible hablar de datos sin mencionar el papel creciente de la Inteligencia Artificial (IA). Más que una tendencia tecnológica, la IA se ha convertido en un elemento estratégico para empresas, científicos de datos y desarrolladores de software. Sin embargo, su uso excesivo y difuso ha contribuido a que el término pierda claridad, generando confusión sobre su verdadero alcance. Aun así, sus aplicaciones prácticas en la automatización del análisis, la predicción y la optimización de procesos hacen que la IA sea una herramienta imprescindible en cualquier estrategia moderna de datos.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Fuentes de información

    p.mb-4(data-aos="fade-down") Las fuentes de información constituyen un pilar fundamental en los procesos de investigación, análisis y toma de decisiones. Permiten acceder al conocimiento, sustentar argumentaciones y validar resultados. La elección adecuada de las fuentes garantiza la calidad, la objetividad y la veracidad de la información utilizada.
    p.mb-5(data-aos="fade-down") Las fuentes se clasifican, principalmente, en función de su origen, nivel de elaboración del contenido y propósito comunicativo. A continuación, se presentan los principales tipos de fuentes de información:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Fuentes primarias")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img24.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Corresponden a documentos originales que contienen información inédita o datos directos sobre un tema específico. Incluyen investigaciones científicas, informes técnicos, estadísticas oficiales, documentos legales, entrevistas, testimonios y registros históricos. Su valor reside en ofrecer datos de primera mano, sin intermediarios ni interpretaciones previas.

      .py-3.py-md-4(titulo="Fuentes secundarias")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img25.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Se basan en el análisis, interpretación o síntesis de fuentes primarias. Ejemplos comunes son los artículos de revisión, libros de texto, ensayos críticos y enciclopedias. Estas fuentes son útiles para contextualizar la información, facilitar su comprensión y proporcionar una visión más amplia del tema tratado.

      .py-3.py-md-4(titulo="Fuentes terciarias")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img26.jpg', alt='Imagen decorativa')
          .col-lg-5.order-lg-2.order-2
            p Recopilan, organizan y resumen tanto fuentes primarias como secundarias. Manuales, catálogos, índices bibliográficos, guías temáticas y bases de datos pertenecen a esta categoría. Su función principal es facilitar el acceso y la localización de otras fuentes más detalladas.

    p.mb-5(data-aos="fade-down") Las fuentes de información también pueden clasificarse según su procedencia. Estas pueden ser académicas, institucionales, gubernamentales, comerciales o populares. Las fuentes académicas, como artículos publicados en revistas científicas y libros especializados, se distinguen por su rigurosidad metodológica y su proceso de revisión por pares. En contraste, las fuentes comerciales o populares, como blogs, redes sociales o sitios web sin revisión, pueden carecer de objetividad, contener sesgos o carecer de fundamentos científicos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0 El contenido de las fuentes puede ser de tipo cuantitativo (datos numéricos y medibles) o cualitativo (descripciones, opiniones o experiencias), y presentarse de forma estructurada (tablas, gráficos o esquemas) o no estructurada (textos libres, imágenes o audios). La elección del tipo de contenido debe responder al propósito de la consulta o investigación.

    p.mb-5(data-aos="fade-down") Para garantizar la validez y confiabilidad de la información consultada, es necesario aplicar criterios que permitan evaluar la calidad de las fuentes:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Autoridad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Identifica quién es el autor o la institución responsable y valora su experiencia, formación y reconocimiento en el tema.

              .row(numero="2" titulo="Exactitud")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Verifica que los datos sean precisos, contrastables y estén libres de errores.

              .row(numero="3" titulo="Actualidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Considera la fecha de publicación para asegurar que la información sea vigente y relevante.

              .row(numero="4" titulo="Objetividad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Evalúa la neutralidad del contenido, identificado posibles sesgos, intereses comerciales o ideológicos.

              .row(numero="5" titulo="Cobertura")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Analiza si la fuente trata el tema en profundidad, de forma completa y con enfoque integral.

              .row(numero="6" titulo="Verificabilidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Comprueba si la fuente proporciona referencias, citas o evidencia que respalde lo expuesto.
          .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img27.png', alt='Imagen decorativa')

        p.mb-0(data-aos="fade-down") En síntesis, reconocer y seleccionar fuentes confiables es una competencia crítica en el tratamiento de la información. La rigurosidad en este proceso fortalece la solidez de cualquier trabajo investigativo o proyecto de análisis de datos.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Principios éticos en el tratamiento de datos

    p.mb-4(data-aos="fade-down") En un entorno cada vez más digitalizado, el uso responsable de los datos personales se ha convertido en una prioridad ética y legal. El tratamiento adecuado de la información no solo implica el cumplimiento de normativas, sino también el respeto por los derechos fundamentales de las personas, garantizando transparencia, equidad y protección.
    p.mb-5(data-aos="fade-down") Para asegurar una gestión responsable de los datos, se deben considerar los siguientes principios éticos de datos:

    .tarjeta.tarjeta--BG04.p-4.p-md-5.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-botones
          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-5.order-lg-1.order-2
              h4 Legalidad
              p Todo tratamiento de datos debe estar respaldado por una base jurídica clara, en cumplimiento con la normativa vigente. En el contexto colombiano, esto implica adherirse a la Ley 1581 de 2012 y sus decretos reglamentarios.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img28.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-5.order-lg-1.order-2
              h4 Consentimiento informado
              p Los titulares de los datos deben conocer de forma clara y previa cómo, por qué y para qué se recolectan y usan sus datos. Este consentimiento debe ser libre, específico, informado e inequívoco.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img29.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-5.order-lg-1.order-2
              h4 Finalidad
              p Los datos recolectados deben utilizarse exclusivamente para los fines definidos al momento de su obtención. Usos distintos requieren una nueva autorización.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img30.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-5.order-lg-1.order-2
              h4 Seguridad
              p Es necesario implementar medidas técnicas, organizativas y administrativas que garanticen la protección de los datos contra pérdida, manipulación, acceso no autorizado o uso indebido.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img31.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-5.order-lg-1.order-2
              h4 Transparencia
              p Las organizaciones deben proporcionar información clara y accesible sobre el tratamiento de los datos, permitiendo a los titulares ejercer sus derechos de acceso, rectificación, cancelación y oposición.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img32.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo=" ")
            .col-lg-5.order-lg-1.order-2
              h4 Minimización
              p Se deben recolectar únicamente los datos estrictamente necesarios para cumplir con el propósito definido, evitando el exceso de información innecesaria.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img33.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-0
          p.mb-0 Con el crecimiento exponencial de la Inteligencia Artificial (IA), los principios éticos en el tratamiento de datos adquieren una dimensión más compleja. La IA se nutre de grandes volúmenes de datos para entrenar modelos, tomar decisiones y generar predicciones. No obstante, su uso sin un marco ético puede derivar en sesgos algorítmicos, violaciones a la privacidad, discriminación o exclusión de ciertos grupos poblacionales.

    p.mb-4(data-aos="fade-down") En este contexto, se hace urgente establecer marcos regulatorios específicos que rijan el uso de tecnologías emergentes, así como promover una cultura organizacional centrada en la ética del dato. Esta debe basarse en la responsabilidad, la inclusión, la transparencia y el compromiso con la equidad, garantizando que la innovación tecnológica esté al servicio de las personas y no en su contra.
    p.mb-0(data-aos="fade-down") En conclusión, el tratamiento ético de los datos no es solo una obligación legal, sino un imperativo moral en la sociedad contemporánea. Su cumplimiento fortalece la confianza en las instituciones, protege los derechos ciudadanos y promueve un desarrollo tecnológico justo y sostenible.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
