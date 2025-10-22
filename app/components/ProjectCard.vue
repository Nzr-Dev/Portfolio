<template>
  <div class="proyecto">
    <div
      class="proyecto-imagen"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <div class="proyecto-texto">
      <div class="proyecto-cabecera">
        <h3>{{ title }}</h3>
        <div class="proyecto-enlaces">
          <a :href="liveUrl" class="btn btn-secundario rojo">Ver proyecto</a>
        </div>
      </div>

      <p class="proyecto-descripcion">{{ description }}</p>
    </div>
  </div>
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
.proyecto {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  margin-bottom: 3rem;
  transition: var(--transition);

  &:hover {
    box-shadow: 0 0 15px rgba(26, 122, 99, 0.7);
  }
}

.proyecto-imagen {
  width: 100%;
  aspect-ratio: 16/9;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
}

.proyecto-texto {
  width: 100%;
}

.proyecto-cabecera {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-color);
  }
}

.proyecto-descripcion {
  margin-top: 1rem;
  color: var(--muted-color);
  line-height: 1.6;
}

.proyecto-enlaces {
  display: flex;
  gap: 0.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  font-weight: 700;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  transition: var(--transition);
  cursor: pointer;
  text-decoration: none;

  &.btn-secundario {
    background: var(--card-color);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);

    &.rojo {
      background: var(--accent-color);
      color: var(--bg-color);
      border: none;
    }

    &:hover {
      box-shadow: var(--shadow-neon);
      transform: translateY(-2px);
    }
  }
}

@media (min-width: 768px) {
  .proyecto {
    flex-direction: row;
    align-items: center;
  }

  .proyecto-imagen {
    width: 50%;
  }

  .proyecto-texto {
    width: 50%;
  }
}
</style>
