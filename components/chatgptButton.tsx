'use client'

import Spline from '@splinetool/react-spline'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function ChatGtpButton() {
    return (
        <Card className="w-full h-full bg-zinc-900 border-zinc-800 overflow-hidden">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white bg-transparent font-extralight">
                🧠 Zero Lines, All Mind 🚀
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div
                    className="w-full h-[300px] overflow-hidden touch-none"
                    style={{
                        userSelect: 'none',
                        touchAction: 'none', // Prevent pinch-zoom and pan
                    }}
                >
                    <Spline scene="https://prod.spline.design/XnlbliHNd8Fe-alp/scene.splinecode" />
                </div>
            </CardContent>
        </Card>
    )
}
