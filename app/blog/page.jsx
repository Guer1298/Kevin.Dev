"use client";

import React from "react";
import { motion } from "framer-motion";
import BlogList from "@/components/blogs/BlogList";

const BlogPage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto px-6">
        {/* Título principal */}
        <h1 className="h3 mb-4 text-accent text-center">Últimos artículos del blog</h1>

        {/* Introducción profesional */}
        <p className="max-w-2xl mx-auto text-center text-white/70 mb-10 text-base">
          Aquí comparto reflexiones, guías prácticas y aprendizajes reales desde mi experiencia como desarrollador fullstack y project manager técnico.
          Escribo sobre frameworks modernos, buenas prácticas de desarrollo, metodologías ágiles, accesibilidad, automatización y más.
          Cada artículo está diseñado para aportar valor directo a quienes construyen productos digitales de calidad.
        </p>

        {/* Lista de blogs */}
        <BlogList />
      </div>
    </motion.div>
  );
};

export default BlogPage;
