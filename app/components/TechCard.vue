<template>
  <div class="tech-card" :style="{ borderColor: color }">
    <div class="tech-icon" :style="{ color }">
      <i :class="icon"></i>
    </div>
    <span class="tech-name">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  icon: string; // clase del icono (por ejemplo 'fab fa-html5')
  color: string; // color principal de la tecnología
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--card-color);
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  width: 120px;
  height: 120px;
  transition: var(--transition);
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-neon);
  }
}

.tech-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.tech-name {
  font-size: 0.9rem;
  color: var(--text-color);
  font-weight: 600;
  text-align: center;
}
</style>
