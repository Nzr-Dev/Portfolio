<template>
  <section id="inicio" class="hero">
    <div class="hero__content">
      <!-- TEXTO -->
      <div class="hero__text">
        <h1>Juan Pérez</h1>
        <h2>Desarrollador Web Frontend</h2>
        <p>
          Creando experiencias web futuristas con un toque de neón. Mi objetivo
          es combinar diseño y funcionalidad para construir interfaces
          intuitivas y atractivas.
        </p>

        <div class="hero__buttons">
          <a href="#proyectos" class="btn btn--primary">Ver mis proyectos</a>
          <a href="#contacto" class="btn btn--secondary">Contactarme</a>
        </div>
      </div>

      <!-- FOTO -->
      <div class="hero__photo">
        <div class="hero__photo-border">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlJkYcygIP2DWrddLpQtACUY0xdJ3cUuKknwWrcxjskyMEDi2K-ItR8DV8Dj-TrRN3gkTezQOq6iGuKssnBMWKGTP0a0C5f4yPic6Yo7KROlAcnsq-In8eMcVxviqQKzWVNENRlKNQt3P9JCfeVqdN8s2Vew60Ox0wDuh_sTpxzB2EA6Qfg6QUttNJ-_3HOMDrhfAU2NnGbc12vMapizyZe-92AoaC21yH7GXrC-LtJ0U-qcbUQraonJbluFBYr_LCAeZWe66WINtq"
            alt="Foto de perfil de Juan Pérez"
            loading="lazy"
          />
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
  justify-content: center;
  padding: 6rem 1.5rem 1.5rem;
  background: var(--bg-color);

  &__content {
    width: 100%;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    text-align: center;
  }

  &__text {
    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      font-family: var(--font-head);
    }

    h2 {
      font-size: 1.75rem;
      color: var(--accent-color);
      margin-top: 1rem;
      font-family: var(--font-head);
    }

    p {
      margin-top: 1rem;
      color: var(--muted-color);
      line-height: 1.6;
    }
  }

  &__buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
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
    text-decoration: none;
    cursor: pointer;

    &--primary {
      background: var(--accent-color);
      color: var(--bg-color);

      &:hover {
        @include neon-shadow;
        transform: translateY(-2px);
      }
    }

    &--secondary {
      background: var(--card-color);
      color: var(--accent-color);
      border: 1px solid var(--accent-color);

      &:hover {
        @include neon-shadow;
        transform: translateY(-2px);
        background: var(--accent-weak);
      }
    }
  }

  &__photo {
    display: flex;
    justify-content: center;
    align-items: center;

    &-border {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      overflow: hidden;
      background: var(--card-color);
      border: 4px solid var(--accent-color);
      @include neon-shadow;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (min-width: 768px) {
    &__content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    &__text h1 {
      font-size: 4.5rem;
    }

    &__text h2 {
      font-size: 2rem;
    }

    &__photo-border {
      width: 20rem;
      height: 20rem;
    }
  }
}
</style>
