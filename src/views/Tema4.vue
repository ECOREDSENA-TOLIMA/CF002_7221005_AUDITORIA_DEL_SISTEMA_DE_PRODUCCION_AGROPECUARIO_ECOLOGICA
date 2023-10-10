<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Instrumentos y métodos de recolección de información

    p.mb-5(data-aos="fade-down") Un instrumento de recolección de información es un recurso que utiliza el investigador para poder recolectar la información necesaria para el desarrollo de su proyecto investigativo. Estos tienen como función extraer los datos directos de los fenómenos sobre la población o lugar de interés que se desee investigar; otra característica es que son sistemáticos y organizados, siendo de gran utilidad y fiabilidad de la información recolectada para su posterior análisis.

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-3.col-md-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/tema3-1.svg")
        .col.pe-lg-4
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-negro
              h3.mb-1 Para tener en cuenta
              p En toda investigación que se lleve a cabo, la información es lo más importante y valioso, y es de aquello de lo que dependen todas las conclusiones que se saquen; por eso, para realizar cualquier acción dentro de una empresa, es vital contar con información suficiente y veraz para no equivocarse y poder tomar decisiones fundamentadas y a tiempo, con el fin de reducir gastos innecesarios debido a no conformidades que se pueden prevenir.


    .row.justify-content-around.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.mb-4.mb-md-0
        p Por lo tanto, los métodos de recolección de información posibilitan que las organizaciones puedan responder a preguntas importantes para el desarrollo de sus actividades, para evaluar los resultados y que con estos datos obtenidos se tomen decisiones oportunas, adelantándose a futuras tendencias y anticipando las probabilidades. 
        p Estos van desde las actas de incidencias o las evaluaciones de competencias del personal hasta las auditorías e inspecciones, y son de gran utilidad para que la empresa pueda avanzar y mejorar su funcionamiento con cada nueva información obtenida.
        p A continuación, se describen las principales técnicas de recolección de información, con el fin de que las estudie en detalle y pueda utilizarlas en su lugar de trabajo.
      .col-md.col-11
        img(src="@/assets/curso/temas/tema4/tema4-1.png")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Técnicas recolección información] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th(style="width:30%") TÉCNICAS
                th CONCEPTO
            tbody
              tr
                th.text-center.p-2 Entrevista
                td.p-2 
                  p Este es un gran recurso para recolectar testimonios reales de personas que pueden estar involucradas en la investigación. 
                  p Es una de las herramientas para la recolección de datos más utilizadas en la investigación cualitativa, permite la obtención de datos o información del sujeto de estudio mediante la interacción oral con el investigador. 
                  p Asimismo, permite el acceso a los aspectos cognitivos característicos de cada persona y su percepción de factores sociales o personales que condicionan una realidad; de esa forma, es más fácil que el entrevistador comprenda lo vivido por el sujeto de estudio.
                  p La entrevista presenta diversas modalidades, tales como:
                  ul.lista-ul.ms-3
                    li 
                      i.fas.fa-circle
                      | Entrevista asistemática o libre.
                    li 
                      i.fas.fa-circle
                      | Entrevista estructurada.
                    li 
                      i.fas.fa-circle
                      | Entrevista focalizada.
                    li 
                      i.fas.fa-circle
                      | Entrevista simultánea.
                    li 
                      i.fas.fa-circle
                      | Entrevista sucesiva.
              tr
                th.text-center.p-2 Encuesta
                td.p-2 
                  p Es un estudio de observación en el cual el investigador no tiene control o puede modificar el proceso que está en observación.
                  p Los datos se obtienen a través de realizar un conjunto de preguntas que están dirigidas a una muestra representativa del total de la población de estudio, con la finalidad de obtener estados de opinión. 
                  p El investigador debe seleccionar las preguntas más convenientes, de acuerdo con la naturaleza de la investigación.
                  p Las encuestas son de tres tipos:
                  ul.lista-ul.ms-3
                    li 
                      i.fas.fa-circle
                      | Escritas.
                    li 
                      i.fas.fa-circle
                      | Verbales.
                    li 
                      i.fas.fa-circle
                      | Mixtas.
              tr
                th.text-center.p-2 Cuestionario
                td.p-2 
                  p Es una estructura mucho más rígida, en la que las preguntas ya están pensadas de antemano. Se caracteriza por ser un instrumento para recolectar datos cuantitativos. 
                  p Es un recurso clave para obtener información estandarizada y generalizada sobre una determinada temática. 
                  p Está compuesto por un conjunto de preguntas que son generales para todos los informantes, sin que exista la posibilidad de hacer repreguntas; en todo caso, cualquier otro interrogante debe figurar en el cuestionario, por lo que es uniforme para todos los entrevistados.
                  p Existen tres tipos principales de cuestionarios: 
                  ul.lista-ul.ms-3
                    li 
                      i.fas.fa-circle
                      span #[b El cuestionario estructurado] o con preguntas cerradas, donde el informante, para cada pregunta, tiene como únicas alternativas de respuesta las que aparecen en el cuestionario.
                    li 
                      i.fas.fa-circle
                      span #[b El cuestionario no estructurado o con preguntas abiertas], donde el informante, para cada pregunta, tiene total libertad de expresar su propia respuesta. 
                    li 
                      i.fas.fa-circle
                      span #[b El cuestionario mixto], que incluye tanto preguntas abiertas como preguntas cerradas.

</template>

<script>
export default {
  name: 'Tema4',
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
