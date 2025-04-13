"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-bold"
          >
            <span className="text-white">Uttam</span>
            <span className="text-gray-400">Seervi</span>
          </motion.div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="justify-start text-lg text-white hover:text-gray-300 hover:bg-zinc-800"
                      onClick={() => scrollToSection(item.href)}
                    >
                      {item.name}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </motion.header>
  )
}
