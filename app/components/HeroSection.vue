<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <!-- Texto principal -->
      <div class="hero-text">
        <h1>{{ texts.hero.greeting }}</h1>
        <h2>{{ texts.hero.title }}</h2>
        <p>{{ texts.hero.description }}</p>
        <div class="hero-buttons">
          <a href="#projects" class="btn btn-primary">
            {{ texts.hero.ctaPrimary }}
          </a>
          <a href="#contact" class="btn btn-secondary">
            {{ texts.hero.ctaSecondary }}
          </a>
        </div>
      </div>

      <!-- Imagen -->
      <div class="hero-photo">
        <div class="photo-border">
          <img src="/profile.webp" alt="Profile photo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTexts } from "@/composables/useTexts";
const texts = useTexts();
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 1.5rem;
}

.hero-content {
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  justify-content: center;
}

.hero-text {
  text-align: center;
  max-width: 600px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;

    .highlight {
      color: var(--accent-color);
    }
  }

  h2 {
    font-size: 1.75rem;
    color: var(--accent-color);
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    color: var(--muted-color);
    line-height: 1.6;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: 0 1.5rem;
    font-weight: 700;
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: var(--transition);
    text-transform: none;

    &.btn-primary {
      background: var(--accent-color);
      color: var(--bg-color);
    }

    &.btn-secondary {
      background: var(--card-color);
      color: var(--accent-color);
      border: 1px solid var(--accent-color);
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-neon);
    }
  }
}

.hero-photo {
  display: flex;
  justify-content: center;
  align-items: center;

  .photo-border {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    overflow: hidden;
    background: var(--card-color);
    border: 4px solid var(--accent-color);
    box-shadow: var(--shadow-neon);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

/* RESPONSIVE */
@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .hero-text {
    text-align: left;

    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  .photo-border {
    width: 20rem;
    height: 20rem;
  }
}
</style>
