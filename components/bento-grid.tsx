"use client"

import { motion } from "framer-motion"
import HeroCard from "./cards/hero-card"
import AboutCard from "./cards/about-card"
import SkillsCard from "./cards/skills-card"
import ProjectsCard from "./cards/projects-card"
import ResumeCard from "./cards/resume-card"
import ContactCard from "./cards/contact-card"
import TechStackCard from "./cards/tech-stack-card"
import SocialCard from "./cards/social-card"
import Robot3DCard from "./cards/robot-3d-card"
import TimelineCard from "./cards/timeline-card"
import TestimonialsCard from "./cards/testimonials-card"
import ParticleModelCard from "./cards/particle-model-card"
import BlogCard from "./cards/blog-card"
import ExperimentsCard from "./cards/experiments-card"
import ChatGtpButton from "./chatgptButton"
import RobotBall from "./cards/robot-ball"
import CircuitLoop from "./cards/ascending-up"

export default function BentoGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20"
    >
      {/* Hero Section - Large Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-3 lg:col-span-4 h-[400px]" id="hero">
        <HeroCard />
      </motion.div>

      {/* About Section - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-3 row-span-1" id="about">
        <AboutCard />
      </motion.div>

      {/* Social Links - Small Card */}
      <motion.div variants={item} className="col-span-1 row-span-1">
        <SocialCard />
      </motion.div>


      {/* 3D Robot Model - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-2 h-[400px]">
        <Robot3DCard />
      </motion.div>

      {/* Skills Section - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-2" id="skills">
        <SkillsCard />
      </motion.div>

      {/* Tech Stack - Small Card */}
      <motion.div variants={item} className="col-span-1 row-span-1">
        <TechStackCard />
      </motion.div>

      {/* Contact Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1" id="resume">
        <ResumeCard />
      </motion.div>

      {/* Interactive Globe - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-2 h-[350px]">

        <ChatGtpButton />
      </motion.div>
      {/* ascending up */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-2 h-[350px]">

        <CircuitLoop />
      </motion.div>

      {/* Projects Section - Large Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1" id="projects">
        <ProjectsCard />
      </motion.div>

      {/* Timeline Section - Large Card */}
      {/* <motion.div variants={item} className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1">
        <TimelineCard />
      </motion.div> */}

      {/* Particle Model - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-2 h-[350px]">
        <ParticleModelCard />
      </motion.div>

      {/* Testimonials - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-1">
        <TestimonialsCard />
      </motion.div>

      {/* Blog Posts - Medium Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-3 lg:col-span-4 ">
        <BlogCard />
      </motion.div>

      {/* Experiments - Medium Card */}
      {/* <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-1">
        <ExperimentsCard />
      </motion.div> */}

      {/* robot ball  */}
      <motion.div variants={item} className="col-span-1 md:col-span-2  row-span-1">
        <RobotBall />
      </motion.div>

      {/* Contact Card */}
      <motion.div variants={item} className="col-span-1 md:col-span-2  row-span-1">
        <ContactCard />
      </motion.div>
    </motion.div>
  )
}
