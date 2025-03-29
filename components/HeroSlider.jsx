"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "KEVIN ANDRÉS",
    subtitle: "Ingeniero de Software",
    description:
      "Transformo ideas en productos digitales funcionales, intuitivos y con propósito.",
  },
  {
    title: "🚀 Más que código",
    description:
      "Creo experiencias que conectan, fluyen y resuelven problemas reales.",
  },
  {
    title: "🎯 Liderazgo técnico",
    description:
      "Desde diseño hasta deploy. Fullstack con visión estratégica y foco en valor.",
  },
  {
    title: "🤝 ¿Creamos algo juntos?",
    description: "Estoy listo para tu próximo desafío.",
    cta: true,
  },
];

const slideVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, subtitle, description, cta } = slides[index];

  return (
    <section className="bg-black text-white min-h-[80vh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && <p className="text-lg text-white/60 mb-2">{subtitle}</p>}
          <p className="text-xl text-white/80 mb-6 leading-relaxed">
            {description}
          </p>
          {cta && (
            <Link href="#contact">
              <Button className="uppercase tracking-wide px-8 py-3">
                Conversemos
              </Button>
            </Link>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controles */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <button onClick={handlePrev} className="text-white/40 hover:text-white transition">
          <FiArrowLeft size={24} />
        </button>
        <button onClick={handleNext} className="text-white/40 hover:text-white transition">
          <FiArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
