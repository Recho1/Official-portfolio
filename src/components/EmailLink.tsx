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
    window.location.href = `mailto:${email}`;
  };

  return (
    <a href={`mailto:${email}`} className={className} onClick={handleEmailClick}>
      {children}
    </a>
  );
};

export default EmailLink;
