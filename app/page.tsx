import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground className="z-0" />
      <div className="relative z-10">
        <ThemeToggle />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
