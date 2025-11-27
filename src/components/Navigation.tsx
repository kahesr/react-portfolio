import { useLocation, Link } from 'react-router-dom';
import { Card } from './Card';
import { ThemeSwitcher } from './ThemeSwitcher';
import { User, FileText, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { path: '/', label: 'About', icon: User },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/works', label: 'Works', icon: Briefcase },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const location = useLocation();

  return (
    <Card>
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'text-charcoal-700 dark:text-charcoal-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-700'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-charcoal-200 dark:border-charcoal-700">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-charcoal-700 dark:text-charcoal-300">Theme</span>
          <ThemeSwitcher />
        </div>
      </div>
    </Card>
  );
}
