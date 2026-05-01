# Project Structure Overview

## Directory Layout

```
/vercel/share/v0-project/
│
├── app/
│   ├── layout.tsx                 # Root layout with HTML structure and metadata
│   ├── page.tsx                   # Home page combining all sections
│   ├── globals.css                # Global styles and design tokens
│   └── icon*.png                  # Favicon files
│
├── components/
│   ├── navigation.tsx             # Fixed sticky header with navigation
│   ├── hero-section.tsx           # Hero/landing section with animations
│   ├── projects-gallery.tsx       # Projects grid showcase (12 items)
│   ├── about-section.tsx          # Company about and features
│   ├── team-section.tsx           # Team members display
│   ├── contact-section.tsx        # Contact form and info
│   ├── footer.tsx                 # Footer with links and social
│   │
│   ├── ui/                        # Pre-built shadcn/ui components (not used in design)
│   │   └── [50+ component files]  # Available but replaced with custom components
│   │
│   └── theme-provider.tsx         # Theme management
│
├── public/
│   ├── projects/                  # Project images directory
│   │   ├── project-1.jpg          # Generated architectural images
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   ├── project-4.jpg
│   │   ├── project-5.jpg
│   │   ├── project-6.jpg
│   │   ├── project-7.jpg
│   │   ├── project-8.jpg
│   │   ├── project-9.jpg
│   │   ├── project-10.jpg
│   │   ├── project-11.jpg
│   │   └── project-12.jpg
│   │
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── icon.svg
│   └── apple-icon.png
│
├── lib/
│   └── utils.ts                   # Utility functions (cn for Tailwind)
│
├── hooks/
│   ├── use-mobile.tsx             # Mobile breakpoint hook
│   └── use-toast.ts               # Toast notifications hook
│
├── Configuration Files
│   ├── package.json               # NPM dependencies including framer-motion
│   ├── tailwind.config.ts         # Tailwind CSS configuration
│   ├── tsconfig.json              # TypeScript configuration
│   ├── next.config.mjs            # Next.js configuration
│   └── postcss.config.js          # PostCSS configuration
│
├── Documentation Files
│   ├── README.md                  # Project overview and features
│   ├── BUILD_SUMMARY.md           # Detailed build summary
│   ├── CLIENT_INSTRUCTIONS.md     # Client customization guide
│   └── COMPLETION_CHECKLIST.md    # Project completion checklist
│
└── Root Files
    ├── .gitignore
    ├── .eslintrc.json
    └── package-lock.json
```

## File Dependencies & Relationships

### app/page.tsx (Main Entry Point)
```
page.tsx
├── Navigation component
├── HeroSection component
├── ProjectsGallery component
├── AboutSection component
├── TeamSection component
├── ContactSection component
└── Footer component
```

### Component Dependencies

```
navigation.tsx
├── lucide-react (Menu, X icons)
└── framer-motion

hero-section.tsx
├── framer-motion
├── lucide-react (ArrowRight icon)
└── Animated text and gradient effects

projects-gallery.tsx
├── framer-motion
├── lucide-react (Eye icon)
├── next/image
└── Image components from public/projects/

about-section.tsx
├── framer-motion
├── lucide-react (Building2, Users, Zap icons)
└── Animated containers

team-section.tsx
├── framer-motion
├── lucide-react (Mail, Phone icons)
└── Team member cards

contact-section.tsx
├── framer-motion
├── lucide-react (Mail, Phone, MapPin icons)
└── Form elements

footer.tsx
├── framer-motion
├── lucide-react (Mail, Phone, MapPin, Social icons)
└── Link components
```

## Styling Architecture

### Design Tokens (app/globals.css)
```css
:root variables:
├── Colors (primary, secondary, accent, background, foreground)
├── Semantic tokens (card, popover, destructive, border, etc.)
├── Font family definitions
└── Border radius values
```

