<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Procesamiento y preparación de datos

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de datos es un proceso que inicia mucho antes del uso de herramientas estadísticas o informáticas. Parte de una comprensión profunda sobre qué son los datos, cómo se obtienen, de dónde provienen y bajo qué principios deben ser tratados. Por esta razón, en este apartado se abordan los aspectos fundamentales relacionados con la recolección y caracterización de datos, entendiendo que estos constituyen la base sobre la cual se construyen procesos analíticos, diagnósticos y soluciones efectivas a problemas reales.
        br
    
    p.mb-4(data-aos="fade-down") En este proceso, se desarrollan una serie de actividades sistemáticas que van desde la limpieza básica de datos hasta la transformación y reestructuración profunda de los mismos, con el objetivo de adaptarlos al contexto específico del problema que se desea resolver. Esto incluye tareas como la detección de valores atípicos, el tratamiento de datos faltantes, la normalización de escalas, la codificación de variables categóricas y la integración de diferentes fuentes de información.
    p.mb-0(data-aos="fade-down") Una adecuada preparación de datos no solo garantiza la integridad de los análisis, sino que también mejora el rendimiento de los modelos de inteligencia artificial, minimizando errores, reduciendo sesgos y aumentando la capacidad predictiva. Por ello, esta etapa se considera un requisito indispensable para alcanzar resultados confiables y significativos en cualquier proceso basado en datos.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Técnicas de limpieza de datos

    p.mb-4(data-aos="fade-down") La limpieza de datos es una fase fundamental dentro del procesamiento de datos, ya que garantiza la calidad, consistencia y precisión de la información que será utilizada en los análisis posteriores. A menudo, los datos recolectados presentan errores, valores incompletos, duplicaciones o formatos inconsistentes que pueden afectar la validez de los resultados. Por esta razón, es indispensable aplicar un conjunto de técnicas sistemáticas que permitan corregir, transformar o eliminar estos problemas antes de alimentar modelos analíticos o de inteligencia artificial.
    p.mb-5(data-aos="fade-down") Entre las principales técnicas de limpieza de datos se encuentran:

    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Eliminación o imputación de valores faltantes
            p Los valores ausentes pueden tratarse eliminando filas o columnas incompletas, o bien imputando dichos valores utilizando métodos estadísticos simples (como media, mediana o moda) o técnicas más avanzadas como modelos de regresión, árboles de decisión o algoritmos de imputación múltiple.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img02.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Corrección de valores erróneos o inconsistentes
            p Los datos pueden presentar errores tipográficos, unidades mal definidas o registros ilógicos (como fechas futuras en historiales pasados). Estas inconsistencias se detectan mediante reglas de validación, análisis de dominios de valores o comparación con fuentes confiables.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img03.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Eliminación de duplicados
            p La presencia de registros duplicados genera un sesgo en los análisis. Es común aplicar funciones de duplicación que identifican y eliminan entradas repetidas basadas en claves únicas o atributos combinados.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img04.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Normalización y estandarización
            p Normalización y estandarización: estas técnicas ajustan la escala de los datos numéricos. La normalización transforma los valores para que estén en un rango específico (por ejemplo, entre 0 y 1), mientras que la estandarización los convierte a una distribución con media 0 y desviación estándar 1.
            p Esto es especialmente importante para modelos sensibles a la escala, como los basados en distancia euclidiana.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img05.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Conversión de tipos de datos
            p Asegurar que cada variable tenga el tipo de dato adecuado (números, fechas, booleanos y texto) es fundamental para realizar operaciones precisas y evitar errores en cálculos o visualizaciones.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img06.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Tratamiento de valores atípicos (<em>outliers</em>)
            p Los valores extremos pueden distorsionar los resultados estadísticos o los modelos predictivos. Estos valores se detectan mediante análisis exploratorio y pueden eliminarse, transformarse o mantenerse si son significativos para el fenómeno que se analiza.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img07.jpg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-down") Una correcta ejecución de estas técnicas no solo mejora la calidad de los datos, sino que también optimiza el desempeño de los modelos de inteligencia artificial y aumenta la confiabilidad de los procesos de toma de decisiones basados en datos.
    p.mb-5(data-aos="fade-down") Además, con el auge de la inteligencia artificial generativa, es fundamental comprender los distintos tipos de IA y cómo estos dependen de la calidad de los datos procesados. Una correcta limpieza y preparación de los datos impacta directamente en el rendimiento de los sistemas inteligentes, ya sean descriptivos o generativos. A continuación, se presenta una comparación entre dos enfoques clave de la IA:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Características de la IA Descriptiva y la IA Generativa</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 20%") Característica
                th(style= "width: 40%") IA Descriptiva
                th(style= "width: 40%") IA Generativa
            tbody
              tr
                td Objetivo
                td Analizar y describir datos existentes
                td Crear contenido nuevo a partir de datos
              tr
                td(style="background-color: #F6F6F6") Resultado
                td(style="background-color: #F6F6F6") Informes, visualizaciones y resúmenes
                td(style="background-color: #F6F6F6") Textos, imágenes, música y modelos 3D
              tr
                td Técnica base
                td Estadística, minería de datos y ML supervisado
                td Redes neuronales profundas, GANs y <em>transformers</em>
              tr
                td(style="background-color: #F6F6F6") Ejemplos
                td(style="background-color: #F6F6F6") <em>Tableau</em>, Power BI y <em>dashboards</em>
                td(style="background-color: #F6F6F6") ChatGPT, DALL·E, MidJourney y GitHub Copilot

    p.mb-5(data-aos="fade-down") La diferencia entre estos tipos de inteligencia artificial también se manifiesta en sus aplicaciones prácticas, donde el procesamiento previo de datos es un paso determinante para garantizar la utilidad y eficiencia de los sistemas. Algunos ejemplos destacados incluyen:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .tarjeta--container.row.mb-5
          .col-xl.col-md-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/tema2/img08.svg', alt='Imagen decorativa')
              
            h4.text-center Sector salud 
            p.mb-0 La IA facilita la integración de registros clínicos dispersos (Historias medicas, resultados de laboratorio, prescripciones, etc.) en un único expediente por paciente . Esto se logra mediante algoritmos de aprendizaje  automático y técnicas de duplicación inteligente, lo cual mejora la calidad de la atención y reduce errores administrativos. 

          .col-xl.col-md-6.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-3.col-6
                figure
                  img(src='@/assets/curso/tema2/img09.svg', alt='Imagen decorativa')
              
            h4.text-center Comercio electrónico 
            p.mb-0 En plataformas como Amazon o Mercado Libre, la IA permite consolidar información proveniente de múltiples proveedores (como precios, inventarios o descripciones de productos) a través del reconocimiento de patrones y el procesamiento del lenguaje natural (PLN). Esta integración optimiza la experiencia del usuario, mejora los motores de recomendación y contribuye a una gestión más eficiente  del catálogo.

    p.mb-0(data-aos="fade-down") Este contexto refuerza la importancia del procesamiento y preparación de datos, ya que la capacidad de los sistemas de IA para ofrecer resultados útiles y precisos depende en gran medida de la calidad, integridad y estructura de los datos que reciben.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Preparación de datos para inteligencia artificial

    p.mb-4(data-aos="fade-down") La preparación de datos constituye una fase crítica dentro del ciclo de vida de los proyectos de Inteligencia Artificial (IA) y aprendizaje automático (<em>machine learning</em>). Este proceso abarca una serie de actividades destinadas a transformar los datos crudos en insumos útiles y adecuados para alimentar modelos analíticos. La calidad, integridad y estructura de los datos impactan directamente en el desempeño, precisión y validez de los modelos construidos.
    p.mb-5(data-aos="fade-down") Entre las tareas esenciales en esta etapa se encuentran:

    .row.mb-4
      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/tema2/img10.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C01.p-4.h-100
              h5 Integración de fuentes de datos

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/tema2/img11.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C01.p-4.h-100
              h5 Selección de variables relevantes

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/tema2/img12.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C01.p-4.h-100
              h5 Tratamiento de valores faltantes

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/tema2/img13.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C01.p-4.h-100
              h5 Conversión de formatos 

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/tema2/img14.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C01.p-4.h-100.w-100
              h5.mb-0 Transformación de variables categóricas 

      .col-lg-4.col-12
        .row.justify-content-center
          .col-lg-auto.col-4.px-0.mb-4(data-aos="flip-up")
            .cajon.cajon.C01.p-0.h-100
              img.w-100.my-auto(src='@/assets/curso/tema2/img15.svg' alt="Imagen decorativa")
          .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
            .cajon.cajon.C01.p-4.h-100
              h5 Conversión de formatos 

    p.mb-5(data-aos="fade-down") Todo esto se realiza con el objetivo de garantizar que los datos sean consistentes, completos, estructurados y libres de errores o valores extremos que puedan afectar negativamente el análisis posterior.

    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-12
        .row.justify-content-center.cajon.C02.p-4
          .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-0.px-4
            p En el contexto de la IA, esta preparación también implica alinear los datos con los requerimientos específicos del algoritmo que se va a emplear. Por ejemplo, los modelos de clasificación requieren variables codificadas, mientras que los modelos de redes neuronales suelen necesitar normalización de valores y estructuras matriciales específicas.
            p.mb-0 Además, se deben tener en cuenta aspectos como el sesgo en los datos, la representatividad de las muestras y la ética en el manejo de información sensible, especialmente en aplicaciones como salud, finanzas o justicia. Una adecuada preparación de datos no solo mejora el rendimiento de los modelos, sino que también contribuye a la generación de resultados más confiables, interpretables y útiles para la toma de decisiones.
          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.px-0
            figure
              img(src='@/assets/curso/tema2/img16.png', alt='Imagen decorativa')   

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Estadística descriptiva

    p.mb-4(data-aos="fade-down") La estadística descriptiva es una herramienta fundamental en el análisis de datos, ya que permite resumir, organizar y visualizar la información recopilada de forma clara y comprensible. Este conjunto de técnicas constituye el punto de partida para explorar los datos antes de aplicar modelos más complejos de análisis predictivo o aprendizaje automático. Su función es identificar patrones generales, distribuciones, tendencias y posibles valores atípicos que podrían afectar la interpretación posterior.
    p.mb-5(data-aos="fade-down") Para aplicar la estadística descriptiva correctamente, es importante reconocer los tipos de datos con los que se trabaja:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
          .row(titulo="Cualitativos (categóricos)")
            .col-12.mb-0.mb-md-0
              p Representan cualidades o atributos no numéricos, como el color de un producto o el género de una persona.
          .row(titulo="Cuantitativos (numéricos)")
            .col-12.mb-0.mb-md-0
              p.mb-3 Expresan cantidades y se subdividen en:
              li <b>Discretos</b>: toman valores contables, como el número de hijos o de productos vendidos.
              li <b>Continuos</b>: pueden asumir infinitos valores dentro de un rango, como la altura o el peso.
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img17.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Además, los datos se pueden clasificar según su nivel de medición, lo cual influye en los tipos de análisis estadístico que se pueden realizar:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
        h4.text-center Nominal
        p.text-center Variables categóricas sin un orden definido, como los nombres de ciudades.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/tema2/img19.svg' alt='AvatarTop')
        h4.text-center Ordinal 
        p.text-center Categorías con jerarquía, como los niveles de satisfacción (bajo, medio, alto).

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
        h4.text-center Intervalo 
        p.text-center Variables numéricas sin un cero absoluto, como la temperatura en grados Celsius.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-6
            img(src='@/assets/curso/tema2/img21.svg' alt='AvatarTop')
        h4.text-center Razón 
        p.text-center Variables numéricas con cero absoluto, como los ingresos o el tiempo.

    p.mb-5(data-aos="fade-down") En función de su naturaleza, las variables también se distinguen en:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-6
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img22.svg' alt='AvatarTop').img150
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .p-4
                  h4 Categóricas
                  p Corresponden atributos o cualidades (de nivel nominal u ordinal).

          .col-6
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop').img150
              .tarjeta.tarjeta--C04.py-4(style= "width: 100%")
                .p-4
                  h4 Numéricas
                  p Representan cantidades medibles (de nivel intervalo o ranzón).

    p.mb-5(data-aos="fade-down") Entre las herramientas más utilizadas para describir los datos se encuentran:

    .tarjeta.tarjeta--BG05.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="1")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Histogramas
            p Permiten visualizar la distribución de frecuencias de variables continuas, facilitando el análisis de la forma, la simetría y la dispersión de los datos.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema2/img24.jpg', alt='Imagen decorativa')

        .row(titulo="2")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Tablas de contingencia
            p También conocidas como tablas cruzadas, se utilizan para observar la relación entre dos variables categóricas, identificando patrones conjuntos, dependencias o asociaciones.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema2/img25.jpg', alt='Imagen decorativa')

        .row(titulo="3")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Diagramas de barras
            p Representan frecuencias de variables categóricas. Son útiles para comparar categorías de forma clara y rápida.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema2/img26.jpg', alt='Imagen decorativa')

        .row(titulo="4")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Diagramas de caja (boxplots)
            p Muestran la mediana, los cuartiles y los valores atípicos de una variable numérica. Son especialmente útiles para comparar distribuciones entre grupos.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema2/img27.jpg', alt='Imagen decorativa')

        .row(titulo="5")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Medidas de tendencia central y dispersión
            p Como la media, mediana, moda, rango, desviación estándar y varianza. Estas permiten resumir cuantitativamente el comportamiento de una variable.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema2/img28.jpg', alt='Imagen decorativa')

        .row(titulo="6")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Diagramas de dispersión(scatter plots) 
            p Permiten explorar la relación entre dos variables numéricas, ayudando a identificar correlaciones o tendencias.
          .col-lg-6.order-lg-1.order-1
            figure
              img(src='@/assets/curso/tema2/img29.jpg', alt='Imagen decorativa')
              
    p.mb-0(data-aos="fade-down") El uso adecuado de estas herramientas permite obtener una primera comprensión del comportamiento de los datos y facilita la toma de decisiones informadas antes de implementar modelos analíticos o predictivos más avanzados.


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
