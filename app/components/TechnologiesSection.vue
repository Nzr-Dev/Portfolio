<template>
  <section id="technologies" class="section">
    <div class="section__container">
      <h2 class="section__title">Technologies</h2>

      <div class="technologies-grid">
        <TechCard
          v-for="tech in technologies"
          :key="tech.name"
          :name="tech.name"
          :image="tech.image"
          :alt="tech.alt"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechCard from "./TechCard.vue";

const technologies = [
  {
    name: "HTML5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOyGOnUhQmz8vo_3dqnvQVbf3Q1dq86D3Ti6wG5p-qutyrzSoKasrnEpuiNS4SSNZFB1jfjYehzwHcyvzrJJs8nzDi7mnI6oXV65ri616YYk_IhbZLxP4Z0dU6LpsuB0Zy-lA3nnG0xHO1TOE0HuxhtY6Ig9q279ZhLddUtufnWY3vIOKeHBkzmVPVHLZa1jEJwPEnnJiP8w9WRG-e2KUWkzyHfmXw7qIa2SgmeL5JQPGqIEugIbHSByYgz6t1uAi4wk4EcBDrmvmI",
    alt: "HTML5 Logo",
  },
  {
    name: "CSS3",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3 Logo",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React Logo",
  },
  {
    name: "Vue.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    alt: "Vue.js Logo",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript Logo",
  },
  {
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js Logo",
  },
  {
    name: "Git",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    alt: "Git Logo",
  },
  {
    name: "Sass",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    alt: "Sass Logo",
  },
  {
    name: "Webpack",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg",
    alt: "Webpack Logo",
  },
  {
    name: "Jest",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Jest_Logo.svg",
    alt: "Jest Logo",
  },
  {
    name: "Figma",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma Logo",
  },
];
</script>

<style scoped lang="scss">
.technologies-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 640px) {
  .technologies-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .technologies-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1024px) {
  .technologies-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
