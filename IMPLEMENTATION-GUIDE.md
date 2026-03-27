# Implementation Guide & Customization

## Quick Start After Cloning

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start dev server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   ```
   http://localhost:5173/
   ```

## Critical Customizations

### 1. WhatsApp Integration

**File**: `src/components/sections/PremiumContact.tsx` (Line ~145)

```typescript
const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    `Hello! I'm interested in booking...`
  );
  // Replace 919XXXXXXXXX with actual WhatsApp number
  window.open(`https://wa.me/919XXXXXXXXX?text=${message}`, '_blank');
};
```

**Update**:
- Replace `919XXXXXXXXX` with business WhatsApp number

### 2. Contact Information

**Files to update**:
- `src/components/sections/PremiumContact.tsx` - Phone, email
- `src/components/Footer.tsx` - Contact details
- `src/components/Header.tsx` - CTA links (optional)

### 3. Client Stories

**File**: `src/components/sections/ClientStories.tsx` (Line ~25-45)

Replace the `clientStories` array with real wedding data:

```typescript
{
  id: 'story1',
  couple: 'Your Couple Names',
  quote: 'Their testimonial...',
  date: 'Month Year',
  location: 'City',
  guestCount: 'XXX guests',
  budget: '₹XXL',
  highlight: 'Special highlight...',
  imageColor: 'from-YOUR-COLOR to-OTHER-COLOR', // Tailwind classes
  tagline: 'Wedding tagline...',
}
```

### 4. Ritual Stories

**File**: `src/components/sections/CulturalImmersion.tsx` (Line ~25-45)

Update ritual titles, descriptions, and services based on your offerings.

### 5. Timeline Phases

**File**: `src/components/sections/WeddingTimeline.tsx` (Line ~25-60)

Customize:
- Phase names
- Timeline months (adjust to your planning window)
- Services offered
- Color gradients for each phase
- Position (left/right)

## Advanced Customizations

### Adding 3D Mandapam to Hero

The `MandapamScene.tsx` component is ready for use but commented out in the Hero. To enable:

1. Import in `HeroMandapam.tsx`:
   ```typescript
   import { MandapamScene } from './MandapamScene';
   ```

2. Add to hero JSX:
   ```tsx
   <div className="absolute inset-0 h-screen">
     <MandapamScene />
   </div>
   ```

**Note**: Three.js 3D is resource-intensive. Test on target devices.

### Modifying GSAP Animations

**Hero Mandapam Split** (`HeroMandapam.tsx`):
- Adjust `x: -150` / `x: 150` to change split distance
- Change `duration: 1.2` to speed up/slow down
- Modify `scrub: 1` (0-3) for scroll smoothness

**Timeline Animation** (`WeddingTimeline.tsx`):
- Control line animation with `scaleY: 0` to `scaleY: 1`
- Adjust card stagger with `delay: index * 0.2`

### Color Customization

**Theme colors in `tailwind.config.ts`**:

```typescript
colors: {
  luxury: {
    black: '#0F0F0F',    // Main background
    charcoal: '#1A1A1A', // Secondary background
  },
  wedding: {
    gold: '#D4AF37',     // Primary accent
    maroon: '#800020',   // Traditional accent
    copper: '#B87333',   // Warmth accent
  }
}
```

### Typography Changes

**Google Fonts Import** in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=FONT-NAME:wght@WEIGHTS&display=swap');
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
  tamil: ['Tamil Font Name', 'sans-serif'],
}
```

## Testing Checklist

- [ ] Hero mandapam animation smooth on desktop
- [ ] Mobile hamburger menu works
- [ ] Form validation working
- [ ] WhatsApp link opens correctly
- [ ] All external links functional
- [ ] Images load properly
- [ ] Animations performant (60fps)
- [ ] Responsive design at breakpoints (sm, md, lg, xl)
- [ ] Dark mode rendering correct
- [ ] Fast, lightweight (check Lighthouse)

## Performance Optimization

### Images

```typescript
// Optimize images before adding
// Use tools like TinyPNG, ImageOptim, or Squoosh
// Recommended: WebP format with JPG fallback
```

### Bundle Size

Check with:
```bash
npm run build
```

Expected output: ~300-400KB gzipped

### Lighthouse Scores Target

- Performance: 85+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## Deployment

### Build for Production

```bash
npm run build  # Creates dist/ folder
```

### Deployment Options

1. **Vercel** (Recommended for Vite)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repo
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Traditional Hosting**
   - Upload `dist/` folder to server
   - Ensure server rewrites to `index.html` (SPA)

## SEO Optimization

### Meta Tags (src/index.html)

Update:
```html
<title>Mandapam Celebrations - Premium Tamil Weddings</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:image" content="wedding-image-url">
```

### Structured Data

Add JSON-LD for weddings:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mandapam Celebrations",
  "image": "...",
  "serviceType": "Wedding Planning"
}
```

## Common Issues & Solutions

### GSAP ScrollTrigger not working

- Ensure ScrollTrigger plugin is registered:
  ```typescript
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  ```

### Tailwind classes not applying

- Rebuild CSS: `npm run dev` (auto rebuilds)
- Check class names are valid (no dynamic strings)
- Clear browser cache

### Mobile responsiveness issues

- Test with Chrome DevTools device emulation
- Check `@media` queries in Tailwind config
- Verify touch targets are 44x44px minimum

### Three.js performance

- Reduce geometry complexity
- Use LOD (Level of Detail) for 3D models
- Disable 3D on mobile or use canvas-based 2D fallback

## Future Enhancement Ideas

1. **Blog section** for wedding planning tips
2. **Gallery lightbox** with Instagram integration
3. **Testimonial video section** with embedded clips
4. **Pricing comparison table** with packages
5. **FAQ accordion** section
6. **Location filter** for different cities
7. **Integration with Calendly** for bookings
8. **Analytics dashboard** (Google Analytics)
9. **Email capture** for newsletter
10. **Multi-language support** (Tamil/English toggle)

## Code Quality

### ESLint Configuration

The project uses TypeScript ESLint. Run:
```bash
npm run lint
```

### Type Checking

All components use TypeScript interfaces for type safety.

## Documentation

- Inline comments explain complex logic
- Each component has a clear purpose
- Utility functions documented
- Color system documented in Tailwind config

## Support & Maintenance

- Keep React, Vite, and Tailwind updated quarterly
- Monitor GSAP for animation enhancements
- Test new browser versions
- Regular lighthouse audits

---

**Last Updated**: March 27, 2025
**Version**: 1.0 (Launch Version)
