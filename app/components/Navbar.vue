<template>
  <nav class="navbar">
    <div class="nav-links">
      <a href="#home">{{ texts.nav.home }}</a>
      <a href="#projects">{{ texts.nav.projects }}</a>
      <a href="#technologies">{{ texts.nav.technologies }}</a>
      <a href="#experience">{{ texts.nav.experience }}</a>
      <a href="#contact">{{ texts.nav.contact }}</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(6px);
  z-index: 1000;
  padding: 1rem 0;
}

.nav-links {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.25s ease;

  &:hover {
    color: var(--accent-color);
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
