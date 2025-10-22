<template>
  <section id="projects" class="section">
    <div class="section__container">
      <h2 class="section__title">Projects</h2>

      <div class="projects-grid">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :liveUrl="project.liveUrl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

const projects = [
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
  {
    title: "Project Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
];
</script>

<style scoped lang="scss">
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
