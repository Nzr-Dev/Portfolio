<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <h2 class="section-title">Proyectos</h2>

      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :liveUrl="project.liveUrl"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Título del proyecto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
  {
    title: "Título del proyecto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
  {
    title: "Título del proyecto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
];
</script>

<style scoped lang="scss">
.projects-section {
  padding: 5rem 1.5rem;
}

.projects-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
}
</style>
