"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed">
            <p className="mb-4">
              I&apos;m currently a 3rd-year student at{" "}
              <span className="text-blue-400 font-medium">BMS College of Engineering</span>, deeply immersed in the
              world of <span className="text-emerald-400 font-medium">Blockchain</span>,{" "}
              <span className="text-blue-400 font-medium">AI</span>, and{" "}
              <span className="text-purple-400 font-medium">Web3</span> technologies.
            </p>
            <p className="mb-4">
              My passion lies in creating innovative, decentralized applications and AI-powered systems that can shape
              the future. Over the years, I&apos;ve worked on projects ranging from{" "}
              <span className="text-emerald-400 font-medium">smart contract development</span>,{" "}
              <span className="text-blue-400 font-medium">decentralized marketplaces</span>, to{" "}
              <span className="text-purple-400 font-medium">AI-driven summarization tools</span>.
            </p>
            <p>
              With a strong foundation in <span className="text-emerald-400 font-medium">Python</span>,{" "}
              <span className="text-blue-400 font-medium">Solidity</span>,{" "}
              <span className="text-purple-400 font-medium">React</span>, and{" "}
              <span className="text-emerald-400 font-medium">Flask</span>, I strive to push the boundaries of technology
              with each project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
