<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Análisis y visualización de datos

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La visualización y el análisis de datos son procesos fundamentales en la toma de decisiones basada en evidencia. Permiten identificar patrones, relaciones y tendencias ocultas dentro de grandes volúmenes de información. A través del uso de herramientas digitales, es posible representar los datos de forma gráfica e interactiva, facilitando su comprensión y comunicación. Al combinar la visualización con técnicas de análisis, se obtiene una visión más profunda que puede aplicarse en múltiples campos, desde la gestión empresarial hasta la investigación científica. Este apartado introduce herramientas clave de visualización y analítica, así como una primera aproximación al aprendizaje automático como extensión del análisis avanzado.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Herramientas de visualización de datos

    p.mb-4(data-aos="fade-down") La visualización de datos consiste en representar gráficamente información compleja para facilitar su interpretación. Este proceso convierte cifras y registros en gráficos, mapas, tablas dinámicas o <em>dashboards</em> interactivos, que permiten detectar patrones, comparaciones y comportamientos de manera intuitiva. Las herramientas de visualización no solo ayudan a comunicar hallazgos de forma clara, sino que también son clave para la exploración inicial de los datos y la toma de decisiones estratégicas.
    p.mb-5(data-aos="fade-down") Entre las herramientas más utilizadas se encuentran:

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Microsoft Power BI" :icono="require('@/assets/curso/tema4/img02.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Permite crear informes interactivos, integrarse con múltiples fuentes de datos y compartir visualizaciones en la nube.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img03.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="<em>Tableau</em>" :icono="require('@/assets/curso/tema4/img04.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Se destaca por su capacidad de crear <em>dashboards</em> dinámicos, con una interfaz intuitiva que facilita el análisis visual.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img05.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Google Data Studio (ahora Looker Studio)" :icono="require('@/assets/curso/tema4/img06.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Una solución gratuita y accesible que permite generar informes personalizados a partir de datos de hojas de cálculo, Google Analytics, entre otros.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img07.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Excel" :icono="require('@/assets/curso/tema4/img08.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Aunque tradicional, sigue siendo útil para representaciones básicas como gráficos de barras, líneas o sectores, especialmente en entornos no especializados.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img09.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Plotly, D3.js y Matplotlib" :icono="require('@/assets/curso/tema4/img10.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Bibliotecas de programación que permiten desarrollar visualizaciones más avanzadas y personalizadas, especialmente en entornos de análisis con Python o JavaScript
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img11.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") Estas herramientas ayudan a convertir datos en conocimiento, promoviendo una cultura de toma de decisiones informada y basada en evidencias.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Herramientas de analítica de datos

    p.mb-4(data-aos="fade-down") La analítica de datos se refiere al conjunto de técnicas y herramientas utilizadas para examinar, procesar e interpretar grandes volúmenes de información con el fin de obtener conclusiones útiles. Este proceso abarca desde el análisis descriptivo (que resume lo que ocurrió), hasta el análisis predictivo (que anticipa tendencias futuras) y el análisis prescriptivo (que sugiere acciones óptimas basadas en los datos).
    p.mb-5(data-aos="fade-down") Entre las herramientas más representativas se encuentran:

    .row.justify-content-center.align-items-center
      .col-lg-10.col-12
        PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-1.order-2(data-aos="fade-down")
              h4 Excel con Power Query y Power Pivot 
              p Utilizadas para análisis exploratorios, combinación de fuentes de datos y creación de modelos simples.
            .col-lg-6.col-md-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4.order-md-2.order(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema4/img12.jpg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-4.col-10.mb-3.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema4/img13.jpg', alt='Imagen decorativa')
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2(data-aos="fade-down")
              h3 Python y sus bibliotecas (Pandas, NumPy y Scikit-learn)
              p Ampliamente empleadas en la analítica avanzada y el desarrollo de modelos predictivos y algoritmos de <em>machine learning</em>.

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-1.order-2(data-aos="fade-down")
              h3 R
              p Un lenguaje especializado en estadística, ideal para análisis profundos y visualización avanzada de datos.
            .col-lg-6.col-md-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4.order-md-2.order(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema4/img14.jpg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-4.col-10.mb-3.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema4/img15.jpg', alt='Imagen decorativa')
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2(data-aos="fade-down")
              h3 Google BigQuery
              p Una solución en la nube que permite el análisis de grandes volúmenes de datos con alto rendimiento.

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-1.order-2(data-aos="fade-down")
              h3 Apache Hadoop y Apache Spark
              p Diseñadas para procesar datos masivos distribuidos, son comunes en entornos de <em>big data</em>.
            .col-lg-6.col-md-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4.order-md-2.order(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema4/img16.jpg', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-4.col-10.mb-3.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1(data-aos="fade-up")
              figure
                img(src='@/assets/curso/tema4/img17.jpg', alt='Imagen decorativa')
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2(data-aos="fade-down")
              h3 RapidMiner y KNIME
              p Plataformas que permiten realizar analítica predictiva sin necesidad de programación avanzada, a través de interfaces visuales.

    .row.justify-content-center
      .col-lg-10.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0 Estas herramientas permiten a las organizaciones y profesionales comprender mejor sus datos, mejorar procesos, identificar oportunidades y optimizar recursos mediante decisiones basadas en evidencia cuantitativa.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Introducción al aprendizaje automático <em>(machine learning)</em>

    p.mb-4(data-aos="fade-down") El aprendizaje automático, o <em>machine learning</em>, es una disciplina dentro de la inteligencia artificial que se enfoca en desarrollar sistemas capaces de aprender de los datos y mejorar su desempeño con el tiempo sin necesidad de programación explícita. A diferencia de los algoritmos tradicionales que siguen instrucciones fijas, los modelos de <em>machine learning</em> detectan patrones, hacen inferencias y toman decisiones a partir de grandes volúmenes de datos, lo que los hace altamente adaptables a tareas complejas y cambiantes.
    p.mb-5(data-aos="fade-down") Este enfoque se clasifica principalmente en tres tipos:

    .row.mb-5
        .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/img18.svg' alt='AvatarTop')
            .tarjeta.tarjeta--C03(style= "width: 100%")
              .p-4
                h4.text-center Aprendizaje supervisado
                p.mb-0.text-center En el que se entrena un modelo con datos etiquetados, es decir, datos de entrada con sus respectivas salidas esperadas, para que pueda predecir resultados similares con nuevos datos.

        .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/img19.svg' alt='AvatarTop')
            .tarjeta.tarjeta--C03(style= "width: 100%")
              .p-4
                h4.text-center Aprendizaje no supervisado
                p.mb-0.text-center Que se utiliza cuando los datos no tienen etiquetas y el sistema busca estructuras o agrupaciones dentro de ellos, como patrones ocultos o segmentos similares.

        .col-lg-4.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/img20.svg' alt='AvatarTop')
            .tarjeta.tarjeta--C03(style= "width: 100%")
              .p-4
                h4.text-center Aprendizaje por refuerzo
                p.mb-0.text-center Donde el modelo aprende a través de la interacción con su entorno, recibiendo recompensas o penalizaciones en función de sus decisiones, lo que refuerza comportamientos óptimos con el tiempo.

    .row.justify-content-center
      .col-lg-10.col-12.order-lg-1.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-5
          p.mb-0 El <em>machine learning</em> es una tecnología clave en muchas aplicaciones actuales, como los motores de recomendación de plataformas de streaming, la detección de fraudes financieros, el diagnóstico médico asistido por IA, los asistentes virtuales, y los sistemas de predicción de demanda. Además, es la base de desarrollos más avanzados como el reconocimiento facial, los vehículos autónomos y los modelos generativos actuales.
        p.mb-0(data-aos="fade-down") A medida que el volumen de datos crece, el aprendizaje automático se convierte en una herramienta esencial para convertir esa información en conocimiento útil y decisiones automatizadas que optimicen procesos en prácticamente todos los sectores económicos y científicos.

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
