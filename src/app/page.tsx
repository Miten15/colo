import Hero from '../../components/hero'
import Features from '../../components/features'
import WhatsNew from '../../components/whats-new'
import Impact from '../../components/impact'
import Initiatives from '../../components/initiatives'
import Membership from '../../components/membership'
import ResourceCenter from '../../components/resource-center'

export default function Home() {
  return (
    <div className="bg-[#1a1150] min-h-screen">
      <Hero />
      <Features />
      <WhatsNew />
      <Impact />
      <Initiatives />
      <Membership />
      <ResourceCenter />
    </div>
  )
}

