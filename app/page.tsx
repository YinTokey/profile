import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <Footer />
    </div>
  )
}
