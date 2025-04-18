"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Product Store App",
    description:
      "Full-stack web app for managing products, featuring secure CRUD operations, user authentication, and responsive design.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    highlights: ["Auth system", "REST API", "Admin dashboard"],
    image: "/assets/projects/thumb1.png",
    live: "https://product-store-app-tkmt.onrender.com/",
    // github: "https://github.com/solarluiso/product-store-app",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Mood Mapper",
    description:
      "An interactive mood tracking tool that leverages Firebase for real-time updates, helping users reflect on emotional patterns over time.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Firebase" }],
    highlights: ["Realtime sync", "Progress visualization", "Mobile-first"],
    image: "/assets/projects/thumb2.png",
    live: "https://mood-mapper.netlify.app/",
    // github: "https://github.com/solarluiso/mood-tracker",
  },
  {
    num: "03",
    category: "frontend",
    title: "E-commerce Store",
    description:
      "A responsive e-commerce store with product browsing, favorite marking, and modern UI built for performance.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    highlights: ["Wishlist", "Performance optimized", "Clean UI"],
    image: "/assets/projects/thumb3.png",
    live: "https://ecommerce-ten-alpha-35.vercel.app/",
    // github: "https://github.com/solarluiso/ecommerce",
  },
  {
    num: "04",
    category: "frontend",
    title: "Focus",
    description:
      "A sleek productivity app that uses animations and timers to help users focus during deep work sessions.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer-Motion" },
    ],
    highlights: ["Pomodoro timer", "Smooth UX", "Dark mode"],
    image: "/assets/projects/thumb4.png",
    live: "https://focus-inky.vercel.app/",
    // github: "https://github.com/solarluiso/focus",
  },
  {
    num: "05",
    category: "frontend",
    title: "Fit Physique",
    description:
      "A fitness-focused platform to track workouts and monitor progress over time, built with TypeScript and responsive UI.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    highlights: ["Workout logging", "TypeScript", "Mobile optimized"],
    image: "/assets/projects/thumb5.png",
    live: "https://fitphysique-pi.vercel.app/",
    // github: "https://github.com/solarluiso/fitphysique",
  },
  {
    num: "06",
    category: "frontend",
    title: "Modern Bank App",
    description:
      "An innovative banking interface with clean design and responsive layout, built for user experience.",
    stack: [{ name: "React.js" }, { name: "TailwindCSS" }, { name: "Vite" }],
    highlights: ["Banking UI", "Dark theme", "Minimalist design"],
    image: "/assets/projects/thumb6.png",
    live: "https://modern-bank-app-ebon-omega.vercel.app/",
    // github: "https://github.com/solarluiso/modern-bank-app",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-4 text-accent text-center">My Projects</h3>

        <p className="max-w-2xl mx-auto text-center text-white/70 mb-8">
          These projects reflect my experience building scalable, user-centric
          applications across the full stack. I focus on clean code,
          performance, and intuitive UX to deliver impactful solutions.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          {["all", "fullstack", "frontend"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                filter === cat
                  ? "bg-accent text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="mt-2 text-xs text-white/60 list-disc list-inside">
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                    </div>
                  </Link>
                  {/* <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-xl group-hover:text-accent" />
                    </div>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;