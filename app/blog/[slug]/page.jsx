"use client";

import React from "react";
import dynamic from "next/dynamic";
import BlogPost from "@/components/blogs/BlogPost";

import { blogs } from "../data";

/**
 * Página dinámica para mostrar el detalle de un blog profesional.
 * Importa y renderiza el contenido individual basado en el slug.
 */
const BlogDetail = ({ params }) => {
  const { slug } = params;

  const post = blogs.find((b) => b.slug === slug);

  

  // Importa dinámicamente el contenido del blog desde /blogs/[slug].jsx
  const ContentComponent = dynamic(() => import(`../../blogs/${slug}`), {
    loading: () => (
      <p className="text-white/70 text-sm italic">Cargando contenido…</p>
    ),
    ssr: false,
  });

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      image={post.image}
      tags={post.tags}
    >
      <ContentComponent />
    </BlogPost>
  );
};

export default BlogDetail;
