<template>
  <section id="technologies" class="section">
    <div class="section__container">
      <h2 class="section__title">{{ texts.technologies.title }}</h2>
      
      <div class="technologies-grid">
        <TechCard
          v-for="tech in texts.technologies.items"
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
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()
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
