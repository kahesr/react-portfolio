# Quick Customization Guide

## 🎨 Changing Colors (Advanced Users Only)

If you want to change from the Charcoal & Teal palette to a different one:

### Edit `tailwind.config.js`

Find the `colors` section and update:

```javascript
colors: {
  primary: {
    // Change these to your accent color
    500: '#0D9488', // Main accent color
    600: '#059669',
  },
  charcoal: {
    // Change these to your primary color
    800: '#1F2937', // Dark theme background
    900: '#111827', // Darkest shade
  }
}
```

### Common Color Palettes:

**Blue & White (Professional)**
```javascript
primary-500: '#2563EB',
charcoal-800: '#1E293B',
charcoal-900: '#0F172A',
```

**Green & Gray (Modern)**
```javascript
primary-500: '#059669',
charcoal-800: '#1F2937',
charcoal-900: '#111827',
```

**Orange & Slate (Warm)**
```javascript
primary-500: '#EA580C',
charcoal-800: '#475569',
charcoal-900: '#1E293B',
```

## 📝 Update Your Profile

Use Supabase SQL Editor to update your information:

```sql
UPDATE profiles SET
  name = 'Your Name Here',
  title = 'Your Professional Title',
  bio = 'Your professional bio (2-3 sentences)',
  email = 'your.email@example.com',
  phone = '+1 (XXX) XXX-XXXX',
  location = 'City, Country',
  image_url = 'https://link-to-your-image.jpg',
  resume_url = 'https://link-to-your-resume.pdf';
```

## 💼 Add Your Work Experience

```sql
INSERT INTO experiences (company, position, start_date, end_date, description, is_current, "order")
VALUES (
  'Company Name',
  'Your Job Title',
  '2024-01-01',
  NULL,
  'Description of what you did and accomplished',
  true,
  1
);
```

Set `is_current` to `false` for past jobs and remove `end_date` (set to NULL) if you're currently working there.

## 🎓 Add Your Education

```sql
INSERT INTO education (institution, degree, field, start_date, end_date, description, "order")
VALUES (
  'University or School Name',
  'Bachelor of Science',
  'Computer Science',
  '2020-09-01',
  '2024-05-31',
  'Any additional notes or honors',
  1
);
```

## 🛠️ Add Your Skills

Add individual skills with proficiency levels:

```sql
INSERT INTO skills (name, category, proficiency, "order")
VALUES
  ('React', 'Frontend', 'expert', 1),
  ('TypeScript', 'Frontend', 'advanced', 2),
  ('Node.js', 'Backend', 'advanced', 1),
  ('PostgreSQL', 'Backend', 'intermediate', 2);
```

Proficiency levels:
- `expert` - Master level
- `advanced` - Highly proficient
- `intermediate` - Comfortable using
- `beginner` - Learning

## 🎨 Add Portfolio Projects

```sql
INSERT INTO projects (title, description, short_description, image_url, category, tags, project_url, github_url, "order")
VALUES (
  'Project Name',
  'Detailed description of what the project does, technologies used, and your role',
  'One sentence summary',
  'https://image-url.jpg',
  'work',
  ARRAY['React', 'TypeScript', 'Tailwind CSS'],
  'https://project-website.com',
  'https://github.com/username/project',
  1
);
```

Categories:
- `work` - Professional/client projects
- `personal` - Personal projects
- `research` - Research or experimental projects

## 📧 Setup Email Notifications

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Go to your Supabase Dashboard:
   - Click "Edge Functions" in left sidebar
   - Click "send-contact-email" function
   - Click "Secrets" tab
   - Add new secret:
     - Name: `RESEND_API_KEY`
     - Value: (paste your Resend API key)
4. (Optional) Add your email address:
   - Add another secret:
     - Name: `RECIPIENT_EMAIL`
     - Value: `your-email@example.com`

Done! Contact form submissions will now be emailed to you.

## 🖼️ Finding Free Images

For project images and profile photo:

- [Pexels.com](https://pexels.com) - Free high-quality photos
- [Unsplash.com](https://unsplash.com) - Curated free photos
- [Pixabay.com](https://pixabay.com) - License-free images

Copy the image URL and paste into the database.

## 📱 Mobile Optimization Tips

The portfolio is already mobile-optimized, but here are tips for content:

1. **Profile Image**: Use a square photo (500x500px minimum)
2. **Project Images**: Landscape orientation (16:9 aspect ratio)
3. **Descriptions**: Keep concise (2-3 sentences for projects)
4. **Phone Number**: International format (+1 (555) 123-4567)

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [Netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Option 3: Custom Domain

After deploying to Vercel or Netlify:

1. Buy domain from [Namecheap](https://namecheap.com) or similar
2. Update DNS settings to point to your deployment platform
3. Follow your platform's domain setup guide

## 🔍 SEO Setup (Optional)

Add to your deployment platform:

- **Title**: "Your Name - Portfolio"
- **Description**: "Professional portfolio showcasing work and projects"
- **Keywords**: "developer, designer, portfolio"

These are added in meta tags - contact your deployment platform for details.

## 💡 Pro Tips

1. **Regular Updates**: Update projects and experience quarterly
2. **GitHub Links**: Always include GitHub links for developers
3. **Live Links**: Include live project links when available
4. **Professional Content**: Keep all text professional and concise
5. **Image Quality**: Use high-resolution images (at least 1200px wide)
6. **Contact Info**: Keep your email and phone updated
7. **Resume Link**: Keep resume up-to-date and easily downloadable

## 🆘 Common Issues

**Email not sending?**
- Check Resend API key is in Supabase secrets
- Verify recipient email address
- Check browser console for errors

**Skills not showing?**
- Verify data was inserted correctly
- Refresh the browser (Ctrl+Shift+R)
- Check Supabase browser for data

**Images not displaying?**
- Verify image URLs are correct and accessible
- Image URLs must start with `https://`
- Try different image hosting service

**Theme not switching?**
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Hard refresh: Ctrl+Shift+R

---

For more detailed information, see `SETUP_GUIDE.md` and `PORTFOLIO_FEATURES.md`
