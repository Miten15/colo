'use client'

import { motion } from "framer-motion"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"
import { Button } from "../components/ui/button"
import Image from "next/image"

const news = [
  {
    title: "Reimagining Security: An era powered by Generative AI",
    date: "Dec 30, 2024",
    description: "The report highlights the current state of the Indian cybersecurity landscape, with a particular focus on the shifts associated in the sector with the integration of G...",
    image: "/placeholder.svg"
  },
  {
    title: "India Cyber Threat Report 2025",
    date: "Dec 30, 2024",
    description: "The cyber threat landscape in India has reached a critical inflection point, marked by an unprecedented volume and sophistication of threats targeting both organizations and individuals. Lev...",
    image: "/placeholder.svg"
  },
  // Add more news items
]

export default function WhatsNew() {
  return (
    <div className="bg-[#1a1150] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-gray-400 text-xl">Upcoming</h2>
            <h1 className="text-white text-4xl font-bold">What's New</h1>
          </div>
          <Button variant="outline" className="text-white">
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 rounded-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="w-full object-cover h-48"
              />
              <div className="p-6">
                <div className="text-blue-400 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

