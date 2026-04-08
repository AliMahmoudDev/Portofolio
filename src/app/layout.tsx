import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://alimahmoud-dev.vercel.app";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ali Mahmoud | Front-End React Developer Portfolio - Egypt",
  description:
    "Ali Mahmoud is a Front-End Developer specializing in React.js, Next.js, JavaScript ES6+, and TypeScript. Building high-performance, user-centric web applications with 95%+ Lighthouse scores. Explore my projects and get in touch.",
  keywords: [
    "Ali Mahmoud",
    "Front-End Developer",
    "React.js Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Front-End Developer Egypt",
    "Web Developer",
    "UI/UX Developer",
    "Portfolio",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Frontend Developer",
    "MERN Stack",
    "Hire Front-End Developer",
  ],
  authors: [{ name: "Ali Mahmoud", url: "https://github.com/AliMahmoudDev" }],
  creator: "Ali Mahmoud",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/profile.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/profile.png",
  },
  openGraph: {
    title: "Ali Mahmoud | Front-End React Developer",
    description:
      "Front-End Developer specializing in React.js, Next.js, and modern JavaScript. Explore my projects and get in touch.",
    type: "website",
    url: SITE_URL,
    siteName: "Ali Mahmoud Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Mahmoud - Front-End React.js Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Mahmoud | Front-End React Developer",
    description:
      "Front-End Developer specializing in React.js, Next.js, and modern JavaScript.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "4UqoVDOYFw4CLoxhjSvD_fKSzglaJgKnhBUbJEYEHzU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>
        {/* Structured Data for Google - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ali Mahmoud",
              url: SITE_URL,
              image: `${SITE_URL}/og-image.png`,
              jobTitle: "Front-End React.js Developer",
              description:
                "Front-End Developer specializing in React.js, Next.js, JavaScript ES6+, and modern web technologies. Based in Egypt, building high-performance web applications.",
              sameAs: [
                "https://github.com/AliMahmoudDev",
                "https://www.linkedin.com/in/ali-mahmoud-34923b3a6",
                "https://www.facebook.com/share/18JK2Mv2c3/",
                "https://www.instagram.com/ali_mahmmoud_2",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Front-End Development",
                "Web Development",
                "UI/UX Design",
                "REST APIs",
              ],
              email: "123aliactionx5@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
              },
            }),
          }}
        />
        {/* Structured Data for Google - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Ali Mahmoud Portfolio",
              url: SITE_URL,
              description:
                "Front-End Developer Portfolio — React.js, Next.js, Tailwind CSS, TypeScript",
              author: {
                "@type": "Person",
                name: "Ali Mahmoud",
                url: "https://github.com/AliMahmoudDev",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Structured Data for Google - ItemList (Projects) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Ali Mahmoud Projects",
              description: "Featured web development projects by Ali Mahmoud",
              numberOfItems: 4,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "CreativeWork",
                    name: "Shifa - Smart Medical Diagnosis Platform",
                    description: "HealthTech Platform using AI for symptom analysis and preliminary diagnosis with full Arabic RTL support.",
                    url: "https://shifa-five.vercel.app/",
                    author: { "@type": "Person", name: "Ali Mahmoud" },
                    programmingLanguage: ["TypeScript", "Next.js", "Tailwind CSS"],
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "CreativeWork",
                    name: "React E-Commerce",
                    description: "Full-featured e-commerce application built with React.js featuring product filtering, shopping cart, and responsive design.",
                    url: "https://react-ecommerce-delta-teal.vercel.app/",
                    author: { "@type": "Person", name: "Ali Mahmoud" },
                    programmingLanguage: ["JavaScript", "React.js", "CSS3"],
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "CreativeWork",
                    name: "Quran Reels Generator",
                    description: "Automated Python tool to create high-quality Islamic short videos with smart randomization for social media.",
                    url: "https://huggingface.co/spaces/Ali112008/Quran-Reels-Generator",
                    author: { "@type": "Person", name: "Ali Mahmoud" },
                    programmingLanguage: ["Python", "MoviePy", "PIL/Pillow"],
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "CreativeWork",
                    name: "React Movies App",
                    description: "Dynamic movies discovery application with TMDB API integration, search, ratings, and responsive design.",
                    url: "https://react-movies-app-lilac.vercel.app/",
                    author: { "@type": "Person", name: "Ali Mahmoud" },
                    programmingLanguage: ["JavaScript", "React.js", "CSS3"],
                  },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
