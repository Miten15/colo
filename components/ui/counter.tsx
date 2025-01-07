'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export function Counter({ end, suffix = "+", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const steps = 30
    const stepDuration = duration * 1000 / steps
    let currentStep = 0

    controls.start({
      scale: [1, 1.1, 1],
      transition: { duration: 0.3 }
    })

    const timer = setInterval(() => {
      currentStep++
      setCount(Math.floor((end * currentStep) / steps))
      
      if (currentStep >= steps) {
        clearInterval(timer)
        setCount(end)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end, duration, controls])

  return (
    <motion.span animate={controls} className="inline-flex">
      <span className="text-[#1a1150]">{count}</span>
      <span className="text-blue-500">{suffix}</span>
    </motion.span>
  )
}

