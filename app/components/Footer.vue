<template>
  <footer class="footer">
    <div class="footer-contenedor">
      <p>© 2024 Juan Pérez. Todos los derechos reservados.</p>
      <a href="#inicio" class="volver-arriba">Volver arriba</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No se necesitan props ni lógica adicional
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.footer {
  @include card-style; // aplica background, border-radius y padding según variables
  padding: 1.5rem;
  text-align: center;
  color: var(--muted-color);

  .footer-contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--muted-color);
  }

  a {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);

    &:hover {
      color: var(--accent-color);
    }
  }
}

/* RESPONSIVE simple, igual que el CSS original */
@media (min-width: 768px) {
  .footer {
    .footer-contenedor {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>
