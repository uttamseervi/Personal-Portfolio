"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function SocialCard() {
  const socials = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com/uttamseervi" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/uttam-seervi-8500032ab/" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://x.com/UttamSeerv23134" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, href: "mailto:seerviu690@gmail.com" },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Connect</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
              <span className="text-sm text-gray-300 mt-2">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
