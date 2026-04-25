'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <div className="w-full relative overflow-hidden">
      
      {/* Background Cinematic Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-700/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"></div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-900/20 text-amber-500 border border-amber-900/30 text-sm font-bold tracking-widest uppercase mb-6">
            The Digital Library Reimagined
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-100 mb-6 leading-tight">
            Read smarter, not harder.<br />
            <span className="text-amber-500 italic">Understand everything.</span>
          </h1>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Midnight Scholar is an AI-powered reading sanctuary. We extract flashcards, generate dynamic quizzes, and answer context-aware questions from any PDF you upload.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <button className="h-14 px-8 text-lg w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg shadow-[0_0_20px_rgba(217,119,6,0.4)] transition-colors">
                Start Reading For Free
              </button>
            </Link>
            <Link href="/login">
              <button className="h-14 px-8 text-lg w-full sm:w-auto bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-lg border border-stone-700 transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="bg-stone-900/50 border-y border-stone-800 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="h-12 w-12 rounded-xl bg-amber-900/20 flex items-center justify-center text-2xl mb-6">🎯</div>
              <h3 className="text-xl font-serif text-stone-100 mb-3">Distraction Free</h3>
              <p className="text-stone-400 leading-relaxed">Engage Focus Mode to black out your screen and immerse yourself solely in the text of the PDF.</p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-xl bg-violet-900/20 flex items-center justify-center text-2xl mb-6">✨</div>
              <h3 className="text-xl font-serif text-stone-100 mb-3">AI Doubt Solver</h3>
              <p className="text-stone-400 leading-relaxed">Ask questions directly about the page you are on. The internal AI understands exactly what passage you are reading.</p>
            </div>
            <div>
              <div className="h-12 w-12 rounded-xl bg-amber-900/20 flex items-center justify-center text-2xl mb-6">🧠</div>
              <h3 className="text-xl font-serif text-stone-100 mb-3">Spaced Repetition</h3>
              <p className="text-stone-400 leading-relaxed">Flashcards are automatically extracted and fed to you over the week to guarantee 100% retention.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
