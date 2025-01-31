import BookForm from "@/components/BookForm/BookForm"
import Features from "@/components/features"
import HeroTemplate from "@/components/HeroTemplate"

export const metadata = {
  title: 'Get in Touch with BlrGrooveCo',
  description: 'Looking to book live music, collaborate on an event, or simply want to say hello? Reach out to us! Our team is ready to bring the groove to your event, whatever your vision may be.',
}

export default function ContactUs() {
  return (
    <>
      <HeroTemplate 
              h1={"Get in Touch with BlrGrooveCo"} 
              subtitle={"Looking to book live music, collaborate on an event, or simply want to say hello? Reach out to us! Our team is ready to bring the groove to your event, whatever your vision may be."} 
              paragraph={undefined} 
              b1Label={"WhatsApp"} 
              b1Url={`https://wa.me/+919980480343?text=${encodeURIComponent("Hello, I would like to talk to you regarding an event!")}`} 
              b2Label={"Instagram"} 
              b2Url={"https://www.instagram.com/blrgrooveco/"} 
              psText={<p className="text-m text-gray-400 m-8">You can also reach out to us directly through the form below. <a className="underline" href="/contact-us#form">We’d love to hear from you!</a>.</p>
              }  />
      <BookForm id={"form"} />
    </>
  )
}
