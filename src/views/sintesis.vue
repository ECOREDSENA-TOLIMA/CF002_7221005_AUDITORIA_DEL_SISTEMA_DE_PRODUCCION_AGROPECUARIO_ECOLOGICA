<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo Plan de auditoría, el cual es esencial para garantizar la integridad y eficacia de las operaciones de una organización. Al diseñar un plan de auditoría, es fundamental seguir buenas prácticas que aseguren la objetividad y la exhaustividad del proceso. Esto implica definir claramente los objetivos de la auditoría, identificar los riesgos potenciales, seleccionar adecuadamente al equipo auditor y establecer un cronograma sólido.
    p.mb-5 La comunicación abierta y transparente con el personal de la empresa auditada también es esencial para el éxito. Además, la documentación cuidadosa de los hallazgos y la presentación de recomendaciones constructivas ayudan a mejorar los procesos y a fortalecer la rendición de cuentas.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestran las bases fundamentales para la creación del plan de auditoría, entre estos: los elementos que se desean auditar, el contenido, la presentación, los instrumentos y técnicas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
