<template>
  <nav class="navbar">
    <div class="nav-links">
      <a href="#home">Inicio</a>
      <a href="#projects">Proyectos</a>
      <a href="#technologies">Tecnologías</a>
      <a href="#experience">Experiencia</a>
      <a href="#contact">Contacto</a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  top: 0;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(6px);
  z-index: 50;
  padding: 1rem 0;
}

.nav-links {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-links a:hover {
  color: var(--accent-color);
}
</style>
