<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Inteligencia Artificial (IA) aplicada al tratamiento de datos
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La inteligencia artificial ha transformado el tratamiento de datos al facilitar el procesamiento de grandes volúmenes de información de manera eficiente, precisa y automatizada. Sus aplicaciones abarcan desde tareas básicas como la limpieza, organización y clasificación de datos, hasta procesos avanzados como la detección de patrones, el análisis predictivo y la generación automática de contenido. Este apartado aborda los principales enfoques, características y tipos de inteligencia artificial que fortalecen la gestión y el análisis de datos, con especial atención a las capacidades y desafíos actuales de la inteligencia artificial generativa.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto, origen y evolución de la inteligencia artificial

    p.mb-5(data-aos="fade-down") La inteligencia artificial (IA) es una rama de la informática que estudia y desarrolla sistemas capaces de realizar tareas que, tradicionalmente, requieren inteligencia humana, como el razonamiento lógico, la resolución de problemas, el reconocimiento de patrones, el aprendizaje y la toma de decisiones. Su evolución ha sido continua y se puede dividir en etapas que reflejan avances científicos, tecnológicos y filosóficos significativos.

    LineaTiempoE.color-acento-contenido(data-aos="flip-up")
      .row(titulo="Década de 1950" subtitulo="Los orígenes")
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
          p El término “inteligencia artificial” fue acuñado en 1956 durante la Conferencia de Dartmouth, organizada por John McCarthy, Marvin Minsky, Claude Shannon y Nathaniel Rochester, considerada el punto de partida oficial del campo. Previamente, Alan Turing había propuesto en 1950 el célebre “Test de Turing” como criterio para determinar si una máquina puede exhibir un comportamiento inteligente indistinguible del humano. En esta etapa se desarrollan los primeros programas simbólicos como Logic Theorist (1955) y General Problem Solver (1957).
        .col-lg-6(data-aos="fade-up")
          figure
            img(src='@/assets/curso/tema3/img02.jpg', alt='Imagen decorativa')

      .row(titulo="Décadas de 1960 y 1970" subtitulo="Primeros logros y limitaciones")
        .col-lg-6(data-aos="fade-up")
          figure
            img(src='@/assets/curso/tema3/img03.jpg', alt='Imagen decorativa')
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
          p Se crean los primeros lenguajes de programación orientados a IA, como LISP (1958), y surgen programas capaces de demostrar teoremas y jugar ajedrez. Sin embargo, las expectativas iniciales no se cumplieron del todo, lo que provocó una disminución del financiamiento y la entrada en el llamado “invierno de la IA”.

      .row(titulo="Décadas de 1980" subtitulo="Auge de los sistemas expertos")
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
          p La IA resurge con fuerza gracias al desarrollo de los sistemas expertos, programas capaces de emular el razonamiento humano en contextos específicos, como el diagnóstico médico (ej. MYCIN) o la ingeniería (ej. XCON de Digital Equipment Corporation). Se refuerzan conceptos como las redes semánticas, los motores de inferencia y las bases de conocimiento.
        .col-lg-6(data-aos="fade-up")
          figure
            img(src='@/assets/curso/tema3/img04.jpg', alt='Imagen decorativa')

      .row(titulo="Décadas de 1990 y 2000" subtitulo="Expansión del aprendizaje automático")
        .col-lg-6(data-aos="fade-up")
          figure
            img(src='@/assets/curso/tema3/img05.jpg', alt='Imagen decorativa')
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
          p El avance del <em>machine learning</em> y el aumento del poder computacional propician una nueva era. Se perfeccionan algoritmos como las máquinas de soporte vectorial (SVM), los árboles de decisión y las primeras redes neuronales profundas. Un hito destacado fue en 1997, cuando Deep Blue (IBM) derrotó al campeón mundial de ajedrez Garry Kasparov.

      .row(titulo="Desde 2010 hasta la actualidad" subtitulo="El auge del <em>deep learning</em> y la IA generativa")
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
          p El desarrollo de modelos basados en aprendizaje profundo (<em>deep learning</em>), impulsado por redes neuronales convolucionales y grandes volúmenes de datos (<em>big data</em>), lleva la IA a nuevos niveles de rendimiento. Destacan logros como AlphaGo (DeepMind, 2016), capaz de vencer a jugadores profesionales del complejo juego Go, y el surgimiento de modelos generativos como GPT (OpenAI), BERT (Google) o DALL·E, capaces de producir texto, imágenes y sonido con altos niveles de coherencia y creatividad. Estas herramientas redefinen la relación entre humanos y máquinas, con aplicaciones en educación, salud, arte y ciencia.
        .col-lg-6(data-aos="fade-up")
          figure
            img(src='@/assets/curso/tema3/img06.jpg', alt='Imagen decorativa')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Funciones y aplicaciones de la IA en el procesamiento de datos

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-1.order-2
            .cajon.cajon.C01.color-primario.p-4.mb-3
              p.mb-0 La Inteligencia Artificial (IA) es una rama de la informática que busca desarrollar sistemas capaces de simular el pensamiento humano y aprender a partir de datos. En el contexto del análisis de datos, la IA permite procesar grandes volúmenes de información, identificar patrones, hacer predicciones y tomar decisiones automatizadas, contribuyendo a la eficiencia y precisión en diversos procesos.
            p(data-aos="fade-down") Dentro de la IA se encuentran subcampos como el <em>machine learning</em> (aprendizaje automático) y el <em>deep learning</em> (aprendizaje profundo), los cuales permiten entrenar algoritmos con datos para mejorar su desempeño sin necesidad de programación explícita. Además, técnicas como el procesamiento de lenguaje natural (NLP, por sus siglas en inglés) posibilitan la interpretación y generación de lenguaje humano, ampliando las aplicaciones de la IA al análisis de textos, conversaciones y documentos.
            p(data-aos="fade-down") A continuación, se presenta la relación jerárquica entre algunos componentes clave de la inteligencia artificial:
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema3/img07.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <i>Áreas de la inteligencia artificial</i>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img08.svg', alt='En la figura 3 se presenta la relación jerárquica entre algunos componentes clave de la inteligencia artificial. Describe cómo el <em>machine learning</em> y el <em>deep learning</em> forman parte del campo más amplio de la inteligencia artificial, junto con otras técnicas especializadas como el NLP.')
            figcaption Nota. Adaptado de Benoit Cayla (2024).
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/img09.svg', alt='En la figura 3 se presenta la relación jerárquica entre algunos componentes clave de la inteligencia artificial. Describe cómo el <em>machine learning</em> y el <em>deep learning</em> forman parte del campo más amplio de la inteligencia artificial, junto con otras técnicas especializadas como el NLP.')
          figcaption Nota. Adaptado de Benoit Cayla (2024).

    p.mb-4(data-aos="fade-down") Esta figura describe cómo el <em>machine learning</em> y el <em>deep learning</em> forman parte del campo más amplio de la inteligencia artificial, junto con otras técnicas especializadas como el NLP (Natural Language Processing).
    p.mb-5(data-aos="fade-down") La IA desempeña un papel fundamental en el ciclo de vida de los datos, desde su recolección y limpieza hasta su análisis e interpretación. Sus capacidades automatizadas permiten optimizar tareas complejas, reducir errores y extraer información valiosa de fuentes estructuradas y no estructuradas. Entre sus funciones más destacadas se encuentran:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Automatización del análisis")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Los algoritmos de IA procesan rápidamente millones de registros, detectando patrones, anomalías y relaciones que serían difíciles de identificar de forma manual.

              .row(numero="2" titulo="Limpieza y transformación de datos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La IA identifica errores, elimina duplicados, completa datos faltantes y normaliza variables, mejorando la calidad del conjunto de datos.

              .row(numero="3" titulo="Clasificación y segmentación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Mediante modelos supervisados y no supervisados como árboles de decisión o técnicas de <em>clustering</em>, la IA agrupa elementos y clasifica información según características comunes.

              .row(numero="4" titulo="Predicción y prescripción")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Con base en datos históricos, la IA puede prever comportamientos futuros y recomendar acciones específicas para mejorar procesos y resultados.

              .row(numero="5" titulo="Procesamiento de datos no estructurados")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Gracias a tecnologías como NLP y visión por computador, la IA puede analizar texto, audio, imágenes y videos, facilitando la gestión de datos complejos.
          .col-lg-5.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img10.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") La inteligencia artificial ha demostrado ser una herramienta versátil, aplicable a diversos sectores económicos y sociales. Sus soluciones permiten automatizar tareas, optimizar recursos y apoyar la toma de decisiones basada en datos. Algunas de sus aplicaciones más representativas incluyen:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img11.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Empresas
            h5.t2.mb-2 Empresas
            p.mb-0 Optimización de procesos internos, segmentación de clientes, análisis predictivo y toma de decisiones basada en datos.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img12.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Gobierno
            h5.t2.mb-2 Gobierno
            p.mb-0 Monitoreo de servicios públicos, análisis de políticas, prevención del delito y mejora en la atención  ciudadana.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img13.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Salud
            h5.t2.mb-2 Salud
            p.mb-0 Diagnóstico asistido por IA, análisis de historias clínicas, predicción de brotes epidemiológicos y personalización del tratamiento médico.

    p.mb-5(data-aos="fade-down") Actualmente, existen áreas específicas en las que la IA ha alcanzado un desarrollo significativo, impactando de manera directa distintos campos del conocimiento y la industria. Estos ámbitos concentran importantes avances tecnológicos e investigaciones:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Apoyo a la toma de decisiones")
            .col-12.mb-0.mb-md-0
              p Más allá de la automatización tradicional, la IA permite tomar decisiones en entornos inciertos y dinámicos. Por ejemplo, en el sector salud, sistemas inteligentes analizan bases de datos clínicas estructuradas y no estructuradas para apoyar diagnósticos médicos con mayor precisión. En el comercio electrónico, los motores de recomendación personalizan ofertas según el comportamiento del usuario, optimizando la experiencia del cliente.
          .row(titulo="Visión por Computadora (Computer Vision)")
            .col-12.mb-0.mb-md-0
              p.mb-3 Gracias al <em>deep learning</em> y al avance de la capacidad computacional, las máquinas pueden interpretar imágenes y videos con una precisión similar a la humana. Algunas de sus aplicaciones más relevantes son:
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Clasificación de objetos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Detección y localización en imágenes.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Reconocimiento facial.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Reconocimiento óptico de caracteres (OCR).
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Procesamiento inteligente de documentos (IDP).
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Segmentación y reconstrucción de imágenes.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Análisis médico por imágenes y gestión urbana (monitoreo del tráfico y lectura de matrículas).
          .row(titulo="Procesamiento del Lenguaje Natural (NLP)")
            .col-12.mb-0.mb-md-0
              p.mb-3 Permite a las máquinas comprender, interpretar y generar lenguaje humano. Esta disciplina combina análisis fonético, léxico, semántico, sintáctico y prosódico para lograr una interacción fluida con los usuarios. Entre sus aplicaciones más comunes se encuentran:
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Asistentes virtuales.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Traducción automática.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Clasificación de textos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Análisis de sentimientos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Generación de contenido automatizado.
                  
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img14.png', alt='Imagen decorativa')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Tipologías de IA: descriptiva, predictiva y generativa

    p.mb-5(data-aos="fade-down") La inteligencia artificial puede clasificarse en función del tipo de análisis que realiza y del valor que aporta a la gestión de los datos. Las tres principales tipologías son la inteligencia artificial descriptiva, predictiva y generativa. Cada una de ellas cumple funciones específicas y tiene aplicaciones en distintos sectores productivos.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema3/img15.png", alt="Imagen decorativa").img280
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img16.svg", alt="Imagen decorativa").img100
            .col
              h4 IA descriptiva
              p.mb-3 Analiza datos históricos y actuales para identificar patrones, tendencias y relaciones. Su propósito es responder a la pregunta “¿qué ha pasado?”.
              p <b>Ejemplo</b>: los tableros de control en herramientas como Power BI o <em>Tableau</em> que muestran métricas de rendimiento de una empresa en tiempo real.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img17.svg", alt="Imagen decorativa").img100
            .col
              h4 IA predictiva
              p.mb-3 Utiliza modelos estadísticos y de aprendizaje automático para anticipar lo que podría suceder, con base en datos previos. Responde a la pregunta “¿qué podría pasar?”.
              p <b>Ejemplo</b>: un sistema bancario que predice el riesgo de impago de un cliente o una app de transporte que estima el tiempo de llegada según el tráfico y la ruta.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/img18.svg", alt="Imagen decorativa").img100
            .col
              h4 IA generativa
              p.mb-3 Es capaz de crear contenido nuevo a partir de grandes volúmenes de datos. No se limita a analizar o predecir, sino que genera textos, imágenes, música o código. Responde a “¿qué puedo crear?”.
              p <b>Ejemplo</b>: herramientas como ChatGPT que redactan textos o responden preguntas, y plataformas como DALL·E que crean imágenes originales a partir de descripciones escritas.


    p.mb-0(data-aos="fade-down") En muchos entornos digitales, estas tipologías se complementan. Por ejemplo, una plataforma de comercio electrónico puede describir el comportamiento de los usuarios (descriptiva), predecir qué productos comprarán (predictiva) y generar automáticamente anuncios personalizados (generativa).

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 IA generativa: características, usos y retos

    p.mb-5(data-aos="fade-down") La inteligencia artificial generativa se refiere a un tipo de IA capaz de crear contenido nuevo y original a partir de datos existentes. A diferencia de los modelos tradicionales que se centran en clasificar o predecir, los modelos generativos imitan patrones complejos para producir textos, imágenes, sonidos, videos, código y otros formatos.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Características principales de la IA generativa

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-01.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Creatividad algorítmica
          p.text-center Utiliza modelos entrenados con grandes volúmenes de datos para generar contenido que simula la creatividad humana.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-02.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Aprendizaje profundo
          p.text-center Se basa en redes neuronales profundas, especialmente en arquitecturas como los <em>transformers</em>, que permiten entender contextos complejos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-03.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Interacción con lenguaje natural
          p.text-center Acepta instrucciones o <em>prompt</em> en lenguaje humano, facilitando su uso por personas sin conocimientos técnicos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-04.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Generalización
          p.text-center Puede producir resultados que no están literalmente en los datos de entrenamiento, sino que combinan elementos para formar algo nuevo.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Usos actuales de la IA generativa

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center
          .col-lg-9.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-3
            .tarjeta.tarjeta--C04.p-4
              ul.lista-ul.mb-0
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Comunicación</b>: redacción automática de textos, generación de resúmenes, traducción de idiomas, chatbots conversacionales.
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Diseño e imagen</b>: creación de ilustraciones, logotipos, renders o imágenes a partir de descripciones.
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Educación</b>: generación de actividades, retroalimentación automática o explicaciones personalizadas para estudiantes.
                li.mb-3
                  i.lista-ul__vineta
                  p.mb-0 <b>Entretenimiento</b>: producción de guiones, música, personajes o mundos virtuales.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 <b>Programación</b>: asistentes que generan código a partir de instrucciones en lenguaje natural.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img19.png', alt='Imagen decorativa')

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Retos y desafíos

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema3/img20.svg", alt="alt").img90.m-auto
          h4.text-center Ética y desinformación
          p.text-center.mb-0 El contenido generado puede ser indistinguible del creado por humanos, lo que plantea riesgos relacionados con noticias falsas, plagio o suplantación.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema3/img21.svg", alt="alt").img90.m-auto
          h4.text-center Propiedad intelectual
          p.text-center.mb-0 La autoría y los derechos sobre lo generado por IA son aún objeto de debate legal.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema3/img22.svg", alt="alt").img90.m-auto
          h4.text-center Sesgos algorítmicos
          p.text-center.mb-0 Los modelos pueden reproducir estereotipos o prejuicios presentes en los datos con los que fueron entrenados.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/tema3/img23.svg", alt="alt").img90.m-auto
          h4.text-center Uso responsable
          p.text-center.mb-0 Se requiere desarrollar criterios y marcos regulatorios que garanticen un uso justo, inclusivo y transparente.

    p.mb-5(data-aos="fade-down") A medida que la inteligencia artificial generativa evoluciona, surgen múltiples herramientas que permiten materializar su potencial en distintos campos. Estas soluciones, desarrolladas por empresas tecnológicas líderes, ya se utilizan ampliamente en entornos creativos, educativos, profesionales e industriales. A continuación, se presentan algunos ejemplos representativos de estas herramientas, organizados según el tipo de contenido que generan:

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop')
          h4.text-center Generación de texto
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 Chat GPT (OpenAI)
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Claude (Anthropic)
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Gemini (Google)
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Copilot (Microsoft)          

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop')
          h4.text-center Generación de imágenes 
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 DALL- E (OpenAI)
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Midjourney
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Stable Disffusion

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop')
          h4.text-center Generación de música y audio
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 Suno AI
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 AIVA
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Voicemod

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img27.svg' alt='AvatarTop')
          h4.text-center Generación de video
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 Sora (OpenAI)
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Runway Gén-2 
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Pika

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img28.svg' alt='AvatarTop')
          h4.text-center Asistentes de Código
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              p.mb-0 GitHub Copilot
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 CodeWhispeper (Amazon)
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Codey (Google)

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estos ejemplos presentan cómo la IA generativa ya está integrada en múltiples industrias, aportando eficiencia, creatividad y nuevas formas de interacción entre humanos y máquinas.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Interacción con modelos generativos: el papel del <em>prompt</em>

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") En el campo de la inteligencia artificial generativa, un <em>prompt</em> es la entrada o instrucción que se le proporciona a un modelo para obtener una respuesta específica. Puede ser una pregunta, una frase, una descripción o incluso una serie de directrices detalladas. Es el punto de partida desde el cual la IA genera contenido textual, visual, sonoro o de otro tipo.
            .cajon.cajon.C01.p-4.mb-3
              p.mb-0 Cuanto más clara y específica sea la instrucción, mayor será la calidad y relevancia de la respuesta. Por ejemplo, un <em>prompt</em> genérico como “Escribe sobre el reciclaje” generará una salida básica, mientras que una solicitud más estructurada como “Redacta un artículo de 300 palabras sobre los beneficios del reciclaje en zonas urbanas de América Latina, dirigido a estudiantes de secundaria”, producirá una respuesta más precisa y contextualizada.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema3/img29.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Para comprender mejor cómo influye un <em>prompt</em> bien formulado en la calidad de las respuestas generadas por la IA, se presenta a continuación una situación cotidiana. A través de este ejemplo, se evidencia cómo la claridad, el contexto y los detalles proporcionados pueden transformar una solicitud simple en una solución personalizada y útil.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .row.justify-content-center
          .col-lg-7.col-12.order-lg-2.order-2
            .cajon.cajon.C03.color-secundario.p-4.mb-3
              p Era una tarde de marzo y Laura, madre de dos niños pequeños y apasionada por los viajes, se sentó frente a su computador con un reto: organizar unas vacaciones memorables para junio de 2024. Cansada de intentos fallidos, decidió probar algo nuevo. Abrió ChatGPT y escribió:
              p “Actúa como un experto en viajes”. Luego especificó: “¿Me puedes preparar un itinerario personalizado para nuestras vacaciones?”.
              p Pero sabía que la clave estaba en los detalles, así que agregó: 
              p “Queremos viajar a un país asiático durante 21 días. No más de cuatro días por ciudad. Buscamos playas y metrópolis, evitar aglomeraciones, buen precio y al menos un parque acuático. Nuestro presupuesto es de 6.000 euros para dos adultos y dos niños. Queremos una agenda día por día”.
              p.mb-0 En segundos, la IA propuso un itinerario adaptado a su ritmo, presupuesto e intereses. Laura comprendió entonces que un buen <em>prompt</em> convierte a la inteligencia artificial en una verdadera asistente personal.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema3/img30.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Para optimizar los resultados con herramientas generativas, se recomienda incluir los siguientes elementos en la redacción del <em>prompt</em>:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            .tarjeta.tarjeta--C04.p-4.mb-3
              ol.lista-ol--cuadro
                li.mb-2 
                  .lista-ol--cuadro__vineta.v--green
                    span 1.
                  p.mb-0 Definir el tono: académico, informal, técnico, etc.
                li.mb-2 
                  .lista-ol--cuadro__vineta.v--green
                    span 2.
                  p.mb-0 Establecer restricciones claras: extensión, formato y estilo.
                li.mb-2 
                  .lista-ol--cuadro__vineta.v--green
                    span 3.
                  p.mb-0 Especificar idioma y público objetivo.
                li.mb-2 
                  .lista-ol--cuadro__vineta.v--green
                    span 4.
                  p.mb-0 Indicar el propósito de la respuesta.
                li.mb-2 
                  .lista-ol--cuadro__vineta.v--green
                    span 5.
                  p.mb-0 Asignar un rol a la IA (experto, asesor, crítico, etc.).
                li.mb-2 
                  .lista-ol--cuadro__vineta.v--green
                    span 6.
                  p.mb-0 Proporcionar contexto, ejemplos o antecedentes.
                li.mb-0 
                  .lista-ol--cuadro__vineta.v--green
                    span 7.
                  p.mb-0 Pedir balance de opiniones, referencias, datos estadísticos o elementos visuales, si es necesario.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/tema3/img31.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        p(data-aos="fade-down") Los <em>prompts</em> pueden adaptarse a múltiples propósitos según las necesidades del usuario. A continuación, se presentan ejemplos orientados a diversos contextos, como la generación de textos, la solución de problemas, la planificación de tareas o la creación de contenidos visuales, mostrando cómo la redacción adecuada influye en la calidad de las respuestas.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Ejemplos de prompt</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 20%") Tipo de contenido
                th(style= "width: 40%") <em>Prompt</em> ejemplo
                th(style= "width: 40%") Objetivo del usuario
            tbody
              tr
                td Texto (ChatGPT)
                td Actúa como sociólogo. Explica en 200 palabras cómo influye la tecnología en la interacción social.
                td Obtener un texto argumentativo académico.
              tr
                td(style="background-color: #F6F6F6") Imagen (DALL·E, Midjourney)
                td(style="background-color: #F6F6F6") Ilustra una biblioteca futurista en medio del desierto, con arquitectura orgánica y cielo estrellado.
                td(style="background-color: #F6F6F6") Generar una imagen conceptual creativa.
              tr
                td Código (ChatGPT, Copilot)
                td Crea una función en Python que convierta grados Celsius a Fahrenheit con validación de entrada.
                td Resolver una tarea de programación.
              tr
                td(style="background-color: #F6F6F6") Música (Soundraw, Amper)
                td(style="background-color: #F6F6F6") Compón una pista ambiental con sonidos naturales y ritmo suave para usar en sesiones de meditación.
                td(style="background-color: #F6F6F6") Generar música personalizada.
              tr
                td Video (Sora, Synthesia)
                td Crea un video animado con voz en off explicando qué es la IA generativa, en menos de 90 segundos.
                td Crear un recurso educativo visual.

    p.mb-0(data-aos="fade-down") Estos ejemplos ilustran cómo un <em>prompt</em> bien formulado permite aprovechar al máximo las capacidades de los modelos generativos, transformando simples solicitudes en soluciones complejas, creativas y útiles.

</template>

<script>
export default {
  name: 'Tema3',
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
