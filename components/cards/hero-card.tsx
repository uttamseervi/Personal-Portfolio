"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export default function HeroCard() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(40,40,40,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-8"></div>

      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white pt-4"
        >
          Uttam Seervi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-6 text-gray-300 h-[60px]"
        >
          <TypeAnimation
            sequence={["Blockchain Developer", 1000, "AI Enthusiast", 1000, "Web3 Innovator", 1000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-8 text-gray-400 max-w-xl"
        >
          Building the future with innovative technologies. Currently a 3rd-year student at BMS College of Engineering,
          focused on creating impactful solutions in the blockchain and AI space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pb-6"
        >
          <Button
            onClick={scrollToProjects}
            className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
