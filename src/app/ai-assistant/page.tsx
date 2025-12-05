"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/zylera/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Send, Bot, User, Lock } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "How can I increase my sex drive naturally?",
  "What are the best supplements for libido?",
  "How does stress affect my intimate life?",
  "Tips for better communication with my partner",
  "Natural ways to boost energy for intimacy",
  "How can I improve my confidence in the bedroom?"
];

const responseTemplates: Record<string, string> = {
  "libido": "Increasing libido naturally involves several key factors:\n\n1. **Stress Management**: Chronic stress elevates cortisol, which can suppress sex hormones. Try mindfulness practices or meditation.\n\n2. **Quality Sleep**: Aim for 7-9 hours per night to support hormonal balance.\n\n3. **Regular Exercise**: Physical activity improves blood flow and boosts confidence.\n\n4. **Nutrition**: Foods rich in zinc, omega-3s, and antioxidants support sexual health.\n\n5. **Natural Supplements**: Consider options like maca root, ginseng, or our Vitality Boost supplement.\n\nWould you like specific product recommendations or more details on any of these approaches?",

  "stress": "Stress significantly impacts intimate wellness by:\n\n- **Hormonal Disruption**: Elevated cortisol suppresses testosterone and estrogen production\n- **Mental Distraction**: Makes it difficult to be present during intimate moments\n- **Physical Tension**: Can cause muscle tension affecting comfort\n- **Energy Depletion**: Leaves less energy for connection\n\n**Solutions:**\n- Practice daily stress-reduction techniques (meditation, yoga)\n- Prioritize quality sleep\n- Set boundaries with work and commitments\n- Consider our Stress Relief Wellness Bundle\n- Read our article: 'The Connection Between Stress and Sexual Desire'\n\nWould you like personalized stress management recommendations?",

  "supplements": "Evidence-based supplements for sexual wellness:\n\n**Top Recommendations:**\n1. **Maca Root**: Shown to enhance desire and energy\n2. **L-Arginine**: Supports blood flow\n3. **Tribulus Terrestris**: May boost testosterone naturally\n4. **Ginseng**: Improves stamina and arousal\n5. **Ashwagandha**: Reduces stress hormones\n\n**Our Products:**\n- Vitality Boost Natural Libido Supplement ($49.99) - Complete formula\n- Hormone Balance for Women ($54.99) - Specifically formulated\n- Performance Boost for Men ($59.99) - Enhanced stamina support\n\nAll our products use clinically-tested ingredients and come with a satisfaction guarantee. Would you like detailed information on any specific supplement?",

  "communication": "Improving intimate communication:\n\n**Key Techniques:**\n1. **Create Safe Space**: Choose relaxed, private moments for discussions\n2. **Use 'I' Statements**: Express feelings without blame\n3. **Active Listening**: Really hear your partner's concerns\n4. **Be Specific**: Describe what you want, not just what you don't\n5. **Practice Appreciation**: Start with what's working well\n\n**Example Phrases:**\n- \"I feel most connected when...\"\n- \"I'd love to explore...\"\n- \"It would help me if...\"\n\n**Resources:**\n- Read: 'Communication Techniques That Transform Intimacy'\n- Try: Our Couples Connection Enhancement Kit ($89.99)\n- Explore: Intimacy Quiz in our Resources section\n\nWhat specific communication challenge would you like to address?",

  "confidence": "Building sexual confidence:\n\n**Foundation Steps:**\n1. **Self-Care**: Regular exercise, nutrition, and sleep\n2. **Body Positivity**: Focus on what your body can do, not just appearance\n3. **Knowledge**: Understanding your body's responses\n4. **Communication**: Express your needs and desires\n5. **Mindfulness**: Stay present during intimate moments\n\n**Practical Actions:**\n- Start a self-care ritual\n- Explore solo pleasure to understand your body\n- Read body-positive wellness content\n- Practice positive self-talk\n- Consider therapy if deeper issues exist\n\n**Resources:**\n- Article: 'Self-Care Practices for Sexual Confidence'\n- Product: Intimacy Enhancer Pro ($124.99)\n- Quiz: Take our Libido & Confidence Assessment\n\nWhat aspect of confidence would you like to focus on first?",

  "energy": "Boosting energy for intimacy:\n\n**Immediate Actions:**\n1. **Timing**: Schedule intimacy when you're naturally energized\n2. **Quick Workout**: 15 minutes of cardio before increases blood flow\n3. **Hydration**: Proper hydration improves stamina\n4. **Light Snack**: Small protein snack 30 mins before\n\n**Long-term Solutions:**\n- Improve sleep quality (7-9 hours)\n- Regular cardiovascular exercise\n- Manage stress levels\n- Address nutritional deficiencies\n- Consider energy-supporting supplements\n\n**Our Products:**\n- Vitality Boost Supplement ($49.99) - Natural energy enhancement\n- Stress Relief Bundle ($67.99) - Addresses energy-draining stress\n\n**Related Reading:**\n- 'The Complete Nutrition Guide for Sexual Wellness'\n- 'Exercise Routines for Better Sex'\n\nWould you like a personalized energy-boosting plan?"
};

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Welcome to Zylera AI! I'm here to provide confidential, judgment-free guidance on intimate wellness, libido enhancement, and sexual health. Your questions are completely anonymous.\n\nHow can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('libido') || lowerMessage.includes('sex drive') || lowerMessage.includes('desire')) {
      return responseTemplates.libido;
    }
    if (lowerMessage.includes('stress')) {
      return responseTemplates.stress;
    }
    if (lowerMessage.includes('supplement') || lowerMessage.includes('vitamin')) {
      return responseTemplates.supplements;
    }
    if (lowerMessage.includes('communication') || lowerMessage.includes('talk') || lowerMessage.includes('partner')) {
      return responseTemplates.communication;
    }
    if (lowerMessage.includes('confidence') || lowerMessage.includes('insecure')) {
      return responseTemplates.confidence;
    }
    if (lowerMessage.includes('energy') || lowerMessage.includes('tired') || lowerMessage.includes('stamina')) {
      return responseTemplates.energy;
    }

    return `Thank you for your question about "${userMessage}". \n\nWhile I strive to provide helpful guidance, I recommend:\n\n1. **Explore Our Resources**: Check our blog for articles on this topic\n2. **Browse Products**: Visit our shop for science-backed solutions\n3. **Take a Quiz**: Our wellness quizzes can provide personalized insights\n4. **Consult a Professional**: For medical concerns, speak with a healthcare provider\n\n**Popular Topics:**\n- Libido enhancement and natural boosters\n- Stress management for better intimacy\n- Communication techniques for couples\n- Supplement recommendations\n- Energy and confidence building\n\nCould you rephrase your question or ask about one of these topics?`;
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(inputValue);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Zylera AI Assistant
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Anonymous, confidential guidance for your intimate wellness questions
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Completely private and judgment-free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Chat Messages */}
            <Card className="mb-6 shadow-purple-lg">
              <CardContent className="p-6">
                <div className="h-[500px] overflow-y-auto mb-6 space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-10 h-10 rounded-full bg-gradient-purple-gold flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl p-4 ${
                          message.role === 'user'
                            ? 'bg-accent text-primary'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
                        <span className="text-xs opacity-60 mt-2 block">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-4 justify-start">
                      <div className="w-10 h-10 rounded-full bg-gradient-purple-gold flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl p-4">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex gap-3">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Ask me anything about intimacy, libido, or sexual wellness..."
                    className="min-h-[60px] resize-none"
                  />
                  <Button
                    size="lg"
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-purple-gold text-white hover:opacity-90"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Questions */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Suggested Questions:
              </h3>
              <div className="flex flex-wrap gap-3">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleSuggestionClick(question)}
                    className="text-sm"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Privacy Notice */}
            <Card className="bg-muted/50 border-accent/20">
              <CardContent className="p-6 text-center">
                <Lock className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-semibold text-primary mb-2">
                  Your Privacy is Our Priority
                </h3>
                <p className="text-sm text-muted-foreground">
                  All conversations are anonymous and confidential. We don't store personal information.
                  For medical concerns, please consult a licensed healthcare professional.
                </p>
              </CardContent>
            </Card>
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
