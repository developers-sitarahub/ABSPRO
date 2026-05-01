# ABSPRO India LLP - Portfolio Website

A professional, modern portfolio website for ABSPRO India LLP - a premium building and development company showcasing their architectural projects, team, and services.

## Features

✨ **Modern Design**
- Clean, professional aesthetic with brand-aligned color scheme
- Responsive design optimized for all devices
- Smooth animations and transitions using Framer Motion

📸 **Project Gallery**
- Beautiful grid layout showcasing 12 architectural projects
- Hover effects and interactive project cards
- Categorized project display

👥 **Team Section**
- Display of company leadership and key team members
- Contact information and professional profiles

📞 **Contact & Lead Generation**
- Fully functional contact form
- Multiple contact channels (email, phone, location)
- Call-to-action buttons throughout

🎨 **Technology Stack**
- Next.js 16 with App Router
- React 19 for UI components
- Tailwind CSS 4 for styling
- Framer Motion for animations
- Lucide React for icons
- TypeScript for type safety

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
```bash
pnpm install
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and design tokens
│   └── page.tsx            # Home page
├── components/
│   ├── navigation.tsx      # Navigation bar
│   ├── hero-section.tsx    # Hero/Landing section
│   ├── projects-gallery.tsx # Projects showcase
│   ├── about-section.tsx   # About company section
│   ├── team-section.tsx    # Team members display
│   ├── contact-section.tsx # Contact form and info
│   └── footer.tsx          # Footer with links
├── public/
│   └── projects/           # Project images (12 architectural renders)
└── package.json
```

## Color Scheme

The website uses the ABSPRO brand colors:
- **Primary Red**: #DC143C (CTAs and accents)
- **Secondary Blue**: #0066CC (Secondary elements)
- **Accent Yellow**: #FFC107 (Highlights)
- **Dark Gray/Black**: #2D2D2D (Text and backgrounds)
- **Light Gray**: #F5F5F5 (Backgrounds)

## Customization

### Update Company Information
Edit the company details in:
- `components/hero-section.tsx` - Main headline and stats
- `components/team-section.tsx` - Team members and contact info
- `components/contact-section.tsx` - Contact information and services list
- `components/footer.tsx` - Footer links and social media

### Change Images
Replace the project images in `public/projects/` with your own architectural renders.

### Modify Colors
Update the design tokens in `app/globals.css` to match your brand colors.

## Deployment

Deploy easily to Vercel:

```bash
pnpm build
```

Then push to GitHub and connect to Vercel for automatic deployments.

## Features Explanation

### Navigation
- Fixed sticky header with responsive mobile menu
- Smooth scrolling to sections
- "Get Quote" CTA button

### Hero Section
- Animated headline with gradient text
- Call-to-action buttons
- Company statistics

### Projects Gallery
- 3-column grid layout (responsive)
- Hover animations
- Project categories and view buttons

### About Section
- Company history and expertise
- Key statistics display
- Feature highlights

### Team Section
- Team member cards with gradient headers
- Contact buttons (email/phone)
- Professional bios

### Contact Form
- Fully functional form with validation
- Contact information display
- Service list

### Footer
- Company information
- Quick navigation links
- Social media links
- Contact details

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- CSS transitions for smooth animations
- Fast load times and Lighthouse-ready

## License

Copyright © 2024 ABSPRO India LLP. All rights reserved.

## Support

For questions or customizations, contact the development team.
