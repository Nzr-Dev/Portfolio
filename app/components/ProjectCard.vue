<template>
  <article 
    class="project-card"
    role="article"
    :aria-labelledby="`titulo-proyecto-${index}`"
  >
    <div 
      class="project-card__image"
      :style="{ backgroundImage: `url(${image})` }"
      role="img"
      :aria-label="`Captura de pantalla del proyecto ${title}`"
    ></div>
    
    <div class="project-card__content">
      <div class="project-card__header">
        <h3 :id="`project-title-${index}`" class="project-card__title">
          {{ title }}
        </h3>
        <div class="project-card__actions">
          <a 
            :href="liveUrl" 
            class="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Ver proyecto en vivo: ${title}`"
            @keydown.space.prevent="openLink(liveUrl)"
          >
            {{ buttonText }}
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
  buttonText: string;
  index: number;
}

defineProps<Props>()

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.project-card {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 2.5rem; 
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 2px solid transparent;

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color); 
    transform: translateY(-5px);
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
    padding: 2rem;
    
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