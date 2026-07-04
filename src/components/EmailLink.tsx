'use client';

import { ReactNode } from 'react';

interface EmailLinkProps {
  email: string;
  children: ReactNode;
  className?: string;
}

const EmailLink = ({ email, children, className = '' }: EmailLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Try multiple methods to open email
    const mailtoUrl = `mailto:${email}?subject=Portfolio%20Inquiry&body=Hi%20Racheal%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch...`;
    
    // Method 1: Try window.open
    const newWindow = window.open(mailtoUrl, '_blank');
    
    // Method 2: If window.open fails, try location.href
    if (!newWindow || newWindow.closed) {
      window.location.href = mailtoUrl;
    }
    
    // Method 3: Fallback after 500ms
    setTimeout(() => {
      if (!newWindow || newWindow.closed) {
        window.location.href = mailtoUrl;
      }
    }, 500);
  };

  return (
    <a 
      href={`mailto:${email}`}
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default EmailLink;
