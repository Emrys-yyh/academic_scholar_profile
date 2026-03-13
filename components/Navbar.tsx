import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  activeSection: string;
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
  navLabels: Record<string, string>;
  profile: ProfileData;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, language, setLanguage, navLabels, profile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: navLabels.about },
    { id: 'news', label: navLabels.news },
    { id: 'publications', label: navLabels.publications },
    { id: 'experience', label: navLabels.experience },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 md:left-72 lg:left-80 bg-white/90 backdrop-blur-md border-b border-academic-100 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between md:justify-end">
          <div className="md:hidden font-serif font-bold text-academic-900 text-lg cursor-pointer" onClick={() => scrollTo('about')}>
            {profile.name}
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-academic-900 ${
                  activeSection === item.id ? 'text-academic-900 border-b-2 border-academic-900 py-1' : 'text-academic-500 py-1'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-3 border-l border-academic-200 pl-6 ml-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-academic-100 text-academic-700 hover:bg-academic-200 transition-colors"
              >
                {language === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="px-3 py-1 text-xs font-medium rounded-full bg-academic-100 text-academic-700 hover:bg-academic-200 transition-colors"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-academic-700">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-30 pt-20 px-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-lg font-medium text-left text-academic-800 hover:text-academic-blue"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
