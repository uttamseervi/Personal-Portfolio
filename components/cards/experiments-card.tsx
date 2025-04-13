"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beaker, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperimentsCard() {
  const experiments = [
    {
      title: "NFT Marketplace Prototype",
      tags: ["Ethereum", "NFT", "React"],
      description: "Experimental marketplace for trading digital assets with unique features.",
      link: "#",
    },
    {
      title: "AI-Powered Code Generator",
      tags: ["Python", "TensorFlow", "NLP"],
      description: "Tool that generates code snippets based on natural language descriptions.",
      link: "#",
    },
    {
      title: "Decentralized Identity System",
      tags: ["Blockchain", "Identity", "Zero-Knowledge"],
      description: "Privacy-preserving identity verification using zero-knowledge proofs.",
      link: "#",
    },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white flex items-center">
          <Beaker className="h-5 w-5 mr-2" />
          Experiments & Labs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {experiments.map((experiment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-4 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-white font-medium mb-2">{experiment.title}</h3>
                <a href={experiment.link} className="text-gray-400 hover:text-white">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {experiment.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="bg-zinc-700 text-gray-300 border-zinc-600">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-300 text-sm">{experiment.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
