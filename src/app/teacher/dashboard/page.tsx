'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export default function TeacherDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-[var(--border)]">
        <div>
          <span className="text-xs text-[var(--accent)] font-bold uppercase tracking-wider block mb-1">Educator Space</span>
          <h1 className="text-3xl font-serif text-[var(--foreground)]">Classroom Oversight</h1>
        </div>
        <Button variant="primary">Create New Assignment</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Active Assignments */}
        <div className="bg-[#1C1917] border border-[var(--border)] rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-serif text-[var(--foreground)] mb-4">Active Quizzes</h2>
          <div className="space-y-4">
            <div className="p-4 bg-[#0C0A09] border border-[var(--border)] rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[var(--primary)]">Roman Republic History 101</span>
                <span className="text-xs text-[var(--muted)]">Due Tomorrow</span>
              </div>
              <div className="w-full bg-[#1C1917] rounded-full h-1.5 border border-[var(--border)]">
                <div className="bg-emerald-500 h-1.5 rounded-full w-[85%]"></div>
              </div>
              <p className="text-xs text-[var(--muted)] mt-2">24/28 Students Completed</p>
            </div>
          </div>
        </div>

        {/* AI Student Analysis */}
        <div className="bg-[#2E224F]/20 border border-[#7C3AED]/30 rounded-xl p-6 shadow-[0_0_15px_rgba(124,58,237,0.05)]">
          <h2 className="text-xl font-serif text-[var(--foreground)] mb-4 flex items-center gap-2">
            ✨ AI Class Analysis
          </h2>
          <p className="text-sm text-[var(--foreground)] leading-relaxed text-[#D8B4FE]">
            Based on recent Flashcard results from <strong>The Republic</strong>, your students are struggling heavily with <em>"Book VII: The Allegory of the Cave"</em>. 
            I recommend allocating 15 minutes of tomorrow's lecture specifically to defining "The Form of the Good".
          </p>
          <Button variant="secondary" className="mt-4 w-full border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-white">Generate Targeted Quiz</Button>
        </div>
      </div>
    </div>
  );
}
