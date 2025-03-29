"use client";

import React from "react";

const GitHubActionsCiCd = () => {
  return (
    <article className="prose prose-invert lg:prose-lg max-w-none text-white/90 prose-h2:text-accent prose-strong:text-white prose-li:marker:text-accent prose-code:bg-zinc-800 prose-code:text-white prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-ul:pl-6 prose-p:leading-relaxed">
      <p>
        Uno de los mayores avances en mi enfoque como ingeniero de software ha sido integrar pipelines de <strong>CI/CD</strong> con GitHub Actions. Este artículo es una guía práctica, pero también una reflexión sobre cómo automatizar procesos eleva la calidad, velocidad y confiabilidad de nuestros despliegues en entornos reales como <strong>Vercel</strong>.
      </p>

      <h2>🚧 ¿Por qué CI/CD en serio?</h2>
      <p>
        Como desarrollador con mentalidad de producto, sé que la calidad no se prueba al final, se cultiva desde el inicio. Un pipeline bien diseñado me permite:
      </p>
      <ul>
        <li>Detectar errores antes de que lleguen al usuario</li>
        <li>Reducir el costo del cambio con feedback inmediato</li>
        <li>Consolidar flujos colaborativos predecibles y escalables</li>
      </ul>

      <h2>🔧 GitHub Actions: CI/CD como parte del ADN</h2>
      <p>
        En cada nuevo proyecto, configuro un flujo base en <code>.github/workflows/ci-cd.yml</code>. Así luce un pipeline que utilizo como estándar para entornos con Next.js y despliegue en Vercel:
      </p>

      <pre className="bg-black/80 text-white p-4 rounded-md overflow-x-auto text-sm">
        <code>{`name: CI/CD

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Lint code
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
`}</code>
      </pre>

      <h2>🧠 ¿Qué automatiza este pipeline?</h2>
      <ul>
        <li><strong>Clonado del repo</strong> con control de versiones limpio</li>
        <li><strong>Instalación y validación</strong> de dependencias con <code>npm</code></li>
        <li>Revisión de estilo con <strong>ESLint</strong></li>
        <li>Ejecución de <strong>unit tests</strong></li>
        <li>Build de producción optimizado</li>
        <li><strong>Deploy continuo</strong> a Vercel con control de versiones y rollback disponibles</li>
      </ul>

      <h2>🔐 Seguridad profesional con GitHub Secrets</h2>
      <p>
        Tokens y credenciales sensibles no se hardcodean jamás. Uso variables seguras desde <strong>Settings → Secrets</strong> para mantener el flujo limpio, escalable y protegido frente a ataques o leaks de credenciales.
      </p>

      <h2>🧪 Buenas prácticas que aplico siempre</h2>
      <ul>
        <li><strong>Previews automáticos</strong> por cada Pull Request</li>
        <li><strong>Tests e2e</strong> en flows críticos con Playwright o Cypress</li>
        <li><strong>Alertas</strong> en Slack o Discord sobre el estado del deploy</li>
        <li>Publicación de <strong>coverage reports</strong> en Codecov</li>
      </ul>

      <h2>📦 ¿Por qué Vercel en mi stack?</h2>
      <p>
        Vercel potencia mis proyectos en Next.js gracias a:
      </p>
      <ul>
        <li>Integración nativa con GitHub</li>
        <li>Previews instantáneos por rama</li>
        <li>Infraestructura edge lista para escalar</li>
      </ul>
      <p>
        Con GitHub Actions, convierto a Vercel en una pieza más dentro del ciclo de entrega automatizado.
      </p>

      <h2>⚡ Conclusión: entrega continua = confianza continua</h2>
      <p>
        Para mí, CI/CD no es un plus técnico. Es una <strong>postura profesional</strong>. Automatizar desde el día uno me permite centrarme en lo importante: construir productos de calidad, con rapidez, seguridad y visión a futuro.
      </p>

      <p className="mt-4 italic text-white/60">
        🚀 Automatizar tu despliegue es el primer paso para escalar tu impacto como desarrollador.
      </p>
    </article>
  );
};

export default GitHubActionsCiCd;
