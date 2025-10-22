<template>
  <div
    class="tech-card"
    :style="{ backgroundColor: color || 'var(--card-color)' }"
  >
    <img :src="icon" :alt="name" class="tech-image" />
    <span class="tech-name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  icon: string; // URL de la imagen
  color?: string; // opcional, puedes asignar colores distintos a cada tarjeta
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  padding: 1.5rem;
  width: 120px;
  height: 140px;
  transition: var(--transition);
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-neon);
  }
}

.tech-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 0.75rem;
}

.tech-name {
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: 600;
  text-align: center;
}
</style>
