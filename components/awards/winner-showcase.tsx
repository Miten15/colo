'use client'

import { Winner } from '../../types/awards'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface WinnerShowcaseProps {
  winners: Winner[]
}

export default function WinnerShowcase({ winners }: WinnerShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {winners.map((winner, index) => (
        <motion.div
          key={winner.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <Image
              src={winner.image}
              alt={winner.name}
              width={200}
              height={200}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold text-center mb-2">{winner.name}</h4>
            <p className="text-gray-600 text-center mb-2">{winner.title}</p>
            <p className="text-gray-500 text-center mb-4">{winner.organization}</p>
            <div className="bg-blue-100 text-blue-800 text-sm font-semibold py-1 px-3 rounded-full text-center">
              {winner.category}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

