import Hero from '../../components/hero'
import Features from '../../components/features'
import WhatsNew from '../../components/whats-new'
import Impact from '../../components/impact'
import Initiatives from '../../components/initiatives'
import Membership from '../../components/membership'
import ResourceCenter from '../../components/resource-center'


// Add stock images for the website
export const images = {
  hero: {
    cyberForHer: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1920&auto=format&fit=crop",
    awards: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop"
  },
  news: {
    security: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
    threat: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1920&auto=format&fit=crop"
  },
  initiatives: {
    techSagar: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
    cipher: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop",
    digitalPayment: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1920&auto=format&fit=crop",
    cyberShikshaa: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1920&auto=format&fit=crop"
  },
  sponsors: {
    rubrik: "https://upload.wikimedia.org/wikipedia/commons/7/73/Rubrik_logo.png",
    bhc: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/British_High_Commission.png/640px-British_High_Commission.png"
  }
}

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



