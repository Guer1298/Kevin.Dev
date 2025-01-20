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
      "A comprehensive guide to using React Hooks effectively in modern applications.",
    image: "/assets/tareas.JPG",
    link: "/blogs/blog1.js",
  },
  {
    num: "02",
    title: "Next.js Performance Tips",
    description:
      "Tips and tricks to optimize your Next.js application for better performance.",
    image: "",
    link: "/blogs/nextjs-performance",
  },
  {
    num: "03",
    title: "CSS Animations for Beginners",
    description:
      "Learn how to create stunning animations using CSS and keyframes.",
    image: "",
    link: "/blogs/css-animations",
  },
  {
    num: "04",
    title: "Understanding State Management",
    description:
      "A guide to state management tools like Redux, Context API, and Zustand.",
    image: "",
    link: "/blogs/state-management",
  },
  {
    num: "05",
    title: "Building Accessible Websites",
    description:
      "Learn the best practices for making your websites more accessible to everyone.",
    image: "",
    link: "/blogs/accessible-websites",
  },
];

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <h3 className="h3 mb-10 text-center text-accent">Latest Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-sm mt-2 text-gray-600">
                  {blog.description}
                </p>
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