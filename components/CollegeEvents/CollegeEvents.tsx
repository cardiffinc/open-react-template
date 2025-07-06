"use client"
import React from 'react';

const CollegeEvents = () => {
    return (
        <div className="bg-black text-white px-6 py-24">
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Take Your College Fest to the Next Level</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    From headlining concerts to open mics, BlrGrooveCo powers unforgettable college events across the city.
                </p>
                <div className="bg-gray-700 mt-10 max-w-4xl mx-auto aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">[ Video_Goes_Here ]</span>
        </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-700 py-12" data-aos="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center" data-aos="fade-up">
                <div>
                    <p className="text-4xl font-bold text-purple-600" data-aos="fade-up">300+</p>
                    <p className="text-gray-400 mt-2">Events Curated</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-purple-600" data-aos="fade-up">150+ Artists</p>
                    <p className="text-gray-400 mt-2">Across Bands, DJs & MCs</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-purple-600" data-aos="fade-up">50+ Brands</p>
                    <p className="text-gray-400 mt-2">Worked With</p>
                </div>
            </div>
            </div>

            {/* Services */}
            <div className="py-16 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-12 mx-4 md:mx-8 lg:mx-12 my-12">
                
          {/* Flagship Fest */}
          <div className="border border-white/10 rounded-xl p-6 hover:shadow-xl transition bg-white/5" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2 text-purple-600">Flagship Fest Performances</h3>
            <p className="text-gray-400 mb-4">
              From indie headliners to student stage showcases, we design high-energy lineups and help manage your mainstage.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Headline Live Bands</li>
              <li>DJs for After-Parties</li>
              <li>Stage Sound & Light Setup</li>
              <li>Artist Logistics Handled End-to-End</li>
            </ul>
          </div>

          {/* Cultural Day & Clubs */}
          <div className="border border-white/10 rounded-xl p-6 hover:shadow-xl transition bg-white/5" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2 text-purple-600">Cultural Day & Club Collabs</h3>
            <p className="text-gray-400 mb-4">
              Music for cultural fests, language days, and club events. We bring diverse sounds and ideas to your stage.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Acoustic Indie Showcases</li>
              <li>Regional Language Jam Nights</li>
              <li>Theatre & Slam Poetry Collabs</li>
              <li>Dance + Music Fusion Acts</li>
            </ul>
          </div>

          {/* Freshers & Farewells */}
          <div className="border border-white/10 rounded-xl p-6 hover:shadow-xl transition bg-white/5" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2 text-purple-600">Freshers & Farewells</h3>
            <p className="text-gray-400 mb-4">
              Kick off the year or end it with a bang. We bring energy and emotion to Freshers and Farewell nights.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Interactive DJs & Emcees</li>
              <li>Personalized Anthem Videos</li>
              <li>Full Event Setup On Campus</li>
            </ul>
          </div>

          {/* Workshops & Competitions */}
          <div className="border border-white/10 rounded-xl p-6 hover:shadow-xl transition bg-white/5" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-2 text-purple-600">Workshops & Competitions</h3>
            <p className="text-gray-400 mb-4">
              Let your students jam, learn, and compete. Our music-driven workshops engage and elevate.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Rap Battles & Open Mics</li>
              <li>Songwriting & Drumming Workshops</li>
              <li>College Band Competitions</li>
            </ul>
          </div>
        </div>
        </div>

            {/* Call to Action */}
            <div className="text-center py-16 px-6 bg-purple-700 text-white" data-aos="fade-up">
                <p className="text-xl text-gray-300 mb-6">
                    Ready to curate a lineup your college will remember forever?
                </p>
                <a
                    href="https://wa.me/+919980480343?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20you%20regarding%20a%20college%20event!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-900"
                >
                    Contact Us on WhatsApp
                </a>
            </div>
        </div>
    )
}

export default CollegeEvents;