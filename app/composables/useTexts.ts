import texts from '@/content/texts.json'

export function useTexts() {
  return {
    // Hero section
    hero: texts.hero,
    
    // Projects
    projects: texts.projects,
    
    // Technologies
    technologies: texts.technologies,
    
    // Experience
    experience: texts.experience,
    
    // Contact
    contact: texts.contact,
    
    // Footer
    footer: texts.footer,
    
    // Navigation (si lo necesitas)
    nav: {
      home: "Home",
      projects: "Projects", 
      technologies: "Technologies",
      experience: "Experience",
      contact: "Contact"
    }
  }
}