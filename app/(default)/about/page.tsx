import HeroTemplate from "@/components/HeroTemplate"
import Zigzag from "@/components/zigzag"

export const metadata = {
  title: 'About BlrGrooveCo | Live Music & Event Curation in Bengaluru',
  description: 'BlrGrooveCo curates live music and cultural events in Bengaluru, connecting event organizers with talented musicians, bands, and performers.',
}

export default function About() {
  return (
    <>
      <HeroTemplate
        h1={"At BlrGrooveCo, we're not just event curators, we're vibe architects."}
        subtitle={"With a passion for music, community events, sports, movies, and a dedication to creating unforgettable moments, we specialize in crafting events that resonate with everyone."}
        paragraph={undefined}
        b1Label={"Connect With Us"}
        b1Url={"/contact-us"}
        b2Label={undefined}
        b2Url={undefined} psText={undefined} />
      <Zigzag />
    </>
  )
}
