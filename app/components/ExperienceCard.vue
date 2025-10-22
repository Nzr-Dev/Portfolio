<template>
  <div class="experience-card">
    <h3 class="experience-card__title">{{ title }}</h3>

    <div class="timeline">
      <div v-for="(item, index) in items" :key="index" class="timeline__item">
        <div class="timeline__marker">
          <div class="timeline__icon">
            <span v-if="item.type === 'work'" class="material-symbols-outlined">
              work
            </span>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div
            v-if="index !== items.length - 1"
            class="timeline__connector"
          ></div>
        </div>

        <div class="timeline__content">
          <h4 class="timeline__title">{{ item.title }}</h4>
          <p class="timeline__organization">{{ item.organization }}</p>
          <p class="timeline__period">{{ item.period }}</p>
          <p v-if="item.description" class="timeline__description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
  type: "education" | "work";
}

interface Props {
  title: string;
  items: TimelineItem[];
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.experience-card {
  @include card-style;

  &__title {
    font-size: 1.75rem;
    color: var(--accent-color);
    text-align: center;
    margin-bottom: 2rem;
  }
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__item {
    display: flex;
  }

  &__marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
  }

  &__icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-color);
    color: var(--bg-color);
    font-weight: 700;
    @include neon-shadow;
  }

  &__connector {
    width: 2px;
    flex-grow: 1;
    background: rgba(100, 255, 218, 0.5);
    margin-top: 0.25rem;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-color);
    margin: 0 0 0.25rem 0;
  }

  &__organization {
    color: var(--accent-color);
    font-size: 0.9rem;
    margin: 0 0 0.25rem 0;
  }

  &__period {
    color: var(--muted-color);
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
  }

  &__description {
    color: var(--muted-color);
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }
}
</style>
