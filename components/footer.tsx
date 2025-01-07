import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  'About Us': ['Overview', 'Careers', 'Contact Us', "What's New"],
  'Media Centre': ['Press release', 'Media Coverage', 'Blogs', 'Media Contact'],
  'Resource Centre': [
    'Studies & Reports',
    'Point of View',
    'Newsletter',
    'White Papers',
    'Annual Reports'
  ],
  'Community': ['Become a Member', 'Membership Directory', 'DSCI Chapters']
}

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Address */}
          <div className="lg:col-span-1">
            <Image
              src="/placeholder.svg"
              alt="DSCI Logo"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-sm text-gray-400">
              Operational Office - 4th Floor, NASSCOM Campus, Plot No-7-10, Sector 126, Noida, UP - 201303
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Disclaimer
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Vulnerability Disclosure Program
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 DSCI. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

