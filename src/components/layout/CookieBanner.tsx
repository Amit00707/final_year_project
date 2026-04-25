'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if user hasn't explicitly accepted before
    const hasConsented = localStorage.getItem('midnight_scholar_cookies');
    if (!hasConsented) {
      // Slight delay for cinematic feeling
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('midnight_scholar_cookies', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl max-h-min rounded-xl border border-[var(--border)] bg-[#1C1917]/95 p-4 shadow-2xl backdrop-blur-xl sm:bottom-8 sm:flex sm:items-center sm:justify-between"
        >
          <div className="mb-4 sm:mb-0 sm:mr-6">
            <h3 className="font-serif text-lg font-medium text-[var(--primary)]">Reading Preferences & Cookies</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              We use cookies to memorize your reading progress, Focus mode settings, and AI logic to enhance your experience. 
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)}>
              Decline
            </Button>
            <Button variant="primary" size="sm" onClick={acceptCookies}>
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
