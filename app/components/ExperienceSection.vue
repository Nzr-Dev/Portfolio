<template>
  <section id="experiencia" class="seccion-experiencia">
    <div class="experiencia-contenedor">
      <h2 class="titulo-seccion">Experiencia</h2>

      <div class="experiencia-grid">
        <!-- Estudios -->
        <ExperienceCard
          title="Estudios, Títulos y Formación"
          :items="educationItems"
        />

        <!-- Experiencia Laboral -->
        <ExperienceCard title="Experiencia Laboral" :items="workItems" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";

const educationItems = [
  {
    title: "Grado en Ingeniería Informática",
    highlight: "Universidad Politécnica",
    date: "2015 - 2019",
  },
  {
    title: "Curso Avanzado de React",
    highlight: "Plataforma Online de Cursos",
    date: "2020",
  },
];

const workItems = [
  {
    title: "Frontend Developer en Tech Solutions",
    highlight: "Enero 2021 - Presente",
    date: "Desarrollo y mantenimiento de aplicaciones web interactivas utilizando React y Redux. Colaboración con equipos de UI/UX para implementar diseños pixel-perfect.",
    icon: '<span class="material-symbols-outlined" aria-hidden="true">work</span>',
  },
  {
    title: "Web Developer Jr. en Innovate Co.",
    highlight: "Junio 2019 - Diciembre 2020",
    date: "Construcción de sitios web responsivos y optimizados para clientes de diversas industrias, utilizando principalmente HTML, CSS y JavaScript.",
    icon: '<span class="material-symbols-outlined" aria-hidden="true">work</span>',
  },
];
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.seccion-experiencia {
  padding: 5rem 1.5rem;

  .experiencia-contenedor {
    max-width: var(--max-width);
    margin: 0 auto;

    .titulo-seccion {
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      margin-bottom: 3rem;
    }

    .experiencia-grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr;
    }
  }
}

/* Responsive */
@media (min-width: 768px) {
  .experiencia-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
