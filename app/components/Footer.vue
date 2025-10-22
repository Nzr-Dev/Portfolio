<script setup lang="ts">
import { useTexts } from "@/composables/useTexts";
const texts = useTexts();

const currentYear = new Date().getFullYear();

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="footer">
    <p class="footer-text">{{ texts.footer.text }} © {{ currentYear }}</p>
    <button class="btn btn-secondary" @click="scrollTop">
      {{ texts.footer.button }}
    </button>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--card-color);
  color: var(--muted-color);
  text-align: center;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-text {
  font-size: 0.9rem;
}

.btn-secondary {
  background: var(--accent-weak);
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-neon);
  }
}
</style>
