<template>
  <section 
    id="technologies" 
    class="section" 
    role="region"
    aria-labelledby="technologies-heading"
  >
    <div class="section__container">
      <h2 id="technologies-heading" class="section__title technologies-title">
        {{ texts.technologies.title }}
      </h2>
      
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
.technologies-title {
  font-weight: 800; 
}

.technologies-grid {
  display: grid;
  gap: 1.5rem;
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
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .technologies-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
}
</style>