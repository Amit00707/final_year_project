'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function QATab() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hello Scholar! What part of this chapter is confusing you?' }
  ]);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages([...messages, { role: 'user', text: query }]);
    setQuery('');

    // Simulate AI Latency
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: 'I am analyzing the current PDF page context...' }]);
    }, 800);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-serif text-[var(--accent)] font-bold flex items-center gap-2">
          ✨ Doubt Solver
        </h3>
        <p className="text-xs text-[var(--muted)] mt-1">Contextual AI Assistant</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-[85%] text-sm ${m.role === 'user' ? 'bg-[var(--primary)] text-[#0C0A09] rounded-br-none' : 'bg-[#2E224F] border border-[#523A97] text-white rounded-bl-none'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleAsk} className="flex flex-col gap-2 relative mt-auto border-t border-[var(--border)] pt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          className="w-full bg-[#0C0A09] border border-[var(--border)] rounded-full px-4 py-2 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
        />
        <div className="flex justify-between items-center px-1">
          <button type="button" className="text-amber-500 text-sm hover:text-amber-400">
            🎙️ Voice Query
          </button>
          <Button type="submit" variant="primary" size="sm" className="bg-[var(--accent)] text-white hover:bg-violet-500">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
