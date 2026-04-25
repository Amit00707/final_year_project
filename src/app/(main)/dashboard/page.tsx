'use client';

import React from 'react';
import { BookGrid } from '@/components/books/BookGrid';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-end mb-12 border-b border-[var(--border)] pb-6">
        <div>
          <h1 className="text-4xl font-serif font-bold text-[var(--foreground)]">Welcome back, Scholar.</h1>
          <p className="text-[var(--muted)] mt-2">You read for 45 minutes yesterday. You are on a 3-day reading streak!</p>
        </div>
        <Button variant="ghost">View Profile →</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Continue Reading Card */}
        <div className="col-span-1 md:col-span-2 bg-[#1C1917] border border-[var(--border)] rounded-2xl p-6 shadow-xl flex gap-6 items-center">
          <div className="w-24 h-36 bg-[#292524] rounded-md shrink-0 border border-amber-900/30"></div>
          <div className="flex-1">
            <span className="text-xs text-amber-500 uppercase font-bold tracking-widest mb-1 block">Currently Reading</span>
            <h2 className="text-2xl font-serif text-[var(--foreground)]">Meditations</h2>
            <p className="text-[var(--muted)] text-sm mb-4">Marcus Aurelius • Page 42 of 200</p>
            
            <div className="w-full bg-[#0C0A09] rounded-full h-2 mb-4 border border-[var(--border)]">
              <div className="bg-[var(--primary)] h-2 rounded-full w-[21%] shadow-[0_0_10px_rgba(217,119,6,0.5)]"></div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="primary" size="sm">Resume</Button>
              <Button variant="ghost" size="sm">Options</Button>
            </div>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="bg-[#2E224F]/30 border border-[#7C3AED]/30 rounded-2xl p-6 flex flex-col items-start shadow-[0_0_20px_rgba(124,58,237,0.05)]">
          <span className="text-xs text-[#A78BFA] uppercase font-bold tracking-widest mb-2 flex items-center gap-2">✨ AI Insight</span>
          <p className="text-[var(--foreground)] text-sm leading-relaxed max-w-sm">
            Based on your speed, you will finish <em>Meditations</em> by Thursday. Try to allocate 15 mins for the Quiz tomorrow.
          </p>
        </div>
      </div>

      <BookGrid 
        title="Recommended for your Intellectual Pursuits" 
        books={[
          { id: '1', title: 'The Republic', author: 'Plato' },
          { id: '2', title: 'Critique of Pure Reason', author: 'Immanuel Kant' },
          { id: '3', title: 'Calculus Made Easy', author: 'S.P. Thompson' },
          { id: '4', title: 'Dune', author: 'Frank Herbert' },
        ]} 
      />
    </div>
  );
}
