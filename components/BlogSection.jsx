"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const blogPosts = [
  {
    title: "Diseñar desde la empatía: UX más allá del layout",
    summary:
      "Exploro cómo diseñar experiencias que resuenen emocionalmente con los usuarios, más allá de lo visual.",
    date: "Marzo 2025",
  },
  {
    title: "El valor del microcopy en la experiencia digital",
    summary:
      "Cada palabra cuenta. Aquí comparto cómo los detalles textuales mejoran la conexión con el usuario.",
    date: "Febrero 2025",
  },
  {
    title: "Minimalismo funcional: Menos no es vacío",
    summary:
      "Reflexión sobre cómo simplificar sin perder intención ni utilidad en diseño y desarrollo.",
    date: "Enero 2025",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Últimos Artículos
          </h2>
          <p className="text-white/50 mt-4 text-base">
            Reflexiones, aprendizajes y desafíos que transforman código en experiencia.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition duration-300 group"
            >
              <p className="text-sm text-white/40 uppercase mb-2 tracking-wider">{post.date}</p>
              <h3 className="text-xl font-semibold text-accent group-hover:underline">
                {post.title}
              </h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">
                {post.summary}
              </p>
              <p className="mt-4 text-sm text-accent font-medium group-hover:underline cursor-pointer">
                Leer artículo →
              </p>
              <p className="text-center text-white/30 italic mt-16 text-sm">
                Porque compartir lo que aprendes también es parte de construir.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
