"use client"

import { FloatingNav } from "@/components/floating-nav"
import { CursorFollow } from "@/components/cursor-follow"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CasesSection } from "@/components/sections/cases-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactsSection } from "@/components/sections/contacts-section"
import { Footer } from "@/components/sections/footer"
import { MarqueeSection } from "@/components/sections/marquee-section"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom cursor */}
      <CursorFollow />

      {/* Floating navigation */}
      <FloatingNav />

      {/* Sections */}
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <CasesSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactsSection />
      <Footer />
    </main>
  )
}
