'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'

const topNavItems = ['About Us', 'Our Community', 'News']
const mainNavItems = [
  'Initiatives',
  'CoEs',
  'Events & Outreach',
  'Policy Advocacy',
  'Thought Leadership',
  'Skills & Capability',
  'Advisories',
  'Knowledge Center'
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#1a1150]">
      {/* Top Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/placeholder.svg"
              alt="DSCI Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {topNavItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="text-white hover:text-blue-400">
              <Search className="h-5 w-5" />
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block py-4`}>
            <ul className="md:flex md:space-x-6 space-y-2 md:space-y-0">
              {mainNavItems.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-blue-400 transition-colors block md:inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

