export interface Project {
  id: string;
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
    id: "shifa",
    title: "Shifa - Smart Medical Diagnosis",
    description:
      "HealthTech Platform using AI for symptom analysis and preliminary diagnosis with full Arabic RTL support. Built with a focus on accessibility and user experience for Arabic-speaking users.",
    image: "/projects/shifa.png",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "AI Integration", "REST API"],
    liveUrl: "https://shifa-five.vercel.app/",
    githubUrl: "https://github.com/AliMahmoudDev/Shifa",
    featured: true,
    challenge:
      "Building an AI-powered medical platform with full Arabic RTL support while maintaining a clean, accessible UI that works across all devices.",
    solution:
      "Implemented a modular component architecture with RTL-first design principles, integrated AI APIs for symptom analysis, and used responsive design patterns that adapt seamlessly between LTR and RTL layouts.",
    lessons:
      "Learned the importance of building RTL-aware components from the ground up, and how AI integration can significantly enhance user experience in healthcare applications.",
  },
  {
    id: "ecommerce",
    title: "React E-Commerce",
    description:
      "Full-featured e-commerce application built with React.js featuring product filtering, shopping cart, and responsive design. Includes product search, category filtering, and a streamlined checkout flow.",
    image: "/projects/ecommerce.png",
    technologies: ["JavaScript", "React.js", "CSS3", "Context API"],
    liveUrl: "https://react-ecommerce-delta-teal.vercel.app/",
    githubUrl: "https://github.com/AliMahmoudDev/React-E-Commerce",
    featured: true,
    challenge:
      "Creating a performant e-commerce app with complex state management for cart, filters, and search without using external state management libraries.",
    solution:
      "Used React Context API with useReducer for centralized state management, implemented virtual scrolling for product lists, and optimized rendering with React.memo and useMemo.",
    lessons:
      "Mastered advanced React patterns including compound components, render props, and performance optimization techniques for large product catalogs.",
  },
  {
    id: "quran-reels",
    title: "Quran Reels Generator",
    description:
      "Automated Python tool to create high-quality Islamic short videos with smart randomization for social media. Generates engaging Quran content with beautiful typography and backgrounds.",
    image: "/projects/quran-reels.png",
    technologies: ["Python", "MoviePy", "PIL/Pillow", "Automation"],
    liveUrl: "https://huggingface.co/spaces/Ali112008/Quran-Reels-Generator",
    githubUrl: "https://github.com/AliMahmoudDev/Quran-Reels-Generator",
    featured: false,
    challenge:
      "Automating video creation with dynamic text overlays, background selection, and audio synchronization while maintaining high output quality.",
    solution:
      "Built a pipeline using MoviePy for video composition, Pillow for text rendering with Arabic font support, and implemented smart randomization algorithms for content variety.",
    lessons:
      "Gained deep experience with Python media processing libraries, video composition techniques, and the importance of automation in content creation workflows.",
  },
  {
    id: "movies-app",
    title: "React Movies App",
    description:
      "Dynamic movies discovery application with TMDB API integration, search functionality, ratings display, and responsive design. Features trending movies, genre filtering, and detailed movie information.",
    image: "/projects/movies.png",
    technologies: ["JavaScript", "React.js", "CSS3", "TMDB API"],
    liveUrl: "https://react-movies-app-lilac.vercel.app/",
    githubUrl: "https://github.com/AliMahmoudDev/React-Movies-App",
    featured: false,
    challenge:
      "Integrating a third-party API with efficient data fetching, caching, and error handling while providing a smooth browsing experience.",
    solution:
      "Implemented custom hooks for API calls with built-in caching and error states, used intersection observer for infinite scrolling, and optimized images with lazy loading.",
    lessons:
      "Learned best practices for API integration in React, including error boundaries, loading states, and data normalization techniques.",
  },
];

export const socialLinks = {
  github: "https://github.com/AliMahmoudDev",
  linkedin: "https://www.linkedin.com/in/ali-mahmoud-34923b3a6",
  facebook: "https://www.facebook.com/share/18JK2Mv2c3/",
  instagram: "https://www.instagram.com/ali_mahmmoud_2",
  email: "123aliactionx5@gmail.com",
};

export const techStack = {
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  ],
};
