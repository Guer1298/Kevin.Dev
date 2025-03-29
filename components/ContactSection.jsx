"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Encabezado */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            ¿Creamos algo increíble juntos?
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-md mx-auto">
            Cuéntame tu idea, proyecto o desafío. Estoy aquí para sumar valor.
          </p>
        </motion.div>

        {/* Formulario funcional con Formspree */}
        <motion.form
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          action="https://formspree.io/f/tu-codigo-aqui" // Reemplaza con tu endpoint
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm uppercase tracking-wide text-white/60">
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Kevin Andrés"
              className="bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm uppercase tracking-wide text-white/60">
              Tu correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="kevin@tudominio.com"
              className="bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm uppercase tracking-wide text-white/60">
              Tu mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="¿Cómo puedo ayudarte o colaborar contigo?"
              className="bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-all resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 rounded-md uppercase tracking-wide hover:bg-accent transition-all"
            >
              Enviar mensaje
            </button>
          </div>
        </motion.form>

        {/* Cierre emocional */}
        <p className="text-center text-white/30 italic mt-12 text-sm">
          También puedes escribirme directamente a <a href="mailto:kevinandres@ieee.org" className="text-accent underline">kevinbermudez@unicauca.edu.co</a>. Las grandes ideas merecen ser escuchadas.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
