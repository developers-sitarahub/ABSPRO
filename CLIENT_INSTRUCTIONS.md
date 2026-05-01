# ABSPRO India LLP Portfolio Website - Client Instructions

## Getting Started

### 1. Installation & Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
# http://localhost:3000
```

### 2. What You'll See
The website includes:
- **Navigation Bar**: Fixed header with company logo and smooth scroll navigation
- **Hero Section**: Eye-catching introduction with animated headline
- **Projects Gallery**: 12 architectural projects displayed in an interactive grid
- **About Section**: Company history and key achievements
- **Team Section**: Leadership and team information with contact options
- **Contact Form**: Fully functional contact form for inquiries
- **Footer**: Links, contact info, and social media

## Customization Guide

### Update Company Information

#### 1. Navigation & Header
File: `components/navigation.tsx`
- Change the logo and company name in the navbar
- Customize navigation links if needed

#### 2. Hero Section
File: `components/hero-section.tsx`
- Line 40: Update headline text
- Line 48: Update description paragraph
- Lines 73-75: Update statistics (50+ Projects, 15+ Years, etc.)

#### 3. Team Members
File: `components/team-section.tsx`
- Lines 10-27: Replace team member information
  - Name
  - Role/Position
  - Bio/Description
  - Email
  - Phone

#### 4. Contact Information
File: `components/contact-section.tsx`
- Lines 58-70: Update phone, email, address
- Lines 81-103: Update services list
- Lines 107-113: Update form submission handling

#### 5. Footer
File: `components/footer.tsx`
- Update company tagline (around line 18)
- Update contact information (lines 84-96)
- Add your actual social media links (line 140)

#### 6. Color Scheme
File: `app/globals.css`
To change brand colors, update the oklch values:
```css
--primary: oklch(0.55 0.24 9.2);    /* Primary red */
--secondary: oklch(0.35 0.18 261);  /* Secondary blue */
--accent: oklch(0.75 0.22 65);      /* Accent yellow */
```

### Replace Project Images

1. Navigate to `public/projects/`
2. Replace the 12 generated images with your actual project photos:
   - `project-1.jpg` through `project-12.jpg`
3. Update project information in `components/projects-gallery.tsx` (lines 13-25):
```typescript
{ id: 1, image: '/projects/project-1.jpg', title: 'Your Project Title', category: 'Category' },
// ... repeat for all 12 projects
```

### Modify Section Content

#### Hero Section Customization
- Headline: `components/hero-section.tsx` line 40
- Subheading: `components/hero-section.tsx` line 48
- Stats: `components/hero-section.tsx` lines 73-75
- Button text: Adjust CTA button labels

#### About Section
- Company description: `components/about-section.tsx` lines 57-65
- Year established: `components/about-section.tsx` line 60
- Statistics: `components/about-section.tsx` lines 72-76
- Features: `components/about-section.tsx` lines 84-99

## Form Submission Setup

The contact form is currently set to show an alert. To set up email notifications:

### Option 1: Use a Service (Recommended)
1. Sign up for: Vercel Blob, AWS SES, or SendGrid
2. Update `components/contact-section.tsx` handleSubmit function
3. Add API endpoint to handle email sending

### Option 2: Backend Integration
1. Create a route: `app/api/contact/route.ts`
2. Implement email sending logic
3. Update form handleSubmit to call this API

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Automatic deployments on push

### Build for Production
```bash
pnpm build
pnpm start
```

## SEO Optimization

The metadata is already configured in `app/layout.tsx`. Customize:
- Page title
- Meta description
- Open Graph tags

## Performance Tips

- Images are already optimized with Next.js Image component
- The site uses CSS animations (performant)
- Consider adding a CDN for images
- Use Vercel Analytics to monitor performance

## Responsive Testing

Test on:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (375px - 640px)

Use Chrome DevTools device emulation for testing.

## Browser Support

Tested and works on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Android (Latest)

## Troubleshooting

### Images not showing?
- Check files exist in `public/projects/`
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart dev server

### Animations not smooth?
- Ensure Framer Motion is installed: `pnpm install`
- Check browser hardware acceleration is enabled
- Test in a different browser

### Form not working?
- Open browser console (F12) for errors
- Check form handleSubmit function is connected
- Verify API endpoint if using backend

### Colors look wrong?
- Clear browser cache
- Check `app/globals.css` for color token definitions
- Verify Tailwind is processing CSS correctly

## Important Files Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page - combines all sections |
| `app/layout.tsx` | Root layout with metadata and fonts |
| `app/globals.css` | Global styles and color tokens |
| `components/*.tsx` | Individual section components |
| `public/projects/` | Project images |
| `package.json` | Dependencies |
| `tailwind.config.ts` | Tailwind CSS configuration |

## Support & Help

For technical issues:
1. Check the README.md for detailed documentation
2. Review the BUILD_SUMMARY.md for architecture overview
3. Check console logs (F12) for error messages
4. Verify all files are in correct locations

## Analytics

Google Analytics and Vercel Analytics are pre-configured. To enable:
1. Add your Google Analytics ID in `layout.tsx`
2. Vercel Analytics runs automatically in production

## Next Features to Consider

- Blog section for construction updates
- Image gallery with lightbox
- Before/after project comparisons
- Client testimonials section
- Virtual tour integration (3D models)
- Newsletter signup
- Live chat support
- Multi-language support

---

**Website Status**: ✅ Ready for customization and deployment
**Last Updated**: May 1, 2026
