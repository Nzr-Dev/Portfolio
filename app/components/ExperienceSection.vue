<template>
  <section 
    id="experience" 
    class="section" 
    role="region"
    aria-labelledby="encabezado-experiencia"
  >
    <div class="section__container">
      <h2 id="experience-heading" class="section__title experience-title">
        {{ texts.experience.title }}
      </h2>
      
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
.experience-title {
  font-weight: 800;
}

.experience-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  align-items: stretch;
}

@media (min-width: 768px) {
  .experience-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>