import React from 'react';
import { Publication } from '../types';
import { Icon } from './Icon';

interface PublicationListProps {
  publications: Publication[];
  authorName: string;
  lang: 'en' | 'zh';
}

const PublicationItem: React.FC<{ pub: Publication; authorName: string; lang: 'en' | 'zh' }> = ({ pub, authorName, lang }) => {
  // Helper to bold the author's name
  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      // Simple check, in production you might want better name matching (e.g. "Chen, A.")
      const isMe = author.includes("Chen") || author === authorName; 
      return (
        <span key={index}>
          {isMe ? <strong className="text-academic-900">{author}</strong> : <span className="text-academic-600">{author}</span>}
          {index < authors.length - 1 ? ', ' : ''}
        </span>
      );
    });
  };

  return (
    <div className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-xl hover:bg-academic-50 transition-colors duration-200">
      {/* Thumbnail (Optional) - Desktop only usually keeps it cleaner, but responsive here */}
      <div className="hidden sm:block w-32 h-20 shrink-0 mt-1">
        {pub.thumbnail && (
          <img 
            src={pub.thumbnail} 
            alt={pub.title} 
            className="w-full h-full object-cover rounded-md shadow-sm border border-academic-200 opacity-90 group-hover:opacity-100 transition-opacity" 
          />
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-base font-bold text-academic-900 leading-snug mb-1 group-hover:text-academic-blue transition-colors">
          {pub.title}
        </h3>
        <div className="text-sm text-academic-600 mb-1">
          {formatAuthors(pub.authors)}
        </div>
        <div className="text-sm mb-3">
          <span className="italic font-medium text-academic-700">{pub.venue}</span>
          <span className="text-academic-400 mx-2">•</span>
          <span className="text-academic-500">{pub.year}</span>
        </div>
        
        {pub.abstract && (
            <p className="text-sm text-academic-500 mb-3 line-clamp-2 leading-relaxed hidden group-hover:block transition-all">
                {pub.abstract}
            </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {pub.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-academic-100 text-academic-600 hover:bg-academic-800 hover:text-white transition-all border border-academic-200 hover:border-transparent"
            >
              <Icon name={link.type} size={12} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PublicationList: React.FC<PublicationListProps> = ({ publications, authorName, lang }) => {
  return (
    <div className="space-y-4">
      {publications.map((pub) => (
        <PublicationItem key={pub.id} pub={pub} authorName={authorName} lang={lang} />
      ))}
    </div>
  );
};