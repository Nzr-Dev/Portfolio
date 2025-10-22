<template>
  <div class="experiencia-bloque">
    <h3 class="subtitulo-experiencia">{{ title }}</h3>
    <div class="linea-tiempo">
      <div v-for="(item, index) in items" :key="index" class="item-tiempo">
        <div class="icono-tiempo">
          <div class="icono-circulo">
            <span
              v-if="item.icon"
              class="material-symbols-outlined"
              aria-hidden="true"
              >work</span
            >
            <template v-else>{{ index + 1 }}</template>
          </div>
          <div v-if="index !== items.length - 1" class="linea-vertical"></div>
        </div>
        <div class="contenido-tiempo">
          <h4>{{ item.title }}</h4>
          <p class="texto-destacado">{{ item.highlight }}</p>
          <p class="texto-secundario">{{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimeItem {
  title: string;
  highlight: string;
  date: string;
  icon?: boolean; // indica si debe mostrar icono en lugar de número
}

interface Props {
  title: string;
  items: TimeItem[];
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.experiencia-bloque {
  @include card-style;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .subtitulo-experiencia {
    font-size: 1.75rem;
    color: var(--accent-color);
    text-align: center;
    margin-bottom: 2rem;
  }

  .linea-tiempo {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .item-tiempo {
      display: flex;

      .icono-tiempo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 1rem;

        .icono-circulo {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-color);
          color: var(--bg-color);
          font-weight: 700;
          @include neon-shadow;
        }

        .linea-vertical {
          width: 2px;
          flex-grow: 1;
          background-color: rgba(100, 255, 218, 0.5);
          margin-top: 0.25rem;
        }
      }

      .contenido-tiempo {
        h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-color);
          margin: 0;
        }
        .texto-destacado {
          color: var(--accent-color);
          font-size: 0.9rem;
          margin-top: 0.25rem;
        }
        .texto-secundario {
          color: var(--muted-color);
          font-size: 0.9rem;
          margin-top: 0.5rem;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
