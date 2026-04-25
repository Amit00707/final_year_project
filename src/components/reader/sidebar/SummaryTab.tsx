'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function SummaryTab() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI generation lag
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-serif text-[var(--accent)] font-bold flex items-center gap-2">
          ✨ Live Summary
        </h3>
        <p className="text-xs text-[var(--muted)] mt-1">Generated from current page</p>
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse mt-4">
          <div className="h-4 bg-[#292524] rounded w-3/4"></div>
          <div className="h-4 bg-[#292524] rounded w-full"></div>
          <div className="h-4 bg-[#292524] rounded w-full"></div>
          <div className="h-4 bg-[#292524] rounded w-5/6"></div>
          <div className="h-4 bg-[#292524] rounded w-1/2"></div>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-invert text-sm text-[var(--foreground)] mt-4">
          <p className="leading-relaxed">
            This chapter outlines the fundamental collapse of the senatorial structure. 
            The primary takeaway is that wealth inequality led directly to the destabilization of military loyalty.
          </p>
          <ul className="list-disc pl-4 mt-4 space-y-2 text-[var(--muted)]">
            <li>Marius reformed the army to accept landless citizens.</li>
            <li>Generals became private benefactors.</li>
            <li>The Senate lost monopolistic control over force.</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
