"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ParticleBackground from "./particle-background"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500"
          >
            Hi, I&apos;m Uttam Seervi.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200"
          >
            A Passionate Developer, Innovator, and Tech Enthusiast.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Building the future with <span className="text-emerald-400 font-semibold">Blockchain</span>,{" "}
            <span className="text-blue-400 font-semibold">AI</span>, and{" "}
            <span className="text-purple-400 font-semibold">Web3</span> solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
            >
              Explore My Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
