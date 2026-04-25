'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif text-[var(--foreground)] mb-8">Preferences & Configurations</h1>
      
      <div className="space-y-8">
        
        {/* Reading Preferences */}
        <section className="bg-[#1C1917] border border-[var(--border)] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Reading Engine</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[var(--border)]">
              <div>
                <h3 className="font-medium text-[var(--foreground)]">Aggressive Flashcard Extraction</h3>
                <p className="text-sm text-[var(--muted)]">AI will passively pull hard concepts into your spaced repetition deck.</p>
              </div>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-[var(--foreground)]">Focus Mode Blackout Level</h3>
                <p className="text-sm text-[var(--muted)]">Adjust the darkness of the surrounding screen in Focus Mode.</p>
              </div>
              <select className="bg-[#0C0A09] border border-[var(--border)] rounded-md px-3 py-1 text-sm text-[var(--foreground)]">
                <option>Opacity 80%</option>
                <option>Opacity 95%</option>
                <option>Total Blackout (100%)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Account Security */}
        <section className="bg-[#1C1917] border border-[var(--border)] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Account Credentials</h2>
          <div className="flex flex-col gap-4">
            <Button variant="secondary" className="w-full sm:w-auto self-start">Change Password</Button>
            <Button variant="secondary" className="w-full sm:w-auto self-start border-red-900/50 text-red-500 hover:bg-red-900/20">Delete Account & Data</Button>
          </div>
        </section>

      </div>
    </div>
  );
}
