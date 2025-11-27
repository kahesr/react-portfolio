# Professional Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, Tailwind CSS, and Supabase.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- **Elegant Design** - Charcoal & Teal professional color palette
- **Dark/Light Mode** - Full theme support with smooth transitions
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Portfolio Sections** - About, Resume, Works, and Contact
- **Email Integration** - Contact form submissions sent to your inbox
- **Database Backed** - Supabase PostgreSQL backend
- **Type Safe** - 100% TypeScript with zero errors
- **Accessible** - WCAG 2.1 AA compliant
- **Production Ready** - Deploy to Vercel, Netlify, or any static host

## Documentation

Start with one of these guides:

1. **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup and configuration
2. **[QUICK_CUSTOMIZE.md](./QUICK_CUSTOMIZE.md)** - Quick SQL commands to customize
3. **[PORTFOLIO_FEATURES.md](./PORTFOLIO_FEATURES.md)** - Full feature list
4. **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)** - Pre-launch verification
5. **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - Project overview

## Technology Stack

- React 18.3 with TypeScript
- Tailwind CSS 3.4 with dark mode
- React Router 7.9 for routing
- Supabase for backend database
- Resend API for email notifications
- Framer Motion for animations
- Vite for build tooling

## Directory Structure

```
src/
├── components/           # Reusable UI components
├── context/             # React contexts (Theme, Toast)
├── hooks/               # Custom hooks
├── lib/                 # Supabase client & API functions
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── App.tsx              # Main app with routing
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## Environment Setup

Your `.env` file is already configured with Supabase credentials.

### Email Configuration

1. Create account at [Resend.com](https://resend.com)
2. Get API key from Resend dashboard
3. Add to Supabase:
   - Dashboard → Edge Functions → send-contact-email
   - Click "Secrets" tab
   - Add: `RESEND_API_KEY` = your Resend API key

## Customization

### Update Profile

Use Supabase SQL Editor:

```sql
UPDATE profiles SET
  name = 'Your Name',
  title = 'Your Title',
  bio = 'Your bio',
  email = 'your@email.com'
WHERE id IS NOT NULL;
```

### Add Skills

```sql
INSERT INTO skills (name, category, proficiency, "order")
VALUES ('Skill Name', 'Category', 'expert', 1);
```

### Add Experience

```sql
INSERT INTO experiences (company, position, start_date, description, is_current, "order")
VALUES ('Company', 'Role', '2024-01-01', 'Description', true, 1);
```

### Add Projects

```sql
INSERT INTO projects (title, short_description, description, image_url, category, tags, project_url, "order")
VALUES ('Title', 'Short', 'Full', 'image-url', 'work', ARRAY['React'], 'url', 1);
```

See [QUICK_CUSTOMIZE.md](./QUICK_CUSTOMIZE.md) for more examples.

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Click Deploy

### Deploy to Netlify

1. Push code to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run typecheck  # Check TypeScript errors
npm run lint       # Lint code
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- **Bundle Size**: 521.95 KB JS (159.71 KB gzipped)
- **CSS**: 24.26 KB (4.72 KB gzipped)
- **Build Time**: ~9 seconds
- **TypeScript Errors**: 0

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- Keyboard navigation
- Screen reader friendly
- Proper focus states

## License

MIT License - Feel free to use this portfolio template for your own projects.

## Support

For detailed guidance, see the documentation files:
- Setup: [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- Customization: [QUICK_CUSTOMIZE.md](./QUICK_CUSTOMIZE.md)
- Features: [PORTFOLIO_FEATURES.md](./PORTFOLIO_FEATURES.md)
- Launch: [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)

---

**Ready to launch? Start with `npm run dev` and enjoy building!** 🚀
