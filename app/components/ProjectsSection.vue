<template>
  <section 
    id="projects" 
    class="section" 
    role="region"
    aria-labelledby="projects-heading"
  >
    <div class="section__container">
      <h2 id="projects-heading" class="section__title projects-title">
        {{ texts.projects.title }}
      </h2>
      
      <div class="projects-grid" role="list" aria-label="Lista de proyectos">
        <ProjectCard
          v-for="(project, index) in texts.projects.items"
          :key="project.title + index"
          v-bind="project"
          :index="index"
          role="listitem"
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
.projects-title {
  font-weight: 800;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>