import { FeaturedApps } from '@/components/FeaturedApp'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { CTA } from '@/components/CTA'

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <FeaturedApps />
      <CTA />
    </main>
  )
}

export default Home