"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/zylera/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Sparkles, Heart, Brain, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; points: number }[];
}

const libidoQuiz: QuizQuestion[] = [
  {
    id: '1',
    question: 'How often do you think about intimate activities?',
    options: [
      { value: 'a', label: 'Multiple times daily', points: 3 },
      { value: 'b', label: 'A few times per week', points: 2 },
      { value: 'c', label: 'Rarely or never', points: 1 },
    ],
  },
  {
    id: '2',
    question: 'How would you rate your current energy levels?',
    options: [
      { value: 'a', label: 'High and consistent', points: 3 },
      { value: 'b', label: 'Moderate but fluctuating', points: 2 },
      { value: 'c', label: 'Low and often tired', points: 1 },
    ],
  },
  {
    id: '3',
    question: 'How satisfied are you with your intimate life?',
    options: [
      { value: 'a', label: 'Very satisfied', points: 3 },
      { value: 'b', label: 'Somewhat satisfied', points: 2 },
      { value: 'c', label: 'Dissatisfied', points: 1 },
    ],
  },
  {
    id: '4',
    question: 'Do you experience stress that affects your desire?',
    options: [
      { value: 'a', label: 'Rarely or never', points: 3 },
      { value: 'b', label: 'Sometimes', points: 2 },
      { value: 'c', label: 'Frequently', points: 1 },
    ],
  },
  {
    id: '5',
    question: 'How confident do you feel about your intimate wellness?',
    options: [
      { value: 'a', label: 'Very confident', points: 3 },
      { value: 'b', label: 'Moderately confident', points: 2 },
      { value: 'c', label: 'Not confident', points: 1 },
    ],
  },
];

const intimacyQuiz: QuizQuestion[] = [
  {
    id: '1',
    question: 'How often do you and your partner have meaningful conversations?',
    options: [
      { value: 'a', label: 'Daily', points: 3 },
      { value: 'b', label: 'A few times per week', points: 2 },
      { value: 'c', label: 'Rarely', points: 1 },
    ],
  },
  {
    id: '2',
    question: 'How comfortable are you discussing intimate topics with your partner?',
    options: [
      { value: 'a', label: 'Very comfortable', points: 3 },
      { value: 'b', label: 'Somewhat comfortable', points: 2 },
      { value: 'c', label: 'Uncomfortable', points: 1 },
    ],
  },
  {
    id: '3',
    question: 'How satisfied are you with the emotional connection in your relationship?',
    options: [
      { value: 'a', label: 'Very satisfied', points: 3 },
      { value: 'b', label: 'Somewhat satisfied', points: 2 },
      { value: 'c', label: 'Dissatisfied', points: 1 },
    ],
  },
  {
    id: '4',
    question: 'Do you prioritize quality time together?',
    options: [
      { value: 'a', label: 'Yes, regularly', points: 3 },
      { value: 'b', label: 'Sometimes', points: 2 },
      { value: 'c', label: 'Rarely', points: 1 },
    ],
  },
  {
    id: '5',
    question: 'How well do you understand your partner\'s needs?',
    options: [
      { value: 'a', label: 'Very well', points: 3 },
      { value: 'b', label: 'Somewhat well', points: 2 },
      { value: 'c', label: 'Not well', points: 1 },
    ],
  },
];

const stressQuiz: QuizQuestion[] = [
  {
    id: '1',
    question: 'How often do you feel overwhelmed or anxious?',
    options: [
      { value: 'a', label: 'Rarely', points: 3 },
      { value: 'b', label: 'Sometimes', points: 2 },
      { value: 'c', label: 'Frequently', points: 1 },
    ],
  },
  {
    id: '2',
    question: 'How would you rate your sleep quality?',
    options: [
      { value: 'a', label: 'Excellent', points: 3 },
      { value: 'b', label: 'Fair', points: 2 },
      { value: 'c', label: 'Poor', points: 1 },
    ],
  },
  {
    id: '3',
    question: 'Do you practice regular stress-management techniques?',
    options: [
      { value: 'a', label: 'Yes, daily', points: 3 },
      { value: 'b', label: 'Occasionally', points: 2 },
      { value: 'c', label: 'No', points: 1 },
    ],
  },
  {
    id: '4',
    question: 'How does stress affect your intimate life?',
    options: [
      { value: 'a', label: 'Minimal impact', points: 3 },
      { value: 'b', label: 'Some impact', points: 2 },
      { value: 'c', label: 'Significant impact', points: 1 },
    ],
  },
  {
    id: '5',
    question: 'How well do you balance work and personal life?',
    options: [
      { value: 'a', label: 'Very well', points: 3 },
      { value: 'b', label: 'Somewhat well', points: 2 },
      { value: 'c', label: 'Poorly', points: 1 },
    ],
  },
];

