<template>
  <nav class="navbar">
    <div class="nav-enlaces">
      <a href="#inicio">Inicio</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#tecnologias">Tecnologías</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#contacto">Contacto</a>
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

.nav-enlaces {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
}

.nav-enlaces a {
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-enlaces a:hover {
  color: var(--accent-color);
}
</style>
