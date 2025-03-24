"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const AboutMe = () => {
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

        {[
          `Soy arquitecto de sueños y constructor de realidades,
un navegante que no teme a la tormenta,
porque sé que el cambio nunca llega en aguas tranquilas.`,

          `🚀 El conocimiento es luz, pero compartirlo es encender estrellas.
No acumulo saberes para mí, los libero al mundo.
Si una idea puede inspirar, entonces debe volar.`,

          `🔥 No soy espectador, soy fuego que enciende el cambio.
La queja sin acción es solo eco en el vacío.
Transformo la indignación en propósito,
y el propósito en un paso firme hacia adelante.`,

          `💡 La innovación es el latido del progreso.
Donde otros ven rutina, yo veo posibilidades.
No sigo caminos trazados si sé que puedo construir nuevos.`,

          `📊 Los datos son la brújula que guía mi instinto.
La intuición sin razón es un barco sin timón.
Con cada número, con cada análisis, descubro rutas hacia lo imposible.`,

          `🤖 La tecnología es un puente, no una barrera.
No separa, no excluye, no silencia.
Bien usada, multiplica oportunidades y convierte la brecha en conexión.`,

          `🎯 Si no tiene propósito, no tiene sentido.
No corro tras lo urgente si no aporta a lo importante.
Soy estratega del tiempo, inversionista del esfuerzo y creador de valor.`,

          `💎 La autenticidad es mi bandera.
No sigo modas, sigo principios.
No vendo espejismos, construyo realidades.`,

          `⚡ El aprendizaje es un río que nunca deja de fluir.
Cada día, cada error, cada desafío es una nueva ola que surco con valentía.`,

          `🚀 No espero, construyo.
No busco excusas, sino caminos.
No me detiene el miedo, porque sé que el futuro pertenece a quienes se atreven.`,
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={fadeIn("up", 0.4 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={`${
              index === 0
                ? "text-white/80 leading-relaxed text-lg"
                : index === 9
                ? "text-accent text-base font-medium"
                : "text-white/70 text-base"
            } whitespace-pre-line`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
