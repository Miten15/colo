'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface YearCardProps {
  year: string;
  isActive?: boolean;
}

export default function YearCard({ year, isActive = false }: YearCardProps) {
  return (
    <Link href={`/excellence-awards/${year}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
          isActive ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        <div className="p-6">
          <Image
            src="/assets/logos/dsci-excellence-awards.svg"
            alt={`DSCI Excellence Awards ${year}`}
            width={200}
            height={100}
            className="mx-auto mb-4"
          />
          <h3 className={`text-4xl font-bold text-center ${
            parseInt(year) === 2024 ? 'text-orange-500' : 'text-blue-600'
          }`}>
            {year}
          </h3>
        </div>
      </motion.div>
    </Link>
  )
}

