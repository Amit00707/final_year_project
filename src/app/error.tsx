'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service securely
    console.error('Midnight Scholar Architecture Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0C0A09] flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-[#1C1917] border border-red-900/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.1)] text-center relative overflow-hidden"
      >
        {/* Artistic background blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <h1 className="text-6xl font-mono text-red-500/80 mb-6 font-bold">500</h1>
        <h2 className="text-2xl font-serif text-[var(--foreground)] mb-3">System Fragmentation</h2>
        <p className="text-[var(--muted)] text-sm mb-8 leading-relaxed">
          The internal engine encountered an anomalous error reading the requested context variables.
        </p>
        
        <div className="bg-[#0C0A09] p-3 rounded text-left border border-[var(--border)] mb-8 overflow-hidden line-clamp-2">
          <code className="text-xs text-red-400 font-mono">
            {error.message || "Unknown Runtime Exception"}
          </code>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button variant="primary" onClick={() => reset()} className="w-full bg-red-900/40 text-red-100 hover:bg-red-800 border border-red-900/50">
            Recompile & Try Again
          </Button>
          <Button variant="ghost" onClick={() => window.location.href = '/dashboard'} className="w-full">
            Return to Dashboard
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
