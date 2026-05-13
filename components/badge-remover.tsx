'use client';

import { useEffect } from 'react';

export function BadgeRemover() {
  useEffect(() => {
    const removeBadges = () => {
      const selectors = [
        '#vercel-toolbar',
        '.vercel-toolbar',
        '[data-vercel-toolbar]',
        '#__next-feedback',
        '#netlify-drawer',
        '.netlify-drawer',
        'netlify-drawer'
      ];
      selectors.forEach(s => {
        document.querySelectorAll(s).forEach(el => {
          if (el.parentNode) el.remove();
        });
      });
      // Also check for common class patterns
      document.querySelectorAll('div').forEach(div => {
        const id = div.id || '';
        const className = typeof div.className === 'string' ? div.className : '';
        if (id.includes('netlify') || className.includes('netlify')) {
          div.remove();
        }
      });
    };
    
    removeBadges();
    const interval = setInterval(removeBadges, 1000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
