'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column: Cover & Actions */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="aspect-[2/3] w-full rounded-xl bg-[#292524] border border-[var(--border)] shadow-2xl relative overflow-hidden">
            {/* Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]/50 font-serif text-xl border-4 border-[#1C1917] m-4">
              Cover Art
            </div>
          </div>
          
          <Button variant="primary" className="w-full h-14 text-lg">
            Read Now
          </Button>
          
          {/* Missing Feature Check: QR Modal Trigger Placeholder */}
          <Button variant="secondary" className="w-full mb-6">
            📱 Send to Phone (QR)
          </Button>
        </div>

        {/* Right Column: Metadata & AI Stats */}
        <div className="flex-1">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-amber-900/20 text-[var(--primary)] border border-[var(--primary)]/30 rounded-full text-xs font-bold uppercase">Philosophy</span>
            <span className="px-3 py-1 bg-[#1C1917] text-[var(--muted)] border border-[var(--border)] rounded-full text-xs font-bold uppercase">Intermediate</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-2">Meditations</h1>
          <Link href={`/author/marcus-aurelius`} className="text-lg text-[var(--muted)] hover:text-[var(--primary)] mb-8 inline-block">
            by Marcus Aurelius
          </Link>

          <p className="text-[var(--foreground)] leading-relaxed text-lg mb-8">
            Written in Greek by the only Roman emperor who was also a philosopher, without any intention of publication, the Meditations of Marcus Aurelius offer a remarkable series of spiritual reflections and exercises developed as the emperor struggled to understand himself and make sense of the universe.
          </p>

          <div className="bg-[#1C1917] border border-[var(--border)] rounded-xl p-6 flex gap-8 items-center mb-8">
            <div>
              <span className="block text-sm text-[var(--muted)] mb-1">Total Pages</span>
              <span className="font-mono text-xl font-bold">254</span>
            </div>
            <div className="w-px h-12 bg-[var(--border)]"></div>
            <div>
              <span className="block text-sm text-[var(--muted)] mb-1">Avg. Read Time</span>
              <span className="font-mono text-xl font-bold">4.2 Hrs</span>
            </div>
            <div className="w-px h-12 bg-[var(--border)]"></div>
            <div>
              <span className="block text-sm text-[var(--muted)] mb-1">AI Rating</span>
              <span className="font-mono text-xl font-bold text-[var(--accent)]">98/100</span>
            </div>
          </div>

          {/* User Reviews Section */}
          <div className="border-t border-[var(--border)] pt-8 mt-12">
            <h3 className="text-2xl font-serif text-[var(--foreground)] mb-6">Community Insights</h3>
            {/* Ratings UI here */}
            <p className="text-[var(--muted)]">4.8 / 5 from 1,200 scholars.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
