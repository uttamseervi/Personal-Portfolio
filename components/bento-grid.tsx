"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import useIsMobile from "@/hooks/useIsMobile"
import FadeInSection from "@/components/FadeInSection"

// Lightweight cards
import AboutCard from "./cards/about-card"
import SkillsCard from "./cards/skills-card"
import ProjectsCard from "./cards/projects-card"
import ResumeCard from "./cards/resume-card"
import ContactCard from "./cards/contact-card"
import TechStackCard from "./cards/tech-stack-card"
import SocialCard from "./cards/social-card"
import TestimonialsCard from "./cards/testimonials-card"
import BlogCard from "./cards/blog-card"

// Dynamically imported heavy components
const HeroCard = dynamic(() => import("./cards/hero-card"), { ssr: false })
const Robot3DCard = dynamic(() => import("./cards/robot-3d-card"), { ssr: false })
const ParticleModelCard = dynamic(() => import("./cards/particle-model-card"), { ssr: false })
const ChatGtpButton = dynamic(() => import("./chatgptButton"), { ssr: false })
const RobotBall = dynamic(() => import("./cards/robot-ball"), { ssr: false })
const CircuitLoop = dynamic(() => import("./cards/ascending-up"), { ssr: false })

export default function BentoGrid() {
  const isMobile = useIsMobile()

  // Prevent scroll on load
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
      {/* Hero Section */}
      <div className="col-span-1 md:col-span-3 lg:col-span-4 min-h-[400px]" id="hero">
        <FadeInSection>
          <HeroCard />
        </FadeInSection>
      </div>

      {/* About */}
      <div className="col-span-1 md:col-span-3 row-span-1" id="about">
        <FadeInSection>
          <AboutCard />
        </FadeInSection>
      </div>

      {/* Social */}
      <div className="col-span-1 row-span-1">
        <FadeInSection>
          <SocialCard />
        </FadeInSection>
      </div>

      {/* 3D Robot */}
      <div className="col-span-1 md:col-span-2 row-span-2">
        <FadeInSection>
          <Robot3DCard />
        </FadeInSection>
      </div>

      {/* Skills */}
      <div className="col-span-1 md:col-span-2 row-span-2" id="skills">
        <FadeInSection>
          <SkillsCard />
        </FadeInSection>
      </div>

      {/* Tech Stack */}
      <div className="col-span-1 row-span-1">
        <FadeInSection>
          <TechStackCard />
        </FadeInSection>
      </div>

      {/* Resume */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1" id="resume">
        <FadeInSection>
          <ResumeCard />
        </FadeInSection>
      </div>

      {/* ChatGPT Button */}
      <div className="col-span-1 md:col-span-2 row-span-2 h-[350px]">
        <FadeInSection>
          <ChatGtpButton />
        </FadeInSection>
      </div>

      {/* Circuit Loop */}
      <div className="col-span-1 md:col-span-2 row-span-2 h-[350px]">
        <FadeInSection>
          <CircuitLoop />
        </FadeInSection>
      </div>

      {/* Projects */}
      <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1" id="projects">
        <FadeInSection>
          <ProjectsCard />
        </FadeInSection>
      </div>

      {/* Particle Model */}
      <div className="col-span-1 md:col-span-2 row-span-2 h-[350px]">
        <FadeInSection>
          <ParticleModelCard />
        </FadeInSection>
      </div>

      {/* Testimonials */}
      <div className="col-span-1 md:col-span-2 row-span-1">
        <FadeInSection>
          <TestimonialsCard />
        </FadeInSection>
      </div>

      {/* Blog */}
      <div className="col-span-1 md:col-span-3 lg:col-span-4">
        <FadeInSection>
          <BlogCard />
        </FadeInSection>
      </div>

      {/* Robot Ball */}
      <div className="col-span-1 md:col-span-2 row-span-1">
        <FadeInSection>
          <RobotBall />
        </FadeInSection>
      </div>

      {/* Contact */}
      <div className="col-span-1 md:col-span-2 row-span-1">
        <FadeInSection>
          <ContactCard />
        </FadeInSection>
      </div>
    </div>
  )
}
