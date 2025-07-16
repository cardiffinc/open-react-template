import { Briefcase, Music, Sparkles, Settings, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Music className="w-8 h-8 text-purple-600" />,
    title: 'Curated Artist Network',
    description: '150+ professional bands, DJs, and performers across genres, handpicked for your vibe.',
  },
  {
    icon: <Settings className="w-8 h-8 text-purple-600" />,
    title: 'Hassle-Free Execution',
    description: 'We handle everything — artist logistics, sound, stage, and lights — end to end.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
    title: 'Festival-Level Energy',
    description: 'Inject the magic of live gigs into formal settings with finesse and flair.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    title: 'Corporate-First Focus',
    description: 'Events tailored for brand launches, offsites, team days, and leadership mixers.',
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: 'Tailored for Your Culture',
    description: 'We listen to your goals and design music experiences that fit your team’s identity.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
    title: 'Proven & Trusted',
    description: 'Our track record includes venues like Lulu Mall and 300+ successful gigs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Partner with <span className="text-purple-600">BlrGrooveCo?</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-2xl shadow hover:shadow-md transition"
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay="200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
