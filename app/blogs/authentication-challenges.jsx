"use client";

import React from "react";

const AuthenticationChallenges = () => {
  return (
    <>
      <p>
        Diseñar un sistema de autenticación robusto fue uno de los mayores desafíos técnicos que enfrenté como desarrollador backend. No se trata solo de "iniciar sesión", sino de garantizar seguridad, escalabilidad y una buena experiencia de usuario. En este artículo, te comparto los errores, soluciones y aprendizajes que me marcaron.
      </p>

      <h2>🔐 1. ¿Por qué no usé autenticación basada en sesiones?</h2>
      <p>
        Al principio, consideré usar sesiones tradicionales con cookies. Sin embargo, el proyecto requería una <strong>API REST stateless</strong> que funcionara bien en entornos móviles y web, por lo que opté por una solución basada en <strong>JWT (JSON Web Tokens)</strong>.
      </p>
      <p>
        Esto permitió manejar la autenticación en el cliente, evitando la necesidad de almacenar sesiones en el servidor.
      </p>

      <h2>⚠️ 2. El primer error: no usar refresh tokens</h2>
      <p>
        En mi primer intento, usé JWTs con una expiración larga (24h). Parecía funcionar... hasta que quise implementar logout real. No había forma de invalidar tokens activos sin una lista negra en el backend.
      </p>
      <p>
        Solución: implementé <strong>access tokens de corta duración (15 min)</strong> y <strong>refresh tokens persistentes en una base de datos</strong>. Esto me dio control y seguridad, permitiendo revocar acceso si se detecta una anomalía.
      </p>

      <h2>🔁 3. Ciclo completo de autenticación</h2>
      <p>El flujo que implementé fue el siguiente:</p>
      <ol className="list-decimal pl-6">
        <li>El usuario inicia sesión → recibe un access token y un refresh token.</li>
        <li>El access token se usa en cada request protegido (en header Authorization).</li>
        <li>Cuando expira, el frontend usa el refresh token para obtener uno nuevo.</li>
        <li>El backend valida el refresh token (firmado + en base de datos) y genera un nuevo access token.</li>
      </ol>

      <h2>🛡️ 4. Recomendaciones clave de seguridad</h2>
      <ul className="list-disc pl-6">
        <li>Los tokens deben estar firmados con una clave secreta robusta (preferiblemente con RS256 si usas OAuth).</li>
        <li>Los refresh tokens se almacenan cifrados y con una fecha de expiración.</li>
        <li>El frontend debe almacenar el refresh token en cookies httpOnly y secure (no localStorage).</li>
        <li>Las rutas de refresco deben tener mecanismos de rate limiting.</li>
      </ul>

      <h2>💥 5. Ataques que mitigamos</h2>
      <p>Durante las pruebas de seguridad, nos enfocamos en evitar:</p>
      <ul className="list-disc pl-6">
        <li><strong>Token theft:</strong> mitigado con cookies httpOnly y expiración corta del access token.</li>
        <li><strong>Replay attacks:</strong> cada refresh token se rotaba en cada uso y se invalidaban los anteriores.</li>
        <li><strong>Brute force:</strong> protección con rate limits y bloqueos temporales tras intentos fallidos.</li>
      </ul>

      <h2>🧪 6. Testing del sistema</h2>
      <p>
        Usé <strong>Jest</strong> para pruebas unitarias de la lógica JWT, y <strong>Postman + Newman</strong> para pruebas de integración. También documenté el flujo completo con Swagger/OpenAPI, facilitando su uso por otros desarrolladores del equipo.
      </p>

      <h2>📦 7. Lecciones que aprendí</h2>
      <p>
        Uno de los mayores aprendizajes fue entender que la autenticación no es una funcionalidad: es un sistema en sí mismo. Invertir tiempo en diseñarla bien desde el inicio evita brechas críticas en producción.
      </p>
      <p>
        Además, aprendí a balancear entre seguridad y experiencia de usuario: tokens demasiado cortos generan fricción; muy largos, vulnerabilidad.
      </p>

      <h2>✅ Bonus: herramientas que usé</h2>
      <ul className="list-disc pl-6">
        <li><strong>jsonwebtoken</strong>: para firmar/verificar JWTs</li>
        <li><strong>bcrypt</strong>: para encriptar contraseñas</li>
        <li><strong>express-rate-limit</strong>: protección ante ataques de fuerza bruta</li>
        <li><strong>dotenv</strong>: gestión de claves secretas</li>
      </ul>

      <h2>🧭 Conclusión</h2>
      <p>
        Un sistema de autenticación no solo protege tu aplicación: protege la confianza de tus usuarios. Diseñarlo bien es una inversión en estabilidad, seguridad y escalabilidad. Y si estás comenzando, empieza simple pero con visión de crecimiento.
      </p>
    </>
  );
};

export default AuthenticationChallenges;

