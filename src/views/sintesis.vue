<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los fundamentos clave de la inteligencia artificial, su evolución y aplicaciones actuales, con énfasis en la IA generativa y su papel en la transformación digital. Se exploran conceptos como el aprendizaje automático, los tipos de inteligencia artificial, los modelos generativos y la importancia de los prompts para una interacción eficaz con estas herramientas. Asimismo, se introducen estrategias de análisis, visualización de datos y el uso de herramientas tecnológicas que permiten interpretar grandes volúmenes de información, preparando a los aprendices para comprender, aplicar y adaptarse a los avances tecnológicos en entornos personales, académicos y laborales.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta una visión general de la inteligencia artificial, destacando sus tipos, características y evolución, con especial énfasis en la IA generativa y el rol del prompt. También se abordan herramientas para el análisis y la visualización de datos, así como una introducción al aprendizaje automático, permitiendo comprender cómo estas tecnologías se integran en distintos contextos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
