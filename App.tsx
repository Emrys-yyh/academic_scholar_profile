import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Sidebar } from './components/Sidebar';
import { PublicationList } from './components/PublicationList';
import { Icon } from './components/Icon';
import { data } from './data';
import { NewsItem, AwardItem, ExperienceItem } from './types';

// Helper component for section headers
const SectionHeader: React.FC<{ title: string; id: string }> = ({ title, id }) => (
  <h2 id={id} className="font-serif text-xl font-bold text-academic-900 border-b-2 border-academic-100 pb-2 mb-6 mt-16 scroll-mt-24">
    {title}
  </h2>
);

// Simple markdown-ish parser for news items (handles **bold**)
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold text-academic-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const NewsList = ({ items }: { items: NewsItem[] }) => (
  <div className="space-y-4">
    {items.map((item) => (
      <div key={item.id} className="flex gap-4 items-baseline">
        <span className="w-20 shrink-0 text-xs font-bold text-academic-500 font-mono text-right">{item.date}</span>
        <p className="text-academic-700 text-sm">{renderTextWithBold(item.content)}</p>
      </div>
    ))}
  </div>
);

const AwardsList = ({ items }: { items: AwardItem[] }) => (
  <div className="space-y-3">
    {items.map((award) => (
      <div key={award.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
        <div className="flex-1">
          <span className="font-bold text-academic-900 text-sm">{award.title}</span>
          <span className="text-academic-600 text-sm ml-2">({award.organization})</span>
          {award.description && <p className="text-xs text-academic-500 mt-0.5">{award.description}</p>}
        </div>
        <span className="text-xs font-mono text-academic-500 shrink-0">{award.year}</span>
      </div>
    ))}
  </div>
);

const Timeline = ({ items }: { items: ExperienceItem[] }) => (
  <div className="relative border-l border-academic-200 ml-2 space-y-5 py-1">
    {items.map((exp) => (
      <div key={exp.id} className="relative pl-5">
        <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white border-2 border-academic-400"></span>
        <h3 className="font-bold text-academic-900 text-sm">{exp.role}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-academic-600 mb-1">
          <span className="font-medium text-xs">{exp.organization}</span>
          <span className="text-[11px] text-academic-500 bg-academic-50 px-1.5 py-0.5 rounded self-start sm:self-auto mt-1 sm:mt-0">{exp.period}</span>
        </div>
        {exp.description && (
          <p className="text-xs text-academic-500 leading-relaxed max-w-xl">{exp.description}</p>
        )}
      </div>
    ))}
  </div>
);

function App() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about');

  // Validate language, redirect to English if invalid
  if (lang !== 'en' && lang !== 'zh') {
    return <Navigate to="/en" replace />;
  }

  const currentLang = lang as 'en' | 'zh';
  const currentData = data[currentLang];
  const { PROFILE, SECTIONS } = currentData;

  const setLang = (newLang: 'en' | 'zh') => {
    navigate(`/${newLang}`);
  };

  const navSections = SECTIONS.map(s => ({
    id: s.id,
    label: s.navLabel || s.title
  }));

  // Simple scroll spy to update active sidebar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.map(s => s.id);
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLang, navSections]);

  return (
    <div className="min-h-screen bg-white text-[15px]">
      {/* Container */}
      <div className="flex max-w-7xl mx-auto">
        
        {/* Sidebar Navigation (Left) */}
        <Sidebar 
          activeSection={activeSection} 
          profile={PROFILE} 
          sections={navSections}
          lang={currentLang}
          setLang={setLang}
        />

        {/* Main Content (Right) */}
        <main className="flex-1 w-full md:pl-72 lg:pl-80 pt-16 md:pt-0">
          
          {/* Top Navigation for Desktop */}
          <nav className="hidden md:flex sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-academic-100 px-12 py-4 gap-8 overflow-x-auto custom-scrollbar">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  const el = document.getElementById(section.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 border-b-2 ${
                  activeSection === section.id
                    ? 'border-academic-900 text-academic-900'
                    : 'border-transparent text-academic-500 hover:text-academic-900'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="px-6 md:px-12 py-12 md:py-8">
            {SECTIONS.map(section => {
              if (section.type === 'about') {
                return (
                  <section id="about" key="about" className="scroll-mt-24 mb-12">
                    <h2 className="sr-only">About</h2>
                    {/* Mobile Header (Repeated info for mobile since sidebar is hidden) */}
                    <div className="md:hidden mb-8 text-center">
                      <img src="images/profile/me.jpg" alt={PROFILE.name} className="w-28 h-36 rounded-[50%] mx-auto mb-4 object-cover ring-2 ring-academic-100" />
                      <h1 className="font-serif text-xl font-bold text-academic-900">{PROFILE.name}</h1>
                      <p className="text-academic-600 mb-1 text-sm">{PROFILE.title}</p>
                      <p className="text-academic-500 text-xs mb-4">{PROFILE.affiliation}</p>
                      <div className="flex justify-center gap-4 text-academic-500">
                        {PROFILE.socials.map((social) => (
                          <a key={social.platform} href={social.url} className="hover:text-academic-900"><Icon name={social.platform} size={18} /></a>
                        ))}
                      </div>
                    </div>

                    <div className="prose prose-sm prose-academic text-academic-700 max-w-none leading-relaxed">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-4">{children}</p>,
                          a: ({ href, children }) => {
                            const safeHref = href && /^(https?:\/\/|mailto:)/.test(href) ? href : undefined;
                            return (
                              <a href={safeHref} target="_blank" rel="noopener noreferrer" className="text-academic-blue hover:underline">
                                {children}
                              </a>
                            );
                          },
                          strong: ({ children }) => <strong className="font-semibold text-academic-900">{children}</strong>,
                        }}
                      >
                        {PROFILE.bio.split('\n').map(line => line.trim()).filter(line => line).join('\n\n')}
                      </ReactMarkdown>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-academic-400 mb-3">
                        {currentLang === 'en' ? 'Research Interests' : '研究兴趣'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {PROFILE.researchInterests.map((interest, idx) => (
                          <span key={idx} className="px-3 py-1 bg-academic-100 text-academic-700 rounded-full text-xs font-medium border border-academic-200">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                );
              }

              return (
                <section key={section.id} id={section.id} className="scroll-mt-24 mb-12">
                  <SectionHeader title={section.title} id={`${section.id}-header`} />
                  
                  {section.type === 'news' && <NewsList items={section.content} />}
                  
                  {section.type === 'publications' && (
                    <>
                      <PublicationList publications={section.content} authorName={PROFILE.name} lang={currentLang} />
                      <div className="mt-6">
                         <a href={PROFILE.socials.find(s => s.platform === 'scholar')?.url || '#'} className="inline-flex items-center gap-2 text-academic-blue font-medium hover:underline text-sm">
                           {currentLang === 'en' ? 'View full list on Google Scholar' : '在 Google Scholar 查看完整列表'} <Icon name="external" size={14} />
                         </a>
                      </div>
                    </>
                  )}

                  {section.type === 'awards' && <AwardsList items={section.content} />}
                  
                  {section.type === 'timeline' && <Timeline items={section.content} />}
                </section>
              );
            })}

            {/* Footer */}
            <footer className="mt-24 pt-8 border-t border-academic-100 text-center text-academic-400 text-xs">
              <p>&copy; {new Date().getFullYear()} {PROFILE.name}. Powered by React Scholar.</p>
              <p className="mt-1">Site last updated: {PROFILE.lastUpdated}</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
