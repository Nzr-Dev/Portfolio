<template>
  <section id="experience" class="section">
    <div class="section__container">
      <h2 class="section__title">Experience</h2>

      <div class="experience-grid">
        <ExperienceCard title="Education & Training" :items="educationItems" />

        <ExperienceCard title="Work Experience" :items="workItems" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from "./ExperienceCard.vue";

const educationItems = [
  {
    title: "Bachelor's Degree in Computer Engineering",
    organization: "Polytechnic University",
    period: "2015 - 2019",
    description: "",
    type: "education",
  },
  {
    title: "Advanced React Course",
    organization: "Online Course Platform",
    period: "2020",
    description: "",
    type: "education",
  },
];

const workItems = [
  {
    title: "Frontend Developer",
    organization: "Tech Solutions",
    period: "January 2021 - Present",
    description:
      "Development and maintenance of interactive web applications using React and Redux. Collaboration with UI/UX teams to implement pixel-perfect designs.",
    type: "work",
  },
  {
    title: "Junior Web Developer",
    organization: "Innovate Co.",
    period: "June 2019 - December 2020",
    description:
      "Building responsive and optimized websites for clients from various industries, using HTML, CSS and JavaScript.",
    type: "work",
  },
];
</script>

<style scoped lang="scss">
.experience-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .experience-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
