"use client";

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    num: "01",
    title: "Understanding React Hooks",
    description:
      "A comprehensive guide to using React Hooks effectively in modern applications, with real-world examples and performance insights.",
    image: "/assets/tareas.JPG",
    link: "/blogs/blog1.js",
    tags: ["React", "Hooks", "Best Practices"],
  },
  {
    num: "02",
    title: "Next.js Performance Tips",
    description:
      "Tips and tricks to optimize your Next.js application for better performance, covering image handling, lazy loading, and more.",
    image: "/assets/blogs/next.jpg",
    link: "/blogs/nextjs-performance",
    tags: ["Next.js", "Optimization", "Core Web Vitals"],
  },
  {
    num: "03",
    title: "CSS Animations for Beginners",
    description:
      "Learn how to create stunning animations using CSS and keyframes to enhance user experience and interface fluidity.",
    image: "/assets/blogs/css.jpg",
    link: "/blogs/css-animations",
    tags: ["CSS", "Animations", "Frontend"],
  },
  {
    num: "04",
    title: "Understanding State Management",
    description:
      "A guide to state management tools like Redux, Context API, and Zustand to build scalable React applications.",
    image: "/assets/blogs/state.jpg",
    link: "/blogs/state-management",
    tags: ["React", "State", "Redux", "Zustand"],
  },
  {
    num: "05",
    title: "Building Accessible Websites",
    description:
      "Learn the best practices for making your websites more accessible to everyone, improving usability and inclusivity.",
    image: "/assets/blogs/a11y.jpg",
    link: "/blogs/accessible-websites",
    tags: ["Accessibility", "HTML", "ARIA", "Inclusivity"],
  },
];

const BlogPage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto px-6">
        <h3 className="h3 mb-4 text-accent text-center">Latest Blogs</h3>

        <p className="max-w-2xl mx-auto text-center text-white/70 mb-10">
          I write about software development concepts, frontend frameworks,
          performance techniques, and accessibility—all with a focus on
          delivering practical insights from real-world experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={index === 0}
                />
              </div>

              {/* Blog Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{blog.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {blog.description}
                </p>

                {/* Tags */}
                {blog.tags && (
                  <ul className="flex flex-wrap gap-2 mt-3 text-xs text-accent">
                    {blog.tags.map((tag, i) => (
                      <li key={i} className="bg-accent/10 px-2 py-1 rounded">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <Link href={blog.link} passHref>
                  <div className="mt-4 flex items-center gap-2 text-accent group cursor-pointer">
                    <span className="font-medium text-sm">Read More</span>
                    <BsArrowUpRight className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;