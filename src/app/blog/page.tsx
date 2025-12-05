"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/zylera/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sparkles, ArrowRight, Search, Clock } from 'lucide-react';
import { blogArticles } from '@/lib/data/blog-articles';

const categories = [
  'All',
  'Libido Enhancement',
  'Mental Wellness',
  'Relationship Tips',
  'Sexual Health',
  'Health Science',
  'Nutrition',
  'Supplements',
  'Fitness',
  'Self-Care'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Wellness Resources & Guides
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert-backed insights to elevate your intimate wellness journey
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <Sparkles className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-lg text-muted-foreground">
                  Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="hover-lift overflow-hidden">
                    <div className="h-56 bg-gradient-purple relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-20 h-20 text-white/20" />
                      </div>
                      <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-serif line-clamp-2 mb-2">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <CardDescription className="line-clamp-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button
                        variant="link"
                        className="text-accent hover:text-primary p-0"
                        asChild
                      >
                        <Link href={`/blog/${article.slug}`}>
                          Read Full Article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Get Personalized Wellness Advice
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ask our AI assistant anything about intimacy, libido, or sexual wellness
            </p>
            <Button
              size="lg"
              className="bg-gradient-purple-gold text-white hover:opacity-90 font-semibold px-8"
              asChild
            >
              <Link href="/ai-assistant">
                Chat with Zylera AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
                <span className="text-2xl font-serif font-bold">Zylera</span>
              </div>
              <p className="text-white/80">
                Your trusted partner in intimate wellness and sexual health.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/ai-assistant" className="hover:text-accent">AI Assistant</Link></li>
                <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
                <li><Link href="/shop" className="hover:text-accent">Shop</Link></li>
                <li><Link href="/resources" className="hover:text-accent">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/resources" className="hover:text-accent">Libido Quiz</Link></li>
                <li><Link href="/resources" className="hover:text-accent">Intimacy Quiz</Link></li>
                <li><Link href="/resources" className="hover:text-accent">Stress Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Zylera. All rights reserved. Your wellness journey, our priority.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
