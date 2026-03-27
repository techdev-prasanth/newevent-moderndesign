# 🏛️ Mandapam Celebrations - Premium Tamil Wedding Event Management Website

A cinematic, luxury-focused website for premium Tamil wedding planning services. Built with React, Vite, Tailwind CSS, and GSAP animations.

## 🎯 Project Overview

This is a bespoke wedding event management website designed for ₹25L - ₹1Cr+ luxury weddings. The site features:

- **Cinematic hero section** with mandapam stage split animation
- **Cultural immersion storytelling** celebrating Tamil traditions
- **Interactive timeline** showing the wedding journey
- **Client success stories** carousel
- **Premium contact forms** with WhatsApp integration
- **Responsive design** for all devices
- **GSAP scroll animations** for smooth, premium feel
- **Optional 3D mandapam** visualization with Three.js

## 🚀 Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.3
- **Animations**: GSAP + Framer Motion
- **3D Graphics**: Three.js (optional)
- **State Management**: Zustand

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx                    # Navigation header
│   ├── Footer.tsx                    # Footer section
│   └── sections/
│       ├── HeroMandapam.tsx          # Hero with split animation
│       ├── CulturalImmersion.tsx     # ritual storytelling
│       ├── WeddingTimeline.tsx       # Service timeline
│       ├── ClientStories.tsx         # Success stories carousel
│       ├── PremiumContact.tsx        # Contact & CTA
│       └── MandapamScene.tsx         # 3D mandapam (optional)
├── utils/                            # Utilities & helpers
├── App.tsx                           # Main app component
├── index.css                         # Global & Tailwind styles
├── main.tsx                          # Entry point
└── tailwind.config.ts                # Tailwind configuration
```

## 🎨 Design System

### Color Palette

```
Luxury Base:
- Black: #0F0F0F
- Charcoal: #1A1A1A

Wedding Accents:
- Gold: #D4AF37 (celebration)
- Maroon: #800020 (tradition)
- Copper: #B87333 (warmth)
```

### Typography

- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean modern)
- **Tamil**: Noto Sans Tamil (cultural authenticity)

## ⚡ Key Features

### 1. Hero Mandapam Split Animation

The hero section features a scroll-triggered animation where:
- Mandapam stage splits left and right (symbolic entry)
- Center content and CTAs fade in
- Smooth GSAP timeline controls animation

```typescript
// Scroll-based animation trigger
gsap.timeline({
  scrollTrigger: { trigger, start, end, scrub }
})
```

### 2. Cultural Immersion Section

Displays four phases of Tamil wedding rituals:
- Navagraha Blessings
- Mehendi: The Color Ritual
- Sangeet: The Celebration
- Vivah: The Sacred Union

Each with descriptions, services, and animations.

### 3. Wedding Journey Timeline

Four-phase service breakdown:
- **6 Months Before**: Dream Crafting
- **3 Months Before**: Orchestration
- **The Week Of**: The Sacred Moment
- **After**: Legacy Curation

Central animated timeline line connects all phases.

### 4. Client Stories Carousel

Auto-rotating carousel showcasing real couple stories with:
- High-resolution background images
- Testimonial quotes
- Budget transparency (₹45L - ₹72L examples)
- Wedding date, location, guest count
- Manual carousel controls

### 5. Premium Contact Section

Dual-path contact system:
- **Consultation Tab**: Discovery form (name, date, budget, guests, message)
- **WhatsApp Tab**: Quick chat integration
- Benefits explanation
- Alternative phone contact

### 6. Responsive Design

- Mobile-first approach
- Tablet & desktop optimizations
- Touch-friendly interactions
- Graceful animation fallbacks

## 🎬 Animation Implementations

### GSAP Scroll Triggers

```typescript
// Hero mandapam split
gsap.to(element, {
  x: distance,
  opacity: change,
  scrollTrigger: {
    trigger: '.hero-mandapam',
    start: 'top center',
    end: 'center center',
    scrub: 1
  }
});
```

### Framer Motion

Used for:
- Timeline animations
- Carousel transitions
- Stagger effects

### CSS Animations

Tailwind-defined animations:
- `fade-in`: Opacity transitions
- `slide-in`: Y-axis entrance
- `glow`: Pulsing glow effect

## 📱 Mobile Optimization

- Hamburger menu in header
- Simplified hero on small screens
- Stack layout for timeline
- Touch-friendly carousel controls
- Optimized image loading
- Reduced 3D rendering on mobile

## 🔄 Conversion Optimization

1. **Multiple CTAs**: Book consultation, WhatsApp quick chat, call
2. **Strategic Placement**: Floating CTA, section-based, bottom link
3. **Trust Signals**: Real couple stories, budget transparency
4. **Emotional Copy**: Premium language, cultural respect
5. **Fast Paths**: WhatsApp for instant connection
6. **Form Simplification**: Only essential fields
7. **Social Proof**: Client testimonials with specifics

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm npm preview
```

### Environment Setup

The project uses TypeScript with strict type checking. All components are fully typed for better DX.

## 🎯 Customization Guide

### Replace Placeholder Content

1. **Client Stories**: Edit `ClientStories.tsx` with real couple data
2. **Contact Phone**: Update phone numbers in `PremiumContact.tsx` and `Footer.tsx`
3. **Email Address**: Replace `hello@mandapam.com` throughout
4. **WhatsApp Link**: Update WhatsApp number in `PremiumContact.tsx`
5. **Images**: Add real wedding photography URLs

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  wedding: {
    gold: '#D4AF37',      // Change celebration color
    maroon: '#800020',    // Change tradition color
  }
}
```

### Add New Sections

1. Create component in `src/components/sections/`
2. Import in `App.tsx`
3. Add to main layout

## 📊 Performance Considerations

- GSAP animations optimized with ScrollTrigger
- Lazy-loaded components where possible
- Three.js 3D limited to specific sections
- Image optimization recommended
- Mobile animation fallbacks

## 🔍 SEO

To improve SEO:
- Add meta tags in `index.html`
- Update Open Graph tags with wedding imagery
- Add structured data for events
- Optimize images with alt text
- Add sitemap

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com/)
- [GSAP Docs](https://gsap.com/docs/)
- [Three.js Docs](https://threejs.org/docs/)
- [React Docs](https://react.dev/)

## 🎓 Design Philosophy

This website is built on the principle of **"Mandapam Consciousness"**:
- Visitor starts as curious observer
- Immersion through storytelling and ritual
- Conversion through trust and clarity

Every design decision serves emotion first, information second.

## 📝 License

This project is proprietary. All designs and code are exclusive to the Tamil wedding planning brand.

## 🤝 Support

For questions about customization or features, refer to the inline code comments throughout the project.

---

**Built with 💛 for premium Tamil celebrations.**
