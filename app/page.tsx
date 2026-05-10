import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsShowcase />
      <SkillsSection />
      {/*<CertificationsSection />*/}
      <ExperienceTimeline />
      <EducationSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  )
}
