import Hero from "@/components/hero"
import HeroTemplate from "@/components/HeroTemplate"

export const metadata = {
  title: 'BlrGrooveCo',
  description: 'BlrGrooveCo connects you with top artists for corporate events, weddings, and private gigs.',
}

export default function Home() {
  return (
    <>
      <HeroTemplate subtitle={'Unsubscribed Successfully'} h1={undefined} paragraph={undefined} b1Label={undefined} b1Url={undefined} b2Label={undefined} b2Url={undefined} psText={undefined} />
    </>
  )
}
