'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending Reset Link to:', email);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl text-center"
      >
        <h2 className="text-2xl font-serif text-[var(--primary)] mb-4">Reset Your Light</h2>
        
        {!submitted ? (
          <>
            <p className="text-sm text-[var(--muted)] mb-6">
              Enter your email address to receive a secure password reset link.
            </p>
            <form onSubmit={handleReset} className="space-y-4">
              <input
                type="email"
                required
                className="block w-full rounded-lg border border-[var(--border)] bg-[#0C0A09] px-4 py-3 text-[var(--foreground)] placeholder-[var(--muted)] focus:border-[var(--primary)] focus:outline-none"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="primary" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-sm text-[var(--muted)] mb-6 text-green-400">
              ✓ Reset instructions have been sent to your email securely.
            </p>
          </motion.div>
        )}
        
        <div className="mt-8">
          <Link href="/login" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
            ← Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
