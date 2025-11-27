import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Card } from './Card';
import { Button } from './Button';
import { Profile } from '../types';
import { getProfile } from '../lib/api';

export function ProfileCard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error('Failed to load profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="w-24 h-24 bg-charcoal-200 dark:bg-charcoal-700 rounded-full mx-auto mb-4" />
        <div className="space-y-2">
          <div className="h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded" />
          <div className="h-3 bg-charcoal-100 dark:bg-charcoal-700 rounded w-3/4 mx-auto" />
        </div>
      </Card>
    );
  }

  if (!profile) {
    return (
      <Card>
        <p className="text-center text-charcoal-600 dark:text-charcoal-400">No profile data</p>
      </Card>
    );
  }

  return (
    <Card>
      <div className="text-center space-y-6">
        {/* Profile Image */}
        {profile.image_url ? (
          <img
            src={profile.image_url}
            alt={profile.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-500"
          />
        ) : (
          <div className="w-32 h-32 rounded-full mx-auto bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-500">{profile.name.charAt(0)}</span>
          </div>
        )}

        {/* Profile Info */}
        <div>
          <h1 className="text-2xl font-bold text-charcoal-900 dark:text-white">{profile.name}</h1>
          <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">{profile.title}</p>
          <p className="text-charcoal-600 dark:text-charcoal-400 text-sm mt-3 leading-relaxed">{profile.bio}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 pt-4 border-t border-charcoal-200 dark:border-charcoal-700">
          {profile.email && (
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary-500 flex-shrink-0" />
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-charcoal-700 dark:text-charcoal-300 hover:text-primary-600 dark:hover:text-primary-400 break-all"
              >
                {profile.email}
              </a>
            </div>
          )}
          {profile.phone && (
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary-500 flex-shrink-0" />
              <a
                href={`tel:${profile.phone}`}
                className="text-sm text-charcoal-700 dark:text-charcoal-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {profile.phone}
              </a>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-primary-500 flex-shrink-0" />
              <span className="text-sm text-charcoal-700 dark:text-charcoal-300">{profile.location}</span>
            </div>
          )}
        </div>

        {/* Download Resume */}
        {profile.resume_url && (
          <Button className="w-full mt-4" onClick={() => window.open(profile.resume_url, '_blank')}>
            <Download size={18} className="inline-block mr-2" />
            Download Resume
          </Button>
        )}
      </div>
    </Card>
  );
}
