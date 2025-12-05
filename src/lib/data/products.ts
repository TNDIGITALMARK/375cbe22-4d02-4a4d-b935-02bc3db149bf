export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "supplements" | "toys" | "couples";
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  benefits: string[];
  affiliateLink: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "vitality-boost-natural-libido-supplement",
    name: "Vitality Boost Natural Libido Supplement",
    category: "supplements",
    price: 49.99,
    rating: 4.8,
    reviews: 342,
    image: "/images/products/vitality-boost.jpg",
    description: "Premium blend of natural ingredients scientifically formulated to enhance libido, energy, and overall sexual wellness.",
    benefits: [
      "Increases natural sex drive",
      "Boosts energy and stamina",
      "Supports hormonal balance",
      "100% natural ingredients",
      "Clinically tested formula"
    ],
    affiliateLink: "#"
  },
  {
    id: "2",
    slug: "couples-connection-enhancement-kit",
    name: "Couples Connection Enhancement Kit",
    category: "couples",
    price: 89.99,
    rating: 4.9,
    reviews: 218,
    image: "/images/products/couples-kit.jpg",
    description: "Complete intimacy kit designed to deepen emotional and physical connection between partners.",
    benefits: [
      "Strengthens emotional bonds",
      "Enhances physical intimacy",
      "Includes guided activities",
      "Premium quality materials",
      "Discreet packaging"
    ],
    affiliateLink: "#"
  },
  {
    id: "3",
    slug: "stress-relief-intimate-wellness-bundle",
    name: "Stress Relief Intimate Wellness Bundle",
    category: "supplements",
    price: 67.99,
    rating: 4.7,
    reviews: 156,
    image: "/images/products/stress-relief.jpg",
    description: "Comprehensive supplement bundle targeting stress reduction for improved intimate wellness.",
    benefits: [
      "Reduces stress hormones",
      "Promotes relaxation",
      "Improves sleep quality",
      "Supports libido naturally",
      "Adaptogens included"
    ],
    affiliateLink: "#"
  },
  {
    id: "4",
    slug: "intimacy-enhancer-pro",
    name: "Intimacy Enhancer Pro",
    category: "toys",
    price: 124.99,
    rating: 4.9,
    reviews: 487,
    image: "/images/products/enhancer-pro.jpg",
    description: "Premium intimate wellness device with multiple settings for personalized pleasure experiences.",
    benefits: [
      "10 intensity levels",
      "Waterproof design",
      "Whisper-quiet motor",
      "USB rechargeable",
      "Medical-grade materials"
    ],
    affiliateLink: "#"
  },
  {
    id: "5",
    slug: "hormone-balance-for-women",
    name: "Hormone Balance for Women",
    category: "supplements",
    price: 54.99,
    rating: 4.8,
    reviews: 298,
    image: "/images/products/hormone-balance.jpg",
    description: "Specially formulated to support women's hormonal balance and natural libido enhancement.",
    benefits: [
      "Balances hormones naturally",
      "Increases desire",
      "Reduces mood swings",
      "Supports energy levels",
      "Made for women"
    ],
    affiliateLink: "#"
  },
  {
    id: "6",
    slug: "couples-massage-ritual-kit",
    name: "Couples Massage Ritual Kit",
    category: "couples",
    price: 79.99,
    rating: 4.7,
    reviews: 167,
    image: "/images/products/massage-kit.jpg",
    description: "Luxury massage experience kit designed to enhance intimacy through therapeutic touch.",
    benefits: [
      "Aromatherapy oils included",
      "Guided massage techniques",
      "Promotes relaxation",
      "Builds connection",
      "Spa-quality products"
    ],
    affiliateLink: "#"
  },
  {
    id: "7",
    slug: "performance-boost-for-men",
    name: "Performance Boost for Men",
    category: "supplements",
    price: 59.99,
    rating: 4.6,
    reviews: 412,
    image: "/images/products/performance-boost.jpg",
    description: "Advanced formula designed to support men's sexual health, stamina, and confidence.",
    benefits: [
      "Enhances stamina",
      "Supports blood flow",
      "Boosts confidence",
      "Natural ingredients",
      "Fast-acting formula"
    ],
    affiliateLink: "#"
  },
  {
    id: "8",
    slug: "intimacy-discovery-set",
    name: "Intimacy Discovery Set",
    category: "couples",
    price: 149.99,
    rating: 4.9,
    reviews: 203,
    image: "/images/products/discovery-set.jpg",
    description: "Complete exploration kit for couples looking to discover new dimensions of pleasure together.",
    benefits: [
      "Variety of experiences",
      "Premium quality items",
      "Instruction guide included",
      "Storage case provided",
      "Perfect for exploration"
    ],
    affiliateLink: "#"
  },
];
