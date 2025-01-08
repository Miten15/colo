import { Button } from '../../../../components/ui/button'
import Link from 'next/link'

export default function NominatePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-[#1a1150] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Nominate for DSCI Excellence Awards 2025
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Nominations are currently closed. Please check back later.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            The nomination period for the 2025 DSCI Excellence Awards has ended. 
            Winners will be announced at our upcoming awards ceremony.
          </p>
          <Link href="/excellence-awards">
            <Button variant="outline">
              Return to Awards Overview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

