import texts from '@/content/texts.json'

export function useTexts() {
  return {
    hero: texts.hero,
    projects: texts.projects,
    technologies: texts.technologies,
    experience: texts.experience,
    contact: texts.contact,
    footer: texts.footer,
    nav: {
      home: "Home",
      projects: "Projects", 
      technologies: "Technologies",
      experience: "Experience",
      contact: "Contact"
    }
  }
}