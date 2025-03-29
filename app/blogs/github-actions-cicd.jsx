"use client";

import React from "react";

const GitHubActionsCiCd = () => {
  return (
    <>
      <p className="lead mb-6">
        Uno de los mayores avances en mi flujo de trabajo ha sido implementar
        pipelines de <strong>CI/CD</strong> con GitHub Actions. En este artículo
        te muestro cómo configuro un flujo de despliegue continuo para asegurar
        entregas consistentes, automáticas y seguras en mis proyectos alojados
        en <strong>Vercel</strong>.
      </p>

      <h2>🚧 ¿Por qué CI/CD?</h2>
      <p>
        Como desarrollador y líder técnico, me esfuerzo por entregar software de
        forma ágil sin sacrificar calidad. Automatizar pruebas, builds y
        despliegues me permite:
      </p>
      <ul>
        <li>Reducir errores humanos en producción</li>
        <li>Recibir feedback más rápido</li>
        <li>Escalar sin fricción con otros colaboradores</li>
      </ul>

      <h2>🔧 Configurando GitHub Actions desde cero</h2>
      <p>
        En la raíz del repositorio creo un archivo YAML dentro de
        <code>.github/workflows/ci-cd.yml</code>. Este pipeline básico se activa
        con cada push a <code>main</code>:
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

      <h2>🧠 ¿Qué hace este pipeline?</h2>
      <ul>
        <li><strong>Clona</strong> el repo automáticamente</li>
        <li>Instala dependencias con <code>npm install</code></li>
        <li>Ejecuta <code>eslint</code> para validar estilo y errores</li>
        <li>Corre los <strong>tests</strong> unitarios</li>
        <li>Genera el <code>build</code> de producción</li>
        <li>Realiza <strong>deploy automático</strong> a Vercel</li>
      </ul>

      <h2>🔐 Seguridad con secrets</h2>
      <p>
        Los valores sensibles como <code>VERCEL_TOKEN</code> o IDs de proyecto
        se almacenan en el apartado de <strong>Settings → Secrets</strong> del
        repositorio. Esto evita exponer credenciales y permite mantener el
        pipeline reutilizable.
      </p>

      <h2>🧪 Mejores prácticas adicionales</h2>
      <ul>
        <li>Configurar entornos de preview en ramas con Pull Requests</li>
        <li>Agregar pruebas e2e con Playwright o Cypress</li>
        <li>Notificaciones de éxito/fallo vía Slack o Discord</li>
        <li>Publicar coverage en Codecov</li>
      </ul>

      <h2>📦 ¿Por qué Vercel?</h2>
      <p>
        Vercel es ideal para proyectos en <strong>Next.js</strong>. Ofrece
        previews automáticos, integración con GitHub y rendimiento optimizado
        desde el primer despliegue. Combinado con Actions, el despliegue se
        vuelve completamente transparente.
      </p>

      <h2>⚡ Conclusión</h2>
      <p>
        Implementar CI/CD no es un lujo: es una inversión en calidad, velocidad
        y profesionalismo. Si lideras proyectos o trabajas en equipo, automatizar
        tu flujo de despliegue con GitHub Actions te permite escalar sin perder
        el control.
      </p>
      <p className="mt-4">
        🚀 <strong>Automatiza, entrega con confianza y enfócate en crear.</strong>
      </p>
    </>
  );
};

export default GitHubActionsCiCd;
