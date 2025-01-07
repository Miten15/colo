'use client'

import { HoverEffect } from "../components/ui/card-hover-effect"
import { BadgeIcon as Certificate, Users, Mic2, Linkedin } from 'lucide-react'

const features = [
  {
    title: "Get Recognition from your Peers and Employers",
    description: "Accelerate your career",
    icon: <Certificate className="h-10 w-10" />,
    link: "#"
  },
  {
    title: "Join our Corporate Member Diversity",
    description: "Explore membership benefits",
    icon: <Users className="h-10 w-10" />,
    link: "#"
  },
  {
    title: "Stay tuned for our Podcast Episodes",
    description: "Get ready for insightful discussions",
    icon: <Mic2 className="h-10 w-10" />,
    link: "#"
  },
  {
    title: "Stay tuned for our LinkedIn Live Sessions",
    description: "Get ready for insightful discussions",
    icon: <Linkedin className="h-10 w-10" />,
    link: "#"
  },
]

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group bg-white dark:bg-slate-950 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all duration-300 h-[250px] flex flex-col justify-between"
          >
            <div>
              <div className="mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
            <div className="mt-4">
              <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

