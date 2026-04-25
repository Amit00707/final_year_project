'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [interests, setInterests] = useState<string[]>([]);
  const [goal, setGoal] = useState<string>('');

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  
  const finishOnboarding = () => {
    console.log('Sending Wizard to API:', { interests, goal });
    window.location.href = '/dashboard';
  };

  const toggleInterest = (topic: string) => {
    setInterests(prev => prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]);
  };

  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Progress Tracker */}
        <div className="mb-8 flex items-center justify-between px-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step >= num ? 'bg-[var(--primary)] text-[#0C0A09]' : 'bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]'}`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`mx-4 h-1 w-24 sm:w-48 rounded-full ${step > num ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Wizard Steps */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: INTERESTS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-serif text-[var(--primary)] text-center mb-2">What calls to you?</h2>
                <p className="text-center text-[var(--muted)] mb-8">Select your intellectual pursuits. AI will curate your library accordingly.</p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {['Philosophy', 'Computer Science', 'Classics', 'History', 'Physics', 'Poetry', 'Economics', 'Art'].map(topic => (
                    <button
                      key={topic}
                      onClick={() => toggleInterest(topic)}
                      className={`px-6 py-3 rounded-full border transition-all ${interests.includes(topic) ? 'bg-amber-900/30 border-[var(--primary)] text-[var(--primary)]' : 'border-[var(--border)] text-[var(--foreground)] hover:border-[var(--muted)]'}`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: GOALS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-serif text-[var(--primary)] text-center mb-2">Set Your Core Pace</h2>
                <p className="text-center text-[var(--muted)] mb-8">Consistency beats intensity. AI Coach will track this goal.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'casual', title: 'Casual Reader', desc: '15 mins / day' },
                    { id: 'scholar', title: 'The Scholar', desc: '45 mins / day' },
                    { id: 'obsessive', title: 'Deep Work', desc: '2 hours / day' }
                  ].map(g => (
                    <div
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      className={`cursor-pointer p-6 rounded-xl border text-center transition-all ${goal === g.id ? 'bg-[var(--surface-hover)] border-[var(--primary)]' : 'border-[var(--border)] hover:border-[var(--muted)]'}`}
                    >
                      <h3 className="font-bold text-[var(--foreground)]">{g.title}</h3>
                      <p className="text-sm text-[var(--muted)] mt-2">{g.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: INITIAL BOOK */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-serif text-[var(--primary)] text-center mb-2">Your First Book</h2>
                <p className="text-center text-[var(--muted)] mb-8">AI has initialized your workspace. Pick a starting point.</p>
                
                <div className="flex justify-center gap-6">
                  {/* Simulated Book Covers */}
                  {[1, 2].map((id) => (
                    <div key={id} className="w-32 h-48 bg-[#292524] rounded-md border border-[var(--border)] flex items-center justify-center cursor-pointer hover:border-[var(--primary)] transition-all">
                      <span className="text-[var(--muted)] text-sm px-2 text-center">Book {id} Cover</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-between pt-4 border-t border-[var(--border)]">
            <Button variant="ghost" onClick={prevStep} disabled={step === 1}>
              Back
            </Button>
            {step < 3 ? (
              <Button variant="primary" onClick={nextStep} disabled={(step === 1 && interests.length === 0) || (step === 2 && !goal)}>
                Continue
              </Button>
            ) : (
              <Button variant="primary" onClick={finishOnboarding}>
                Enter Library
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
