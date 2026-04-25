'use client';

import React from 'react';

export default function SocialFeedPage() {
  const feed = [
    { user: 'StoicMind', action: 'highlighted a passage in', book: 'Meditations', time: '2 hours ago', quote: '"You have power over your mind - not outside events. Realize this, and you will find strength."' },
    { user: 'DuneReader', action: 'finished reading', book: 'Foundation', time: '4 hours ago', quote: null },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif text-[var(--foreground)] mb-2">The Agora</h1>
      <p className="text-[var(--muted)] mb-8">See what scholars around the globe are uncovering.</p>

      <div className="space-y-6">
        {feed.map((post, i) => (
          <div key={i} className="bg-[#1C1917] border border-[var(--border)] rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <p className="text-sm text-[var(--foreground)]">
                <strong className="text-[var(--primary)]">{post.user}</strong> {post.action} <em className="text-[var(--accent)]">{post.book}</em>
              </p>
              <span className="text-xs text-[var(--muted)]">{post.time}</span>
            </div>
            
            {post.quote && (
              <div className="border-l-4 border-[var(--primary)] pl-4 italic text-[var(--muted)] bg-[#0C0A09] p-3 rounded-r-md">
                {post.quote}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
