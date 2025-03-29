"use client";

import React from "react";
import BlogCard from "./BlodCard";

/**
 * blogPosts - Conjunto curado de publicaciones que reflejan experiencias clave
 * del autor en desarrollo web, gestión técnica y liderazgo de producto.
 */
const blogPosts = [
  {
    num: "01",
    slug: "from-idea-to-deploy",
    title: "🧠 Cómo estructuro un proyecto desde cero: del concepto al deploy",
    description:
      "Desde Notion hasta Vercel. Te muestro cómo llevo una idea desde su concepción hasta un producto profesional en producción. Diseño, arquitectura, testing y automatización real.",
    image: "/assets/blogs/project-flow.jpg",
    link: "/blog/from-idea-to-deploy",
    tags: ["Gestión", "Desarrollo", "CI/CD", "Vercel", "Docker"],
  },
  {
    num: "02",
    slug: "github-actions-cicd",
    title: "🧪 Cómo implementé CI/CD usando GitHub Actions y Vercel",
    description:
      "Automatiza tu flujo de despliegue con GitHub Actions. Te explico cómo orquesto builds, tests, preview y producción para asegurar releases consistentes.",
    image: "/assets/blogs/github-actions.jpg",
    link: "/blog/github-actions-cicd",
    tags: ["CI/CD", "GitHub Actions", "Vercel", "DevOps"],
  },
  {
    num: "03",
    slug: "scrum-kanban-notion",
    title: "🧭 Organizando equipos con Notion, Scrum y Kanban",
    description:
      "Gestionar bien un equipo técnico es clave. Te muestro cómo planifico sprints, asigno tareas y hago seguimiento con métricas usando herramientas ágiles.",
    image: "/assets/blogs/project-management.jpg",
    link: "/blog/scrum-kanban-notion",
    tags: ["Project Management", "Scrum", "Kanban", "Notion"],
  },
  {
    num: "04",
    slug: "authentication-challenges",
    title: "⚔️ Retos técnicos que enfrenté desarrollando un sistema de autenticación",
    description:
      "Autenticación segura no es trivial. Te comparto problemas reales con JWT, refresh tokens, seguridad y cómo los resolví en producción.",
    image: "/assets/blogs/auth-issues.jpg",
    link: "/blog/authentication-challenges",
    tags: ["Seguridad", "Node.js", "JWT", "Backend"],
  },
  {
    num: "05",
    slug: "brand-growth",
    title: "🌍 Construyendo mi marca personal como desarrollador y líder técnico",
    description:
      "No todo es código. Hablo sobre cómo defino mi visión de carrera, selecciono proyectos con propósito y uso mi portafolio como herramienta de posicionamiento profesional.",
    image: "/assets/blogs/personal-brand.jpg",
    link: "/blog/brand-growth",
    tags: ["Carrera", "Marca Personal", "Desarrollo", "Liderazgo"],
  },
];

/**
 * BlogList - Muestra un conjunto de artículos seleccionados,
 * organizados en una grilla responsiva y diseñados para mostrar
 * impacto profesional, visión técnica y experiencia real.
 */
const BlogList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} blog={post} />
      ))}
    </section>
  );
};

export default BlogList;
