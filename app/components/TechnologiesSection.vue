<template>
  <section id="tecnologias" class="seccion-tecnologias">
    <div class="tecnologias-contenedor">
      <h2 class="titulo-seccion">Tecnologías</h2>
      <div class="tecnologias-grid">
        <div class="tecnologia" v-for="tech in technologies" :key="tech.name">
          <img :src="tech.img" :alt="tech.alt" loading="lazy" />
          <p>{{ tech.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  {
    name: "HTML5",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOyGOnUhQmz8vo_3dqnvQVbf3Q1dq86D3Ti6wG5p-qutyrzSoKasrnEpuiNS4SSNZFB1jfjYehzwHcyvzrJJs8nzDi7mnI6oXV65ri616YYk_IhbZLxP4Z0dU6LpsuB0Zy-lA3nnG0xHO1TOE0HuxhtY6Ig9q279ZhLddUtufnWY3vIOKeHBkzmVPVHLZa1jEJwPEnnJiP8w9WRG-e2KUWkzyHfmXw7qIa2SgmeL5JQPGqIEugIbHSByYgz6t1uAi4wk4EcBDrmvmI",
    alt: "HTML5 Logo",
  },
  // Repetir para las 12 tecnologías como en el original
  {
    name: "HTML5",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOyGOnUhQmz8vo_3dqnvQVbf3Q1dq86D3Ti6wG5p-qutyrzSoKasrnEpuiNS4SSNZFB1jfjYehzwHcyvzrJJs8nzDi7mnI6oXV65ri616YYk_IhbZLxP4Z0dU6LpsuB0Zy-lA3nnG0xHO1TOE0HuxhtY6Ig9q279ZhLddUtufnWY3vIOKeHBkzmVPVHLZa1jEJwPEnnJiP8w9WRG-e2KUWkzyHfmXw7qIa2SgmeL5JQPGqIEugIbHSByYgz6t1uAi4wk4EcBDrmvmI",
    alt: "HTML5 Logo",
  },
  // ... 10 más iguales
];
</script>

<style scoped>
.seccion-tecnologias {
  background: var(--bg-color);
  padding: 5rem 1.5rem;
}

.tecnologias-contenedor {
  max-width: var(--max-width);
  margin: 0 auto;
}

.titulo-seccion {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
}

.tecnologias-grid {
  display: grid;
  gap: 2rem;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
}

.tecnologia {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
}

.tecnologia:hover {
  background: rgba(26, 122, 99, 0.7);
  box-shadow: 0 0 10px rgba(26, 122, 99, 0.7);
}

.tecnologia img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}

.tecnologia p {
  margin-top: 1rem;
  color: var(--text-color);
  font-weight: 500;
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
