'use client'

import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Building2, Briefcase, Plane, Phone, BanknoteIcon as Bank, Hospital, Users, Cog } from 'lucide-react'

const sectors = [
  { name: "BFSI", icon: <Bank className="h-6 w-6" /> },
  { name: "IT-BPM", icon: <Cog className="h-6 w-6" /> },
  { name: "POWER", icon: <Building2 className="h-6 w-6" /> },
  { name: "AVIATION", icon: <Plane className="h-6 w-6" /> },
  { name: "TELECOM", icon: <Phone className="h-6 w-6" /> },
  { name: "HEALTHCARE", icon: <Hospital className="h-6 w-6" /> },
  { name: "IT SERVICES", icon: <Briefcase className="h-6 w-6" /> },
  { name: "OTHERS", icon: <Users className="h-6 w-6" /> },
]

export default function Membership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">DSCI Membership</h2>
            <p className="text-gray-600 mb-8">
              The DSCI Corporate Membership program offers organizations a competitive advantage through advisory support on cybersecurity and data protection. Members contribute to DSCI's vision of a safe and trusted cyberspace through policy advocacy, thought leadership, and outreach activities.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Become a Member Now
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-600">500+</div>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200"
                >
                  {sector.icon}
                  <span className="mt-2 text-sm font-medium text-center">{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

