<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <h2 class="section-title">Experience & Education</h2>

      <div class="experience-grid">
        <!-- Educación -->
        <ExperienceCard title="Education">
          <div
            v-for="(item, index) in texts.experience.education"
            :key="'edu' + index"
            class="experience-item"
          >
            <h4>{{ item.title }}</h4>
            <h5>{{ item.institution }} — {{ item.year }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </ExperienceCard>

        <!-- Experiencia laboral -->
        <ExperienceCard title="Work Experience">
          <div
            v-for="(item, index) in texts.experience.work"
            :key="'work' + index"
            class="experience-item"
          >
            <h4>{{ item.title }}</h4>
            <h5>{{ item.company }} — {{ item.year }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </ExperienceCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTexts } from "@/composables/useTexts";
import ExperienceCard from "@/components/ExperienceCard.vue";

const texts = useTexts();
</script>

<style scoped lang="scss">
.experience-section {
  padding: 5rem 1.5rem;
}

.experience-container {
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

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: stretch;
  text-align: left;
}

/* Items internos dentro de cada tarjeta */
.experience-item {
  margin-bottom: 1.5rem;
}
</style>
