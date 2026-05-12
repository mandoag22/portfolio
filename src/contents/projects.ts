import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Property-Pulse App",
    description:
      "A full-stack property web application built with Next.js, React, Tailwind CSS, and Mongoose.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth.js",
    ],
    githubLink: "https://github.com/mandoag22/Property-Pulse",
    demoLink: "https://property-pulse-five-alpha.vercel.app/",

    image: "/projects/property-pulse.png",
  },
  {
    title: "Pro-Shop Ecommerce App",
    description: "A FullStack eCommerce app built with MERN stack and Redux.",
    technologies: ["React", "Node.js", "Mongoose", "MongoDB", "PayPal payment"],
    githubLink: "https://github.com/mandoag22/proshop",
    demoLink: "https://proshop-main-foit.onrender.com/",
    image: "/projects/pro-shop.png",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/mando-website.png",
  },
  {
    title: "Movie App Website",
    description: "A movie listing app that fetches movie data from tmdb API.",
    technologies: ["React", "CSS", "tmdb API"],
    githubLink: "https://github.com/mandoag22/Movie-app",
    demoLink: "https://movie-mando.netlify.app/",
    image: "/projects/movie-app.png",
  },
  {
    title: "Restaurant Website",
    description: "A Restaurant website displaying a variety of dishes.",
    technologies: ["React", "Tailwind Css", "Framer Motion"],
    githubLink: "https://github.com/mandoag22/rafasBar",
    demoLink: "https://rafasbar.netlify.app/",
    image: "/projects/Restaurant-page.png",
  },
  {
    title: "Chat Application",
    description: "A FullStack chat application using WebSocket technology.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/mandoag22/chat-app-3",
    demoLink: "https://chat-app-3-mowq.onrender.com",
    image: "/projects/chatt-app.png",
  },
];
