<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7(data-aos="fade-down-right")
        p El término buenas prácticas hace referencia a todas aquellas experiencias que se guíen por principios, objetivos y procedimientos apropiados y que se adecúen a alguna determinada perspectiva normativa, así como también todas aquellas acciones que han presentado excelentes resultados para el desarrollo en un determinado contexto, esperando que en similares condiciones se presenten resultados exitosos.
        p Las buenas prácticas tienen características específicas y beneficios que las definen, como aquellas que se describen a continuación.     
      .col-md-5(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-1.svg', alt='')


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Características")
        .col-md-7.mb-4.mb-md-0
          ol.lista-ol--cuadro.ms-3.ms-md-4.mb-5(data-aos="fade-down-left")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Alcanzan resultados exitosos. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Son sostenibles en el tiempo, manteniéndose y produciendo efectos duraderos.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Tienen capacidades innovadoras. 
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Disminuyen el riesgo.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Responden a necesidades específicas.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Sistematizan procesos y resultados.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Tienen presente la evaluación, retroalimentación y reorganización de las acciones.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-2.png', alt='')
      .row(titulo="Beneficios")
        .col-md-7.mb-4.mb-md-0
          ol.lista-ol--cuadro.ms-3.ms-md-4.mb-5(data-aos="fade-down-left")
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Minimizan errores mediante una correcta planificación.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Permiten el uso eficaz y eficiente de los recursos necesarios en el proceso productivo.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Ayudan a la obtención de mejores resultados.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Favorecen la organización de los participantes del proyecto.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Definen el éxito del proyecto.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Se pueden aplicar ampliamente y en diferentes gamas de industrias.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')



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
