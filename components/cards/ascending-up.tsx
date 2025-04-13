"use client"
import Spline from '@splinetool/react-spline'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CircuitLoop() {
    return (
        <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white font-extralight">Jacked Into Tomorrow 🔌</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-90px)]">
                <Spline
                    scene="https://prod.spline.design/ceAKlMbioRBnMaKx/scene.splinecode"
                />
            </CardContent>
        </Card>
    )
}
