import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  date: string;
  guestCount: string;
  budget: string;
  message: string;
}

export const PremiumContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    guestCount: '',
    budget: '',
    message: '',
  });

  const [activeTab, setActiveTab] = useState<'consultation' | 'whatsapp'>('consultation');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Consultation form submitted:', formData);
    // Here you would typically send this to your backend or email service
    // For now, this logs the data. Connect to backend to send email to skandaeventsgobi@gmail.com
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in booking Skanda Events for my celebration. My name is ${formData.name || '[Your name]'}. Could you please provide more information?`
    );
    window.open(`https://wa.me/919360306362?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-luxury-charcoal to-luxury-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-wedding-gold/20 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Plan Your <span className="gradient-gold">Celebration</span>
          </h2>
          <p className="text-lg text-neutral-light max-w-2xl mx-auto">
            Get in touch with our team. We're here to make your event amazing!
          </p>
        </div>

        {/* Tabs container */}
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex gap-4 mb-12 border-b border-white/10">
            <button
              onClick={() => setActiveTab('consultation')}
              className={`pb-4 px-6 font-semibold text-lg transition-all duration-300 relative ${
                activeTab === 'consultation'
                  ? 'text-wedding-gold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              📞 Consultation
              {activeTab === 'consultation' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-wedding-gold" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`pb-4 px-6 font-semibold text-lg transition-all duration-300 relative ${
                activeTab === 'whatsapp'
                  ? 'text-wedding-gold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              💬 Quick Chat
              {activeTab === 'whatsapp' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-wedding-gold" />
              )}
            </button>
          </div>

          {/* Tab content */}
          {activeTab === 'consultation' ? (
            // Consultation form
            <div className="bg-luxury-charcoal/50 backdrop-blur-md border border-white/10 rounded-lg p-12 card-luxury">
              <form onSubmit={handleConsultationSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-wedding-gold/80 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-luxury-black/50 border border-white/10 rounded p-4 text-white placeholder-white/30 focus:border-wedding-gold focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-wedding-gold/80 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full bg-luxury-black/50 border border-white/10 rounded p-4 text-white placeholder-white/30 focus:border-wedding-gold focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Event date */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-wedding-gold/80 mb-3">
                    Planned Event Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-luxury-black/50 border border-white/10 rounded p-4 text-white focus:border-wedding-gold focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Guest count and budget grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Guest count */}
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-wedding-gold/80 mb-3">
                      Expected Guest Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full bg-luxury-black/50 border border-white/10 rounded p-4 text-white focus:border-wedding-gold focus:outline-none transition-colors duration-300"
                      required
                    >
                      <option value="">Select range</option>
                      <option value="20-50">20 - 50</option>
                      <option value="50-100">50 - 100</option>
                      <option value="100-200">100 - 200</option>
                      <option value="200-300">200 - 300</option>
                      <option value="300-500">300 - 500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm uppercase tracking-widest text-wedding-gold/80 mb-3">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-luxury-black/50 border border-white/10 rounded p-4 text-white focus:border-wedding-gold focus:outline-none transition-colors duration-300"
                      required
                    >
                      <option value="">Select range</option>
                      <option value="10K-50K">₹10K - ₹50K</option>
                      <option value="50K-100K">₹50K - ₹100K</option>
                      <option value="1L-3L">₹1L - ₹3L</option>
                      <option value="3L-5L">₹3L - ₹5L</option>
                      <option value="5L+">₹5L+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm uppercase tracking-widest text-wedding-gold/80 mb-3">
                    Tell us about your vision (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your wedding dreams, preferences, special requirements..."
                    rows={4}
                    className="w-full bg-luxury-black/50 border border-white/10 rounded p-4 text-white placeholder-white/30 focus:border-wedding-gold focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Benefits */}
                <div className="bg-luxury-black/50 border border-wedding-gold/20 rounded p-6 space-y-3">
                  <p className="text-sm font-semibold text-wedding-gold uppercase tracking-widest">
                    What happens next:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-wedding-gold rounded-full" />
                      15-minute discovery call within 24 hours
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-wedding-gold rounded-full" />
                      Personalized proposal & timeline sent within 48 hours
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-wedding-gold rounded-full" />
                      No obligation, just a conversation about your dreams
                    </li>
                  </ul>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-5 font-semibold uppercase tracking-widest"
                >
                  Book Your Discovery Call
                </button>
              </form>
            </div>
          ) : (
            // WhatsApp contact
            <div className="bg-luxury-charcoal/50 backdrop-blur-md border border-white/10 rounded-lg p-12 card-luxury">
              <div className="text-center space-y-8">
                {/* Heading */}
                <div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">
                    Quick Chat on WhatsApp
                  </h3>
                  <p className="text-lg text-neutral-light">
                    No forms. No fees. Just a conversation about your celebration.
                  </p>
                </div>

                {/* Response time */}
                <div className="bg-luxury-black/50 border border-wedding-gold/20 rounded p-8">
                  <p className="text-2xl text-white font-serif font-light mb-2">
                    Typical Response Time
                  </p>
                  <p className="text-3xl font-bold gradient-gold">
                    &lt; 2 hours
                  </p>
                  <p className="text-sm text-white/60 mt-4">
                    Our team monitors messages during business hours (10 AM - 7 PM IST)
                  </p>
                </div>

                {/* WhatsApp button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded font-semibold text-lg transition-all duration-300 hover:shadow-lg uppercase tracking-widest"
                >
                  💬 Connect on WhatsApp
                </button>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-luxury-black/50 rounded border border-white/5">
                    <p className="text-4xl mb-3">💬</p>
                    <p className="font-semibold text-white mb-2">Instant Access</p>
                    <p className="text-sm text-white/60">
                      Message us anytime, anywhere
                    </p>
                  </div>
                  <div className="p-6 bg-luxury-black/50 rounded border border-white/5">
                    <p className="text-4xl mb-3">⚡</p>
                    <p className="font-semibold text-white mb-2">Quick Replies</p>
                    <p className="text-sm text-white/60">
                      Fast, friendly responses
                    </p>
                  </div>
                  <div className="p-6 bg-luxury-black/50 rounded border border-white/5">
                    <p className="text-4xl mb-3">🎭</p>
                    <p className="font-semibold text-white mb-2">Personal Touch</p>
                    <p className="text-sm text-white/60">
                      Direct team communication
                    </p>
                  </div>
                </div>

                {/* Alternative contact */}
                <div className="border-t border-white/10 pt-8">
                  <p className="text-white/70 mb-4">
                    Prefer a call? Contact us directly:
                  </p>
                  <div className="text-2xl font-bold gradient-gold">
                    +91 9360 306 362
                  </div>
                  <p className="text-sm text-white/60 mt-3">
                    Available for calls & WhatsApp
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center border-t border-white/10 pt-24">
          <p className="text-white/60 mb-6">
            Questions about our services? We're here to help.
          </p>
          <p className="font-serif text-2xl text-white mb-8">
            "We Create. <span className="gradient-maroon">You Celebrate.</span>"
          </p>
          <div className="flex items-center justify-center gap-2 text-wedding-gold">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
};
