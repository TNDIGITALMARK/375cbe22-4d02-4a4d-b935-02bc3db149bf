import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ZyloProvider } from "@/lib/zylo/provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Modern serif font for headings - Classic elegance with modern twist
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Clean sans-serif for body text - Professional readability
const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Zylera | Elevate Your Intimate Wellness Journey - Sexual Health & Libido Enhancement",
  description: "Transform your intimate life with science-backed wellness solutions. Expert guidance, AI assistant, premium products, and confidential resources for sexual wellness, libido improvement, and relationship intimacy. Discover natural ways to increase sex drive, boost libido, and enhance intimate experiences.",
  keywords: [
    "sexual wellness",
    "libido boosters",
    "intimacy tips",
    "increase sex drive",
    "natural libido supplements",
    "relationship intimacy",
    "sexual health products",
    "wellness supplements",
    "intimate wellness",
    "sex drive improvement",
    "how to boost libido naturally",
    "sexual wellness products",
    "intimacy enhancement",
    "libido supplements for women",
    "libido supplements for men",
    "stress and sex drive",
    "improve sexual health",
    "relationship wellness",
    "sexual confidence",
    "intimate health"
  ],
  openGraph: {
    title: "Zylera - Premium Sexual Wellness & Libido Enhancement",
    description: "Science-backed solutions for intimate wellness, libido improvement, and sexual health. Anonymous AI guidance, expert articles, and curated products.",
    type: "website",
    siteName: "Zylera",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zylera - Elevate Your Intimate Wellness",
    description: "Science-backed sexual wellness solutions, AI guidance, and expert resources for libido enhancement and intimate health.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://zylera.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Zylera",
              "description": "Premium sexual wellness platform combining educational content, AI guidance, and curated products for intimate health and libido enhancement.",
              "url": "https://zylera.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://zylera.com/blog?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zylera",
              "description": "Sexual wellness and intimate health platform",
              "url": "https://zylera.com",
              "logo": "https://zylera.com/logo.png",
              "sameAs": [
                "https://twitter.com/zylera",
                "https://facebook.com/zylera",
                "https://instagram.com/zylera"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@zylera.com"
              }
            })
          }}
        />
      
        {}
      
        {}
      
        {/* PHOENIX_EDITOR_INJECTION_START */}
        {(process.env.NODE_ENV === 'development' ||
          process.env.NEXT_PUBLIC_ENABLE_PHOENIX_EDITOR === 'true') && (
          <>
            <link rel="stylesheet" href="/phoenix-editor/helper.css?v=1764895470899" />
            <script
              src="/phoenix-editor/sourceMapTracker.js?v=1764895470899"
              data-phoenix-sourcemap="true"
              defer
            />
            <script
              src="/phoenix-editor/helper.js?v=1764895470899"
              data-phoenix-enabled="true"
              defer
            />
            <script
              src="/phoenix-editor/visualEditExtension.js?v=1764895470899"
              data-phoenix-visual-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/contextIntegration.js?v=1764895470899"
              data-phoenix-context="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineTextEditor.js?v=1764895470899"
              data-phoenix-text-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineClassEditor.js?v=1764895470899"
              data-phoenix-class-edit="true"
              defer
            />
          </>
        )}
        {/* PHOENIX_EDITOR_INJECTION_END */}
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <QueryProvider>
          <ZyloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                {children}
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </ThemeProvider>
          </ZyloProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
