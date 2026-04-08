import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ali Mahmoud Portfolio",
    short_name: "Ali M.",
    description:
      "Front-End Developer specializing in React.js, Next.js, and modern JavaScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#020618",
    theme_color: "#020617",
    icons: [
      {
        src: "/profile.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
