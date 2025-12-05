"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/zylera/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Star, Heart, Filter, ExternalLink } from 'lucide-react';
import { products } from '@/lib/data/products';

const categories = [
  { id: 'all', label: 'All Products', icon: Sparkles },
  { id: 'supplements', label: 'Supplements', icon: Heart },
  { id: 'toys', label: 'Intimate Wellness', icon: Sparkles },
  { id: 'couples', label: 'Couples Products', icon: Heart },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-gold">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Premium Wellness Collection
            </h1>
            <p className="text-xl text-primary/80 mb-6">
              Carefully curated products to enhance your intimate wellness journey
            </p>
            <div className="flex items-center justify-center gap-2 text-primary/70">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-semibold">All products tested & expert-approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-lg text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover-lift overflow-hidden flex flex-col">
                <div className="h-64 bg-gradient-purple relative">
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-24 h-24 text-white/20" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase">
                    {product.category === 'supplements' && 'Supplement'}
                    {product.category === 'toys' && 'Wellness Device'}
                    {product.category === 'couples' && 'Couples Kit'}
                  </div>
                </div>

                <CardHeader className="flex-1">
                  <CardTitle className="text-lg font-serif line-clamp-2 mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">${product.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <span>{product.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button
                    className="flex-1 bg-gradient-purple text-white hover:opacity-90"
                    asChild
                  >
                    <Link href={`/shop/${product.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-primary text-center mb-12">
            Why Shop With Zylera?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Expert Curated',
                description: 'Every product is carefully selected and tested by wellness professionals'
              },
              {
                title: 'Quality Guaranteed',
                description: 'Premium materials, clinical testing, and satisfaction guarantees on all products'
              },
              {
                title: 'Discreet Shipping',
                description: 'Private packaging and billing for your complete peace of mind'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-purple-gold mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Chat with our AI assistant for personalized product recommendations
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-8"
              asChild
            >
              <Link href="/ai-assistant">Get Personalized Recommendations</Link>
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
                <li><Link href="/" className="hover:text-accent">Home</Link></li>
                <li><Link href="/ai-assistant" className="hover:text-accent">AI Assistant</Link></li>
                <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
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
