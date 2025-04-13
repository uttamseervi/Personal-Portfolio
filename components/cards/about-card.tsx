"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Briefcase, Code } from "lucide-react"

export default function AboutCard() {
  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
            <TabsTrigger value="personal" className="data-[state=active]:bg-zinc-700">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-zinc-700">
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="interests" className="data-[state=active]:bg-zinc-700">
              <Code className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Interests</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="mt-4 text-gray-300">
            <p>
              I&apos;m a passionate developer and tech enthusiast with a focus on blockchain and AI technologies.
              I thrive on solving complex problems, turning ideas into scalable solutions, and pushing boundaries of innovation.
            </p>
            <p className="mt-2">
              Beyond the code, I value discipline, consistency, and the traditional wisdom of working hard with a futuristic mindset.
              I'm always up for a meaningful challenge—and a good filter coffee.
            </p>
          </TabsContent>

          <TabsContent value="education" className="mt-4 text-gray-300">
            <p>
              Currently pursuing a Bachelor of Engineering at BMS College of Engineering (2021–Present), specializing in Computer Science.
            </p>
            <p className="mt-2">
              My academic interests align with real-world applications—especially in blockchain and artificial intelligence. 
              I'm actively building projects that integrate core CS principles with cutting-edge tech.
            </p>
          </TabsContent>

          <TabsContent value="interests" className="mt-4 text-gray-300">
            <p>
              My technical interests include smart contract development, decentralized applications (DApps), AI-powered agents,
              and building tools that bridge Web3 and AI.
            </p>
            <p className="mt-2">
              I’m also intrigued by token economics, privacy-preserving tech, and zero-knowledge proofs. Outside tech, I enjoy deep discussions, traditional values,
              and long-term thinking in a fast-changing world.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
