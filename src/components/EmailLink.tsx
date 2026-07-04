'use client';

import { ReactNode } from 'react';

interface EmailLinkProps {
  email: string;
  children: ReactNode;
  className?: string;
}

const EmailLink = ({ email, children, className = '' }: EmailLinkProps) => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // Direct approach - open mailto
    window.open(`mailto:${email}`, '_blank');
    // Fallback: try location.href
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 100);
  };

  return (
    <a 
      href={`mailto:${email}`} 
      className={className} 
      onClick={handleEmailClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default EmailLink;
