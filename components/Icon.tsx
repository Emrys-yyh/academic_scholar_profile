import React from 'react';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  FileText, 
  Code, 
  ExternalLink, 
  Download,
  GraduationCap,
  Youtube,
  Link as LinkIcon
} from 'lucide-react';
import { SiZhihu, SiXiaohongshu } from 'react-icons/si';

export const Icons = {
  email: Mail,
  location: MapPin,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  scholar: GraduationCap,
  pdf: FileText,
  code: Code,
  external: ExternalLink,
  demo: Youtube,
  slides: LinkIcon,
  download: Download,
  zhihu: SiZhihu,
  xiaohongshu: SiXiaohongshu,
};

type IconType = keyof typeof Icons;

interface IconProps {
  name: string; // Allowing string to be flexible, but should match keys
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 18 }) => {
  // Map 'type' from links to icon keys if necessary, or default to external
  const IconComponent = Icons[name as IconType] || Icons.external;
  
  return <IconComponent size={size} className={className} />;
};