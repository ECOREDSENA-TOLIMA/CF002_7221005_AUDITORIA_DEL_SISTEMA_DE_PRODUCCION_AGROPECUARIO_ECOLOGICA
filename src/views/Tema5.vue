<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Presentación del plan de auditoría

    p.mb-4(data-aos="fade-down") El objetivo principal de la planificación consiste en determinar adecuada y razonablemente, los procedimientos de auditoría que correspondan aplicar, cómo y cuándo se ejecutarán, para que se cumpla la actividad en forma eficiente y efectiva, por lo que es un proceso dinámico, que, si bien se inicia al comienzo de las labores de auditoría, puede modificarse durante la ejecución de la misma.
    p.mb-5(data-aos="fade-down") Para la presentación del plan de auditoría, se deben tener en cuenta algunos criterios que son sumamente importantes, porque definen #[em grosso modo] las características de lo que se hizo con el equipo de trabajo, estos elementos son los siguientes: 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-5.col-10(data-aos="fade-down-right") 
        figure
          img(src='@/assets/curso/temas/tema5/tema5-1.png', alt='')
      .col-md-7(data-aos="fade-down-left")
        ul.lista-ul.ms-4.mb-4(data-aos="fade-down-left")
          li 
            i.fas.fa-circle
            | Nombre de la entidad.
          li 
            i.fas.fa-circle
            | Objetivo de auditoría.
          li 
            i.fas.fa-circle
            | Alcance de auditoría.
          li 
            i.fas.fa-circle
            | Requisitos y normatividad aplicable.
          li 
            i.fas.fa-circle
            | Recursos que se utilizarán: humanos, financieros y tecnológicos.
          li 
            i.fas.fa-circle
            | Procesos que se van a auditar.
          li 
            i.fas.fa-circle
            | Metodología a aplicar.
          li 
            i.fas.fa-circle
            | Tipo de proceso a auditar: estratégico, misional, apoyo, evaluación y control.
          li 
            i.fas.fa-circle
            | Coordinador de la auditoría.
          li 
            i.fas.fa-circle
            | Tiempo determinado para la auditoría.

    p.mb-4(data-aos="fade-down") Para iniciar la auditoría, el director de la auditoría emitirá la orden de trabajo autorizando su ejecución, la cual deberá contener los siguientes elementos:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/info-1.svg', alt='')
      .tarjeta.color-primario.p-3(x="83.4%" y="19%" numero="1")
        .h5.mb-2 Objetivos
        p Establecen los propósitos generales de la auditoría.
      .tarjeta.color-primario.p-3(x="56%" y="42.5%" numero="2")
        .h5.mb-2 Alcance
        p Define claramente lo que será auditado, los límites y las áreas involucradas.
      .tarjeta.color-primario.p-3(x="36.4%" y="8.6%" numero="3")
        .h5.mb-2 Equipo
        p Enumera a los miembros del equipo de auditoría y sus roles.
      .tarjeta.color-primario.p-3(x="60%" y="68%" numero="4")
        .h5.mb-2 Cronograma
        p Indica el período de tiempo en el que se llevará a cabo la auditoría.
      .tarjeta.color-primario.p-3(x="21%" y="27%" numero="5")
        .h5.mb-2 Instrucciones
        p Proporciona directrices y procedimientos específicos para la ejecución de la auditoría.






    p.mb-4(data-aos="fade-down") La auditoría comienza oficialmente con la instalación del equipo en la entidad. En esta etapa inicial, se lleva a cabo la planificación preliminar, y es recomendable que el equipo esté compuesto por el supervisor y el jefe de equipo.
    p.mb-5(data-aos="fade-down") Posteriormente, según la complejidad de las operaciones y los objetivos de la auditoría, se designarán los profesionales necesarios para la planificación específica y la ejecución del trabajo. El director de la auditoría proporcionará al jefe de equipo una carta de presentación que marca el inicio de la comunicación con la administración de la entidad auditada. Esta carta incluirá la lista de los miembros iniciales del equipo, los objetivos del examen, el alcance y cualquier información adicional relevante.



</template>

<script>
export default {
  name: 'Tema5',
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
