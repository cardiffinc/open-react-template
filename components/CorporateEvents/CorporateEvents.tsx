"use client"
import React, { useEffect, useState } from 'react';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const services = [
              {
                title: 'Live Band Performances',
                desc: 'Acoustic to high-energy music for award nights, galas, and celebrations.'
              },
              {
                title: 'DJs & Themed Music Nights',
                desc: 'Professional DJs curating playlists for office parties and mixers.'
              },
              {
                title: 'Music Workshops & Team-Building',
                desc: 'Drumming circles, songwriting workshops, and jam sessions.'
              },
              {
                title: 'Brand Activations & Promotions',
                desc: 'Custom live performances for launches, activations, and store openings.'
              },
              {
                title: 'Office Jam Sessions, Open Mics, Karaoke',
                desc: 'Informal music nights to foster camaraderie and culture.'
              },
              {
                title: 'Event Production & Stage Management',
                desc: 'Sound, lighting & stage setups. End-to-end technical expertise.'
              }
            ]

const CorporateEvents = () => {
  const [videoSrc, setVideoSrc] = useState('');
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const desktopVideoId = '1zdhfLIj-M2Bwo7V4o5UI2KoO7zIXLxiY';
      const mobileVideoId = '1iLcxDVj8Tfr6tHQmQVvryoLi5pDVKY8B';
      const selectedId = isMobile ? mobileVideoId : desktopVideoId;

      setVideoSrc(`https://drive.google.com/file/d/${selectedId}/preview`);
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize); // Optional: Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white text-center py-20 px-6" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4" data-aos="zoom-in-up" data-aos-delay="200">
          Turn Corporate Events into <span className="text-purple-500 block">Unforgettable Experiences</span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl mx-auto font-bold" data-aos="zoom-in-up" data-aos-delay="300">
          Let’s JAM!
        </p>
        <p className="mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          From high-energy live bands to team-building music workshops,
          BlrGrooveCo crafts moments your people will remember.
        </p>

        {/* Video Placeholder
        <div className="bg-gray-700 mt-10 max-w-4xl mx-auto aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">[ Video_Goes_Here ]</span>
        </div> */}
        <div 
        className="bg-gray-700 mt-10 max-w-4xl mx-auto aspect-[9/16] md:aspect-video rounded-lg flex items-center justify-center overflow-hidden"
        data-aos="zoom-in-up" data-aos-delay="500">
          {videoSrc ? (
            <iframe
              src={videoSrc}
              allow="autoplay"
              className="w-full h-full rounded-lg"
              title="Corporate Event Video"
            />
          ) : (
            <span className="text-white text-lg">Loading video...</span>
          )}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 space-y-6 text-center" data-aos="fade-up" data-aos-delay="100">
        <p className="text-lg">
          What began as a love for live music grew into BlrGrooveCo, a team curating performances at festivals, restaurants, and malls.
        </p>
        <p className="text-lg">
          Now we bring that same energy to offices and corporate spaces, helping teams celebrate, connect, and create memories.
          From offsites to product launches and networking evenings, we deliver talent and event expertise to make it unforgettable.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-700 py-12" data-aos="fade-up">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-purple-600" data-aos="flip-up" data-aos-delay="300">300+</h3>
            <p className="mt-2 text-gray-300" data-aos="fade-up" data-aos-delay="400">Live Gigs Curated</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600" data-aos="flip-up" data-aos-delay="300">50+</h3>
            <p className="mt-2 text-gray-300" data-aos="fade-up" data-aos-delay="400">Venues Partnered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-purple-600" data-aos="flip-up" data-aos-delay="300">150+</h3>
            <p className="mt-2 text-gray-300" data-aos="fade-up" data-aos-delay="400">Artists in Our Network</p>
          </div>
        </div>
      </div>

      {/* Why Music Section */}
      <div className="py-16 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">Why Music for Corporates?</h2>
        <p className="text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
          Ditch the boring. Bring in the beats. Corporate events are often predictable — but they don’t have to be.
          Music transforms spaces, energizes people, and creates memories.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {['Employee Engagement', 'Brand Activation', 'Culture Building'].map((item) => (
            <div key={item} className="bg-white shadow rounded-lg p-6 text-purple-600 font-semibold" data-aos="zoom-in" data-aos-delay="300">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-800 py-20 px-6" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.map((service, index) => (
              <div key={service.title} 
              className="bg-gray-900 shadow-md rounded-lg p-6 rounded-2xl shadow hover:shadow-md transition"
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay="200">
                <h3 className="font-semibold text-lg mb-2 text-purple-700">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section
      <div className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="text-gray-300 space-y-4">
          <li>🎸 Deep artist network (Bands, DJs, musicians across genres)</li>
          <li>✅ Hassle-free execution (We handle everything, so you focus on your guests)</li>
          <li>🏆 Proven track record (Events at Lulu Mall)</li>
          <li>🎯 Tailored experiences (Every event customized for your brand’s vibe)</li>
        </ul>
      </div> */}

      <WhyChooseUs />

      {/* Portfolio Carousel Placeholder
      <div className="bg-gray-800 py-16 px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">See the Energy We Bring</h2>
        <div className="w-full h-64 bg-gray-400 rounded-lg flex items-center justify-center">
          <span className="text-white">Portfolio Gallery Coming soon!</span>
        </div>
      </div> */}

      {/* CTA */}
      <div className="text-center py-16 px-6 bg-purple-700 text-white" data-aos="zoom-out-left" data-aos-delay="200">
        <h2 className="text-3xl font-bold mb-4">Ready to Amp Up Your Corporate Events?</h2>
        <p className="mb-6 text-lg">Book a free consultation with our team today.</p>
        <a
          href="https://wa.me/+919980480343?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20you%20regarding%20a%20corporate%20event!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-900"
          data-aos="zoom-out-up"
          data-aos-delay="300"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CorporateEvents;
