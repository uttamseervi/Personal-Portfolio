"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Database, Cpu, Brain, Wrench, Layers } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-8 w-8 text-emerald-400" />,
      skills: [
        "HTML, CSS, JavaScript",
        "React (with hooks, state management, routing)",
        "Responsive Design & Mobile-first Approach",
      ],
    },
    {
      title: "Backend",
      icon: <Database className="h-8 w-8 text-blue-400" />,
      skills: ["Python (Flask)", "WebSocket-based Communication", "Smart Contract Development (Solidity)"],
    },
    {
      title: "Blockchain",
      icon: <Cpu className="h-8 w-8 text-purple-400" />,
      skills: ["Ethereum, Polygon", "ERC-20 Tokens", "Web3.js, Ethers.js"],
    },
    {
      title: "AI / NLP",
      icon: <Brain className="h-8 w-8 text-emerald-400" />,
      skills: ["LangChain", "OpenAI / Gemini API", "Custom NLP models (BERT, GPT)"],
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-8 w-8 text-blue-400" />,
      skills: ["Thirdweb for blockchain integration", "Git/GitHub for version control", "Docker, CI/CD basics"],
    },
    {
      title: "Others",
      icon: <Layers className="h-8 w-8 text-purple-400" />,
      skills: ["No-code platforms (Bubble.io)", "SaaS Development", "Data Structures & Algorithms"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            My <span className="text-emerald-400">Skills</span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
