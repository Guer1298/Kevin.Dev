"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const projects = [
  {
    title: "Portafolio Personal",
    description:
      "Diseño limpio, navegación suave y enfoque UX-first para contar quién soy.",
  },
  {
    title: "Dashboard Analítico",
    description:
      "UI intuitiva y visualización de datos para toma de decisiones inteligentes.",
  },
  {
    title: "Tienda eCommerce Minimal",
    description:
      "Experiencia de compra fluida, diseño responsive y gestión de productos eficiente.",
  },
];

const Projects = () => {
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
            Proyectos Destacados
          </h2>
          <p className="text-white/50 mt-4 text-base">
            Una muestra de ideas convertidas en productos funcionales y elegantes.
          </p>

          {/* Frase impactante */}
          <motion.p
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            No diseño por estética, diseño para transformar. Cada línea de código, cada elección de color y cada microinteracción cuentan una historia: la de un usuario que no solo ve, sino que <span className="text-accent font-semibold">siente</span> lo que construimos.
          </motion.p>
        </motion.div>

        {/* Proyectos */}
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
