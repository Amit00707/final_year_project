'use client';

import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-red-900/30">
        <div>
          <span className="text-xs text-red-500 font-bold uppercase tracking-wider block mb-1">Root Clearance</span>
          <h1 className="text-3xl font-serif text-[var(--foreground)]">System Administration</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-[#1C1917] border border-[var(--border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[var(--foreground)] mb-4">Platform Health</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted)]">API Latency</span>
              <span className="text-green-500 font-mono">42ms</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted)]">LLM Token Usage</span>
              <span className="text-amber-500 font-mono">1.2M / 10M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[var(--muted)]">Active Workers</span>
              <span className="text-[var(--foreground)] font-mono">14</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1917] border border-[var(--border)] rounded-xl p-6 md:col-span-2">
          <h2 className="text-lg font-bold text-[var(--foreground)] mb-4">Total Registered Users</h2>
          <div className="h-32 w-full flex items-end gap-2 border-b border-[var(--border)] pb-2">
            {[30, 45, 60, 50, 80, 95, 120].map((h, i) => (
              <div key={i} className="flex-1 bg-[var(--primary)]/50 rounded-t-sm hover:bg-[var(--primary)] transition-colors" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-[var(--muted)] mt-2">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>

      </div>
    </div>
  );
}
