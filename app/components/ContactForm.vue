<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-text">
        I'm currently open to new opportunities. If you want to collaborate or
        just say hi, feel free to reach out!
      </p>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" id="name" type="text" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  alert(`Thanks ${form.value.name}! Your message has been sent (simulated).`);
  form.value = { name: "", email: "", message: "" };
};
</script>

<style scoped lang="scss">
.contact-section {
  padding: 5rem 1.5rem;
  background: var(--card-color);
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
}

.contact-text {
  font-size: 1.1rem;
  color: var(--muted-color);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;

  label {
    color: var(--text-color);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    border: 1px solid var(--muted-color);
    border-radius: var(--border-radius);
    background: #0a192f;
    color: var(--text-color);
    font-size: 1rem;
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 5px var(--accent-color);
    }
  }
}

.submit-btn {
  align-self: center;
  background: var(--accent-color);
  color: #0a192f;
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-neon);
  }
}
</style>
