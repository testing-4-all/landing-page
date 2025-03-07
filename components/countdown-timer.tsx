"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    calculateTimeLeft()

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {Object.entries(timeLeft).map(([key, value]) => (
        <Card key={key} className="p-4 text-center">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground capitalize">{key}</div>
        </Card>
      ))}
    </div>
  )
}

