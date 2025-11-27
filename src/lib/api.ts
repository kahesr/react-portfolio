import { supabase } from './supabase';
import { Profile, Project, Experience, Education, Skill } from '../types';

export async function getProfile(): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getExperiences(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from('experiences')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getEducation(): Promise<Education[]> {
  const { data, error } = await supabase
    .from('education')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function submitContactForm(
  name: string,
  email: string,
  message: string
): Promise<{ success: boolean }> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error('Failed to send contact message');
  }

  return { success: true };
}
