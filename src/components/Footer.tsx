import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/10">
      <div className="section-padding">
        <div className="section-container">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-wedding-gold to-wedding-copper rounded-lg flex items-center justify-center">
                  <span className="font-tamil text-lg font-bold text-luxury-black">🏛️</span>
                </div>
                <div>
                <h3 className="font-sans font-bold text-wedding-gold text-lg">SKANDA EVENTS</h3>
                <p className="text-xs text-wedding-copper">WE CREATE YOU CELEBRATE</p>
              </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Professional event planning & decorations for weddings, birthdays, parties, and celebrations in Gobichettipalayam.
              </p>
              {/* Social icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-wedding-gold hover:text-luxury-black transition-all duration-300 flex items-center justify-center text-white"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-wedding-gold hover:text-luxury-black transition-all duration-300 flex items-center justify-center text-white"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-wedding-gold hover:text-luxury-black transition-all duration-300 flex items-center justify-center text-white"
                >
                  in
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-widest">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Planning & Coordination',
                  'Vendor Management',
                  'Design & Decor',
                  'Photography',
                  'Videography',
                  'Timeline Building',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-wedding-gold transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-widest">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Our Story',
                  'Team',
                  'Blog',
                  'Press',
                  'Careers',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-wedding-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-6 uppercase text-sm tracking-widest">
                Contact
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Phone</p>
                  <a
                    href="tel:+919360306362"
                    className="text-sm text-wedding-gold hover:text-wedding-copper transition-colors"
                  >
                    +91 9360 306 362
                  </a>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:skandaeventsgobi@gmail.com"
                    className="text-sm text-wedding-gold hover:text-wedding-copper transition-colors break-all"
                  >
                    skandaeventsgobi@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-sm text-white/60">
                    Gobichettipalayam
                    <br />
                    TN, India - 638 476
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="border-t border-white/10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-sm text-white/60">
                  © 2025 Skanda Events. All rights reserved.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:justify-end">
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-wedding-gold transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-wedding-gold transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-wedding-gold transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          {/* Brand statement */}
          <div className="text-center pt-12 border-t border-white/10">
            <p className="font-serif text-lg text-wedding-gold font-light">
              "We Create. <span className="gradient-maroon">You Celebrate.</span>"
            </p>
            <div className="flex items-center justify-center gap-2 text-wedding-gold mt-6">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
