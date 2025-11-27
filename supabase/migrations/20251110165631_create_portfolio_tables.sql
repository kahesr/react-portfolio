/*
  # Create Portfolio Database Schema

  1. New Tables
    - `profiles` - User profile information
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `bio` (text)
      - `email` (text)
      - `phone` (text)
      - `location` (text)
      - `image_url` (text, optional)
      - `resume_url` (text, optional)
      - `created_at` (timestamp)

    - `skills` - User skills with categories
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text)
      - `proficiency` (enum: beginner, intermediate, advanced, expert)
      - `order` (integer)
      - `created_at` (timestamp)

    - `experiences` - Work experience entries
      - `id` (uuid, primary key)
      - `company` (text)
      - `position` (text)
      - `start_date` (date)
      - `end_date` (date, optional)
      - `description` (text)
      - `is_current` (boolean)
      - `order` (integer)
      - `created_at` (timestamp)

    - `education` - Education entries
      - `id` (uuid, primary key)
      - `institution` (text)
      - `degree` (text)
      - `field` (text)
      - `start_date` (date)
      - `end_date` (date, optional)
      - `description` (text, optional)
      - `order` (integer)
      - `created_at` (timestamp)

    - `projects` - Portfolio projects
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `short_description` (text)
      - `image_url` (text)
      - `category` (enum: work, personal, research)
      - `tags` (text array)
      - `project_url` (text, optional)
      - `github_url` (text, optional)
      - `order` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - All tables are public readable (unauthenticated users can view)
    - No write access for public users
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  bio text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  image_url text,
  resume_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  proficiency text NOT NULL DEFAULT 'intermediate',
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  position text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  description text NOT NULL,
  is_current boolean DEFAULT false,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution text NOT NULL,
  degree text NOT NULL,
  field text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  description text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  project_url text,
  github_url text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are publicly readable"
  ON profiles
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Skills are publicly readable"
  ON skills
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Experiences are publicly readable"
  ON experiences
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Education is publicly readable"
  ON education
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO public
  USING (true);