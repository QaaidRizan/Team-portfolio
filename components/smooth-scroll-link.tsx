'use client';

import Link from "next/link";
import { ReactNode } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothScrollLink({ 
  href, 
  children, 
  className,
  onClick
}: SmoothScrollLinkProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only apply for anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Scroll to the element
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page reload
        window.history.pushState(null, '', href);
      }
      
      // Call additional onClick handler if provided
      if (onClick) onClick();
    }
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}