import Banner from "@/components/banner"
import BookForm from "@/components/BookForm/BookForm"
import Hero from "@/components/hero"
import HeroTemplate from "@/components/HeroTemplate"
import ModalVideo from "@/components/modal-video"
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton"

export const metadata = {
  title: 'Hire a Solo Artist in Bengaluru | Singers & Musicians for Events',
  description: 'Hire top solo artists in Bengaluru for live performances at weddings, corporate events, and private gigs. Acoustic singers, instrumentalists, and more!',
}

export default function BookAnArtistPage() {
  return (
    <>
      <HeroTemplate
        h1="Book a Talented Artist for an Intimate Experience"
        subtitle="Discover and hire the best solo artists, singer-songwriters, and instrumentalists to bring a personal touch to your event."
        paragraph={null}
        b1Label={'Find Your Artist'}
        b1Url={"/book-an-artist#form"} 
        b2Label={null}
        b2Url={null} 
        psText={<p className="text-m text-gray-400 m-8">Looking for a Live Band instead? <a className="underline" href="/book-a-band">Book a Band in Bengaluru here</a>.</p>}  />
      <BookForm id={'form'}/>
      <WhatsAppButton
        phone={"+919380569770"} 
        message={"Hi, I'm interested in booking a band for my event!"} 
        floating={true}/>
    </>
  )
}
