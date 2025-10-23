<template>
  <section
    id="home"
    class="hero"
    role="banner"
    aria-labelledby="encabezado-inicio"
  >
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 id="hero-heading" class="hero__name">{{ texts.hero.name }}</h1>
          <h2 class="hero__title">{{ texts.hero.title }}</h2>
          <p class="hero__description">{{ texts.hero.description }}</p>

          <div class="hero__buttons">
            <a
              href="#projects"
              class="btn btn--primary"
              aria-label="Ver mis proyectos y trabajos"
            >
              {{ texts.hero.ctaPrimary }}
            </a>
            <a
              href="#contact"
              class="btn btn--secondary"
              aria-label="Ponte en contacto conmigo"
            >
              {{ texts.hero.ctaSecondary }}
            </a>
          </div>
        </div>

        <div class="hero__image">
          <div class="image__border">
            <img
              src="/profile.webp"
              :alt="texts.hero.imageAlt"
              loading="eager"
              class="hero__portrait"
            />
          </div>
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
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 1.5rem 2rem;

  &__container {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    text-align: center;
  }

  &__text {
    max-width: 650px;
    width: 100%;

    .hero__name {
      font-size: 3.5rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 0.5rem;
      text-align: center; /* Centrado en móvil */
    }

    .hero__title {
      font-size: 2rem;
      color: var(--accent-color);
      margin-bottom: 1rem;
      text-align: center; /* Centrado en móvil */
      font-weight: 600;
    }

    .hero__description {
      color: var(--muted-color);
      margin-bottom: 2rem;
      line-height: 1.7;
      text-align: center; /* Centrado en móvil */
      font-size: 1.1rem;
    }
  }

  &__buttons {
    display: flex;
    gap: 1.25rem;
    justify-content: center; /* Centrado en móvil */
    flex-wrap: wrap;
    width: 100%;

    .btn {
      height: 3.5rem;
      padding: 0 2rem;
      font-size: 1.1rem;
    }
  }

  &__image {
    display: flex;
    justify-content: center; /* Asegura que la imagen esté centrada */

    .image__border {
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      overflow: hidden;
      background: var(--card-color);
      border: 4px solid var(--accent-color);
      box-shadow: var(--shadow-neon);
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        box-shadow: 0 0 20px var(--accent-color), 0 0 30px var(--accent-color),
          0 0 40px var(--accent-color);
        transform: scale(1.02);
      }
    }

    .hero__portrait {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      .image__border:hover & {
        transform: scale(1.05);
      }
    }
  }
}

@media (min-width: 768px) {
  .hero {
    &__content {
      flex-direction: row;
      justify-content: space-between;
      text-align: left; /* En escritorio volvemos a alinear a la izquierda */
      gap: 5rem;
    }

    &__text {
      .hero__name {
        font-size: 5rem;
        text-align: left; /* En escritorio alineamos a la izquierda */
      }

      .hero__title {
        font-size: 2.25rem;
        text-align: left; /* En escritorio alineamos a la izquierda */
      }

      .hero__description {
        font-size: 1.15rem;
        text-align: left; /* En escritorio alineamos a la izquierda */
      }
    }

    &__buttons {
      justify-content: flex-start; /* En escritorio alineamos a la izquierda */
    }

    &__image {
      .image__border {
        width: 24rem;
        height: 24rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .hero {
    &__buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }

    &__text {
      .hero__name {
        font-size: 3rem;
      }

      .hero__title {
        font-size: 1.75rem;
      }
    }

    &__image {
      .image__border {
        width: 16rem; /* Reducimos ligeramente para móviles pequeños */
        height: 16rem;
      }
    }
  }
}

/* Ajustes adicionales para móviles muy pequeños */
@media (max-width: 360px) {
  .hero {
    &__image {
      .image__border {
        width: 14rem;
        height: 14rem;
      }
    }
  }
}
</style>
