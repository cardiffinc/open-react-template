export default function Features() {
  return (
    <section>
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="py-12 md:py-20">

          {/* Section Header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold" data-aos="fade-up">
              What We Do at <span className="text-purple-600">BlrGrooveCo</span>
            </h2>
            <p className="mt-4 text-lg text-black-600" data-aos="fade-up" data-aos-delay="200">
              From high-energy concerts and cozy jam nights to team-building
              workshops and full-scale event production. We help brands, campuses,
              and communities connect through unforgettable music experiences.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-black-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-2">Live Performances</h3>
              <p className="text-black-600">
                Acoustic sets, tribute acts, indie bands, or DJs. We match the music to your vibe and venue.
              </p>
            </div>

            <div className="p-6 bg-black-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-xl font-semibold mb-2">Brand Activations & Campus Gigs</h3>
              <p className="text-black-600">
                We curate performances for store launches, college fests, and high-traffic public spaces.
              </p>
            </div>

            <div className="p-6 bg-black-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2">Workshops & Culture Nights</h3>
              <p className="text-black-600">
                Drumming circles, open mics, songwriting sessions, and karaoke to build team spirit and community.
              </p>
            </div>

            <div className="p-6 bg-black-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="250">
              <h3 className="text-xl font-semibold mb-2">Artist Network</h3>
              <p className="text-black-600">
                200+ incredible musicians across genres, cities, and formats. All ready to take the stage.
              </p>
              <a
                href="https://forms.gle/EdhUnAgGxxs8cS9d6"
                className="text-purple-600 font-semibold mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join as an Artist →
              </a>
            </div>

            <div className="p-6 bg-black-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-2">Curation & Planning</h3>
              <p className="text-black-600">
                From concept to stage, we design music-led experiences tailored to your budget, audience and setting.
              </p>
              <a
                href="/about"
                className="text-purple-600 font-semibold mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>

            <div className="p-6 bg-black-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="350">
              <h3 className="text-xl font-semibold mb-2">Tech & Production</h3>
              <p className="text-black-600">
                Sound, lights, staging. We handle the entire production so you can focus on enjoying the show.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-6" data-aos="fade-up" data-aos-delay="400">
            <p className="text-lg text-black-700">
              Planning something special? Let’s make it unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/+919980480343?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20you%20regarding%20an%20event!"
                className="btn text-white bg-purple-600 hover:bg-purple-700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Us on WhatsApp"
              >
                Contact Us on WhatsApp
              </a>
              <a
                href="/corporate"
                className="btn text-purple-700 border border-purple-600 hover:bg-purple-50"
              >
                Explore Corporate
              </a>
              <a
                href="/colleges"
                className="btn text-purple-700 border border-purple-600 hover:bg-purple-50"
              >
                Explore Colleges
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
