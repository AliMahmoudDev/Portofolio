import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Mahmoud | Front-End React.js Developer",
  description: "Front-End Developer specializing in React.js, JavaScript ES6+, and modern web technologies. Building high-performance, user-centric web applications with 95%+ Lighthouse scores.",
  keywords: ["Front-End Developer", "React.js", "JavaScript", "TypeScript", "Portfolio", "Web Developer", "UI/UX", "Egypt"],
  authors: [{ name: "Ali Mahmoud" }],
  icons: {
    icon: "/profile.png",
  },
  openGraph: {
    title: "Ali Mahmoud | Front-End React.js Developer",
    description: "Front-End Developer specializing in React.js and modern JavaScript",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Mahmoud | Front-End React.js Developer",
    description: "Front-End Developer specializing in React.js and modern JavaScript",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
