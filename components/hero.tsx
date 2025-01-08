'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { ASSETS } from '../config/assets'

const banners = [
  {
    title: "Cyber for HER",
    subtitle: "HACKATHON EMPOWERING WOMEN IN CYBER SECURITY",
    image: ASSETS.images.banners.cyberForHer,
    cta: "Learn More",
    href: "/cyber-for-her",
    sponsors: [
      { name: "Rubrik", logo: ASSETS.images.sponsors.rubrik },
      { name: "British High Commission", logo: ASSETS.images.sponsors.bhc }
    ]
  },
  {
    title: "DSCI Excellence Awards",
    subtitle: "Recognizing Innovation in Security & Privacy",
    image: ASSETS.images.banners.awards2024,
    cta: "View Past Awards",
    href: "/excellence-awards"
  }
]

export default function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden bg-[#1a1150]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1150] via-[#1a1150]/80 to-transparent z-10" />
            <img
              src={banners[currentBanner].image}
              alt={banners[currentBanner].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      {banners[currentBanner].title}
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                      {banners[currentBanner].subtitle}
                    </p>
                    <Link href={banners[currentBanner].href}>
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        {banners[currentBanner].cta}
                      </Button>
                    </Link>
                    
                    {banners[currentBanner].sponsors && (
                      <div className="mt-12">
                        <p className="text-gray-400 mb-4">Sponsored by:</p>
                        <div className="flex items-center gap-8">
                          {banners[currentBanner].sponsors.map((sponsor, index) => (
                            <img
                              key={index}
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="h-12 w-auto"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentBanner ? 'bg-blue-600' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