function Quiz({ title, questions, icon: Icon, resultColor }: { title: string; questions: QuizQuestion[]; icon: any; resultColor: string }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let total = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find((opt) => opt.value === answer);
        if (option) total += option.points;
      }
    });
    return total;
  };

  const getResult = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) {
      return {
        level: 'Excellent',
        message: 'You\'re doing great! Your wellness is in a strong position. Keep up the good practices.',
        recommendations: [
          'Continue your current wellness routine',
          'Explore our blog for advanced tips',
          'Consider our premium products for enhancement',
        ],
      };
    } else if (percentage >= 60) {
      return {
        level: 'Good',
        message: 'You\'re on the right track with room for improvement. Small changes can lead to significant benefits.',
        recommendations: [
          'Try our AI assistant for personalized guidance',
          'Read our articles on wellness optimization',
          'Consider supplements to support your journey',
        ],
      };
    } else {
      return {
        level: 'Needs Attention',
        message: 'There\'s significant opportunity for improvement. Don\'t worry - you\'re in the right place for support.',
        recommendations: [
          'Chat with our AI assistant for personalized advice',
          'Read our foundational wellness articles',
          'Explore our starter product bundles',
          'Consider consulting with a healthcare professional',
        ],
      };
    }
  };

  const score = calculateScore();
  const maxScore = questions.length * 3;
  const result = getResult(score, maxScore);

  return (
    <Card className="shadow-purple-lg">
      <CardHeader>
        <div className="w-16 h-16 rounded-full bg-gradient-purple-gold mx-auto mb-4 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-serif text-center">{title}</CardTitle>
        <CardDescription className="text-center">
          Answer these questions to get personalized insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <div className="space-y-8">
            {questions.map((question, index) => (
              <div key={question.id}>
                <p className="font-medium text-primary mb-4">
                  {index + 1}. {question.question}
                </p>
                <RadioGroup
                  value={answers[question.id] || ''}
                  onValueChange={(value) =>
                    setAnswers((prev) => ({ ...prev, [question.id]: value }))
                  }
                >
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                      <Label htmlFor={`${question.id}-${option.value}`} className="cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center p-6 bg-muted rounded-lg">
              <h3 className={`text-3xl font-serif font-bold mb-2`} style={{ color: resultColor }}>
                {result.level}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl font-bold">{score}</span>
                <span className="text-muted-foreground">/ {maxScore} points</span>
              </div>
              <p className="text-muted-foreground">{result.message}</p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-3">Your Personalized Recommendations:</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!showResult ? (
          <Button
            className="w-full bg-gradient-purple-gold text-white hover:opacity-90"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== questions.length}
          >
            Get Your Results
          </Button>
        ) : (
          <div className="w-full space-y-3">
            <Button
              className="w-full bg-gradient-purple text-white hover:opacity-90"
              onClick={() => {
                setAnswers({});
                setShowResult(false);
              }}
            >
              Retake Quiz
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/ai-assistant">Chat with AI Assistant</Link>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ResourcesPage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  const quizzes = [
    {
      id: 'libido',
      title: 'Libido & Desire Assessment',
      description: 'Understand your current libido levels and get personalized recommendations for enhancement',
      icon: Heart,
      color: 'hsl(var(--accent))',
      questions: libidoQuiz,
    },
    {
      id: 'intimacy',
      title: 'Relationship Intimacy Quiz',
      description: 'Evaluate the emotional and physical connection in your relationship',
      icon: Sparkles,
      color: 'hsl(var(--primary))',
      questions: intimacyQuiz,
    },
    {
      id: 'stress',
      title: 'Stress Impact Assessment',
      description: 'Discover how stress affects your intimate wellness and learn management strategies',
      icon: Brain,
      color: 'hsl(var(--accent))',
      questions: stressQuiz,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Activity className="w-20 h-20 mx-auto mb-6 text-accent" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Wellness Resources & Quizzes
            </h1>
            <p className="text-xl text-white/90">
              Discover personalized insights with our interactive wellness assessments
            </p>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {!activeQuiz ? (
            <>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  Choose Your Assessment
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select a quiz below to get started with your personalized wellness journey
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {quizzes.map((quiz) => {
                  const Icon = quiz.icon;
                  return (
                    <Card key={quiz.id} className="hover-lift">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-gradient-purple-gold mx-auto mb-4 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-serif text-center">
                          {quiz.title}
                        </CardTitle>
                        <CardDescription className="text-center">
                          {quiz.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button
                          className="w-full bg-gradient-purple text-white hover:opacity-90"
                          onClick={() => setActiveQuiz(quiz.id)}
                        >
                          Start Assessment
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="max-w-3xl mx-auto mb-8">
                <Button variant="ghost" onClick={() => setActiveQuiz(null)}>
                  ← Back to All Quizzes
                </Button>
              </div>
              <div className="max-w-3xl mx-auto">
                {quizzes.map(
                  (quiz) =>
                    activeQuiz === quiz.id && (
                      <Quiz
                        key={quiz.id}
                        title={quiz.title}
                        questions={quiz.questions}
                        icon={quiz.icon}
                        resultColor={quiz.color}
                      />
                    )
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
              More Wellness Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Expert Blog Articles</CardTitle>
                  <CardDescription>
                    Read science-backed insights on libido, intimacy, and wellness
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/blog">Explore Blog</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">AI Wellness Assistant</CardTitle>
                  <CardDescription>
                    Get personalized advice and answers to your wellness questions
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/ai-assistant">Chat Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
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
                <li><Link href="/shop" className="hover:text-accent">Shop</Link></li>
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
