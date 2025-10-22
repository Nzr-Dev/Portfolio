<template>
  <footer class="footer">
    <p class="footer-text">
      © {{ currentYear }} Nazr Dev. All rights reserved.
    </p>

    <button class="back-to-top" @click="scrollToTop">↑ Back to Top</button>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

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

.back-to-top {
  background: var(--accent-color);
  color: var(--bg-color);
  border: none;
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
