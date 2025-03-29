"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const blogPosts = [
  {
    title: "✨ Diseñar desde la empatía: UX más allá del layout",
    summary:
      "El diseño emocional no se mide en píxeles, sino en cómo el usuario se siente al usar lo que creas. Aquí exploro cómo conectar desde lo humano, no solo desde lo visual.",
    date: "Marzo 2025",
  },
  {
    title: "✍️ El valor del microcopy en la experiencia digital",
    summary:
      "Los detalles textuales no son ornamento: son decisiones estratégicas que guían, alivian dudas y refuerzan la voz del producto. Cada palabra importa.",
    date: "Febrero 2025",
  },
  {
    title: "🔍 Minimalismo funcional: Menos no es vacío",
    summary:
      "Reflexión técnica y de producto sobre cómo simplificar sin perder intención, propósito ni contexto. Un manifiesto para diseñar desde la esencia.",
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
          <p className="text-white/50 mt-4 text-base max-w-2xl mx-auto">
            Compartir conocimiento es parte del liderazgo técnico. Estas publicaciones reflejan mi visión sobre diseño consciente, contenido estratégico y experiencias digitales con propósito.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition duration-300 group flex flex-col justify-between"
            >
              <div>
                <p className="text-sm text-white/40 uppercase mb-2 tracking-wider">
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold text-accent group-hover:underline leading-snug">
                  {post.title}
                </h3>
                <p className="text-white/70 mt-3 text-sm leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <p className="mt-6 text-sm text-accent font-medium group-hover:underline cursor-pointer self-start">
                Leer artículo →
              </p>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-white/30 italic mt-20 text-sm">
          Porque compartir lo que aprendes también es parte de construir.
        </p>
      </div>
    </section>
  );
};

export default BlogSection;

