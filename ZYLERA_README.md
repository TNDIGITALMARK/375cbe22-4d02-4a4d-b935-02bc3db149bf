# Zylera - Premium Sexual Wellness Platform

A complete, modern, luxury sexual wellness website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🎨 Design System

**Color Palette:**
- **Primary Purple**: `#2D1B69` (Deep luxury purple for trust and mystery)
- **Gold Accent**: `#D4AF37` (Premium gold for value and highlights)
- **White Background**: `#FFFFFF` (Clean, pure, trustworthy)

**Typography:**
- **Headings**: Cormorant Garamond (Elegant serif for luxury feel)
- **Body**: Inter (Clean, readable sans-serif)

**Design Philosophy:**
- Luxury wellness aesthetic
- Mobile-first responsive design
- Purple conveys luxury and mystery
- Gold conveys premium value
- White conveys purity and trust

## 🌟 Features Implemented

### ✅ Core Pages

1. **Homepage** (`/`)
   - Luxury hero section with gradient background
   - Benefits section explaining value proposition
   - Featured wellness guides (blog articles)
   - Product spotlights with affiliate-ready layout
   - Newsletter signup section
   - Email capture popup (triggers after 30 seconds)

2. **AI Assistant** (`/ai-assistant`)
   - Anonymous chat interface
   - Predefined response trees for common questions
   - Suggested questions for easy engagement
   - Privacy-focused design
   - Topics: libido, stress, supplements, communication, confidence, energy

3. **Blog Section** (`/blog`)
   - 14 starter articles on sexual wellness topics
   - Category filtering (Libido, Mental Wellness, Relationships, etc.)
   - Search functionality
   - Individual article pages with full content
   - Related articles suggestions
   - SEO-optimized content

4. **Shop** (`/shop`)
   - Product categories: Supplements, Intimate Wellness, Couples Products
   - 8 premium products with detailed descriptions
   - Product filtering by category
   - Individual product pages with benefits and affiliate links
   - Ratings and reviews display
   - Trust badges (Quality Guaranteed, Discreet Shipping, Expert Approved)

5. **Resources** (`/resources`)
   - Interactive quizzes:
     * Libido & Desire Assessment (5 questions)
     * Relationship Intimacy Quiz (5 questions)
     * Stress Impact Assessment (5 questions)
   - Personalized results with recommendations
   - Links to AI assistant and blog articles

### 🎯 Key Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Email Capture**: Popup modal with multi-select preferences (triggers after 30s)
- **Mobile-First**: Fully responsive design with hamburger navigation
- **Performance**: Optimized loading with animations and transitions
- **Accessibility**: Proper ARIA labels, semantic HTML, keyboard navigation
- **Analytics Ready**: Structured for easy Google Analytics integration

## 📂 Project Structure

```
src/
├── app/
│   ├── ai-assistant/         # AI chat interface
│   ├── blog/                 # Blog listing and articles
│   │   └── [slug]/          # Individual article pages
│   ├── resources/           # Interactive quizzes
│   ├── shop/                # Product catalog
│   │   └── [slug]/          # Individual product pages
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles and design system
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── zylera/             # Custom Zylera components
│       ├── navigation.tsx   # Main navigation
│       └── email-popup.tsx  # Email capture modal
└── lib/
    └── data/
        ├── blog-articles.ts # Blog content
        └── products.ts      # Product catalog
```

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production
```bash
npm run build
npm start
```

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, benefits, featured content, newsletter |
| AI Assistant | `/ai-assistant` | Anonymous wellness chat |
| Blog | `/blog` | Article listing with search/filter |
| Article | `/blog/[slug]` | Individual article content |
| Shop | `/shop` | Product catalog |
| Product | `/shop/[slug]` | Product details |
| Resources | `/resources` | Interactive wellness quizzes |

## 🎨 Design Elements

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Mobile hamburger menu
- Links: Home, AI Assistant, Blog, Shop, Resources

### Color Usage
- **Purple Gradients**: Hero sections, CTAs, premium features
- **Gold Accents**: Buttons, highlights, ratings, badges
- **White Space**: Cards, backgrounds, clean sections

