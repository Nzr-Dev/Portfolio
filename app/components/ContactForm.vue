<template>
  <section 
    id="contact" 
    class="section" 
    role="region"
    aria-labelledby="encabezado-contacto"
  >
    <div class="section__container">
      <h2 id="contact-heading" class="section__title contact-title">
        {{ texts.contact.title }}
      </h2>
      
      <div class="contact-card">
        <form 
          class="contact-form" 
          @submit.prevent="handleSubmit"
          aria-describedby="instrucciones-formulario"
          novalidate
        >

          <div class="form-group">
            <label for="name" class="form-label">
              {{ texts.contact.form.name }}
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              :class="{ 'error': errors.name }"
              required
              :aria-required="true"
              :aria-invalid="errors.name ? 'true' : 'false'"
              :aria-describedby="errors.name ? 'name-error' : undefined"
              @blur="validateField('name')"
            />
            <span 
              v-if="errors.name" 
              id="name-error" 
              class="error-message"
              role="alert"
            >
              {{ errors.name }}
            </span>
          </div>
          
          <!-- Campo Email -->
          <div class="form-group">
            <label for="email" class="form-label">
              {{ texts.contact.form.email }}
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ 'error': errors.email }"
              required
              :aria-required="true"
              :aria-invalid="errors.email ? 'true' : 'false'"
              :aria-describedby="errors.email ? 'email-error' : undefined"
              @blur="validateField('email')"
            />
            <span 
              v-if="errors.email" 
              id="email-error" 
              class="error-message"
              role="alert"
            >
              {{ errors.email }}
            </span>
          </div>
          
          <!-- Campo Mensaje -->
          <div class="form-group">
            <label for="message" class="form-label">
              {{ texts.contact.form.message }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="form-textarea"
              :class="{ 'error': errors.message }"
              required
              :aria-required="true"
              :aria-invalid="errors.message ? 'true' : 'false'"
              :aria-describedby="errors.message ? 'message-error' : undefined"
              @blur="validateField('message')"
            ></textarea>
            <span 
              v-if="errors.message" 
              id="message-error" 
              class="error-message"
              role="alert"
            >
              {{ errors.message }}
            </span>
          </div>
          
          <button 
            type="submit" 
            class="btn btn--primary btn--full"
            :disabled="isSubmitting"
            :aria-disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else>{{ texts.contact.form.button }}</span>
          </button>
          
          <div 
            v-if="submitMessage" 
            class="submit-message"
            :class="{ 'error': submitError }"
            role="alert"
          >
            {{ submitMessage }}
          </div>
        </form>
        
        <div class="social-links">
          <p class="social-links__title">{{ texts.contact.social.title }}</p>
          <div class="social-icons">
            <a 
              href="https://github.com" 
              class="social-icon" 
              :aria-label="texts.contact.social.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com" 
              class="social-icon" 
              :aria-label="texts.contact.social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            
            <a 
              href="https://twitter.com" 
              class="social-icon" 
              :aria-label="texts.contact.social.twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref(false)

const validateField = (field: keyof typeof errors) => {
  const value = form[field].trim()
  
  switch (field) {
    case 'name':
      errors.name = value.length < 2 ? 'El nombre debe de tener al manos 2 carácteres.' : ''
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errors.email = !emailRegex.test(value) ? 'Introduce un email válido.' : ''
      break
    case 'message':
      errors.message = value.length < 10 ? 'El mensaje debe de tener al menos 10 carácteres.' : ''
      break
  }
}

const validateForm = (): boolean => {
  validateField('name')
  validateField('email')
  validateField('message')
  
  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = async () => {
  if (!validateForm()) {
    submitMessage.value = 'Por favor corrija los errores anteriores.'
    submitError.value = true
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    submitMessage.value = '¡Mensaje enviado exitosamente!'
    submitError.value = false
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
  } catch (error) {
    console.error('Form submission error:', error)
    submitMessage.value = 'No se pudo enviar el mensaje. Inténtalo de nuevo.'
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.contact-title {
  font-weight: 800;
}

.contact-card {
  @include card-style;
  max-width: 600px;
  margin: 0 auto;
  transition: var(--transition);
  border: 2px solid transparent;

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color);
    transform: translateY(-5px); 
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.9rem;
  color: var(--text-color); 
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input,
.form-textarea {
  padding: 0.75rem;
  border: 1px solid var(--card-color);
  border-radius: 0.5rem;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
  transition: var(--transition);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
  }

  &.error {
    border-color: #e53e3e;
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn--full {
  width: 100%;
}

.social-links {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);

  &__title {
    color: var(--text-color); 
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-icon {
  svg {
    width: 24px;
    height: 24px;
    stroke: var(--text-color); 
    transition: all 0.3s ease;
  }

  &:hover svg {
    stroke: var(--accent-color);
    transform: scale(1.1); 
  }
}

.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
  
  &.error {
    background: rgba(229, 62, 62, 0.1);
    color: #e53e3e;
  }
  
  &:not(.error) {
    background: rgba(72, 187, 120, 0.1);
    color: #48bb78;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>