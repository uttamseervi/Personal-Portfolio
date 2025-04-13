"use client"
import Spline from '@splinetool/react-spline'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RobotBall() {
    return (
        <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Interactive 3D Model</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-60px)]">
                <Spline
                    scene="https://prod.spline.design/GvSeGFQQgko9x4Wx/scene.splinecode"
                />
            </CardContent>
        </Card>
    )
}
