# Portfolio Website - Setup & Configuration Guide

## Overview

This is a modern, professional portfolio website built with React, TypeScript, and Supabase. It features:

- **Dark/Light Mode** - Elegant Charcoal & Teal color palette with smooth theme switching
- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Portfolio Sections** - About, Resume, Works, and Contact
- **Email Notifications** - Contact form submissions sent to your email via Resend
- **Database Backed** - All content managed through Supabase
- **Production Ready** - TypeScript, proper error handling, and accessibility features

## Quick Start

### 1. Environment Setup

The project comes with pre-configured Supabase environment variables in `.env`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

These are already set and should work immediately.

### 2. Email Configuration (Important!)

To receive contact form emails, you need to configure the Resend API key in Supabase:

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Copy your API key
3. In Supabase Dashboard → Edge Functions → send-contact-email:
   - Click "Secrets" tab
   - Add a secret: `RESEND_API_KEY` = `your_resend_api_key`
4. (Optional) Add a secret: `RECIPIENT_EMAIL` = `your-email@example.com`
   - Default is `contact@example.com`

### 3. Customize Portfolio Content

All portfolio content is stored in Supabase and can be easily updated:

#### Profile Information
- Go to Supabase Dashboard → SQL Editor
- Run queries to update the `profiles` table:

```sql
UPDATE profiles SET
  name = 'Your Name',
  title = 'Your Title',
  bio = 'Your bio',
  email = 'your@email.com',
  phone = '+1 (555) 123-4567',
  location = 'City, Country',
  image_url = 'https://your-image-url.com/photo.jpg',
  resume_url = 'https://your-resume-url.com/resume.pdf'
WHERE id IS NOT NULL;
```

#### Add/Update Skills
```sql
INSERT INTO skills (name, category, proficiency, "order")
VALUES ('Skill Name', 'Category', 'expert', 1);
```

Proficiency levels: `beginner`, `intermediate`, `advanced`, `expert`
Categories: `Frontend`, `Backend`, `Design`, `Tools`, etc.

#### Add/Update Experience
```sql
INSERT INTO experiences (company, position, start_date, end_date, description, is_current, "order")
VALUES (
  'Company Name',
  'Position',
  '2023-01-01',
  NULL,
  'Description of your role',
  true,
  1
);
```

#### Add/Update Education
```sql
INSERT INTO education (institution, degree, field, start_date, end_date, description, "order")
VALUES (
  'University Name',
  'Degree',
  'Field',
  '2020-01-01',
  '2024-05-01',
  'Additional info',
  1
);
```

#### Add/Update Projects
```sql
INSERT INTO projects (title, description, short_description, image_url, category, tags, project_url, github_url, "order")
VALUES (
  'Project Title',
  'Detailed description',
  'Short description',
  'https://image-url.com/image.jpg',
  'work',
  ARRAY['React', 'TypeScript', 'Tailwind CSS'],
  'https://project-url.com',
  'https://github.com/user/project',
  1
);
```

Categories: `work`, `personal`, `research`

## Development

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
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

## Features Explained

### Dark Mode
- Toggle with the sun/moon icon in the sidebar
- Preference is saved to localStorage
- Uses system preference as default

### Color Palette (Elegant Charcoal & Teal)
- **Primary (Teal)**: #0D9488
- **Charcoal**: #1F2937
- **Dark Mode**: #111827
- **Light Mode**: White

### Responsive Design
- Mobile-first approach
- Sidebar collapses to profile card on mobile
- Navigation adapts to screen size
- All components are fully responsive

### Email System
- Uses Supabase Edge Functions + Resend API
- No database storage of emails (privacy-focused)
- HTML email templates with proper formatting
- Error handling and validation

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Connect Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables
5. Deploy

### Other Platforms
The `dist/` folder generated by `npm run build` can be deployed to any static hosting service.

## Troubleshooting

### Email Not Sending
- Check if RESEND_API_KEY is configured in Supabase secrets
- Verify recipient email address is correct
- Check browser console for errors
- Test using `curl` or Postman to the Edge Function directly

### Database Errors
- Ensure Supabase is running and accessible
- Check network connectivity
- Verify environment variables are correct
- Check Supabase dashboard for any alerts

### Styling Issues
- Run `npm install` to ensure all dependencies are installed
- Clear browser cache
- Rebuild with `npm run build`

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` again

## Database Schema

### profiles
- `id` (uuid): Primary key
- `name` (text): Your name
- `title` (text): Professional title
- `bio` (text): Biography
- `email` (text): Contact email
- `phone` (text): Phone number
- `location` (text): Location
- `image_url` (text): Profile image URL
- `resume_url` (text): Resume PDF URL

### skills
- `id` (uuid): Primary key
- `name` (text): Skill name
- `category` (text): Skill category
- `proficiency` (text): Level (beginner/intermediate/advanced/expert)
- `order` (integer): Display order

### experiences
- `id` (uuid): Primary key
- `company` (text): Company name
- `position` (text): Job position
- `start_date` (date): Start date
- `end_date` (date): End date (nullable)
- `description` (text): Job description
- `is_current` (boolean): Currently working?
- `order` (integer): Display order

### education
- `id` (uuid): Primary key
- `institution` (text): School/University name
- `degree` (text): Degree name
- `field` (text): Field of study
- `start_date` (date): Start date
- `end_date` (date): End date (nullable)
- `description` (text): Additional info
- `order` (integer): Display order

### projects
- `id` (uuid): Primary key
- `title` (text): Project title
- `description` (text): Full description
- `short_description` (text): Brief description
- `image_url` (text): Project image URL
- `category` (text): Type (work/personal/research)
- `tags` (text[]): Technology tags
- `project_url` (text): Project URL (nullable)
- `github_url` (text): GitHub URL (nullable)
- `order` (integer): Display order

## Support & Resources

- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## License

This project is open source and available under the MIT License.
