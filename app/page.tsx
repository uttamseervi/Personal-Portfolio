import Navbar from "@/components/navbar"
import BentoGrid from "@/components/bento-grid"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <BentoGrid />
        </div>
      </main>
    </ThemeProvider>
  )
}
