export const metadata = {
  title: 'Hire Live Bands & Artists in Bengaluru | BlrGrooveCo',
  description: 'Looking to hire a live band or musician in Bengaluru? BlrGrooveCo connects you with top artists for corporate events, weddings, and private gigs.',
}

import Features from '@/components/features'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Features isHome={true}/>
    </>
  )
}
