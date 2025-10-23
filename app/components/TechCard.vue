<template>
  <div class="tech-card" role="listitem" :aria-label="`Technology: ${name}`">
    <div class="tech-card__image-container">
      <img
        :src="image"
        :alt="alt"
        class="tech-card__image"
        loading="lazy"
        @error="handleImageError"
        @load="handleImageLoad"
      />
    </div>
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

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  console.warn(`Failed to load technology image: ${target.src}`);
  target.style.display = "none";
};

const handleImageLoad = (event: Event) => {
  console.log("Technology image loaded successfully");
};
</script>

<style scoped lang="scss">
.tech-card {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 1rem 0.5rem;
  transition: var(--transition);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 120px;
  aspect-ratio: 4/3;
  border: 2px solid transparent;
  width: 100%;
  margin: 0 auto;

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color);
    transform: translateY(-2px);
  }
}

.tech-card__image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-bottom: 0.5rem;
  flex-grow: 1;
}

.tech-card__image {
  width: auto;
  height: 100%;
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  .tech-card:hover & {
    transform: scale(1.1);
  }
}

.tech-card__name {
  color: var(--text-color);
  font-weight: 500;
  margin: 0;
  font-size: 0.9rem;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 0.25rem;
}

@media (min-width: 768px) {
  .tech-card {
    padding: 1.5rem 0.75rem;
    min-height: 140px;
  }

  .tech-card__image-container {
    height: 70px;
    margin-bottom: 0.75rem;
  }

  .tech-card__name {
    font-size: 1rem;
  }
}

/* En desktop, las tarjetas se expanden para llenar el espacio disponible */
@media (min-width: 1024px) {
  .tech-card {
    padding: 2rem 1rem;
    min-height: 160px;
    /* Eliminamos max-width para permitir que se expandan */
  }

  .tech-card__image-container {
    height: 80px;
  }

  .tech-card__name {
    font-size: 1.1rem;
  }
}
</style>
