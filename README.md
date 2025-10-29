# Sarah Mensah - Speaker Website

A visually compelling one-page website showcasing Sarah Mensah's journey from Congo to KPMG boardrooms and her work as an inspirational speaker on resilience, leadership, and transformation.

## Features

- **Hero Section** with auto-playing video background
- **Journey Timeline** highlighting Sarah's story from charity work to speaking career
- **Speaking Topics** showcase with interactive cards
- **Testimonials** from past clients and events
- **Booking Form** with validation for event inquiries
- **Smooth Scroll Navigation** with sticky navbar
- **Responsive Design** optimized for all devices
- **Framer Motion Animations** for engaging user experience

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form validation
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sarah-mensah-speaker/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main homepage
├── components/
│   ├── Navbar.tsx            # Sticky navigation
│   ├── Hero.tsx              # Hero with video background
│   ├── JourneySection.tsx    # Timeline of Sarah's journey
│   ├── TopicsSection.tsx     # Speaking topics grid
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── BookingForm.tsx       # Contact/booking form
│   ├── Footer.tsx            # Footer with social links
│   └── VideoBackgroundSection.tsx # Reusable video background
├── data/
│   └── content.ts            # All content data (topics, testimonials, etc.)
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json
```

## Customization

### Update Content

Edit `/data/content.ts` to modify:
- Speaking topics
- Testimonials
- Journey milestones
- Impact statistics

### Replace Videos

Update video URLs in:
- `Hero.tsx` - Hero section background
- `JourneySection.tsx` - Journey video clip
- `TopicsSection.tsx` - Topics background video

### Update Styling

Colors and design tokens are in:
- `tailwind.config.ts` - Theme colors
- `app/globals.css` - Global styles and utilities

### Form Integration

The booking form in `BookingForm.tsx` currently logs to console. To integrate with a backend:

1. Add API endpoint in `/app/api/booking/route.ts`
2. Update the `onSubmit` function to POST to your endpoint
3. Consider integrations like:
   - Email services (SendGrid, Resend)
   - Form platforms (Formspree, Basin)
   - CRM systems (HubSpot, Salesforce)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Other Platforms

Works with any platform supporting Next.js (AWS, Digital Ocean, Railway, etc.)

## Performance Optimization

- Videos are auto-playing but muted to save bandwidth
- Images use Next.js Image optimization
- Code splitting via Next.js App Router
- Framer Motion animations are optimized for 60fps

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved © 2024 Sarah Mensah

## Contact

For website support or inquiries:
- Email: bookings@sarahmensah.com
- LinkedIn: [linkedin.com/in/sarahmensah](https://linkedin.com/in/sarahmensah)
