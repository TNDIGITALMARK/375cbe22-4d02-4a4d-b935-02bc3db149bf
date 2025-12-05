"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/zylera/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Star, ArrowLeft, ExternalLink, Check, Shield, Truck } from 'lucide-react';
import { products } from '@/lib/data/products';

export default function ProductPage() {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            Product Not Found
          </h1>
          <Button asChild>
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Product Details */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link href="/shop">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Shop
              </Link>
            </Button>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div>
                <div className="h-[500px] bg-gradient-purple rounded-2xl relative overflow-hidden shadow-purple-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-40 h-40 text-white/20" />
                  </div>
                  <div className="absolute top-6 left-6 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase">
                    {product.category === 'supplements' && 'Premium Supplement'}
                    {product.category === 'toys' && 'Wellness Device'}
                    {product.category === 'couples' && 'Couples Kit'}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-accent text-accent'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <h1 className="text-4xl font-serif font-bold text-primary mb-4">
                  {product.name}
                </h1>

                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-primary">${product.price}</span>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full bg-gradient-purple-gold text-white hover:opacity-90 font-bold text-lg py-6 mb-6"
                  asChild
                >
                  <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                    Buy Now - ${product.price}
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Quality Guaranteed</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Discreet Shipping</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Expert Approved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-20">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Product Details
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description} This premium product has been carefully selected by our wellness
                  experts to ensure the highest quality standards and effectiveness.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Why Choose This Product?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All products in the Zylera collection undergo rigorous testing and quality control.
                  We only recommend items that meet our strict criteria for safety, efficacy, and customer
                  satisfaction. This product has received overwhelmingly positive feedback from our community.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  Usage & Recommendations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  For optimal results, follow the manufacturer's instructions carefully. If you have any
                  medical conditions or concerns, consult with a healthcare professional before use.
                  Our AI assistant is also available to answer questions and provide personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Card key={related.id} className="hover-lift overflow-hidden">
                  <div className="h-56 bg-gradient-gold relative">
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold">{related.rating}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="w-20 h-20 text-white/20" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif line-clamp-2">
                      {related.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">${related.price}</span>
                    </div>
                    <Button className="w-full bg-gradient-purple text-white hover:opacity-90" asChild>
                      <Link href={`/shop/${related.slug}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Have Questions About This Product?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our AI assistant can provide personalized guidance and answer your questions
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-bold px-8"
              asChild
            >
              <Link href="/ai-assistant">Ask Zylera AI</Link>
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
