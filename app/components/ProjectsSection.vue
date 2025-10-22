<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <h2 class="section-title">Proyectos</h2>

      <ProjectCard
        v-for="(project, index) in texts.projects"
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
import { useTexts } from "@/composables/useTexts";
const texts = useTexts();
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
