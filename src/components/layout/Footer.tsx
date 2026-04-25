import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background)] py-8 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Midnight Scholar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
