export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  image_url?: string;
  resume_url?: string;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  order: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  start_date: string;
  end_date?: string;
  description: string;
  order: number;
  is_current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  start_date: string;
  end_date?: string;
  description?: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  short_description: string;
  image_url: string;
  category: 'work' | 'personal' | 'research';
  tags: string[];
  project_url?: string;
  github_url?: string;
  created_at: string;
  order: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
}

export interface Theme {
  mode: 'light' | 'dark';
}

export interface Language {
  code: string; 
  name: string;
}

export type workCategory = 'all' | 'work' | 'personal' | 'research';
