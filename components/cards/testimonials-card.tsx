"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function TestimonialsCard() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CTO at TechStart",
      content:
        "Uttam's blockchain expertise is exceptional. He delivered a complex smart contract system that exceeded our expectations.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Chen",
      role: "Project Manager",
      content: "Working with Uttam was a pleasure. His technical skills and communication made our project a success.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Rodriguez",
      role: "Blockchain Developer",
      content:
        "Uttam's contributions to our open-source project were invaluable. His code is clean, efficient, and well-documented.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card className="w-full max-h-[350px] bg-zinc-900 border-zinc-800 overflow-y-scroll">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white ">Testimonials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800 p-4 rounded-lg"
            >
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-gray-300 mb-2">{testimonial.content}</p>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
