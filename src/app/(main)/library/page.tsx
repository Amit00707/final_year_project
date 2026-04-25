'use client';

import React from 'react';
import { BookGrid } from '@/components/books/BookGrid';

export default function LibraryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif text-[var(--foreground)] mb-2">My Library</h1>
      <p className="text-[var(--muted)] mb-8">Manage your personal collection and reading lists.</p>

      <div className="flex gap-8 border-b border-[var(--border)] mb-8">
        <button className="pb-3 border-b-2 border-[var(--primary)] text-[var(--foreground)] font-medium">All Books (12)</button>
        <button className="pb-3 border-b-2 border-transparent text-[var(--muted)] hover:text-[var(--foreground)]">Currently Reading (2)</button>
        <button className="pb-3 border-b-2 border-transparent text-[var(--muted)] hover:text-[var(--foreground)]">Finished (10)</button>
        <button className="pb-3 border-b-2 border-transparent text-[var(--muted)] hover:text-[var(--foreground)]">Wishlist (4)</button>
      </div>

      <BookGrid 
        books={[
          { id: '1', title: 'The Republic', author: 'Plato' },
          { id: '2', title: 'Critique of Pure Reason', author: 'Immanuel Kant' },
        ]} 
      />
    </div>
  );
}
