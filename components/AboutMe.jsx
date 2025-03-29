"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const AboutMe = () => {
  const statements = [
    "🌊 No temo a la tormenta; el cambio no llega en aguas quietas.",
    "🚀 Compartir conocimiento es encender estrellas.",
    "🔥 No observo, transformo. Actúo con propósito.",
    "💡 Donde otros ven rutina, yo creo nuevas rutas.",
    "📊 Datos y visión: mi brújula hacia lo imposible.",
    "🤖 La tecnología une. Bien usada, iguala y conecta.",
    "🎯 Solo persigo lo importante. Mi esfuerzo siempre tiene sentido.",
    "💎 Soy auténtico. No vendo humo, creo valor real.",
    "⚡ Aprendo de cada ola. El cambio es mi ritmo.",
    "🚀 No espero. Construyo el futuro, un paso valiente a la vez.",
  ];

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="container mx-auto max-w-3xl space-y-6 text-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold tracking-wide uppercase"
        >
          Kevin Andrés
        </motion.h2>

        {statements.map((text, index) => (
          <motion.p
            key={index}
            variants={fadeIn("up", 0.3 + index * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`${
              index === statements.length - 1
                ? "text-accent text-base font-medium"
                : "text-white/70 text-base"
            }`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;