<template>
  <section id="technologies" class="technologies-section">
    <div class="technologies-container">
      <h2 class="section-title">Technologies</h2>

      <div class="technologies-grid">
        <TechCard
          v-for="(tech, index) in texts.technologies"
          :key="index"
          :name="tech.name"
          :icon="tech.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTexts } from "@/composables/useTexts";
import TechCard from "./TechCard.vue";

const texts = useTexts();
</script>

<style scoped lang="scss">
.technologies-section {
  padding: 5rem 1.5rem;
}

.technologies-container {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 3rem;
}

.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}
</style>
