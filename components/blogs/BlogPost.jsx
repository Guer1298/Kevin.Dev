"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * BlogPost - Componente principal para renderizar una entrada de blog técnico
 * Ideal para artículos centrados en desarrollo, liderazgo o UX
 */
const BlogPost = ({ title, date, tags = [], image, children }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-4 py-16 text-white"
      role="article"
      aria-labelledby="blog-title"
    >
      {/* Cabecera del artículo */}
      <header className="mb-10">
        <h1
          id="blog-title"
          className="text-4xl font-extrabold leading-tight tracking-tight text-accent mb-2"
        >
          {title}
        </h1>
        <p className="text-sm text-white/60">{date}</p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-3" aria-label="Etiquetas del artículo">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded-md uppercase tracking-wide"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Imagen principal */}
      {image && (
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-10 shadow-xl border border-white/10">
          <Image
            src={image}
            alt={`Imagen de portada: ${title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Contenido del blog */}
      <section
        className="prose prose-invert max-w-none text-white/90
          prose-p:leading-relaxed prose-p:mb-4
          prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-accent
          prose-ul:pl-5 prose-li:marker:text-accent
          prose-code:bg-zinc-900 prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono"
      >
        {children}
      </section>

      {/* Pie de página */}
      <footer className="mt-20 text-center border-t border-white/10 pt-8">
        <Link
          href="/blog"
          className="text-accent underline text-sm font-medium hover:text-white transition-colors"
        >
          ← Volver al blog
        </Link>
      </footer>
    </motion.article>
  );
};

export default BlogPost;
