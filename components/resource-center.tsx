'use client'

import { motion } from "framer-motion"
import { FileText, FileCheck, Mail, Brain } from 'lucide-react'
import Image from "next/image"

const resources = [
  {
    title: "Studies & Reports",
    icon: <FileText className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Whitepapers",
    icon: <FileCheck className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Newsletters",
    icon: <Mail className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "PoV Papers",
    icon: <Brain className="h-8 w-8 text-blue-500" />,
  },
]

export default function ResourceCenter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <span className="text-sm font-medium">Latest Report</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">
              India Cyber Threat Report 2025
            </h3>
            <p className="mb-6">
              The cyber threat landscape in India has reached a critical inflection point, marked by an unprecedented volume and sophistication of threats targeting both organizations and individuals.
            </p>
            <Image
              src="/placeholder.svg"
              alt="Cyber Threat Report"
              width={400}
              height={300}
              className="rounded-lg w-full object-cover"
            />
            <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Explore now
            </button>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-12">Resource Center</h2>
            <div className="grid grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer"
                >
                  {resource.icon}
                  <h3 className="mt-4 text-lg font-semibold">{resource.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

