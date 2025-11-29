# Professional Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, Tailwind CSS, and Supabase.

## Development
### Clone and install dependencies
```bash
git clone <your-repo>
cd react-portfolio
npm install
```

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview    # Preview production build
```

Output will be in the `dist/` folder.

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

## Features

- **Elegant Design** - Charcoal & Teal professional color palette
- **Dark/Light Mode** - Full theme support with smooth transitions
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Portfolio Sections** - About, Resume, Works, and Contact
- **Email Integration** - Contact form submissions sent to your inbox
- **Database Backed** - Supabase PostgreSQL backend
- **Production Ready** - Deploy to Vercel, Netlify, or any static host

## Documentation

Start with one of these guides:

1. **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Setup instructions and Customization SQL
2. **[PORTFOLIO_FEATURES.md](./PORTFOLIO_FEATURES.md)** - Full feature list
3. **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - Project overview

## Technology Stack

- React 18.3 with TypeScript
- Tailwind CSS 3.4 with dark mode
- React Router 7.9 for routing
- Supabase for backend database
- Resend API for email notifications
- Framer Motion for animations
- Vite for build tooling

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Layout.tsx
│   ├── Modal.tsx
│   ├── Navigation.tsx
│   ├── ProfileCard.tsx
│   ├── Tabs.tsx
│   ├── Textarea.tsx
│   ├── ThemeSwitcher.tsx
│   └── Toast.tsx
├── context/             # React contexts
│   ├── ThemeContext.tsx
│   └── ToastContext.tsx
├── hooks/               # Custom hooks
│   └── useToastContainer.tsx
├── lib/                 # Utilities and API
│   ├── api.ts
│   └── supabase.ts
├── pages/               # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Resume.tsx
│   └── Works.tsx
├── types/               # TypeScript types
│   └── index.ts
├── App.tsx              # Main app component
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## Environment Setup


Add and configure Supabase credentials in `.env`:

```
VITE_SUPABASE_URL=your_supabase_url             # e.g., https://xyzcompany.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_key        # e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... 
```

### Email System
- Uses Supabase Edge Functions + Resend API 
- No database storage of emails (privacy-focused)
- HTML email templates with proper formatting
- Error handling and validation

## License

MIT License - Feel free to use this portfolio template for your own projects.

---

**Ready to launch? Start with `npm run dev` and enjoy building!** 🚀