### Tailwind Configuration (tailwind.config.ts)
```typescript
theme:
├── colors (using CSS variables)
├── borderRadius (using CSS variables)
├── fontFamily (Geist fonts)
└── extend (custom additions)
```

### CSS Architecture
```
globals.css:
├── @import tailwindcss
├── @import tw-animate-css
├── :root (light mode variables)
├── .dark (dark mode variables)
├── @theme (Tailwind theme definition)
└── @layer base (base HTML styles)
```

## Component Anatomy

### Section Components Pattern
Each section component follows this structure:
```typescript
1. Import statements (framer-motion, lucide-react, React hooks)
2. Component function with 'use client' directive
3. Animation variants definition (containerVariants, itemVariants)
4. JSX structure with motion.div wrappers
5. Tailwind CSS classes for styling
6. Event handlers (if needed)
```

### Example Structure:
```typescript
'use client'

import { motion } from 'framer-motion'
import { SomeIcon } from 'lucide-react'

export function SectionComponent() {
  // Animation variants
  const containerVariants = { ... }
  const itemVariants = { ... }

  // State management (if needed)
  const [state, setState] = useState(...)

  // Render
  return (
    <section className="...">
      <motion.div variants={containerVariants}>
        {/* Content */}
      </motion.div>
    </section>
  )
}
```

## Data Flow

### Navigation Links
```
Navigation component
└── Links to sections (using href="#section-id")
    ├── #home
    ├── #projects
    ├── #about
    ├── #team
    └── #contact
```

### Project Data
```
projects-gallery.tsx
└── projects array
    ├── id, image, title, category
    └── Displayed in grid layout
```

### Team Data
```
team-section.tsx
└── teamMembers array
    ├── name, role, bio, email, phone
    └── Displayed as cards
```

### Form Data
```
contact-section.tsx
└── formData state
    ├── name, email, phone, message
    └── Submitted via handleSubmit
```

## Styling Precedence

1. **CSS Variables** (app/globals.css)
   - Foundation for all colors and dimensions

2. **Tailwind Classes** (components)
   - Primary styling method
   - Responsive prefixes (sm:, md:, lg:)

3. **Framer Motion** (inline styles)
   - Animations and transforms
   - Dynamic style calculations

4. **Inline Styles** (minimal use)
   - Dynamic values only

## Responsive Breakpoints

```
Mobile:   < 768px (default)
Tablet:   768px - 1024px (md:)
Desktop:  > 1024px (lg:)
```

## Performance Considerations

### Optimized Elements
- Next.js Image component for project photos
- CSS animations (GPU-accelerated)
- Lazy loading with Intersection Observer
- Code splitting via dynamic imports
- Minified CSS and JavaScript

### Loading Strategy
1. HTML parsed and rendered
2. Critical CSS loaded immediately
3. Framer Motion animations start on interaction
4. Images lazy-loaded as they enter viewport

## Browser API Usage

- **Intersection Observer** (Framer Motion)
- **window.matchMedia** (responsive design)
- **localStorage** (potentially for theme preference)
- **requestAnimationFrame** (smooth animations)

## SEO & Meta Tags

Located in: app/layout.tsx
```typescript
metadata: {
  title: 'ABSPRO India LLP - Builder | Developer | Engineers',
  description: 'Premium architectural and construction services...',
  generator: 'v0.app'
}
```

## Environment Setup

Required Node version: 18+
Package manager: pnpm (recommended)

Installation:
```bash
pnpm install
```

Scripts:
```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Production server
pnpm lint     # Lint check
```

## Deployment Ready

- ✅ Production build optimized
- ✅ Environment variables support
- ✅ Analytics pre-configured
- ✅ Static assets optimized
- ✅ SEO ready
- ✅ Vercel deployment ready

---

This structure ensures:
- Clean separation of concerns
- Easy component reusability
- Straightforward customization
- Excellent performance
- Maintainable code
