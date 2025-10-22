<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <h2 class="section-title">Experience & Education</h2>

      <div class="experience-grid">
        <ExperienceCard
          title="Front-End Developer"
          subtitle="Creative Web Studio"
          date="2023 - Present"
          description="Responsible for developing responsive websites using Vue, Nuxt, and SCSS. Collaborated with designers to create accessible, user-friendly interfaces."
        />

        <ExperienceCard
          title="Web Development Bootcamp"
          subtitle="CodeAcademy Pro"
          date="2022 - 2023"
          description="Completed an intensive full-stack development program focused on front-end technologies, UX/UI design, and modern JavaScript frameworks."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: stretch;
}
</style>
