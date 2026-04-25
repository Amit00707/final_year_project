'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function GlassNavbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[#1C1917]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            {/* Violet AI Sparkle implies Midnight Scholar Core */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-[#0C0A09] font-bold">
              M
            </div>
            <span className="font-serif text-xl font-medium tracking-tight text-[var(--foreground)]">
              Midnight Scholar
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <Link href="/library" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            Library
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            Dashboard
          </Link>
          <Link href="/search" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            Search
          </Link>
        </nav>

        {/* Auth Gateway Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button variant="primary" size="sm">Start Reading</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
