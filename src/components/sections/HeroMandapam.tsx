import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroMandapam: React.FC = () => {
  const mandapamLeftRef = useRef<HTMLDivElement>(null);
  const mandapamRightRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create GSAP timeline for double door opening animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-mandapam',
        start: 'top center',
        end: 'center center',
        scrub: 1,
        markers: false,
      },
    });

    // Left door opens (moves left with rotation)
    tl.to(
      mandapamLeftRef.current,
      {
        x: -400,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      },
      0
    )
      // Right door opens (moves right with rotation)
      .to(
        mandapamRightRef.current,
        {
          x: 400,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.inOut',
        },
        0
      )
      // Center content fades in and blurs out (revealing the business details)
      .to(
        centerContentRef.current,
        {
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.3
      )
      // CTA buttons slide up and fade in
      .to(
        ctaButtonsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out',
        },
        0.6
      );

    // Initial animation on mount
    gsap.fromTo(
      centerContentRef.current,
      { opacity: 0, filter: 'blur(10px)', scale: 0.95 },
      { opacity: 0, filter: 'blur(10px)', scale: 0.95, duration: 0 }
    );

    gsap.fromTo(
      ctaButtonsRef.current,
      { y: 40, opacity: 0 },
      { y: 40, opacity: 0, duration: 0 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id="about" className="hero-mandapam relative w-full h-screen bg-gradient-to-b from-luxury-black via-luxury-charcoal to-luxury-black overflow-hidden flex items-center justify-center">
      {/* Background mandapam image - LEFT HALF (LEFT DOOR) */}
      <div
        ref={mandapamLeftRef}
        className="absolute left-0 top-0 w-1/2 h-full opacity-80 shadow-2xl"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23D4AF37;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%23B87333;stop-opacity:0.1" /></linearGradient></defs><rect width="400" height="600" fill="url(%23goldGrad)"/><line x1="200" y1="50" x2="200" y2="550" stroke="%23D4AF37" stroke-width="3" opacity="0.4"/><circle cx="200" cy="150" r="80" fill="none" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/><circle cx="200" cy="300" r="100" fill="none" stroke="%23D4AF37" stroke-width="2" opacity="0.2"/><circle cx="200" cy="450" r="80" fill="none" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset -20px 0 40px rgba(0, 0, 0, 0.8)',
          transformOrigin: 'right center',
        }}
      />

      {/* Background mandapam image - RIGHT HALF (RIGHT DOOR) */}
      <div
        ref={mandapamRightRef}
        className="absolute right-0 top-0 w-1/2 h-full opacity-80 shadow-2xl"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="goldGrad" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23D4AF37;stop-opacity:0.3" /><stop offset="100%" style="stop-color:%23B87333;stop-opacity:0.1" /></linearGradient></defs><rect width="400" height="600" fill="url(%23goldGrad)"/><line x1="200" y1="50" x2="200" y2="550" stroke="%23D4AF37" stroke-width="3" opacity="0.4"/><circle cx="200" cy="150" r="80" fill="none" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/><circle cx="200" cy="300" r="100" fill="none" stroke="%23D4AF37" stroke-width="2" opacity="0.2"/><circle cx="200" cy="450" r="80" fill="none" stroke="%23D4AF37" stroke-width="2" opacity="0.3"/></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scaleX(-1)',
          boxShadow: 'inset 20px 0 40px rgba(0, 0, 0, 0.8)',
          transformOrigin: 'left center',
        }}
      />

      {/* Overlay glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent pointer-events-none" />

      {/* Center Content */}
      <div
        ref={centerContentRef}
        className="relative z-10 text-center max-w-3xl px-6 md:px-12"
      >
        {/* Decorative accent line above */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-wedding-gold" />
          <span className="text-wedding-gold text-lg">✨</span>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-wedding-gold" />
        </div>

        {/* Tagline heading */}
        <h1 className="font-sans text-5xl md:text-6xl text-wedding-gold mb-4 font-bold tracking-tight">
          We Create YOU CELEBRATE..!
        </h1>

        {/* English subheading */}
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 font-light tracking-wide">
          Professional Event Planning & Décor
        </h2>

        {/* Divider */}
        <div className="kolam-divider my-12" />

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-light mb-12 leading-relaxed max-w-2xl mx-auto">
          From weddings to birthdays, parties to corporate events - we bring your vision to life with exceptional decorations, styling, and event management. Based in Gobichettipalayam.
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        ref={ctaButtonsRef}
        className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row gap-6 items-center justify-center w-full px-6"
      >
        <button className="btn-primary whitespace-nowrap">
          📞 Book Consultation
        </button>
        <button className="btn-secondary whitespace-nowrap">
          💬 WhatsApp Us
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-wedding-gold/60 font-light">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-wedding-gold/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
