import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelinePhase {
  id: string;
  months: string;
  phase: string;
  description: string;
  services: string[];
  color: string;
  position: 'left' | 'right';
}

const phases: TimelinePhase[] = [
  {
    id: 'phase1',
    months: 'INITIAL CONSULTATION',
    phase: 'Understanding Your Vision',
    description:
      'We listen to your ideas, theme preferences, and budget. Together, we craft the perfect plan for your celebration.',
    services: ['Requirement Discussion', 'Theme Selection', 'Budget Planning', 'Timeline Creation'],
    color: 'from-wedding-gold to-wedding-copper',
    position: 'left',
  },
  {
    id: 'phase2',
    months: 'DESIGN & PLANNING',
    phase: 'Bringing Ideas to Life',
    description:
      'Our creative team designs visual layouts, selects décor elements, and plans every detail of your event aesthetic.',
    services: ['Design Mockups', 'Vendor Coordination', 'Color Schemes', 'Décor Selection'],
    color: 'from-wedding-maroon to-wedding-rose',
    position: 'right',
  },
  {
    id: 'phase3',
    months: 'SETUP & EXECUTION',
    phase: 'The Magic Happens',
    description:
      'Our professional team transforms the space into a stunning venue. We handle setup, installations, and all on-ground details with precision.',
    services: ['Decoration Setup', 'Installation', 'Final Touches', 'Lighting & Effects'],
    color: 'from-amber-400 to-yellow-300',
    position: 'left',
  },
  {
    id: 'phase4',
    months: 'CELEBRATION & SUPPORT',
    phase: 'Your Perfect Day',
    description:
      'We\'re present throughout to ensure everything runs smoothly, manage any changes, and keep your celebration perfect.',
    services: ['Event Monitoring', 'Vendor Management', 'Problem Solving', 'Guest Experience'],
    color: 'from-purple-400 to-pink-400',
    position: 'right',
  },
];

export const WeddingTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate timeline line
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            markers: false,
          },
        }
      );
    }

    // Animate phase cards
    phaseRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.fromTo(
        ref,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-luxury-charcoal to-luxury-black relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="gradient-gold">Planning Process</span>
          </h2>
          <div className="kolam-divider max-w-md mx-auto" />
          <p className="text-lg text-neutral-light mt-8 max-w-2xl mx-auto">
            Four simple phases to create your dream celebration.
          </p>
        </div>

        {/* Timeline container */}
        <div
          ref={containerRef}
          className="relative"
        >
          {/* Central timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-wedding-gold via-wedding-maroon to-wedding-gold"
            style={{ top: 0, bottom: 0 }}
          />

          {/* Timeline phases */}
          <div className="space-y-24">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => {
                  phaseRefs.current[index] = el;
                }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative ${
                  phase.position === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Left/Right content based on position */}
                <div
                  className={`${
                    phase.position === 'right' ? 'md:order-2 md:text-right' : 'md:order-1'
                  }`}
                >
                  <div className="space-y-4">
                    <p className={`text-sm font-semibold uppercase tracking-widest ${
                      phase.position === 'right' ? 'hidden md:block' : ''
                    }`}>
                      <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                        {phase.months}
                      </span>
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                      {phase.phase}
                    </h3>
                    <p className="text-lg text-neutral-light leading-relaxed">
                      {phase.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${phase.position === 'right' ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                      {phase.services.map((service) => (
                        <span
                          key={service}
                          className="text-sm px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 hover:border-wedding-gold/50 hover:text-wedding-gold transition-all duration-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot and mobile month display */}
                <div className="hidden md:flex md:justify-center">
                  <div className="relative z-20 flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-luxury-black bg-gradient-to-br ${phase.color} shadow-lg`}
                    />
                    <p className="text-xs font-semibold uppercase tracking-widest text-wedding-gold mt-4 text-center max-w-[120px]">
                      {phase.months}
                    </p>
                  </div>
                </div>

                {/* Right/Left placeholder for symmetry */}
                <div
                  className={`${
                    phase.position === 'left' ? 'md:order-2' : 'md:order-1'
                  } hidden md:block`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <p className="text-lg text-neutral-light mb-8">
            Ready to plan your perfect celebration?
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <button className="btn-primary">Book Your Consultation</button>
            <button className="btn-secondary">Get a Custom Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};
