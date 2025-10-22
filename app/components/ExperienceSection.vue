<template>
  <section id="experience" class="section">
    <div class="section__container">
      <h2 class="section__title">{{ texts.experience.title }}</h2>
      
      <div class="experience-grid">
        <ExperienceCard
          :title="texts.experience.education.title"
          :items="texts.experience.education.items"
        />
        
        <ExperienceCard
          :title="texts.experience.work.title"
          :items="texts.experience.work.items"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()
</script>

<style scoped lang="scss">
.experience-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .experience-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
