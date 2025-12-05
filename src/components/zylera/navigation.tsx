"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ai-assistant', label: 'AI Assistant' },
  { href: '/blog', label: 'Blog' },
  { href: '/shop', label: 'Shop' },
  { href: '/resources', label: 'Resources' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-dark border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-red flex items-center justify-center glow-red">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-foreground group-hover:text-gradient transition-all">
              Zylera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-foreground font-semibold glow-red">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in bg-card/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-accent hover:bg-accent/90 text-foreground font-semibold w-full glow-red">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
