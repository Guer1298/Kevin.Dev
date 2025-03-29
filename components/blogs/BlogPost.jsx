"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * BlogPost Component
 * Componente principal para renderizar una entrada de blog técnico y profesional.
 * Optimizado para desarrolladores, diseñadores de producto, y líderes de tecnología.
 * Incorpora diseño accesible, jerarquía visual clara y estilo editorial elegante.
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
      {/* Cabecera */}
      <header className="mb-12 text-center xl:text-left">
        <h1
          id="blog-title"
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-accent leading-tight mb-3"
        >
          {title}
        </h1>
        <p className="text-sm text-white/60">{date}</p>

        {tags.length > 0 && (
          <ul
            className="flex flex-wrap gap-2 justify-center xl:justify-start mt-4"
            aria-label="Etiquetas del artículo"
          >
            {tags.map((tag, i) => (
              <li
                key={i}
                className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded-full uppercase tracking-wide"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Imagen destacada */}
      {image && (
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-lg">
          <Image
            src={image}
            alt={`Imagen de portada para el artículo: ${title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Contenido principal */}
      <section
        className="prose prose-invert max-w-none text-white/90
        prose-p:leading-relaxed prose-p:mb-5
        prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-accent
        prose-h3:mt-8 prose-h3:text-white
        prose-ul:pl-5 prose-li:marker:text-accent
        prose-code:bg-black/20 prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono
        prose-pre:bg-zinc-900 prose-pre:text-sm prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:p-4"
      >
        {children}
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center border-t border-white/10 pt-10">
        <Link
          href="/blog"
          className="text-accent underline text-sm font-semibold hover:text-white transition-colors"
        >
          ← Volver al blog
        </Link>
      </footer>
    </motion.article>
  );
};

export default BlogPost;
