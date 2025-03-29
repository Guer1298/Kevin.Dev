import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

/**
 * BlogCard - Componente visual para representar una entrada del blog.
 * Refleja tanto el contenido técnico como la identidad profesional del autor.
 */
const BlogCard = ({ blog, index }) => {
  return (
    <article
      className="relative group rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02]"
      aria-labelledby={`blog-title-${index}`}
    >
      {/* Imagen destacada */}
      <div className="relative w-full h-60">
        <Image
          src={blog.image}
          alt={`Imagen del artículo: ${blog.title}`}
          fill
          quality={90}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover rounded-xl"
          priority={index === 0}
        />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/90 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3
          id={`blog-title-${index}`}
          className="font-bold text-lg leading-snug"
        >
          {blog.title}
        </h3>

        <p className="text-sm mt-2 text-white/80 line-clamp-3">
          {blog.description}
        </p>

        {/* Etiquetas */}
        <ul className="flex flex-wrap gap-2 mt-3 text-xs text-accent">
          {blog.tags.map((tag, i) => (
            <li
              key={i}
              className="bg-accent/10 px-2 py-1 rounded whitespace-nowrap"
            >
              #{tag}
            </li>
          ))}
        </ul>

        {/* Botón de navegación */}
        <Link href={blog.link} passHref>
          <div
            className="mt-4 flex items-center gap-2 text-accent hover:underline"
            role="link"
            aria-label={`Leer más sobre ${blog.title}`}
          >
            <span className="font-medium text-sm">Leer más</span>
            <BsArrowUpRight className="text-xl" />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
