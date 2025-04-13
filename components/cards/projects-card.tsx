"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Info } from "lucide-react"

export default function ProjectsCard() {
  const projects = [
    {
      title: "Mega Blog",
      description: "A full-stack blog site where users can write, share, and interact with posts.",
      longDescription:
        "This project features user authentication, rich text editing, comment functionality, and responsive design. Built with React for the frontend and Flask for the backend API.",
      technologies: ["React", "Appwrite", "Tailwind CSS"],
      image: "https://res.cloudinary.com/duphxfug7/image/upload/v1734163979/vjern66lwswgaeii3wgy.png",
      githubLink: "https://github.com/uttamseervi/Mega-Blog",
      liveLink: "https://mega-blog-sandy.vercel.app/",
    },
    {
      title: "Hotel Management System",
      description:
        "A complete hotel management system with features like room booking, check-in/check-out, and admin management.",
      longDescription:
        "Includes user and admin dashboards, booking calendar, payment processing, and detailed reporting. Built with JavaScript for the frontend and Nodejs for the backend.",
      technologies: ["JavaScript", "Nodejs", "Tailwind"],
      image: "https://res.cloudinary.com/duphxfug7/image/upload/v1734163975/b7ude6bdirfcgadyfznt.png",
      githubLink: "https://github.com/uttamseervi/Hotel-Manegement-System",
      liveLink: "https://github.com/uttamseervi/Hotel-Manegement-System",
    },
    {
      title: "Anonymous Feedback Application",
      description: "An app for providing anonymous feedback with real-time chat features.",
      longDescription:
        "Features include real-time messaging, anonymous user sessions, feedback analytics, and admin moderation tools. Built using React and Socket.io for real-time communication.",
      technologies: ["Nextjs", "Tailwind", "clerk"],
      image: "https://res.cloudinary.com/duphxfug7/image/upload/v1744520111/Screenshot_2025-04-13_102155_nxod17.png",
      githubLink: "https://github.com/uttamseervi/True-Feedback",
      liveLink: "https://true-feedback-one.vercel.app/",
    },
    {
      title: "Emotion Recognition ML Project",
      description: "Using Machine Learning to detect emotions from images and videos.",
      longDescription:
        "Implements computer vision techniques to identify facial expressions and classify emotions in real-time. Built with Python, OpenCV, and TensorFlow for the ML model.",
      technologies: ["Python", "Nextjs", "TensorFlow"],
      image: "https://res.cloudinary.com/duphxfug7/image/upload/v1744450750/35bc6879-3fce-4654-b481-8a9e96dc7ac8.png",
      githubLink: "https://github.com/uttamseervi/emotions-augment-ai-hackathon",
      liveLink: "https://github.com/uttamseervi/emotions-augment-ai-hackathon",
    },
    // {
    //   title: "Huddle01",
    //   description:
    //     "A blockchain-based project integrating LangChain and OpenAI for AI-powered conversation summarization with blockchain verification.",
    //   longDescription:
    //     "This ongoing project combines blockchain technology with AI to create verifiable summaries of conversations. Uses LangChain for processing and OpenAI for generating summaries.",
    //   technologies: ["Blockchain", "LangChain", "OpenAI", "React"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   githubLink: "#",
    //   status: "In Progress",
    // },
    {
      title: "ERC-20 Token Marketplace",
      description: "A decentralized platform for buying and selling ERC-20 tokens for ETH.",
      longDescription:
        "This marketplace allows users to list, buy, and sell ERC-20 tokens in a decentralized manner. Features include token swaps, liquidity pools, and wallet integration.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      image: "https://res.cloudinary.com/duphxfug7/image/upload/v1744451039/411da98c-49a2-43dc-8beb-3b1f37b0daa2.png",
      githubLink: "https://github.com/uttamseervi/CryptoToken-MarketPlace",
      status: "In Development",
    },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden ">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-zinc-800 border-zinc-700 rounded-md">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Info className="h-4 w-4" />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80 bg-zinc-800 border-zinc-700">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                              <p className="text-sm text-gray-300">{project.longDescription}</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-zinc-700 text-gray-300 border-zinc-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white flex items-center gap-1"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white flex items-center gap-1"
                          >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                          </a>
                        ) : (
                          <span className="text-gray-500 text-sm italic">{project.status || "Coming soon"}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-zinc-800 border-zinc-700 text-white" />
          <CarouselNext className="right-2 bg-zinc-800 border-zinc-700 text-white" />
        </Carousel>
      </CardContent>
    </Card>
  )
}
