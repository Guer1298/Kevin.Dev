"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const workflowSteps = [
  {
    icon: "🧭",
    title: "Análisis Estratégico",
    desc: "Más que recolectar requisitos: identifico el propósito del producto, alineo expectativas y traduzco desafíos en objetivos accionables.",
  },
  {
    icon: "🏗️",
    title: "Arquitectura Escalable",
    desc: "Diseño sistemas pensados para crecer: componentes modulares, flujos mantenibles y decisiones técnicas orientadas a largo plazo.",
  },
  {
    icon: "💻",
    title: "Desarrollo Profesional",
    desc: "Construyo con foco en performance, mantenibilidad y accesibilidad. Clean code, SOLID, testing y control de versiones efectivos.",
  },
  {
    icon: "🧪",
    title: "Calidad Automatizada",
    desc: "Incorporo testing desde el inicio (unitario, integración, e2e) y herramientas de linting para mantener estándares sin fricción.",
  },
  {
    icon: "🚀",
    title: "Entrega Continua",
    desc: "CI/CD con GitHub Actions, builds reproducibles y despliegue seguro con Vercel, Docker o pipelines personalizados.",
  },
  {
    icon: "🔁",
    title: "Iteración con Impacto",
    desc: "Uso feedback real, analíticas y métricas de negocio para refinar. Cada versión es una oportunidad para mejorar valor y experiencia.",
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
            Mi Proceso
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-xl mx-auto">
            No escribo código por escribir. Construyo con intención. Este es el flujo que aplico para transformar ideas en productos que resuelven, escalan y conectan.
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
          Un gran producto no nace por accidente. Nace de un proceso consciente, enfocado y profundamente humano.
        </p>
      </div>
    </section>
  );
};

export default WorkflowSection;
