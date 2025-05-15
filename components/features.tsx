interface FeatureProps {
  isHome: boolean;
}

export default function Features({ isHome }: FeatureProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up" data-aos-delay="300">
        <div className="py-12 md:py-20">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Do at <span className="text-purple-600">BlrGrooveCo</span>
            </h2>
            <p className="mt-4 text-lg text-black-600">
              Whether you're an artist, a venue owner, or an event organizer, we help you 
              create unforgettable experiences with live music.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Book Artists */}
            <div className="p-6 bg-black-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Book Top Artists</h3>
              <p className="text-black-600">
                Need live music for an event? We connect you with the best independent and tribute artists.
              </p>
              <a 
                href="/book-an-artist" 
                className="text-purple-600 font-semibold mt-4 inline-block"
                aria-label="Find Artists for Events"
              >
                Find Artists →
              </a>
            </div>

            {/* Register as an Artist */}
            <div className="p-6 bg-black-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Join as an Artist</h3>
              <p className="text-black-600">
                Perform at top venues and corporate events. We help you grow your audience and secure gigs.
              </p>
              <a 
                href="https://forms.gle/EdhUnAgGxxs8cS9d6" 
                className="text-purple-600 font-semibold mt-4 inline-block"
                aria-label="Register as an Artist"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up →
              </a>
            </div>

            {/* Event Curation */}
            <div className="p-6 bg-black-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Event Curation & Planning</h3>
              <p className="text-black-600">
                From music festivals to private gigs, we curate and execute seamless events with top-tier talent.
              </p>
              <a 
                href="/about" 
                className="text-purple-600 font-semibold mt-4 inline-block"
                aria-label="Learn More About Our Events"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-black-700">
              Ready to create an unforgettable event? Let's make it happen.
            </p>
            <a 
              href="https://wa.me/+919980480343?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20you%20regarding%20an%20event!"
              className="btn text-white bg-purple-600 hover:bg-purple-700 mt-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Us on WhatsApp"
            >
              Contact Us on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
