# Lumino Collective - Premium Design Website

A sophisticated, high-quality website built with Next.js, Framer Motion, and GSAP featuring advanced animations and scroll-triggered effects.

## 🎨 Design Features

### Color System
- **Luxury Minimalist Palette**: Clean, sophisticated colors with a golden accent (#D1A26C)
- **Light Mode**: Off-white backgrounds with deep charcoal text
- **Dark Mode**: Deep charcoal backgrounds with light text
- **Responsive Design**: Fully optimized for all screen sizes

### Animation Framework
- **Framer Motion**: Smooth, performant animations and transitions
- **GSAP**: Complex scroll-triggered animations and effects
- **ScrollTrigger**: Scroll-based animation triggers for engaging interactions

## 🏗️ Project Structure

```
components/
├── header.tsx        - Navigation header with mobile menu
├── hero.tsx          - Full-screen hero with autoplaying carousel
├── portfolio.tsx     - Portfolio grid with scroll animations
├── services.tsx      - Services showcase with hover effects
├── cta.tsx           - Call-to-action section
└── footer.tsx        - Footer with links and information

app/
├── page.tsx          - Main page composition
├── layout.tsx        - Root layout with metadata
└── globals.css       - Global styles and design tokens

public/
├── hero-1.jpg        - Hero carousel image 1
├── hero-2.jpg        - Hero carousel image 2
├── hero-3.jpg        - Hero carousel image 3
├── portfolio-1.jpg   - Portfolio image 1
├── portfolio-2.jpg   - Portfolio image 2
└── portfolio-3.jpg   - Portfolio image 3
```

## 🚀 Key Components

### Hero Section
- **Autoplaying Photo Carousel**: Automatically cycles through images every 5 seconds
- **Manual Navigation**: Previous/Next buttons and dot indicators
- **Smooth Transitions**: Fade effects between images using Framer Motion
- **Responsive Text**: Large, elegant typography with smooth fade-in animations
- **GSAP Text Animation**: Staggered line animations on page load

### Portfolio Section
- **Grid Layout**: Responsive grid that adapts to screen size
- **Scroll-Triggered Animations**: Cards animate in as user scrolls
- **Hover Effects**: Images zoom and overlay appears on hover
- **Image Optimization**: Next.js Image component for performance
- **Tag System**: Category tags for each project

### Services Section
- **4-Column Grid**: Organized service cards
- **Scroll Animations**: Cards scale and fade in with stagger effect
- **Accent Line Animation**: Dynamic top border on hover
- **Icon Display**: Visual icons for each service

### Animations & Effects

#### Framer Motion Features
- `motion.div`: Animated container elements
- `AnimatePresence`: Manages component lifecycle animations
- `whileHover`, `whileTap`: Interactive states
- `initial`, `animate`, `exit`: Animation sequences

#### GSAP Features
- `gsap.fromTo()`: Complex scroll-triggered animations
- `ScrollTrigger`: Scroll position-based effects
- `stagger`: Sequential animations for multiple elements
- `gsap.context()`: Organized animation cleanup

#### Custom CSS Animations
- Fade in/up animations
- Slide animations
- Scale transitions
- Glow effects

## 🎯 Features Implemented

✅ **Autoplaying Photo Carousel**
- 5-second autoplay interval
- Manual navigation controls
- Indicator dots for current position
- Smooth fade transitions

✅ **Scroll-Triggered Animations**
- Portfolio items scale and fade in on scroll
- Text reveals with stagger effects
- Services cards animate in sequence
- Smooth scroll behavior throughout

✅ **Interactive Hover Effects**
- Image zoom on portfolio hover
- Card elevation effects
- Overlay transitions
- Button state changes

✅ **Responsive Design**
- Mobile-first approach
- Touch-friendly navigation
- Adaptive grid layouts
- Optimized for all viewport sizes

✅ **Performance Optimizations**
- Next.js Image optimization
- Code splitting with dynamic imports
- Smooth animations (60fps)
- Efficient GSAP context management

## 🛠️ Technologies Used

- **Next.js 16**: React framework with SSR and optimization
- **Framer Motion 12**: Animation library for React
- **GSAP 3**: Professional animation platform
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **React 19**: Latest React features

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px (full-width, stacked layout)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: 1024px+ (full 3-4 column layouts)

## 🎨 Customization Guide

### Updating Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --accent: oklch(0.65 0.12 40);
  /* Update the accent color value */
}
```

### Adding More Portfolio Items
Edit the `portfolioItems` array in `components/portfolio.tsx`:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description here',
    image: '/your-image.jpg',
    tags: ['Tag1', 'Tag2'],
  },
  // Add more items...
];
```

### Changing Hero Images
Replace images in `public/` folder:
- `hero-1.jpg`
- `hero-2.jpg`
- `hero-3.jpg`

Update the `heroImages` array in `components/hero.tsx` if needed.

### Adjusting Animation Timings
- **Hero text stagger**: Modify delay in `useEffect` in `hero.tsx`
- **Carousel autoplay**: Change `5000` (milliseconds) to desired interval
- **Scroll animations**: Adjust `duration` values in GSAP calls

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Run Development Server**
   ```bash
   pnpm dev
   ```

3. **Build for Production**
   ```bash
   pnpm build
   pnpm start
   ```

## 📈 Performance Tips

- Images are optimized with Next.js Image component
- Animations use GPU acceleration for smooth performance
- GSAP ScrollTrigger is used for efficient scroll events
- CSS animations are preferred for simple transitions
- Lazy loading is handled automatically

## 🔄 Browser Compatibility

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Modern versions (iOS Safari 12+, Chrome Android)

## 📝 Notes

- All animations are CSS-based or GPU-accelerated for smooth performance
- The site uses semantic HTML for accessibility
- Mobile navigation includes a hamburger menu
- Smooth scroll behavior is enabled globally
- All interactive elements have appropriate hover/focus states

---

Built with ❤️ using modern web technologies for the best user experience.
