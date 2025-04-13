"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"

export default function SkillsCard() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "React", level: 90, description: "Frontend development with hooks, state management, and routing" },
    { name: "Solidity", level: 85, description: "Smart contract development for Ethereum and EVM chains" },
    { name: "Python", level: 80, description: "Backend development with Flask and AI/ML applications" },
    { name: "JavaScript", level: 85, description: "Web development and scripting" },
    { name: "Web3.js", level: 75, description: "Blockchain interaction and integration" },
    { name: "AI/ML", level: 70, description: "LangChain, OpenAI API, and custom NLP models" },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h3
                        className="text-gray-300 font-medium cursor-help"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {skill.name}
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-zinc-800 border-zinc-700">
                      <p className="text-sm">{skill.description}</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2 bg-zinc-800"
                  indicatorClassName={`${hoveredSkill === skill.name ? "bg-white" : "bg-zinc-600"} transition-colors`}
                />
              </div>
            ))}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
