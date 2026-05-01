import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ProjectsGallery } from '@/components/projects-gallery'
import { AboutSection } from '@/components/about-section'
import { TeamSection } from '@/components/team-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsGallery />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
