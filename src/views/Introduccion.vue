<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") Este componente formativo aborda los fundamentos esenciales para la recolección, procesamiento, análisis y visualización de datos, integrando herramientas de inteligencia artificial (IA) que potencian su uso en distintos contextos. A lo largo del contenido, se exploran tipos y fuentes de datos, principios éticos para su tratamiento, técnicas de preparación y limpieza, así como nociones clave de estadística descriptiva. Además, se profundiza en el papel de la IA en el procesamiento de datos, diferenciando entre IA generativa y descriptiva, y se presentan herramientas tecnológicas actuales para su análisis y visualización. Esta formación busca fortalecer competencias técnicas necesarias para integrar datos de forma eficiente y responsable en procesos apoyados por inteligencia artificial. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center.mb-0           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/yf6TZR2lQfk?si=zfKpL8CTyHcxYpg3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
