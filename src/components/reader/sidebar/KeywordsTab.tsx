'use client';

import React from 'react';

export function KeywordsTab() {
  const keywords = [
    { term: 'Marian Reforms', mentions: 12 },
    { term: 'Proletarii', mentions: 8 },
    { term: 'Patron-Client', mentions: 15 },
    { term: 'Optimates', mentions: 5 },
    { term: 'Populares', mentions: 7 },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-serif text-[var(--accent)] font-bold flex items-center gap-2">
          ✨ Core Keywords
        </h3>
        <p className="text-xs text-[var(--muted)] mt-1">Auto-extracted terms</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {keywords.map(kw => (
          <button
            key={kw.term}
            className="px-3 py-1.5 bg-[#45270A] text-amber-500 border border-amber-900/50 rounded-md text-sm hover:bg-amber-900/50 transition-colors flex items-center gap-2"
          >
            {kw.term}
            <span className="text-[10px] bg-[#0C0A09] px-1 rounded text-[var(--muted)]">{kw.mentions}</span>
          </button>
        ))}
      </div>
      
      <p className="text-xs text-[var(--muted)] mt-6 text-center border-t border-[var(--border)] pt-4">
        Click any keyword to instantly search its occurrences in the PDF.
      </p>
    </div>
  );
}
