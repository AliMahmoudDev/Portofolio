export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  challenge?: string;
  solution?: string;
  lessons?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Shifa - منصة التشخيص الطبي الذكي",
    description: "منصة طبية ذكية متكاملة (HealthTech Platform) تستخدم الذكاء الاصطناعي لتحليل الأعراض وتقديم تشخيص مبدئي مع تحديد التخصص الطبي المناسب. تدعم العربية بالكامل (RTL) وتتميز بنظام Gamification لتحفيز المستخدمين على متابعة صحتهم.",
    image: "https://raw.githubusercontent.com/AliMahmoudDev/Shifa/main/public/homepage.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Prisma ORM", "PostgreSQL", "Google Gemini AI", "JWT Authentication"],
    liveUrl: "https://shifa-five.vercel.app/",
    githubUrl: "https://github.com/AliMahmoudDev/shifa",
    featured: true,
    challenge: "بناء منصة طبية ذكية تدمج الذكاء الاصطناعي مع واجهة مستخدم عربية سلسة كان تحدياً كبيراً. المشروع احتاج لتصميم نظام تحليل أعراض دقيق، معالجة JSON responses من AI models، ضمان RTL support كامل، وتوفير تجربة مستخدم احترافية مع Dark/Light mode.",
    solution: "استخدمت Next.js 16 مع TypeScript لبناء تطبيق متين، و Shadcn/ui مع Tailwind CSS لتصميم UI عصري. دمجت Google Gemini AI للتحليل الذكي مع نظام fallback للـ demo. صممت قاعدة بيانات Prisma مع PostgreSQL، ونظام JWT للمصادقة الآمنة. كل الـ components تدعم RTL بشكل كامل.",
    lessons: "تعلمت الكثير عن دمج AI models في التطبيقات العملية، أهمية error handling المتقدم مع APIs، وكيفية بناء scalable architecture. كمان اكتشفت أهمية TypeScript في المشاريع الكبيرة وكيف أن الـ type safety بيقلل bugs بشكل ملحوظ. المشروع علمني إن UX العربي محتاج اهتمام خاص.",
  },
  {
    id: 2,
    title: "React E-Commerce",
    description: "A full-featured e-commerce application built with React.js featuring product filtering, shopping cart functionality, and responsive design. Implements modern React patterns and state management for a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["React.js", "JavaScript ES6+", "CSS3", "REST APIs", "Context API", "React Hooks"],
    liveUrl: "https://react-ecommerce-delta-teal.vercel.app/",
    githubUrl: "https://github.com/AliMahmoudDev/React-Ecommerce",
    featured: true,
    challenge: "Building a complex e-commerce platform with real-time state management, dynamic filtering across multiple categories, and maintaining cart persistence across sessions was a significant challenge. The application needed to handle product variations, inventory tracking, and provide a smooth checkout flow.",
    solution: "I implemented Context API for global state management, creating separate contexts for cart, products, and user authentication. Used custom hooks for reusable logic like filtering and cart operations. The product filtering system uses debounced search and memoized results for optimal performance.",
    lessons: "This project taught me the importance of proper state architecture in React applications. I learned how to optimize re-renders using React.memo and useMemo, and gained experience in building scalable component hierarchies. The importance of user feedback through loading states and animations became clear.",
  },
  {
    id: 3,
    title: "Quran Reels Generator",
    description: "An automated Python-based tool to create high-quality Islamic short videos with safe background filters and smart randomization. Perfect for creating engaging Quranic content for social media platforms.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80",
    technologies: ["Python", "MoviePy", "PIL/Pillow", "Automation", "Video Processing", "FFmpeg"],
    liveUrl: "https://huggingface.co/spaces/Ali112009/Quran_Reels_Generator",
    githubUrl: "https://github.com/AliMahmoudDev/Quran-Reels-Generator",
    featured: true,
    challenge: "Creating an automated video generation system that produces aesthetically pleasing content while respecting the sacred nature of Quranic verses. The challenge was to implement smart background selection, proper text rendering with Arabic calligraphy fonts, and video composition that works across different social media platforms.",
    solution: "Built a modular pipeline using Python with MoviePy for video editing and PIL for image processing. Implemented a smart background filter system that selects appropriate nature/landscape images. Created custom text rendering with proper Arabic RTL support and aesthetic positioning. Added randomization algorithms for variety while maintaining visual consistency.",
    lessons: "Working on this project deepened my understanding of video processing pipelines and the importance of cultural sensitivity in design. I learned how to work with Arabic text rendering programmatically and gained experience in building automated content generation systems. The project showed me how automation can help content creators scale their work.",
  },
  {
    id: 4,
    title: "React Movies App",
    description: "A dynamic movies discovery application built with React.js that allows users to browse, search, and explore movies. Features a modern UI with movie details, ratings, and responsive design.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    technologies: ["React.js", "TMDB API", "JavaScript ES6+", "CSS3", "React Router", "Axios"],
    liveUrl: "https://react-movies-app-lilac.vercel.app/",
    githubUrl: "https://github.com/AliMahmoudDev/React-Movies-App",
    featured: true,
    challenge: "Integrating with a third-party API (TMDB) while handling rate limits, caching responses efficiently, and creating an engaging user interface that works seamlessly across all devices. The app needed to handle search functionality, pagination, and display rich media content.",
    solution: "Implemented a service layer with Axios for API calls, including request interceptors for error handling and response caching. Built reusable components for movie cards, search bars, and detail modals. Used React's useEffect and useState hooks for data fetching with proper cleanup. Added loading skeletons for better perceived performance.",
    lessons: "This project enhanced my API integration skills and taught me the importance of error boundaries in React applications. I learned about API rate limiting strategies, caching mechanisms, and how to build responsive layouts that adapt to different screen sizes. The importance of accessibility in web applications became a key focus.",
  },
];

export const techStack = {
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript ES6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  backend: [
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
};

export const socialLinks = {
  github: "https://github.com/AliMahmoudDev",
  linkedin: "https://www.linkedin.com/in/ali-mahmoud-34923b3a6",
  facebook: "https://www.facebook.com/share/18JK2Mv2c3/",
  instagram: "https://www.instagram.com/ali_mahmmoud_2",
  twitter: "https://twitter.com",
  email: "123aliactionx5@gmail.com",
  portfolio: "https://portofolio-psi-sooty.vercel.app",
};
