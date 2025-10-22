<template>
  <section id="technologies" class="technologies-section">
    <div class="technologies-container">
      <h2 class="section-title">Technologies</h2>

      <div class="technologies-grid">
        <TechCard
          v-for="(tech, index) in technologies"
          :key="index"
          :name="tech.name"
          :icon="tech.icon"
          :color="tech.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechCard from "./TechCard.vue";

const technologies = [
  { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883" },
  { name: "Nuxt", icon: "fa-brands fa-nuxt", color: "#00DC82" },
  { name: "TypeScript", icon: "fa-brands fa-ts", color: "#3178C6" },
  { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
  { name: "GitHub", icon: "fa-brands fa-github", color: "#fff" },
  { name: "Tailwind CSS", icon: "fa-brands fa-css3", color: "#38BDF8" },
];
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
