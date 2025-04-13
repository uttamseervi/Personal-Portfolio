"use client"
import Spline from '@splinetool/react-spline'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Globe() {
  return (
    <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white font-extralight">Zoom in. 🔍 I run that part too. 😤</CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-60px)]">
        <Spline
          scene="https://prod.spline.design/aH4I4ovIrf8X4A86/scene.splinecode"
        />
      </CardContent>
    </Card>
  )
}
