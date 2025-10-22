<template>
  <div class="project-card">
    <div
      class="project-image"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>

    <div class="project-content">
      <div class="project-header">
        <h3>{{ title }}</h3>
        <div class="project-links">
          <a
            :href="liveUrl"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
            >Ver proyecto</a
          >
        </div>
      </div>

      <p class="project-description">{{ description }}</p>
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
.project-card {
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

.project-image {
  width: 100%;
  aspect-ratio: 16/9;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
}

.project-content {
  width: 100%;
}

.project-header {
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

.project-description {
  margin-top: 1rem;
  color: var(--muted-color);
  line-height: 1.6;
}

.project-links {
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
  border: none;

  &.btn-primary {
    background: var(--accent-color);
    color: var(--bg-color);
  }

  &:hover {
    box-shadow: var(--shadow-neon);
  }
}

@media (min-width: 768px) {
  .project-card {
    flex-direction: row;
    align-items: center;
  }

  .project-image {
    width: 50%;
  }

  .project-content {
    width: 50%;
  }
}
</style>
