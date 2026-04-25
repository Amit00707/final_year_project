'use client';

import React from 'react';

export function RevisionTab() {
  const weakTopics = [
    { title: 'The Fall of the Republic', score: 42, reason: 'Based on Quiz #3' },
    { title: 'Senatorial Structure', score: 65, reason: 'Historical Context' }
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 border-b border-[var(--border)] pb-4">
        <h3 className="text-lg font-serif text-[var(--accent)] font-bold flex items-center gap-2">
          ✨ Smart Revision
        </h3>
        <p className="text-xs text-[var(--muted)] mt-1">Targeted Review Strategy</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-[var(--foreground)]">Weak Topics Identified</h4>
        {weakTopics.map((topic, i) => (
          <div key={i} className="border border-[var(--primary)] bg-[var(--surface)] p-3 rounded-lg cursor-pointer hover:bg-amber-900/10 transition-colors">
            <h5 className="font-serif text-[var(--foreground)]">{topic.title}</h5>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-amber-500">{topic.reason}</span>
              <span className="text-xs font-bold text-red-400">Retention: {topic.score}%</span>
            </div>
            <div className="mt-3 text-right">
              <span className="text-sm font-bold text-[var(--primary)] hover:underline">Review Now →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--border)]">
        <h4 className="text-sm font-bold text-[var(--muted)] mb-3">Mastered Topics</h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-900/20 text-green-500 text-xs rounded-md border border-green-900/30">Punic Wars</span>
          <span className="px-2 py-1 bg-green-900/20 text-green-500 text-xs rounded-md border border-green-900/30">Carthage</span>
        </div>
      </div>
    </div>
  );
}
