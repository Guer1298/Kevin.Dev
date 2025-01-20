"use client";

import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import BlogPage from "./page";


const blogs = [
  {
    slug: "productivity-tips",
    title: "Maximizing Productivity",
    content: `
      Here is the full blog content for Maximizing Productivity. 
      This article provides tips on how to manage your time, focus better, and achieve your goals more effectively.
    `,
    date: "January 20, 2025",
    author: "John Doe",
    image: "/assets/blogs/productivity.jpg",
  },
  {
    slug: "web-development-trends",
    title: "Web Development Trends 2025",
    content: `
      The latest web development trends include advancements in AI-driven UI, serverless architectures, and the growing importance of Web3 technologies.
    `,
    date: "January 10, 2025",
    author: "Jane Smith",
    image: "/assets/blogs/webdev.jpg",
  },
  // Add more blogs as needed
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog by its slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">404 - Blog Not Found</h1>
        <Link href="/blog">
          <button className="mt-4 px-6 py-2 bg-accent text-white rounded-lg">
            Go Back to Blogs
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 object-cover rounded-lg shadow-lg"
        />

        {/* Blog Title */}
        <h1 className="text-3xl md:text-5xl font-bold mt-6">{blog.title}</h1>

        {/* Meta Information */}
        <p className="text-sm text-gray-500 mt-2">
          By {blog.author} | {blog.date}
        </p>

        {/* Blog Content */}
        <div className="mt-8 text-lg text-gray-700 leading-relaxed">
          {blog.content}
        </div>

        {/* Back Button */}
        <Link href="/blog">
          <button className="mt-8 px-6 py-2 bg-accent text-white rounded-lg">
            Back to Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
