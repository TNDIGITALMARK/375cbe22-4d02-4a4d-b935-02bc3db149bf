"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/zylera/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { blogArticles } from '@/lib/data/blog-articles';

export default function BlogArticlePage() {
  const params = useParams();
  const article = blogArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">
            Article Not Found
          </h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Category Badge */}
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {article.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="h-96 bg-gradient-purple rounded-2xl mb-12 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-white/20" />
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              <h2>Understanding the Science</h2>
              <p>
                Sexual wellness is deeply connected to overall health, encompassing physical, mental, and emotional well-being.
                Research shows that maintaining a healthy intimate life contributes significantly to relationship satisfaction,
                stress management, and overall quality of life.
              </p>

              <h3>Key Factors to Consider</h3>
              <ul>
                <li><strong>Hormonal Balance:</strong> Understanding how hormones affect desire and arousal</li>
                <li><strong>Stress Management:</strong> Recognizing the impact of chronic stress on intimacy</li>
                <li><strong>Communication:</strong> Building open dialogue with your partner</li>
                <li><strong>Physical Health:</strong> The role of exercise and nutrition in sexual wellness</li>
                <li><strong>Mental Well-being:</strong> Addressing anxiety and confidence concerns</li>
              </ul>

              <h2>Practical Strategies</h2>
              <p>
                Implementing evidence-based wellness practices can lead to significant improvements in intimate satisfaction.
                Here are scientifically-supported approaches that have shown positive results in clinical studies:
              </p>

              <h3>1. Prioritize Quality Sleep</h3>
              <p>
                Research indicates that adequate sleep is crucial for hormonal balance and libido. Aim for 7-9 hours of
                quality sleep per night to support optimal sexual health.
              </p>

              <h3>2. Regular Physical Activity</h3>
              <p>
                Exercise improves blood flow, boosts confidence, and releases endorphins that enhance mood and desire.
                Focus on cardiovascular exercise and strength training for best results.
              </p>

              <h3>3. Stress Reduction Techniques</h3>
              <p>
                Chronic stress elevates cortisol levels, which can suppress sex hormones. Incorporate mindfulness,
                meditation, or yoga into your daily routine to manage stress effectively.
              </p>

              <h3>4. Nutrition for Intimacy</h3>
              <p>
                Certain nutrients support sexual health, including zinc, omega-3 fatty acids, and antioxidants.
                A balanced diet rich in fruits, vegetables, lean proteins, and healthy fats provides essential support.
              </p>

              <h2>Taking Action</h2>
              <p>
                Remember that sexual wellness is a journey, not a destination. Small, consistent changes in lifestyle habits
                can lead to meaningful improvements over time. Consider working with healthcare professionals who specialize
                in sexual health for personalized guidance.
              </p>

              <blockquote>
                "Intimate wellness is not just about physical pleasure—it's about nurturing connection, confidence,
                and overall well-being in every aspect of life."
              </blockquote>

              <h2>Next Steps</h2>
              <p>
                If you're ready to take charge of your intimate wellness, consider exploring our curated product recommendations,
                speaking with our AI assistant for personalized guidance, or taking one of our wellness quizzes to better
                understand your unique needs.
              </p>
            </div>

            {/* CTA Box */}
            <div className="mt-16 p-8 bg-gradient-purple-gold rounded-2xl text-white">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Get Personalized Wellness Guidance
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Our AI assistant can provide tailored advice based on your specific concerns and goals
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                <Link href="/ai-assistant">Chat with Zylera AI</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Card key={related.id} className="hover-lift">
                    <div className="h-48 bg-gradient-purple rounded-t-lg relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-16 h-16 text-white/20" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="text-sm text-accent font-semibold mb-2">
                        {related.category}
                      </div>
                      <CardTitle className="text-lg font-serif line-clamp-2">
                        {related.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="link" className="text-accent hover:text-primary p-0" asChild>
                        <Link href={`/blog/${related.slug}`}>Read Article</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
