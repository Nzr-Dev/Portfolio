<template>
  <article class="project-card">
    <div
      class="project-card__image"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <div class="project-card__content">
      <div class="project-card__header">
        <h3 class="project-card__title">{{ title }}</h3>
        <div class="project-card__actions">
          <a
            :href="liveUrl"
            class="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>

      <p class="project-card__description">{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.project-card {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:hover {
    box-shadow: 0 0 15px rgba(26, 122, 99, 0.7);
  }

  &__image {
    width: 100%;
    aspect-ratio: 16/9;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
  }

  &__content {
    flex: 1;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0;
  }

  &__description {
    color: var(--muted-color);
    line-height: 1.6;
    margin: 0;
  }

  &__actions {
    flex-shrink: 0;
  }
}

@media (min-width: 768px) {
  .project-card {
    flex-direction: row;
    align-items: center;

    &__image {
      width: 50%;
    }

    &__content {
      width: 50%;
    }
  }
}

@media (max-width: 480px) {
  .project-card {
    &__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    &__actions {
      width: 100%;

      .btn {
        width: 100%;
      }
    }
  }
}
</style>
