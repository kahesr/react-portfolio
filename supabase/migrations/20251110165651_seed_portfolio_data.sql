/*
  # Seed Portfolio Data

  This migration inserts sample data into the portfolio tables.
  Data includes profile, skills, experience, education, and projects.
*/

INSERT INTO profiles (name, title, bio, email, phone, location, image_url, resume_url)
VALUES (
  'Your Name',
  'Full Stack Developer & Designer',
  'Passionate about creating beautiful, functional digital experiences. I specialize in modern web technologies and love turning ideas into reality.',
  'your.email@example.com',
  '+1 (555) 123-4567',
  'San Francisco, CA',
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://example.com/resume.pdf'
)
ON CONFLICT DO NOTHING;

INSERT INTO skills (name, category, proficiency, "order")
VALUES
  ('React', 'Frontend', 'expert', 1),
  ('TypeScript', 'Frontend', 'expert', 2),
  ('Tailwind CSS', 'Frontend', 'advanced', 3),
  ('Vue.js', 'Frontend', 'advanced', 4),
  ('JavaScript', 'Frontend', 'expert', 5),
  ('Node.js', 'Backend', 'advanced', 1),
  ('PostgreSQL', 'Backend', 'advanced', 2),
  ('Supabase', 'Backend', 'advanced', 3),
  ('REST APIs', 'Backend', 'expert', 4),
  ('GraphQL', 'Backend', 'intermediate', 5),
  ('Figma', 'Design', 'advanced', 1),
  ('UI/UX Design', 'Design', 'advanced', 2),
  ('Web Design', 'Design', 'expert', 3),
  ('Git', 'Tools', 'expert', 1),
  ('Docker', 'Tools', 'intermediate', 2),
  ('AWS', 'Tools', 'intermediate', 3)
ON CONFLICT DO NOTHING;

INSERT INTO experiences (company, position, start_date, end_date, description, is_current, "order")
VALUES
  (
    'Tech Startup Inc',
    'Senior Full Stack Developer',
    '2022-01-15',
    NULL,
    'Leading the development of customer-facing applications using React and Node.js. Architected microservices infrastructure and improved system performance by 40%.',
    true,
    1
  ),
  (
    'Digital Agency Co',
    'Full Stack Developer',
    '2020-06-01',
    '2021-12-31',
    'Built responsive web applications for clients using modern tech stack. Collaborated with designers and product managers to deliver high-quality solutions.',
    false,
    2
  ),
  (
    'Web Solutions LLC',
    'Junior Developer',
    '2019-03-15',
    '2020-05-31',
    'Developed and maintained multiple web applications. Learned best practices in code organization and team collaboration.',
    false,
    3
  )
ON CONFLICT DO NOTHING;

INSERT INTO education (institution, degree, field, start_date, end_date, description, "order")
VALUES
  (
    'University of Technology',
    'Bachelor of Science',
    'Computer Science',
    '2015-09-01',
    '2019-05-31',
    'Focused on software engineering, web development, and algorithms. Graduated with honors.',
    1
  ),
  (
    'Online Learning Platform',
    'Certificate',
    'Full Stack Web Development Bootcamp',
    '2019-06-01',
    '2019-09-30',
    'Intensive bootcamp covering modern web development stack and best practices.',
    2
  )
ON CONFLICT DO NOTHING;

INSERT INTO projects (title, description, short_description, image_url, category, tags, project_url, github_url, "order")
VALUES
  (
    'E-Commerce Platform',
    'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include product catalog, shopping cart, payment integration, and admin dashboard. Implemented real-time inventory management and order tracking.',
    'Modern e-commerce platform with payment integration',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    'work',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    'https://example-ecommerce.com',
    'https://github.com/example/ecommerce',
    1
  ),
  (
    'Task Management App',
    'A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress. Built with modern tech stack for optimal performance and user experience.',
    'Real-time collaborative task management tool',
    'https://images.pexels.com/photos/3944683/pexels-photo-3944683.jpeg?auto=compress&cs=tinysrgb&w=400',
    'work',
    ARRAY['React', 'Firebase', 'Tailwind CSS'],
    'https://example-tasks.com',
    'https://github.com/example/tasks',
    2
  ),
  (
    'Portfolio Website',
    'A personal portfolio website showcasing projects, skills, and experience. Features dark mode support, smooth animations, and responsive design. Built with React and modern web technologies.',
    'Personal portfolio with dark mode and animations',
    'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=400',
    'personal',
    ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    'https://example-portfolio.com',
    'https://github.com/example/portfolio',
    3
  ),
  (
    'AI Content Generator',
    'An AI-powered content generation tool that helps writers create engaging content. Integrated with OpenAI API and uses advanced prompting techniques for better results.',
    'AI-powered content generation platform',
    'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=400',
    'research',
    ARRAY['React', 'Node.js', 'OpenAI', 'Machine Learning'],
    'https://example-ai-gen.com',
    'https://github.com/example/ai-gen',
    4
  )
ON CONFLICT DO NOTHING;