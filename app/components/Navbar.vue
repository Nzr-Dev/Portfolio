<template>
  <nav class="navbar" role="navigation" aria-label="Menú de navegación">
    <div class="nav-links">
      <a
        v-for="link in navigationLinks"
        :key="link.id"
        :href="link.href"
        class="nav-link"
        @keydown.enter="handleNavKeydown(link.href)"
      >
        {{ link.text }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navigationLinks = [
  { id: 1, href: "#home", text: "Inicio" },
  { id: 2, href: "#projects", text: "Proyectos" },
  { id: 3, href: "#technologies", text: "Tecnologías" },
  { id: 4, href: "#experience", text: "Experiencia" },
  { id: 5, href: "#contact", text: "Contacto" },
];

const handleNavKeydown = (href: string) => {
  const target = document.querySelector(href);
  if (target) {
    (target as HTMLElement).focus();
    target.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(6px);
  z-index: 1000;
  padding: 0.75rem 0;
}

.nav-links {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 1rem;
  width: 100%;
  overflow: hidden;
}

.nav-link {
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.4rem 0.1rem;
  /* Tamaño de letra máximo posible con responsividad garantizada */
  font-size: clamp(0.75rem, 3.5vw, 1.1rem);
  position: relative;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
  text-align: center;
  flex: 1 1 auto;
  min-width: 0;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: var(--accent-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
    outline: none;

    &::after {
      width: 100%;
      box-shadow: 0 0 5px var(--accent-color), 0 0 10px var(--accent-color);
    }
  }
}

/* Ajustes progresivos que maximizan el tamaño de letra */
@media (max-width: 1024px) {
  .nav-links {
    gap: 0.4rem;
    padding: 0 0.8rem;
  }

  .nav-link {
    font-size: clamp(0.7rem, 3.2vw, 1rem);
  }
}

@media (max-width: 768px) {
  .nav-links {
    gap: 0.3rem;
    padding: 0 0.6rem;
  }

  .nav-link {
    font-size: clamp(0.65rem, 3vw, 0.95rem);
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 0.2rem;
    padding: 0 0.5rem;
  }

  .nav-link {
    font-size: clamp(0.6rem, 2.8vw, 0.9rem);
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 0.15rem;
    padding: 0 0.4rem;
  }

  .nav-link {
    font-size: clamp(0.55rem, 2.6vw, 0.85rem);
  }
}

@media (max-width: 360px) {
  .nav-links {
    gap: 0.1rem;
    padding: 0 0.3rem;
  }

  .nav-link {
    font-size: clamp(0.5rem, 2.4vw, 0.8rem);
  }
}

@media (max-width: 320px) {
  .nav-links {
    gap: 0.05rem;
    padding: 0 0.25rem;
  }

  .nav-link {
    font-size: clamp(0.45rem, 2.2vw, 0.75rem);
  }
}

/* Para pantallas muy grandes, tamaño máximo fijo */
@media (min-width: 1400px) {
  .nav-link {
    font-size: 1.1rem;
  }
}
</style>
