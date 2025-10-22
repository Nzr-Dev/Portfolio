<template>
  <section id="proyectos" class="seccion-proyectos">
    <div class="proyectos-contenedor">
      <h2 class="titulo-seccion">Proyectos</h2>

      <div class="proyecto" v-for="(project, index) in projects" :key="index">
        <div
          class="proyecto-imagen"
          :style="{ backgroundImage: `url(${project.image})` }"
        ></div>
        <div class="proyecto-texto">
          <div class="proyecto-cabecera">
            <h3>{{ project.title }}</h3>
            <a :href="project.liveUrl" class="btn btn-secundario rojo"
              >Ver proyecto</a
            >
          </div>
          <p class="proyecto-descripcion">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Título del proyecto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis id purus ut suscipit. Ut luctus sapien quis erat venenatis feugiat. Nullam venenatis turpis a est rutrum sagittis. Aliquam dapibus ipsum nec augue imperdiet convallis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoQxJFFL0RgVFRhzQVDLPuQ0qaCscYSTtArwkLThBlPfP3Wr4pV020AVICzatYiT8N1tncmPTmMoi-OD2CX5EsAfLcD-l1iv9_UI3YPoUMUzNVSLYy6snHWJv1aQIiBiMiGB3aqGluLNcH_AuL7383uomKuIVQr0kLC9WU-7dVCLPINwr9FOf0KgBTkf2OczK99LU6uD893xPitn7zCbZROpyvjlIwX-dQ0WlDcOcy66ZFfi4mbs0EGF2W32ZqQeUsmjvK-mrIgu5",
    liveUrl: "#",
  },
  // ... más proyectos
];
</script>

<style scoped lang="scss">
.seccion-proyectos {
  padding: 5rem 1.5rem;
}

.proyectos-contenedor {
  max-width: var(--max-width);
  margin: 0 auto;
}

.titulo-seccion {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
}

.proyecto {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  margin-bottom: 3rem;
  transition: var(--transition);

  &:hover {
    box-shadow: 0 0 15px rgba(26, 122, 99, 0.7);
  }
}

.proyecto-imagen {
  width: 100%;
  aspect-ratio: 16/9;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
}

.proyecto-texto {
  width: 100%;
}

.proyecto-cabecera {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-color);
  }
}

.proyecto-descripcion {
  margin-top: 1rem;
  color: var(--muted-color);
  line-height: 1.6;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  font-weight: 700;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  text-decoration: none;

  &.btn-secundario {
    background: var(--card-color);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);

    &.rojo {
      background: var(--accent-color);
      color: var(--bg-color);
      border: none;
    }

    &:hover {
      box-shadow: var(--shadow-neon);
      transform: translateY(-2px);
    }
  }
}

@media (min-width: 768px) {
  .proyecto {
    flex-direction: row;
    align-items: center;
  }

  .proyecto-imagen {
    width: 50%;
  }

  .proyecto-texto {
    width: 50%;
  }
}
</style>
