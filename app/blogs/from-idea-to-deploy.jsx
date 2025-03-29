"use client";

import React from "react";

const FromIdeaToDeploy = () => {
  return (
    <article className="prose prose-invert lg:prose-lg max-w-none text-white/90 prose-h2:text-accent prose-strong:text-white prose-li:marker:text-accent prose-code:bg-zinc-800 prose-code:text-white prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-ul:pl-6 prose-p:leading-relaxed">
      <p>
        Todo gran producto digital nace de una chispa: una idea. Pero transformar esa idea en una solución que impacte requiere mucho más que escribir código. En este artículo comparto el enfoque que aplico como ingeniero de software y líder técnico para llevar proyectos desde cero hasta producción, con propósito, claridad y excelencia.
      </p>

      <h2>🚀 1. Empieza por una necesidad, no por la tecnología</h2>
      <p>
        Cada solución que construyo responde a un problema concreto. Inicio preguntando: <strong>¿Qué problema resuelve esto? ¿Para quién?</strong> Abro Notion y creo un espacio de exploración: contexto, audiencia, dolores reales y objetivos claros. Esta etapa me permite alinear visión de negocio con experiencia de usuario desde el primer momento.
      </p>

      <h2>🧩 2. MVP con intención: menos es más</h2>
      <p>
        Con el "por qué" definido, diseño el <strong>Producto Mínimo Viable</strong>. Uso Figma para wireframes funcionales y flujos que prioricen valor. No busco perfección visual, sino validación rápida. Cada componente tiene un propósito, cada pantalla responde a una hipótesis.
      </p>

      <h2>🛠 3. Elegir el stack no es moda, es estrategia</h2>
      <p>No existe un stack universal, pero sí uno que se ajusta a la naturaleza del producto, al equipo y al contexto. Estas son mis bases habituales:</p>
      <ul>
        <li><strong>Frontend:</strong> React + Next.js + Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js + Express o Firebase</li>
        <li><strong>Bases de datos:</strong> PostgreSQL o Firestore</li>
        <li><strong>Infraestructura:</strong> Vercel + Docker</li>
      </ul>

      <h2>🏗 4. Desarrollo ágil, pero con estructura</h2>
      <p>
        El caos no es innovación. Planifico con tableros Kanban en Notion, desgloso funcionalidades por valor y esfuerzo, y mantengo sprints con entregables claros. Documentación viva (<code>README</code>, arquitectura, decisiones técnicas) es parte esencial del proceso. Cada commit cuenta una historia (<code>feat:</code>, <code>fix:</code>, <code>refactor:</code>...).
      </p>

      <h2>🧪 5. Calidad desde el inicio, no como parche</h2>
      <p>
        Aplico TDD cuando el proyecto lo amerita. Desde el día 1 uso:
      </p>
      <ul>
        <li><strong>Jest:</strong> Unit y logic tests</li>
        <li><strong>ESLint + Prettier:</strong> Estándares y consistencia</li>
        <li><strong>Storybook:</strong> Componentes desacoplados y testables</li>
        <li><strong>Cypress:</strong> End-to-end en flujos críticos</li>
      </ul>
      <p>
        La calidad no es una fase, es una cultura.
      </p>

      <h2>⚙️ 6. CI/CD: despliegues como hábito, no como estrés</h2>
      <p>Configuro pipelines automatizados con GitHub Actions desde el primer sprint. Cada push a <code>main</code> dispara:</p>
      <ul>
        <li>Linting y testing</li>
        <li>Build optimizado de producción</li>
        <li>Deploy automático (Vercel o contenedor)</li>
      </ul>
      <p>Esto elimina el “funciona en mi máquina” y garantiza estabilidad continua.</p>

      <h2>📣 7. Feedback: escucho antes de iterar</h2>
      <p>
        El valor real viene del usuario, no del desarrollador. Por eso lanzo versiones tempranas, mido reacciones y recojo insights cualitativos y cuantitativos. El feedback es brújula. Luego priorizo mejoras según <strong>impacto vs esfuerzo</strong> y actualizo la hoja de ruta.
      </p>

      <h2>💡 Conclusión: construir con visión técnica y propósito humano</h2>
      <p>
        Esta metodología no solo me permite entregar productos funcionales, sino liderar con intención. Soy un ingeniero que entiende el negocio, un estratega que diseña con datos y un desarrollador que crea con propósito. Porque más allá del stack, lo que realmente importa es el impacto que generamos.
      </p>
    </article>
  );
};

export default FromIdeaToDeploy;
