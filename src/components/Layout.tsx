import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ProfileCard } from './ProfileCard';
import { Navigation } from './Navigation';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-screen bg-white dark:bg-charcoal-900 transition-colors duration-300 p-4 lg:p-8">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden self-start p-2 hover:bg-charcoal-100 dark:hover:bg-charcoal-800 rounded-lg"
      >
        {isMobileMenuOpen ? (
          <X size={24} className="text-charcoal-900 dark:text-white" />
        ) : (
          <Menu size={24} className="text-charcoal-900 dark:text-white" />
        )}
      </button>

      {/* Sidebar */}
      {(isMobileMenuOpen || window.innerWidth >= 1024) && (
        <aside className="lg:sticky lg:top-8 lg:w-80 flex-shrink-0">
          <div className="lg:space-y-8 space-y-6">
            <ProfileCard />
            <Navigation />
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
