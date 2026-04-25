'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function VerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp.join(''));
    window.location.href = '/onboarding';
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl text-center"
      >
        <h2 className="text-2xl font-serif text-[var(--primary)] mb-4">Verify Your Identity</h2>
        <p className="text-sm text-[var(--muted)] mb-8">
          We sent a 6-digit verification code to your email. Enter it below to unlock the library.
        </p>

        <form onSubmit={handleVerify}>
          <div className="flex justify-center gap-2 mb-8">
            {otp.map((data, index) => {
              return (
                <input
                  className="w-12 h-14 text-center rounded-lg border border-[var(--border)] bg-[#0C0A09] text-xl font-bold text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none"
                  type="text"
                  name="otp"
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
          </div>

          <Button type="submit" variant="primary" className="w-full mb-4">
            Verify Email
          </Button>
        </form>

        <p className="text-sm text-[var(--muted)]">
          Didn't receive the code?{' '}
          <button className="font-medium text-[var(--primary)] hover:text-amber-500 transition-colors">
            Resend Code
          </button>
        </p>
      </motion.div>
    </div>
  );
}
