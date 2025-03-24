"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const workflowSteps = [
    {
      icon: "🧭",
      title: "Análisis de Requisitos",
      desc: "Colaboro con stakeholders para entender objetivos, usuarios, limitaciones y criterios de éxito.",
    },
    {
      icon: "🏗️",
      title: "Diseño de Arquitectura",
      desc: "Defino estructuras escalables y patrones sólidos: bases de datos, APIs, componentes y flujos.",
    },
    {
      icon: "💻",
      title: "Desarrollo de Software",
      desc: "Implemento con código limpio, modular, siguiendo principios SOLID, CI/CD y buenas prácticas.",
    },
    {
      icon: "🧪",
      title: "Testing Automatizado",
      desc: "Integro pruebas unitarias, de integración y end-to-end para garantizar calidad y confiabilidad.",
    },
    {
      icon: "🚀",
      title: "Deploy y DevOps",
      desc: "Automatizo builds, releases y monitoreo en producción. Escalabilidad, logging y alertas activas.",
    },
    {
      icon: "🔁",
      title: "Iteración y Mejora",
      desc: "Recojo métricas, feedback de usuarios y datos en producción para optimizar continuamente.",
    },
  ];
  

const WorkflowSection = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Título */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Proceso de Trabajo
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-xl mx-auto">
            Cada proyecto es una historia, y cada historia tiene su ritmo, su lógica y su impacto. Así abordo la construcción de experiencias digitales.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="text-xl font-semibold text-accent uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/30 italic mt-20 text-sm">
          No se trata solo de hacer software. Se trata de construir experiencias que dejen huella.
        </p>
      </div>
    </section>
  );
};

export default WorkflowSection;
