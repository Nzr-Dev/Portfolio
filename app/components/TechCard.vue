<template>
  <div class="tecnologia">
    <img :src="imgSrc" :alt="altText" loading="lazy" />
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  imgSrc: { type: String, required: true },
  altText: { type: String, default: "" },
});
</script>

<style scoped>
/* Reutiliza las clases CSS globales */
.tecnologia {
  background: var(--card-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: var(--transition);
  text-align: center;
}
.tecnologia:hover {
  background: rgba(26, 122, 99, 0.7);
  box-shadow: 0 0 10px rgba(26, 122, 99, 0.7);
}
.tecnologia img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
}
.tecnologia p {
  margin-top: 1rem;
  color: var(--text-color);
  font-weight: 500;
}
</style>
