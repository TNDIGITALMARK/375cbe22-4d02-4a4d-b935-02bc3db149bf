"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/zylera/navigation';
import { EmailPopup } from '@/components/zylera/email-popup';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Heart, Brain, Shield, Star, ArrowRight, Mail } from 'lucide-react';
import { blogArticles } from '@/lib/data/blog-articles';
import { products } from '@/lib/data/products';

export default function HomePage() {
  const featuredArticles = blogArticles.slice(0, 3);
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EmailPopup />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-black-red"></div>

        {/* Red Glow Effect */}
        <div className="absolute inset-0 bg-gradient-red-glow opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Transform Your Intimate Life with Science-Backed Wellness Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Elevate Your Intimate Wellness Journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 glow-red"
                asChild
              >
                <Link href="/ai-assistant">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-card hover:bg-card/80 text-foreground border-2 border-border font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link href="/blog">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose Zylera?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in intimate wellness, combining expert guidance with premium solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Guidance',
                description: 'Get personalized advice from our anonymous AI assistant, available 24/7 for your questions.'
              },
              {
                icon: Shield,
                title: 'Complete Privacy',
                description: 'Your wellness journey is confidential. Ask questions freely without judgment or embarrassment.'
              },
              {
                icon: Sparkles,
                title: 'Science-Backed',
                description: 'All recommendations based on clinical research and expert-approved wellness practices.'
              },
              {
                icon: Heart,
                title: 'Curated Products',
                description: 'Premium selection of tested products to enhance your intimate wellness naturally.'
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-border hover:border-accent transition-all hover:shadow-dark-lg bg-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Featured Wellness Guides
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert insights for your intimate wellness journey
              </p>
            </div>
            <Button variant="ghost" className="text-accent hover:text-accent/80" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover-lift overflow-hidden bg-card border-border">
                <div className="h-48 bg-gradient-black relative border-b border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-accent/30" />
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-accent font-semibold mb-2">{article.category}</div>
                  <CardTitle className="text-xl font-serif line-clamp-2 text-foreground">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="text-accent hover:text-accent/80 p-0" asChild>
                    <Link href={`/blog/${article.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spotlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Premium Product Selection
              </h2>
              <p className="text-xl text-muted-foreground">
                Carefully curated wellness products to enhance your intimate life
              </p>
            </div>
            <Button variant="ghost" className="text-accent hover:text-accent/80" asChild>
              <Link href="/shop">
                Browse Shop
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover-lift overflow-hidden bg-card border-border">
                <div className="h-56 bg-gradient-red relative">
                  <div className="absolute top-4 right-4 bg-card rounded-full px-3 py-1 shadow-md border border-border">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-20 h-20 text-white/20" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-serif line-clamp-2 text-foreground">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">${product.price}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-foreground glow-red" asChild>
                    <Link href={`/shop/${product.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-black-red text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-red-glow opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get Your Free Intimacy Guide
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              5 Science-Backed Ways to Boost Intimacy Tonight
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-bold px-8 glow-red">
                Subscribe
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Libido Tips</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Relationship Advice</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span>Product Updates</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/generated/zylera-logo.png"
                  alt="Zylera"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-muted-foreground">
                Your trusted partner in intimate wellness and sexual health.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/ai-assistant" className="hover:text-accent transition-colors">AI Assistant</Link></li>
                <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                <li><Link href="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
                <li><Link href="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/resources" className="hover:text-accent transition-colors">Libido Quiz</Link></li>
                <li><Link href="/resources" className="hover:text-accent transition-colors">Intimacy Quiz</Link></li>
                <li><Link href="/resources" className="hover:text-accent transition-colors">Stress Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Zylera. All rights reserved. Your wellness journey, our priority.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
