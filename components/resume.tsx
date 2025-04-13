"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { FileDown, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Resume() {
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

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            My <span className="text-emerald-400">Resume</span>
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <h4 className="text-xl font-medium text-white mb-2">Bachelor of Engineering (BE)</h4>
                <p className="text-emerald-400 mb-2">BMS College of Engineering</p>
                <p className="text-gray-400 mb-4">2021 - Present</p>
                <p className="text-gray-300">
                  Currently pursuing a degree in Computer Science with a focus on blockchain technology and artificial
                  intelligence.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-emerald-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                <h4 className="text-xl font-medium text-white mb-2">Blockchain Developer Intern</h4>
                <p className="text-emerald-400 mb-2">Tech Innovators</p>
                <p className="text-gray-400 mb-4">Summer 2023</p>
                <p className="text-gray-300">
                  Worked on developing smart contracts and integrating blockchain solutions for decentralized
                  applications.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-10">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-emerald-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
              <ul className="space-y-4">
                <li>
                  <h4 className="text-lg font-medium text-white">Blockchain Development Certification</h4>
                  <p className="text-gray-400">Web3 Foundation, 2023</p>
                </li>
                <li>
                  <h4 className="text-lg font-medium text-white">Advanced React & Next.js Development</h4>
                  <p className="text-gray-400">Frontend Masters, 2022</p>
                </li>
                <li>
                  <h4 className="text-lg font-medium text-white">AI & Machine Learning Fundamentals</h4>
                  <p className="text-gray-400">DeepLearning.AI, 2022</p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
              <FileDown className="mr-2 h-5 w-5" />
              Download Full Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
