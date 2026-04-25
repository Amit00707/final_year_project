'use client';

import React from 'react';

export default function GamificationPage() {
  const leaderboard = [
    { rank: 1, name: 'Socrates99', score: 14500, avatar: '🏛️' },
    { rank: 2, name: 'Amit Kumar', score: 12400, avatar: '🦉', isUser: true },
    { rank: 3, name: 'DuneReader', score: 9800, avatar: '🏜️' },
    { rank: 4, name: 'StoicMind', score: 8200, avatar: '🗿' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-[var(--foreground)] mb-2">Global Leaderboard</h1>
        <p className="text-[var(--muted)]">Rankings reset at the end of the month.</p>
      </div>

      <div className="bg-[#1C1917] border border-[var(--border)] rounded-2xl p-6 shadow-2xl">
        <div className="flex justify-between text-xs text-[var(--muted)] uppercase font-bold tracking-widest border-b border-[var(--border)] pb-4 mb-4 px-4">
          <span>Rank</span>
          <span>Scholar</span>
          <span>Wisdom Score</span>
        </div>
        
        <div className="space-y-2">
          {leaderboard.map((user) => (
            <div 
              key={user.rank} 
              className={`flex items-center justify-between p-4 rounded-xl border ${user.isUser ? 'bg-[var(--primary)] text-[#0C0A09] border-[var(--primary)]' : 'bg-[#0C0A09] border-[var(--border)] text-[var(--foreground)] hover:border-[var(--muted)]'}`}
            >
              <div className="w-8 font-mono font-bold">{user.rank}</div>
              <div className="flex-1 flex items-center gap-3">
                <span className="text-xl">{user.avatar}</span>
                <span className="font-bold">{user.name}</span>
                {user.rank === 1 && <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/50">Grandmaster</span>}
              </div>
              <div className="font-mono font-bold tracking-wider">{user.score.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center text-xs text-[var(--muted)] mt-8">
        Earn Wisdom Scores by passing Flashcards, reading consistently, and actively highlighting PDFs.
      </p>
    </div>
  );
}
