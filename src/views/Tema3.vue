<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Inteligencia Artificial (IA) aplicada al tratamiento de datos

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto, origen y evolución de la inteligencia artificial

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Funciones y aplicaciones de la IA en el procesamiento de datos

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Tipologías de IA: descriptiva, predictiva y generativa

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 IA generativa: características, usos y retos

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Interacción con modelos generativos: el papel del <em>prompt</em>

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
