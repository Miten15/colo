import { notFound } from 'next/navigation'
import { awardsData } from '../../../../data/awards-data'
import Timeline from '../../../../components/awards/timeline'
import WinnerShowcase from '../../../../components/awards/winner-showcase'
import { Button } from '../../../../components/ui/button'
import Link from 'next/link'

export default function AwardYearPage({ params }: { params: { year: string } }) {
  const yearData = awardsData[params.year]

  if (!yearData) {
    notFound()
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1a1150] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DSCI Excellence Awards {params.year}
            </h1>
            {yearData.theme && (
              <>
                <h2 className="text-3xl font-semibold mb-4">{yearData.theme.title}</h2>
                <p className="text-xl text-gray-300">{yearData.theme.subtitle}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Event Timeline</h3>
          <Timeline events={yearData.timeline} />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Award Winners</h3>
          <WinnerShowcase winners={yearData.segments.corporate.winners} />
        </div>

        {yearData.partners && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Our Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {yearData.partners.map((partner) => (
                <div key={partner.name} className="text-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-16 w-auto mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600">{partner.type} Partner</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="/excellence-awards">
            <Button variant="outline">
              View All Years
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

