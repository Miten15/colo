'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export function Counter({ end, suffix = "+", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const controls = useAnimation()
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const startCounting = () => {
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
  }

  return (
    <motion.span ref={elementRef} animate={controls} className="inline-flex">
      <span className="text-[#1a1150]">{count}</span>
      <span className="text-blue-500">{suffix}</span>
    </motion.span>
  )
}

