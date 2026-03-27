import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ClientStory {
  id: string;
  couple: string;
  quote: string;
  date: string;
  location: string;
  guestCount: string;
  budget: string;
  highlight: string;
  imageColor: string;
  tagline: string;
}

const clientStories: ClientStory[] = [
  {
    id: 'story1',
    couple: 'Mohan\'s Birthday Celebration',
    quote:
      'Skanda Events made my 30th birthday absolutely unforgettable. The decoration was stunning and the service was impeccable.',
    date: 'February 2025',
    location: 'Gobichettipalayam',
    guestCount: '150 guests',
    budget: '₹1.5L',
    highlight: 'Themed décor with balloon installations and ice cream stall',
    imageColor: 'from-blue-500 to-cyan-600',
    tagline: 'A Birthday to Remember',
  },
  {
    id: 'story2',
    couple: 'Meera & Arjun\'s Wedding',
    quote:
      'Their attention to every detail, from the wedding mandap to the party décor - everything was exactly how we imagined it. Highly recommended!',
    date: 'January 2025',
    location: 'Gobichettipalayam',
    guestCount: '300 guests',
    budget: '₹3.5L',
    highlight: 'Complete wedding decoration with mandap, entrance, and reception setup',
    imageColor: 'from-red-500 to-orange-600',
    tagline: 'A Wedding Made Perfect',
  },
  {
    id: 'story3',
    couple: 'Arun\'s Baby Shower',
    quote:
      'The balloon decorations and color scheme were out of this world. Our guests couldn\'t stop talking about how beautiful everything looked!',
    date: 'March 2025',
    location: 'Gobichettipalayam',
    guestCount: '80 guests',
    budget: '₹80K',
    highlight: 'Pastel balloon installations with custom backdrop and refreshment stall',
    imageColor: 'from-purple-500 to-pink-600',
    tagline: 'New Beginnings Celebrated',
  },
  {
    id: 'story4',
    couple: 'Corporation Annual Event',
    quote:
      'Professional, creative, and they managed everything perfectly. Skanda Events is our go-to for all our corporate celebrations.',
    date: 'December 2024',
    location: 'Gobichettipalayam',
    guestCount: '200 guests',
    budget: '₹2L',
    highlight: 'Professional arrangements with themed décor and full catering support',
    imageColor: 'from-amber-500 to-yellow-600',
    tagline: 'Corporate Excellence',
  },
];

export const ClientStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-rotate stories every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clientStories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animate card transitions
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      if (index === activeIndex) {
        gsap.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          pointerEvents: 'auto',
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          x: 50,
          duration: 0.6,
          pointerEvents: 'none',
        });
      }
    });
  }, [activeIndex]);

  const currentStory = clientStories[activeIndex];

  if (!currentStory) return null;

  return (
    <section id="stories" className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-wedding-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wedding-maroon rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Happy <span className="gradient-gold">Celebrations</span>
          </h2>
          <div className="kolam-divider max-w-md mx-auto" />
        </div>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="relative h-[600px] md:h-[500px] mb-12"
        >
          {clientStories.map((story, index) => (
            <div
              key={story.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`absolute inset-0 transition-opacity duration-600 ${
                index !== activeIndex ? 'pointer-events-none' : 'pointer-events-auto'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
                {/* Image section */}
                <div className="relative h-full rounded-lg overflow-hidden group hidden md:block">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${story.imageColor} opacity-40`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />

                  {/* Decorative overlay */}
                  <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500" />

                  {/* Image content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl opacity-20 mb-4">💍</div>
                      <p className="text-2xl font-serif text-wedding-gold font-light">
                        {story.couple}
                      </p>
                    </div>
                  </div>

                  {/* Couple name at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm uppercase tracking-widest text-wedding-gold/60 mb-2">
                      {story.tagline}
                    </p>
                  </div>
                </div>

                {/* Content section */}
                <div className="space-y-8">
                  {/* Couple name - mobile only */}
                  <div className="md:hidden">
                    <h3 className="text-3xl font-serif font-bold text-white mb-4">
                      {story.couple}
                    </h3>
                    <p className="text-lg text-wedding-gold font-light">{story.tagline}</p>
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-wedding-gold pl-8">
                    <blockquote className="text-xl md:text-2xl font-serif font-light text-white leading-relaxed italic">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  {/* Story details grid */}
                  <div className="grid grid-cols-2 gap-6 pb-8 border-b border-white/10">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-wedding-gold/60 mb-2">
                        When
                      </p>
                      <p className="text-lg text-white font-semibold">{story.date}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-wedding-gold/60 mb-2">
                        Where
                      </p>
                      <p className="text-lg text-white font-semibold">{story.location}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-wedding-gold/60 mb-2">
                        Guests
                      </p>
                      <p className="text-lg text-white font-semibold">{story.guestCount}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-wedding-gold/60 mb-2">
                        Budget
                      </p>
                      <p className="text-lg text-white font-semibold">{story.budget}</p>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div>
                    <p className="text-sm uppercase tracking-widest text-wedding-gold/60 mb-3">
                      Highlight
                    </p>
                    <p className="text-lg text-neutral-light">{story.highlight}</p>
                  </div>

                  {/* CTA */}
                  <button className="btn-secondary mt-8">Read Full Story →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous button */}
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + clientStories.length) % clientStories.length
              )
            }
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-luxury-black transition-all duration-300"
          >
            ←
          </button>

          {/* Indicators */}
          <div className="flex gap-3">
            {clientStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-wedding-gold w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % clientStories.length)}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-luxury-black transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
