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
  padding: 6rem 1rem 2rem; /* Reducimos padding lateral en móvil */

  &__container {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
    padding: 0 1rem; /* Añadimos padding interno */
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem; /* Reducimos gap en móvil */
    text-align: center;
  }

  &__text {
    max-width: 100%; /* Permitimos que ocupe todo el ancho disponible */
    width: 100%;

    .hero__name {
      /* Tamaño de fuente responsivo */
      font-size: clamp(2.5rem, 8vw, 5rem);
      font-weight: 800;
      color: #fff;
      margin-bottom: 0.5rem;
      text-align: center;
      line-height: 1.1;
    }

    .hero__title {
      /* Tamaño de fuente responsivo */
      font-size: clamp(1.5rem, 5vw, 2.25rem);
      color: var(--accent-color);
      margin-bottom: 1rem;
      text-align: center;
      font-weight: 600;
      line-height: 1.2;
    }

    .hero__description {
      color: var(--muted-color);
      margin-bottom: 2rem;
      line-height: 1.7;
      text-align: center;
      /* Tamaño de fuente responsivo */
      font-size: clamp(1rem, 3vw, 1.15rem);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem; /* Reducimos gap en móvil */
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    .btn {
      height: 3.5rem;
      padding: 0 1.5rem; /* Reducimos padding en móvil */
      font-size: 1rem; /* Tamaño base */
      /* Tamaño de fuente responsivo para botones */
      font-size: clamp(1rem, 2.5vw, 1.1rem);
    }
  }

  &__image {
    display: flex;
    justify-content: center;

    .image__border {
      /* Tamaño responsivo para la imagen */
      width: clamp(12rem, 40vw, 24rem);
      height: clamp(12rem, 40vw, 24rem);
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

/* Tablets */
@media (min-width: 640px) {
  .hero {
    padding: 6rem 1.5rem 2rem;

    &__container {
      padding: 0 1.5rem;
    }

    &__content {
      gap: 3.5rem;
    }

    &__buttons {
      gap: 1.25rem;

      .btn {
        padding: 0 2rem;
      }
    }

    &__image {
      .image__border {
        width: clamp(14rem, 35vw, 20rem);
        height: clamp(14rem, 35vw, 20rem);
      }
    }
  }
}

/* Desktop */
@media (min-width: 768px) {
  .hero {
    &__content {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      gap: 4rem; /* Ajustamos gap para desktop */
      align-items: center;
    }

    &__text {
      max-width: 55%; /* Limitamos el ancho del texto en desktop */

      .hero__name {
        text-align: left;
        font-size: clamp(3rem, 5vw, 5rem);
      }

      .hero__title {
        text-align: left;
        font-size: clamp(1.75rem, 3vw, 2.25rem);
      }

      .hero__description {
        text-align: left;
        margin-left: 0;
        margin-right: 0;
        font-size: clamp(1rem, 1.5vw, 1.15rem);
      }
    }

    &__buttons {
      justify-content: flex-start;
    }

    &__image {
      max-width: 45%; /* Limitamos el ancho de la imagen en desktop */

      .image__border {
        width: clamp(16rem, 25vw, 24rem);
        height: clamp(16rem, 25vw, 24rem);
      }
    }
  }
}

/* Desktop grande */
@media (min-width: 1024px) {
  .hero {
    &__content {
      gap: 5rem;
    }
  }
}

/* Pantallas muy pequeñas */
@media (max-width: 480px) {
  .hero {
    padding: 5rem 0.5rem 2rem;

    &__container {
      padding: 0 0.5rem;
    }

    &__content {
      gap: 2.5rem;
    }

    &__buttons {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }

    .btn {
      width: 100%;
      max-width: 280px;
      height: 3.25rem;
    }

    &__text {
      .hero__name {
        font-size: clamp(2.25rem, 9vw, 3rem);
      }

      .hero__title {
        font-size: clamp(1.25rem, 5.5vw, 1.75rem);
      }
    }

    &__image {
      .image__border {
        width: clamp(10rem, 50vw, 16rem);
        height: clamp(10rem, 50vw, 16rem);
      }
    }
  }
}

/* Pantallas extremadamente pequeñas */
@media (max-width: 360px) {
  .hero {
    padding: 4rem 0.5rem 2rem;

    &__content {
      gap: 2rem;
    }

    &__text {
      .hero__name {
        font-size: clamp(2rem, 10vw, 2.5rem);
      }

      .hero__title {
        font-size: clamp(1.1rem, 6vw, 1.5rem);
      }
    }

    &__image {
      .image__border {
        width: clamp(8rem, 45vw, 14rem);
        height: clamp(8rem, 45vw, 14rem);
      }
    }
  }
}
</style>
