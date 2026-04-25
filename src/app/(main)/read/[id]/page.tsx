'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SidebarTabs } from '@/components/reader/sidebar/SidebarTabs';

export default function CoreReaderPage({ params }: { params: { id: string } }) {
  const [focusMode, setFocusMode] = useState(false);

  return (
    <div className="flex h-[calc(100vh-64px)] w-full overflow-hidden bg-[var(--background)]">
      
      {/* 5th Missing Feature: FOCUS MODE OVERLAY */}
      <AnimatePresence>
        {focusMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-all"
          />
        )}
      </AnimatePresence>

      <div className="relative z-50 flex h-full w-full">
        {/* Main PDF Rendering Plane */}
        <div className="flex-1 relative flex flex-col items-center justify-center bg-[#0C0A09] p-4 transition-all duration-500">
          
          {/* Top Control Bar */}
          <div className={`absolute top-4 left-6 z-50 flex items-center gap-4 transition-opacity ${focusMode ? 'opacity-10' : 'opacity-100'}`}>
            <h1 className="font-serif text-xl font-bold text-[var(--foreground)]">Book ID: {params.id}</h1>
          </div>
          <div className="absolute top-4 right-6 z-50">
            <button
              onClick={() => setFocusMode(!focusMode)}
              className={`px-4 py-2 rounded-full border text-sm font-bold transition-all shadow-xl
                ${focusMode 
                  ? 'bg-amber-600 border-amber-500 text-[#0C0A09]' 
                  : 'bg-[var(--surface)] border-[var(--border)] text-[var(--primary)] hover:bg-[#292524]'}`}
            >
              {focusMode ? '◎ Focus Active' : '◉ Focus Mode'}
            </button>
          </div>

          {/* Simulated PDF.js Web Worker Canvas Wrapper */}
          <div className={`relative w-full max-w-4xl flex-1 bg-[#1C1917] border rounded-lg shadow-2xl transition-all duration-700 mt-12
            ${focusMode ? 'border-amber-900/50 scale-100 shadow-amber-900/20' : 'border-[var(--border)] scale-95'}`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <p className="text-[var(--muted)]">[ PDF.js Web Worker Canvas Mounting Target ]</p>
                <p className="font-serif text-3xl text-[var(--foreground)] mt-8 leading-relaxed max-w-2xl mx-auto">
                  "The rapid expansion of the Republic severely strained the ancestral systems of governance. The Senate found itself managing not a city-state, but an empire spanning the Mediterranean."
                </p>
              </div>
            </div>
            
            {/* Cinematic Distraction-Free Highlighting Wrapper */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0C0A09] px-6 py-2 rounded-full border border-[var(--border)] opacity-50 hover:opacity-100 transition-opacity flex gap-4">
              <button className="text-[var(--muted)] hover:text-white">Page 14</button>
              <button className="text-[var(--muted)] hover:text-white">Bookmarks</button>
            </div>
          </div>
        </div>

        {/* Dynamic AI Sidebar Wrapper */}
        <motion.div 
          animate={{ width: focusMode ? 0 : 400, opacity: focusMode ? 0 : 1 }}
          className="h-full border-l border-[var(--border)] overflow-hidden bg-[var(--surface)] z-10"
        >
          <div className="w-[400px] h-full">
            <SidebarTabs />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