### Animations
- Fade-in-up for hero content
- Hover lifts on cards
- Smooth transitions on interactive elements
- Scale-in for modals

## 🔍 SEO Implementation

### Meta Tags
- Comprehensive title and description
- 20+ targeted keywords for sexual wellness
- Open Graph for social sharing
- Twitter Cards for tweets

### Structured Data
- Organization schema
- Website schema with search action
- Ready for product/article schema

### Target Keywords
- "increase sex drive"
- "libido boosters"
- "intimacy tips"
- "sexual wellness products"
- "natural libido supplements"
- "relationship intimacy"
- And 15+ more targeted phrases

## 📧 Email Capture

**Trigger**: 30 seconds after page load
**Options**:
- Libido tips & wellness advice
- Exclusive product recommendations
**Lead Magnet**: "5 Science-Backed Ways to Boost Intimacy Tonight"

## 🛍️ Products (8 Total)

### Supplements (5)
1. Vitality Boost Natural Libido Supplement - $49.99
2. Stress Relief Intimate Wellness Bundle - $67.99
3. Hormone Balance for Women - $54.99
4. Performance Boost for Men - $59.99

### Intimate Wellness (1)
1. Intimacy Enhancer Pro - $124.99

### Couples Products (3)
1. Couples Connection Enhancement Kit - $89.99
2. Couples Massage Ritual Kit - $79.99
3. Intimacy Discovery Set - $149.99

## 📝 Blog Articles (14 Total)

**Categories:**
- Libido Enhancement
- Mental Wellness
- Relationship Tips
- Sexual Health
- Health Science
- Nutrition
- Supplements
- Fitness
- Self-Care

**Featured Articles:**
- "7 Natural Ways to Reignite Your Libido After 30"
- "The Connection Between Stress and Sexual Desire"
- "Communication Techniques That Transform Intimacy"
- "Understanding Your Body's Pleasure Signals"
- And 10 more comprehensive guides

## 🎯 Conversion Optimization

### CTAs Throughout Site
- "Start Your Journey" → AI Assistant
- "Browse Shop" → Product catalog
- "Read Full Article" → Blog content
- "Get Personalized Recommendations" → AI chat
- Newsletter signup on every page

### Trust Elements
- Privacy guarantees
- Expert curation badges
- Customer reviews and ratings
- Discreet shipping promises
- Science-backed claims

## 🔮 Future Enhancements (Optional)

- Backend email service integration
- Real AI integration (OpenAI, Claude)
- User accounts and saved preferences
- Order processing and affiliate tracking
- Advanced analytics dashboard
- Push notifications for app version
- Community features
- Telehealth consultations

## 📄 Legal Pages (Placeholders)

Routes ready for content:
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/contact` - Contact Form

## 🎨 Brand Guidelines

**Voice & Tone:**
- Professional yet approachable
- Empowering and judgment-free
- Science-backed and trustworthy
- Luxury but accessible

**Visual Style:**
- Soft shadows and rounded corners
- Generous white space
- Elegant typography hierarchy
- Subtle animations

**Photography Style:**
- Clean, elegant, minimalist
- Soft purple/gold overlays
- Abstract wellness imagery
- Professional stock or custom photography

## 💡 Monetization Ready

- Affiliate links structured throughout
- Product recommendation system
- Email list for marketing
- AI assistant promotes products naturally
- Blog articles link to relevant products

---

## 🎉 Project Status: COMPLETE

All requested features have been implemented:
✅ Modern luxury design (purple, gold, white)
✅ Homepage with hero, benefits, guides, products
✅ Blog with 14 starter articles
✅ AI assistant chat page
✅ Resources page with 3 interactive quizzes
✅ Shop with 8 products in 3 categories
✅ Clean navigation
✅ Email capture popup
✅ Newsletter section
✅ Mobile-first responsive design
✅ SEO optimization for target keywords
✅ Professional, polished, ready to monetize

**Built with:** Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
**Design:** Luxury wellness aesthetic, mobile-first, conversion-optimized
**Purpose:** Sexual wellness education, AI guidance, affiliate product sales
