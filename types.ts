export interface Link {
  label: string;
  url: string;
  type: 'pdf' | 'code' | 'demo' | 'slides' | 'external';
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  thumbnail?: string;
  abstract?: string;
  links: Link[];
  highlight?: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface SocialLink {
  platform: 'twitter' | 'github' | 'linkedin' | 'scholar' | 'email' | 'zhihu' | 'xiaohongshu';
  url: string;
  username?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  location: string;
  bio: string;
  researchInterests: string[];
  socials: SocialLink[];
  lastUpdated: string;
}

export interface SiteData {
  profile: ProfileData;
  news: NewsItem[];
  publications: Publication[];
  experience: ExperienceItem[];
  nav: {
    about: string;
    news: string;
    publications: string;
    experience: string;
  };
  sectionTitles: {
    news: string;
    publications: string;
    experience: string;
    researchInterests: string;
  };
  footer: string;
  scholarLink: string;
}

export interface I18nData {
  en: SiteData;
  zh: SiteData;
}

export type SectionType = 'about' | 'news' | 'publications' | 'awards' | 'timeline';

export interface SectionConfig {
  id: string;
  title: string;
  navLabel?: string;
  type: SectionType;
  content?: any;
}
