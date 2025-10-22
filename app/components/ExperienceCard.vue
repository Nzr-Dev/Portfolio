<template>
  <div class="experience-card">
    <h3 class="experience-title">{{ title }}</h3>
    <h4 class="experience-subtitle">{{ subtitle }}</h4>
    <span class="experience-date">{{ date }}</span>
    <p class="experience-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.experience-card {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: var(--transition);
  border: 1px solid transparent;
  text-align: left;

  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-5px);
  }

  .experience-title {
    font-family: var(--font-head);
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }

  .experience-subtitle {
    color: var(--text-color);
    margin-bottom: 0.25rem;
  }

  .experience-date {
    font-size: 0.9rem;
    color: var(--muted-color);
    display: block;
    margin-bottom: 1rem;
  }

  .experience-description {
    font-size: 1rem;
    color: var(--text-color);
    line-height: 1.5;
  }
}
</style>
