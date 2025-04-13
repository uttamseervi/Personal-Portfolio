"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function TimelineCard() {
  const timelineItems = [
    {
      year: "2023",
      title: "Blockchain Developer Intern",
      company: "Tech Innovators",
      description: "Developed smart contracts and integrated blockchain solutions for decentralized applications.",
    },
    {
      year: "2022",
      title: "Web3 Hackathon Winner",
      company: "ETHGlobal",
      description: "First place in the DeFi track with a decentralized lending protocol project.",
    },
    {
      year: "2021",
      title: "Started Computer Science Degree",
      company: "BMS College of Engineering",
      description: "Began studies with a focus on blockchain technology and artificial intelligence.",
    },
    {
      year: "2020",
      title: "Full Stack Developer",
      company: "Freelance",
      description: "Built web applications for small businesses and startups using modern technologies.",
    },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Career Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-zinc-700 ml-4 mt-4">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute flex items-center justify-center w-8 h-8 bg-zinc-800 rounded-full -left-4 ring-4 ring-black">
                <span className="text-white text-sm">{item.year}</span>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{item.title}</h3>
              <h4 className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.company}</h4>
              <p className="mb-4 text-base font-normal text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
