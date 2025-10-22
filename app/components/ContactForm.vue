<template>
  <section id="contacto" class="seccion-contacto">
    <div class="contacto-contenedor">
      <h2 class="titulo-seccion">Contacto</h2>

      <div class="contacto-card">
        <!-- FORMULARIO -->
        <form
          action="#"
          class="formulario-contacto"
          aria-label="Formulario de contacto"
        >
          <div class="campo-formulario">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" v-model="form.name" />
          </div>

          <div class="campo-formulario">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" />
          </div>

          <div class="campo-formulario">
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              v-model="form.message"
            ></textarea>
          </div>

          <div class="campo-formulario">
            <button
              type="submit"
              class="btn-enviar"
              @click.prevent="submitForm"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>

        <!-- REDES SOCIALES -->
        <div class="redes-sociales" aria-label="Redes sociales">
          <p>También puedes encontrarme en:</p>
          <div class="iconos-redes">
            <a href="#" class="icono-red" aria-label="GitHub">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
                c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07
                0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42
                3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>

            <a href="#" class="icono-red" aria-label="LinkedIn">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2
                2 0 0 0-2-2 2 2 0 0 0-2
                2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="#" class="icono-red" aria-label="Twitter">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14
                1.53 4.48 4.48 0 0 0-7.86 3v1A10.66
                10.66 0 0 1 3 4s-4 9 5 13a11.64
                11.64 0 0 1-7 2c9 5 20 0
                20-11.5a4.5 4.5 0 0 0-.08-.83A7.72
                7.72 0 0 0 23 3z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

function submitForm() {
  // Aquí puedes agregar la lógica de envío de formulario
  console.log("Formulario enviado:", form);
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.seccion-contacto {
  padding: 5rem 1.5rem;

  .contacto-contenedor {
    max-width: var(--max-width);
    margin: 0 auto;

    .titulo-seccion {
      font-size: 3rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
      margin-bottom: 3rem;
    }

    .contacto-card {
      @include card-style;
      text-align: center;

      .formulario-contacto {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .campo-formulario {
          text-align: left;

          label {
            display: block;
            font-size: 0.9rem;
            color: var(--muted-color);
            margin-bottom: 0.25rem;
          }

          input,
          textarea {
            width: 100%;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border: 1px solid var(--card-color);
            background: var(--bg-color);
            color: var(--text-color);
            font-size: 1rem;
            outline: none;
            transition: border 0.3s, box-shadow 0.3s;

            &:focus {
              border-color: var(--accent-color);
              @include neon-shadow;
            }
          }
        }

        .btn-enviar {
          width: 100%;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 0.5rem;
          background: var(--accent-color);
          color: var(--bg-color);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: var(--transition);

          &:hover {
            @include neon-shadow;
          }
        }
      }

      .redes-sociales {
        margin-top: 2rem;
        p {
          color: var(--muted-color);
          margin-bottom: 1rem;
        }

        .iconos-redes {
          display: flex;
          justify-content: center;
          gap: 1.5rem;

          .icono-red svg {
            width: 24px;
            height: 24px;
            stroke: var(--text-color);
            transition: stroke 0.3s;
          }

          .icono-red:hover svg {
            stroke: var(--accent-color);
          }
        }
      }
    }
  }
}
</style>
