# Ali Mahmoud | Portfolio

A modern, high-performance portfolio website built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion. Designed with a sleek dark theme and optimized for SEO with 95%+ Lighthouse scores.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Contact:** EmailJS
- **Deployment:** Vercel

## ✨ Features

- ⚡ Server Components for optimal performance
- 🎨 Dark theme with gradient accents
- 📱 Fully responsive design
- 🎬 Smooth scroll animations
- 📬 Contact form with EmailJS integration
- 🔍 SEO optimized (meta tags, OG, Twitter Cards, JSON-LD)
- 📊 Structured Data (Person, WebSite, ItemList)
- 🗺️ Auto-generated sitemap
- 🤖 robots.txt configuration
- 📱 PWA manifest support
- ♿ Semantic HTML & accessibility
- 🖼️ Optimized images with lazy loading

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout with metadata & structured data
│   ├── page.tsx             # Home page (Server Component)
│   ├── manifest.ts          # PWA manifest
│   └── sitemap.ts           # Auto-generated sitemap
├── components/portfolio/
│   ├── ClientShell.tsx      # Client wrapper with lazy loading
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── Experience.tsx        # Experience timeline
│   ├── ProjectsSection.tsx   # Projects grid
│   ├── ProjectCard.tsx       # Individual project card
│   ├── ProjectModal.tsx      # Project detail modal
│   ├── TechStack.tsx         # Technology stack display
│   ├── ContactForm.tsx       # Contact form with EmailJS
│   ├── Footer.tsx            # Footer
│   └── ScrollProgress.tsx    # Scroll progress bar
└── data/
    └── projectsData.ts       # Projects, social links & tech stack data
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AliMahmoudDev/Portofolio.git

# Navigate to project directory
cd Portofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🔍 SEO

This portfolio is optimized for search engines with:

- Semantic HTML with proper heading hierarchy (h1 → h2 → h3)
- Open Graph & Twitter Card meta tags
- JSON-LD structured data (Person, WebSite, ItemList)
- Auto-generated sitemap.xml
- robots.txt configuration
- Canonical URLs
- Google Search Console verification
- Optimized meta description & keywords
- Alt text for all images

## 📬 Contact

- **Email:** [123aliactionx5@gmail.com](mailto:123aliactionx5@gmail.com)
- **LinkedIn:** [Ali Mahmoud](https://www.linkedin.com/in/ali-mahmoud-34923b3a6)
- **GitHub:** [AliMahmoudDev](https://github.com/AliMahmoudDev)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
