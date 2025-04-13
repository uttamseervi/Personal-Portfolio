"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function BlogCard() {
  const blogPosts = [
    {
      title: "Understanding Smart Contract Security",
      date: "March 15, 2023",
      readTime: "8 min read",
      excerpt: "An in-depth look at common vulnerabilities in smart contracts and how to prevent them.",
      link: "#",
    },
    {
      title: "The Future of Web3 Development",
      date: "January 22, 2023",
      readTime: "6 min read",
      excerpt: "Exploring upcoming trends and technologies in the Web3 ecosystem.",
      link: "#",
    },
    {
      title: "Integrating AI with Blockchain",
      date: "November 10, 2022",
      readTime: "10 min read",
      excerpt: "How artificial intelligence can enhance blockchain applications and use cases.",
      link: "#",
    },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Latest Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href={post.link} className="block p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
                <h3 className="text-white font-medium mb-2 group-hover:text-gray-200">{post.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{post.excerpt}</p>
                <div className="flex items-center text-gray-400 text-sm group-hover:text-white transition-colors">
                  <span className="mr-1">Read more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
