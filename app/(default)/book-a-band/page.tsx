import BookForm from "@/components/BookForm/BookForm"
import HeroTemplate from "@/components/HeroTemplate"
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton"

export const metadata = {
  title: ' Hire a Live Band in Bengaluru | Book Top Musicians for Events',
  description: 'Need a live band in Bengaluru? BlrGrooveCo connects you with rock, pop, indie, and jazz bands for corporate events, weddings, and private parties.',
}

export default function BookABandPage() {
  return (
    <>
      <HeroTemplate 
        h1={"Unforgettable Live Band Performances for Your Event"} 
        subtitle={"From high-energy rock to soothing jazz, find the perfect band to set the vibe for your corporate event, wedding, or private party."} 
        paragraph={undefined} 
        b1Label={"Book A Band"} 
        b1Url={"/book-a-band#form"} 
        b2Label={undefined} 
        b2Url={undefined} 
        psText={<p className="text-m text-gray-400 m-8">Looking for a solo musician instead? <a className="underline" href="/book-an-artist">Book an artist in Bengaluru here</a>.</p>
        }  />
      <BookForm id={'form'}/>
      <WhatsAppButton 
        phone={"+919380569770"} 
        message={"Hi, I'm interested in booking a band for my event!"} 
        floating={true}/>
    </>
  )
}
