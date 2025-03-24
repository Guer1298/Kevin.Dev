"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Mensaje enviado. Gracias por contactarme.");
  };

  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Título */}
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
            Si algo en este sitio te resonó, no lo ignores. Conversemos.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.form
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm uppercase tracking-wide text-white/60">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Tu nombre completo"
              className="bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm uppercase tracking-wide text-white/60">
              Correo
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="tu@email.com"
              className="bg-transparent border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm uppercase tracking-wide text-white/60">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="¿En qué puedo ayudarte?"
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

        {/* CTA final */}
        <p className="text-center text-white/30 italic mt-12 text-sm">
          O si lo prefieres, envíame un <span className="text-accent">correo directo</span> o conecta en redes.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
