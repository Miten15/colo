'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const initiatives = [
  {
    title: "TechSagar",
    image: "/placeholder.svg",
    description: "India's Cybertech Repository"
  },
  {
    title: "Coalition of India for a Progressive and Holistic Encryption Regime (CIPHER)",
    image: "/placeholder.svg",
    description: "Promoting secure encryption practices"
  },
  {
    title: "Digital Payment Abhiyan",
    image: "/placeholder.svg",
    description: "Securing digital payments"
  },
  {
    title: "CyberShikshaa",
    image: "/placeholder.svg",
    description: "Cybersecurity education initiative"
  }
]

export default function Initiatives() {
  return (
    <section className="py-20 bg-[#1a1150]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Initiatives</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            As an industry body, we engage with diverse stakeholders for activities that spin off from our core strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  width={200}
                  height={100}
                  className="w-full h-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{initiative.title}</h3>
              <p className="text-gray-600 text-sm">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

