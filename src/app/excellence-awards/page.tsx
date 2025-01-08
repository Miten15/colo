import { ASSETS } from '../../../config/assets'
import YearCard from '../../../components/awards/year-card'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'

const awardYears = ["2025","2024", "2023", "2022", "2021"]

export default function ExcellenceAwardsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1a1150] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            DSCI Excellence Awards
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Recognizing and celebrating excellence in cybersecurity and data protection
          </p>
        </div>
      </div>

      {/* Awards Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awardYears.map((year) => (
            <YearCard key={year} year={year} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">About DSCI Excellence Awards</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            The DSCI Excellence Awards is a prestigious recognition program that honors organizations 
            and individuals who have made significant contributions to the field of cybersecurity and 
            data protection. These awards celebrate innovation, best practices, and outstanding 
            achievements in various categories related to information security.
          </p>
          <Link href="/excellence-awards/nominate">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Nominate for 2024 Awards
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

