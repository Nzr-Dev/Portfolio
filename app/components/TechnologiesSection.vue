<template>
  <section
    id="technologies"
    class="section"
    role="region"
    aria-labelledby="technologies-heading"
  >
    <div class="section__container">
      <h2 id="technologies-heading" class="section__title technologies-title">
        {{ texts.technologies.title }}
      </h2>

      <div class="technologies-grid">
        <TechCard
          v-for="tech in texts.technologies.items"
          :key="tech.name"
          :name="tech.name"
          :image="tech.image"
          :alt="tech.alt"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechCard from "./TechCard.vue";
import { useTexts } from "@/composables/useTexts";

const texts = useTexts();
</script>

<style scoped lang="scss">
.section {
  padding: 5rem 0;

  &__container {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
    padding: 0 1.5rem;
  }
}

.technologies-title {
  font-weight: 800;
  text-align: center;
}

.technologies-grid {
  display: grid;
  gap: 1rem;
  /* Grid adaptable para móviles y tablets */
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  justify-items: center;
  width: 100%;
}

/* Tablets - 3 columnas */
@media (min-width: 768px) {
  .technologies-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

/* Escritorio - 4 columnas fijas */
@media (min-width: 1024px) {
  .technologies-grid {
    /* 4 columnas fijas en lugar de auto-fit */
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    /* Aseguramos que las tarjetas se expandan para llenar el espacio disponible */
    .tech-card {
      width: 100%;
      max-width: none; /* Eliminamos la restricción de ancho máximo */
      height: 100%; /* Aseguramos que ocupen toda la altura de la celda */
    }
  }
}

/* Pantallas muy grandes - mismo layout pero con más espacio */
@media (min-width: 1200px) {
  .technologies-grid {
    gap: 2.5rem;
  }
}

/* Ajustes para móviles pequeños */
@media (max-width: 480px) {
  .section__container {
    padding: 0 1rem;
  }

  .technologies-grid {
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
</style>
