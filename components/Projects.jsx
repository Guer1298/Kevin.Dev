"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const projects = [
  {
    title: "Portafolio Personal",
    description:
      "Diseño limpio, animaciones sutiles y estructura UX-first para reflejar mi identidad profesional. Cada sección está pensada como un pitch interactivo.",
  },
  {
    title: "Dashboard Analítico",
    description:
      "Plataforma modular con autenticación, filtros dinámicos y gráficos de impacto. Ideal para visualizar KPIs y transformar datos en decisiones.",
  },
  {
    title: "Tienda eCommerce Minimal",
    description:
      "Arquitectura optimizada para conversión: navegación fluida, lógica de carrito eficiente y sistema de gestión de productos escalable.",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Encabezado */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Proyectos Destacados
          </h2>
          <p className="text-white/50 mt-4 text-base">
            Una selección de soluciones reales donde combiné diseño, código y estrategia.
          </p>

          <motion.p
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            <span className="text-accent font-medium">Cada proyecto resuelve un problema.</span> No construyo por construir: investigo, estructuro, prototipo y ejecuto con precisión. Lo estético nace del propósito, y el propósito, del usuario.
          </motion.p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition duration-300 group"
            >
              <h3 className="text-xl font-semibold text-accent group-hover:underline">
                {project.title}
              </h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
