<template>
  <div class="main-container">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <TechnologiesSection />
    <ExperienceSection />
    <ContactForm />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import TechnologiesSection from "./components/TechnologiesSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ContactForm from "./components/ContactForm.vue";
import Footer from "./components/Footer.vue";
</script>
