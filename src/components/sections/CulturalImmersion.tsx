import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  symbolColor: string;
  services: string[];
}

const services: ServiceCategory[] = [
  {
    id: 'weddings',
    title: 'Wedding Decorations',
    description:
      'Transform your wedding venue into a celebration of dreams. From floral arrangements to thematic settings, we create the perfect backdrop for your special day.',
    symbolColor: 'from-red-500 to-orange-600',
    services: ['Mandap Décor', 'Entrance Design', 'Table Settings', 'Lighting', 'Floral Arrangements'],
  },
  {
    id: 'birthdays',
    title: 'Birthday & Party Décor',
    description:
      'Celebrate milestones with style. Whether it\'s a 1st birthday or a grand celebration, we design spaces that capture the joy of the moment.',
    symbolColor: 'from-blue-500 to-cyan-600',
    services: ['Theme Décor', 'Backdrop Design', 'Balloon Arrangements', 'Lighting Setup', 'Customization'],
  },
  {
    id: 'balloons',
    title: 'Balloon Decoration',
    description:
      'Add color, creativity, and wow-factor. Our balloon decorations turn spaces into vibrant, Instagram-worthy celebrations.',
    symbolColor: 'from-purple-500 to-pink-600',
    services: ['Balloon Arches', 'Installations', 'Custom Designs', 'Organic Arrangements', 'Helium Service'],
  },
  {
    id: 'catering',
    title: 'Refreshments & Catering',
    description:
      'From ice cream to beeda, popcorn to fruit salads - we offer a variety of refreshments to keep your guests delighted throughout the celebration.',
    symbolColor: 'from-amber-500 to-yellow-600',
    services: ['Ice Cream Service', 'Beeda Stall', 'Popcorn', 'Fruit Salad', 'Welcome Toys'],
  },
];

export const CulturalImmersion: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate each service on scroll
    storyRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            markers: false,
          },
        }
      );
    });

    return () => {
      storyRefs.current.forEach((ref) => {
        if (ref) ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="section-padding bg-luxury-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="gradient-gold">Services</span>
          </h2>
          <div className="kolam-divider max-w-md mx-auto" />
          <p className="text-lg text-neutral-light mt-8 max-w-2xl mx-auto">
            Complete event solutions for every celebration - from decoration to catering.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                storyRefs.current[index] = el;
              }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image section */}
              <div
                className={`relative h-96 rounded-lg overflow-hidden group ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.symbolColor} opacity-30`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
                <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-300" />

                {/* Decorative symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    ✦
                  </div>
                </div>

                {/* Service title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="font-sans text-3xl text-wedding-gold mb-2 font-bold">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Text section */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-1 h-12 bg-gradient-to-b ${service.symbolColor} rounded`} />
                    <div>
                      <p className="text-lg text-neutral-light leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-3 text-sm text-white/70">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-wedding-gold rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
