"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown, GraduationCap, Briefcase } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ResumeCard() {
  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Resume</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-gray-400" />
              <h3 className="text-lg font-medium text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-white font-medium">Bachelor of Engineering (BE)</h4>
                <p className="text-gray-400 text-sm">BMS College of Engineering</p>
                <p className="text-gray-500 text-sm mt-1">2021 - Present</p>
                <p className="text-gray-300 text-sm mt-2">
                  Computer Science with focus on blockchain technology and artificial intelligence
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-gray-400" />
              <h3 className="text-lg font-medium text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-white font-medium">Blockchain Developer Intern</h4>
                <p className="text-gray-400 text-sm">Tech Innovators</p>
                <p className="text-gray-500 text-sm mt-1">Summer 2023</p>
                <p className="text-gray-300 text-sm mt-2">
                  Worked on developing smart contracts and integrating blockchain solutions for decentralized
                  applications
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-zinc-800" />

        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://drive.google.com/file/d/1lodtIT_fffBYG4UwpaXn1oHopdAUlXeo/view">
              <Button className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
