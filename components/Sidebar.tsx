import React, { useState } from 'react';
import { Icon } from './Icon';
import { Menu, X, Globe } from 'lucide-react';
import { ProfileData } from '../types';

interface Section {
  id: string;
  label: string;
}

interface SidebarProps {
  activeSection: string;
  profile: ProfileData;
  sections: Section[];
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, profile, sections, lang, setLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-academic-200 z-50 px-6 py-4 flex justify-between items-center">
        <span className="font-serif font-bold text-lg text-academic-900">{profile.name}</span>
        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="text-academic-600 flex items-center gap-1 text-sm font-medium">
            <Globe size={18} />
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-academic-700">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 flex flex-col gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="text-lg font-medium text-left text-academic-800 hover:text-academic-blue"
            >
              {section.label}
            </button>
          ))}
          <a
            href="https://blog.lazysheep.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-left text-academic-800 hover:text-academic-blue flex items-center gap-2"
          >
            {lang === 'en' ? 'Blog' : '博客'}
            <Icon name="external" size={16} className="opacity-50" />
          </a>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 fixed h-screen top-0 left-0 bg-academic-50/50 border-r border-academic-200 px-8 py-10 overflow-y-auto custom-scrollbar">
        <div className="flex-1">
          {/* Profile Image - True Oval shape */}
          <div className="w-32 h-40 rounded-[50%] overflow-hidden mb-6 border-2 border-white shadow-sm ring-1 ring-academic-200 mx-auto md:mx-0">
             <img
               src="images/profile/avator.jpg"
               alt={profile.name}
               className="w-full h-full object-cover object-center" 
             />
          </div>
          
          <h1 className="font-serif text-xl font-bold text-academic-900 leading-tight mb-2">
            {profile.name}
          </h1>
          <p className="text-academic-600 font-medium text-sm mb-1">{profile.title}</p>
          <p className="text-academic-500 text-xs mb-4 leading-relaxed">{profile.affiliation}</p>
          
          <div className="flex flex-col gap-2 text-xs text-academic-500">
            <div className="flex items-center gap-2 hover:text-academic-700 transition-colors">
              <Icon name="email" size={14} />
              <a href={`mailto:${profile.email}`} className="truncate">{profile.email}</a>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="location" size={14} className="mt-0.5 shrink-0" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            {profile.socials.map((social) => (
              social.platform !== 'email' && (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-academic-400 hover:text-academic-800 transition-colors"
                  aria-label={social.platform}
                >
                  <Icon name={social.platform} size={18} />
                </a>
              )
            ))}
          </div>
        </div>

        <div className="shrink-0 mt-8 space-y-1">
          {/* External Blog Link */}
          <a
            href="https://blog.lazysheep.site"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full text-left py-2 px-3 rounded-md text-sm font-medium text-academic-500 hover:text-academic-800 hover:bg-academic-100 transition-all"
          >
            <span>{lang === 'en' ? 'Blog' : '博客'}</span>
            <Icon name="external" size={14} className="opacity-50" />
          </a>

          {/* Language Switch */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 w-full py-2 px-3 rounded-md text-sm font-medium text-academic-500 hover:text-academic-800 hover:bg-academic-100 transition-colors"
          >
            <Globe size={16} />
            {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
          </button>
        </div>
      </aside>
    </>
  );
};
