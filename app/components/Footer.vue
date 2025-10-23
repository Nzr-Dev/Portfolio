<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__copyright">
        {{ texts.footer.copyright }}
      </p>
      <a 
        href="#home" 
        class="footer__button"
        :aria-label="texts.footer.backToTop"
      >
        <span class="footer__button-text">Volver arriba</span>
        <svg class="footer__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.footer {
  @include card-style;
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__copyright {
    color: var(--text-color);
    margin: 0;
    font-size: 0.9rem;
    order: 1;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    background: var(--accent-color);
    color: var(--bg-color);
    transition: var(--transition);
    text-decoration: none;
    border: 2px solid transparent;
    font-weight: 600;
    font-size: 0.85rem;
    order: 2; 

    &:hover {
      @include neon-shadow;
      transform: translateY(-2px);
      border-color: var(--accent-color);
    }

    &:focus {
      outline: none;
      @include neon-shadow;
    }
  }

  &__button-text {
    display: inline-block;
  }

  &__icon {
    width: 1rem;
    height: 1rem;
    stroke: currentColor;
  }
}


@media (min-width: 768px) {
  .footer {
    &__container {
      flex-direction: column; 
      justify-content: center;
      text-align: center;
    }
  }
}
</style>