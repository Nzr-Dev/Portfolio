<template>
  <section id="tecnologias" class="seccion-tecnologias">
    <div class="tecnologias-contenedor">
      <h2 class="titulo-seccion">Tecnologías</h2>
      <div class="tecnologias-grid">
        <TechCard
          v-for="tech in technologies"
          :key="tech.name"
          :name="tech.name"
          :imgSrc="tech.img"
          :altText="tech.alt"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TechCard from "./TechCard.vue";

const technologies = [
  {
    name: "HTML5",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOyGOnUhQmz8vo_3dqnvQVbf3Q1dq86D3Ti6wG5p-qutyrzSoKasrnEpuiNS4SSNZFB1jfjYehzwHcyvzrJJs8nzDi7mnI6oXV65ri616YYk_IhbZLxP4Z0dU6LpsuB0Zy-lA3nnG0xHO1TOE0HuxhtY6Ig9q279ZhLddUtufnWY3vIOKeHBkzmVPVHLZa1jEJwPEnnJiP8w9WRG-e2KUWkzyHfmXw7qIa2SgmeL5JQPGqIEugIbHSByYgz6t1uAi4wk4EcBDrmvmI",
    alt: "HTML5 Logo",
  },
  // Agrega más tecnologías aquí
  {
    name: "CSS3",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3 Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
];
</script>

<style scoped>
.seccion-tecnologias {
  background: var(--bg-color);
}
.tecnologias-grid {
  display: grid;
  gap: 2rem;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 640px) {
  .tecnologias-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .tecnologias-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
