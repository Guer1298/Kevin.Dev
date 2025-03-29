"use client";

import React from "react";

const FromIdeaToDeploy = () => {
  return (
    <>
      <p className="lead mb-6">
        Cada gran producto digital comienza con una simple chispa: una idea. Pero ¿cómo convertir esa idea en una solución real que impacte usuarios? Aquí te comparto el proceso que aplico como líder técnico para llevar proyectos desde cero hasta producción con visión, estrategia y calidad.
      </p>

      <h2>🚀 1. Todo empieza con una necesidad real</h2>
      <p>
        No construyo por construir. Comienzo con una pregunta: <strong>¿Qué problema quiero resolver y para quién?</strong> Abro Notion y creo una página donde escribo el “por qué” del proyecto. Exploro el contexto, el público objetivo y posibles soluciones. Este es mi espacio de reflexión inicial y lluvia de ideas.
      </p>

      <h2>🧩 2. Diseño centrado en valor (MVP)</h2>
      <p>
        Con claridad en el propósito, defino el <strong>Producto Mínimo Viable</strong>. En Figma bosquejo wireframes rápidos y flujos básicos. No me obsesiono con el pixel-perfect en esta etapa. Mi foco: entregar valor lo antes posible y validar hipótesis.
      </p>

      <h2>🛠 3. Elegir el stack adecuado (sin casarse con la moda)</h2>
      <p>
        No hay stack “perfecto”, pero sí uno que se alinea con las necesidades del proyecto. Estos son mis pilares:
      </p>
      <ul>
        <li><strong>Frontend:</strong> React + Next.js + Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js + Express o Firebase (según complejidad)</li>
        <li><strong>Base de datos:</strong> PostgreSQL o Firestore</li>
        <li><strong>Infraestructura:</strong> Vercel (frontend) + Docker (si hay backend custom)</li>
      </ul>

      <h2>🏗 4. Desarrollo ágil, no improvisado</h2>
      <p>
        Creo un tablero Kanban en Notion, divido en funcionalidades clave y estimo tiempos. Trabajo en sprints, hago commits atómicos con convenciones (<code>feat:</code>, <code>fix:</code>, etc.), y mantengo un <strong>README técnico vivo</strong> donde documento decisiones y dependencias.
      </p>

      <h2>🧪 5. Calidad desde la primera línea</h2>
      <p>
        No dejo el testing para el final. Uso <strong>Jest</strong> desde el inicio para unit tests, <strong>ESLint</strong> para mantener consistencia y <strong>Storybook</strong> para aislar y testear componentes visuales. A medida que el sistema escala, agrego tests e2e con <strong>Cypress</strong>.
      </p>

      <h2>⚙️ 6. CI/CD: que el deploy no sea una lotería</h2>
      <p>
        Automatizo el pipeline con <strong>GitHub Actions</strong>. Cada push a <code>main</code> dispara:
      </p>
      <ul>
        <li>Lint y tests</li>
        <li>Build de producción</li>
        <li>Deploy automático a Vercel o despliegue de contenedor Docker</li>
      </ul>
      <p>
        Esto asegura despliegues predecibles y sin sobresaltos.
      </p>

      <h2>📣 7. Feedback real, no suposiciones</h2>
      <p>
        Después del primer deploy, comparto el proyecto con usuarios reales. Escucho, observo, pregunto. Luego priorizo mejoras con base en <strong>impacto + esfuerzo</strong> y documento los aprendizajes para futuras iteraciones.
      </p>

      <h2>💡 Reflexión final: construir con propósito</h2>
      <p>
        Esta metodología no solo me permite entregar productos sólidos. También me convierte en un <strong>constructor estratégico</strong>, capaz de liderar equipos, tomar decisiones técnicas con criterio y generar impacto real. Porque el código es solo una parte de la ecuación: <em>lo importante es lo que ese código habilita en el mundo real</em>.
      </p>
    </>
  );
};

export default FromIdeaToDeploy;
