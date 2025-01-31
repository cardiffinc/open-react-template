export const metadata = {
  title: 'Hire Live Bands & Artists in Bengaluru | BlrGrooveCo',
  description: 'Looking to hire a live band or musician in Bengaluru? BlrGrooveCo connects you with top artists for corporate events, weddings, and private gigs.',
}

import Features from '@/components/features'
import Hero from '@/components/hero'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Hero />
      <Features isHome={true}/>
      {/* <WhatsAppButton 
        phone={"+919380569770"} 
        message={"Hi, I'm interested in booking a band for my event!"} 
        floating={true}/> */}
    </>
  )
}
