<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__copyright">
        {{ texts.footer.copyright }}
      </p>
      <a href="#home" class="footer__link">
        {{ texts.footer.backToTop }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()
</script>

<style scoped lang="scss">
.footer {
  @include card-style;
  text-align: center;
  margin-top: 2rem;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__copyright {
    color: var(--muted-color);
    margin: 0;
  }

  &__link {
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-color);
    }
  }
}

@media (min-width: 768px) {
  .footer {
    &__container {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }
}
</style>
