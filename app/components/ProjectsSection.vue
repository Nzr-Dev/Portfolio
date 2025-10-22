<template>
  <section id="projects" class="section">
    <div class="section__container">
      <h2 class="section__title">{{ texts.projects.title }}</h2>
      
      <div class="projects-grid">
        <ProjectCard
          v-for="(project, index) in texts.projects.items"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :liveUrl="project.liveUrl"
          :buttonText="project.buttonText"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()
</script>

<style scoped lang="scss">
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
