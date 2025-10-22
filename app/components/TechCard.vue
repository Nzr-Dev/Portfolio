<template>
  <div class="tech-card">
    <img :src="image" :alt="alt" class="tech-card__image" loading="lazy" />
    <p class="tech-card__name">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  image: string;
  alt: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.tech-card {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: rgba(26, 122, 99, 0.7);
    box-shadow: 0 0 10px rgba(26, 122, 99, 0.7);
    transform: translateY(-2px);
  }

  &__image {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }

  &__name {
    color: var(--text-color);
    font-weight: 500;
    margin: 0;
  }
}
</style>
