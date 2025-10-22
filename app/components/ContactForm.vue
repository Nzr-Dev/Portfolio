<template>
  <section id="contact" class="section">
    <div class="section__container">
      <h2 class="section__title">{{ texts.contact.title }}</h2>
      
      <div class="contact-card">
        <p class="contact-description">{{ texts.contact.description }}</p>
        
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">{{ texts.contact.form.name }}</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">{{ texts.contact.form.email }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">{{ texts.contact.form.message }}</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              class="form-textarea"
              required
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn--primary btn--full">
            {{ texts.contact.form.button }}
          </button>
        </form>
        
        <div class="social-links">
          <p class="social-links__title">{{ texts.contact.social.title }}</p>
          <div class="social-icons">
            <a href="#" class="social-icon" :aria-label="texts.contact.social.github">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            
            <a href="#" class="social-icon" :aria-label="texts.contact.social.linkedin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            
            <a href="#" class="social-icon" :aria-label="texts.contact.social.twitter">
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
import { reactive } from 'vue';
import { useTexts } from '@/composables/useTexts'

const texts = useTexts()

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form);
};
</script>

<style scoped lang="scss">
.contact-card {
  @include card-style;
  max-width: 600px;
  margin: 0 auto;
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
  color: var(--muted-color);
  margin-bottom: 0.5rem;
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

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    @include neon-shadow;
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

  &__title {
    color: var(--muted-color);
    margin-bottom: 1rem;
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
    transition: stroke 0.3s ease;
  }

  &:hover svg {
    stroke: var(--accent-color);
  }
}

.contact-description {
  text-align: center;
  color: var(--muted-color);
  margin-bottom: 2rem;
  line-height: 1.6;
}
</style>
