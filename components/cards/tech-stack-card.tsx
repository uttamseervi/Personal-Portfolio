"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

export default function TechStackCard() {
  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Flask", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Solidity", category: "Blockchain" },
    { name: "Ethereum", category: "Blockchain" },
    { name: "Web3.js", category: "Blockchain" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "LangChain", category: "AI" },
    { name: "OpenAI API", category: "AI" },
  ]

  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Tech Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <Command className="rounded-lg border border-zinc-800 bg-zinc-800">
          <CommandInput placeholder="Search technologies..." className="text-white" />
          <CommandList className="max-h-[200px]">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Frontend">
              {techStack
                .filter((tech) => tech.category === "Frontend")
                .map((tech) => (
                  <CommandItem key={tech.name} className="text-gray-300 cursor-default">
                    {tech.name}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Backend">
              {techStack
                .filter((tech) => tech.category === "Backend")
                .map((tech) => (
                  <CommandItem key={tech.name} className="text-gray-300 cursor-default">
                    {tech.name}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Blockchain">
              {techStack
                .filter((tech) => tech.category === "Blockchain")
                .map((tech) => (
                  <CommandItem key={tech.name} className="text-gray-300 cursor-default">
                    {tech.name}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Languages">
              {techStack
                .filter((tech) => tech.category === "Languages")
                .map((tech) => (
                  <CommandItem key={tech.name} className="text-gray-300 cursor-default">
                    {tech.name}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="AI">
              {techStack
                .filter((tech) => tech.category === "AI")
                .map((tech) => (
                  <CommandItem key={tech.name} className="text-gray-300 cursor-default">
                    {tech.name}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CardContent>
    </Card>
  )
}
