"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Users, Award, Briefcase } from "lucide-react"

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const counters = [
    { icon: <CheckCircle className="h-10 w-10 text-blue-600" />, value: 5, label: "Projects Completed", suffix: "+" },
    { icon: <Code className="h-10 w-10 text-blue-600" />, value: 50000, label: "Lines of Code", suffix: "+" },
    { icon: <Users className="h-10 w-10 text-blue-600" />, value: 5, label: "Happy Clients", suffix: "+" },
    { icon: <Award className="h-10 w-10 text-blue-600" />, value: 2, label: "Years of Experience", suffix: "+" },
    { icon: <Briefcase className="h-10 w-10 text-blue-600" />, value: 2, label: "Technologies Mastered", suffix: "+" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h2>
          <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">Numbers that speak for themselves</p>
        </div>
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:max-w-6xl">
          {counters.map((counter, index) => (
            <Card key={index} className="bg-white/10 border-none backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{counter.icon}</div>
                <div className="text-4xl font-bold mb-2">
                  {isVisible ? <Counter end={counter.value} duration={2000} /> : 0}
                  {counter.suffix}
                </div>
                <p className="text-blue-100">{counter.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterProps {
  end: number
  duration: number
}

function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration])

  return <>{count}</>
}
