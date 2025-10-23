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
  { id: 1, href: '#home', text: 'Inicio' },
  { id: 2, href: '#projects', text: 'Proyectos' },
  { id: 3, href: '#technologies', text: 'Tecnologías' },
  { id: 4, href: '#experience', text: 'Experiencia' },
  { id: 5, href: '#contact', text: 'Contacto' }
]

const handleNavKeydown = (href: string) => {
  const target = document.querySelector(href)
  if (target) {
    (target as HTMLElement).focus()
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
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

.nav-link {
  color: var(--text-color);
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.5rem 0.25rem;
  font-size: 1.1rem; /* Tamaño de letra aumentado */
  position: relative;

  &::after {
    content: '';
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
      box-shadow: 0 0 5px var(--accent-color),
                  0 0 10px var(--accent-color);
    }
  }
}

@media (max-width: 640px) {
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .nav-link {
    font-size: 1rem;
  }
}
</style>