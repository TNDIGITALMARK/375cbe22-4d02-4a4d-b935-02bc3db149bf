"use client";

import React, { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already closed or submitted
    const dismissed = localStorage.getItem('zylera-popup-dismissed');
    const submitted = localStorage.getItem('zylera-email-submitted');

    if (dismissed || submitted) {
      return;
    }

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('zylera-popup-dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send to your email service
      console.log('Email submitted:', email);
      setHasSubmitted(true);
      localStorage.setItem('zylera-email-submitted', 'true');

      // Close popup after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-purple-xl overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-primary" />
        </button>

        {/* Gradient Background */}
        <div className="h-32 bg-gradient-purple-gold relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Gift className="w-16 h-16 text-white/30" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {!hasSubmitted ? (
            <>
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h2 className="text-3xl font-serif font-bold text-primary mb-2">
                  Get Your Free Intimacy Guide
                </h2>
                <p className="text-muted-foreground">
                  5 Science-Backed Ways to Boost Intimacy Tonight
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="popup-email" className="sr-only">
                    Email address
                  </Label>
                  <Input
                    id="popup-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-lg py-6"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      defaultChecked
                    />
                    <span>Send me libido tips & wellness advice</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      defaultChecked
                    />
                    <span>Exclusive product recommendations</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-purple-gold text-white hover:opacity-90 font-bold text-lg py-6"
                >
                  Get My Free Guide
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground mb-4">
                Check your email for your free intimacy guide.
              </p>
              <p className="text-sm text-muted-foreground">
                This window will close automatically...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
