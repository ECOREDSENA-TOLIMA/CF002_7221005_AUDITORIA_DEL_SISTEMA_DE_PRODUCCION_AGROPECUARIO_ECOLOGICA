<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") En la auditoría del sistema de producción agropecuaria ecológica, es de vital importancia realizar un plan de auditoría, por lo que este componente es clave para formar el perfil que se pretende lograr al final del proceso de aprendizaje; por esta razón, le invitamos a revisar el video que a continuación se muestra, el cual deja ver los temas que se van a manejar y que le permitirán fortalecer su competencia como auditor de dichas empresas:
    
    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Plan de auditoría" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Plan de auditoría

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
