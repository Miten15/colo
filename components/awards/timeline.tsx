'use client'

import { TimelineEvent } from '../../types/awards'
import { motion } from 'framer-motion'

interface TimelineProps {
  events?: TimelineEvent[];
}

export default function Timeline({ events = [] }: TimelineProps) {
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No timeline events available
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
            
            {/* Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
              <div className={`bg-white p-6 rounded-lg shadow-lg ${
                event.status === 'completed' ? 'border-l-4 border-green-500' :
                event.status === 'current' ? 'border-l-4 border-blue-500' :
                'border-l-4 border-gray-300'
              }`}>
                <div className="text-sm text-gray-500">{event.date}</div>
                <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

