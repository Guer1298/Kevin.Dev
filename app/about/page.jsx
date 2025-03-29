"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";

// Components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Datos enriquecidos con enfoque profesional
const about = {
  title: "Sobre mí",
  description:
    "Ingeniero de software con mentalidad estratégica, pasión por el diseño funcional y visión orientada al usuario. Combino habilidades técnicas con pensamiento de producto para construir soluciones escalables, usables y alineadas con objetivos de negocio. Creo en la tecnología como herramienta para generar impacto real.",
  info: [
    { fieldName: "Nombre", fieldValue: "Kevin Andrés Bermúdez" },
    { fieldName: "Experiencia", fieldValue: "2+ años construyendo productos digitales" },
    { fieldName: "Teléfono", fieldValue: "(+57) 323 590 2681" },
    { fieldName: "Correo", fieldValue: "kevinbermudez@unicauca.edu.co" },
    { fieldName: "Ubicación", fieldValue: "Popayán, Colombia (disponible remoto)" },
    { fieldName: "Idiomas", fieldValue: "Español (nativo), Inglés (fluido), Portugués (básico)" },
  ],
};


// Objeto de habilidades agrupadas por categoría
const skills = {
  title: "Habilidades Técnicas",
  description:
    "Como ingeniero de software con enfoque fullstack, combino tecnologías modernas, buenas prácticas de desarrollo y visión de producto para construir soluciones escalables, intuitivas y robustas. Estas son las herramientas que utilizo estratégicamente en cada capa del proceso.",
  skillGroups: [
    {
      category: "Frontend",
      skills: [
        { icon: <FaReact />, name: "React.js — Interfaces declarativas y reutilizables" },
        { icon: <SiNextdotjs />, name: "Next.js — SSR, SEO, performance optimizado" },
        { icon: <SiTailwindcss />, name: "TailwindCSS — Diseño limpio, responsive y mantenible" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js — Entornos ligeros y eficientes" },
        { icon: <SiExpress />, name: "Express.js — APIs RESTful limpias y seguras" },
        { icon: <SiFirebase />, name: "Firebase — Backend serverless para prototipos ágiles" },
        { icon: <SiPostgresql />, name: "PostgreSQL — Bases de datos robustas y estructuradas" },
      ],
    },
    {
      category: "Infraestructura / DevOps",
      skills: [
        { icon: <SiDocker />, name: "Docker — Entornos portables y consistentes" },
      ],
    },
    {
      category: "Gestión & Diseño",
      skills: [
        { icon: "🧠", name: "Notion — Gestión de tareas, documentación y roadmaps" },
        { icon: "🎨", name: "Figma — Diseño de interfaces centradas en el usuario" },
      ],
    },
  ],
};

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Título */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            {skills.title}
          </h2>
          <p className="text-white/60 mt-4 text-base max-w-3xl mx-auto">
            {skills.description}
          </p>
        </motion.div>

        {/* Skills agrupadas por categoría */}
        <div className="space-y-12">
          {skills.skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              variants={fadeIn("up", 0.3 + idx * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-accent mb-4 tracking-wide uppercase">
                {group.category}
              </h3>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
                {group.skills.map(({ name, icon }) => (
                  <li key={name}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="p-3 bg-white/5 rounded-lg text-white text-xl hover:bg-accent/30 transition-colors text-center">
                            {icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="text-sm text-white bg-black border border-white/10 shadow-xl">
                          {name}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Cierre estratégico */}
        <p className="text-center text-white/30 italic mt-20 text-sm">
          La tecnología cambia. El criterio, la claridad técnica y la capacidad de construir con propósito son los que dejan huella.
        </p>
      </div>
    </section>
  );
};





const experience = {
  title: "Experiencia Profesional",
  description:
    "He trabajado en el diseño, desarrollo e implementación de soluciones digitales que combinan funcionalidad, escalabilidad y una excelente experiencia de usuario. Aporto una visión integral del ciclo de vida del software, desde la arquitectura hasta el despliegue y la mejora continua.",

  items: [
    {
      position: "Full-Stack Developer – Bootcamp App",
      duration: "2024",
      description:
        "Diseñé y desarrollé una aplicación web full-stack con autenticación, dashboard administrativo y funcionalidades CRUD. Stack: React, Node.js, Express, PostgreSQL, Docker.",
    },
    {
      position: "Contributor – Grammerhub (Open Source)",
      duration: "2024",
      description:
        "Aporté en la implementación de nuevos endpoints y refactorización del sistema de validaciones. Enfoque en accesibilidad, optimización de peticiones y mantenibilidad del código.",
    },
    {
      position: "Frontend Engineer – Portafolio Profesional",
      duration: "2023",
      description:
        "Construí un portafolio interactivo centrado en la experiencia del usuario. Usé Next.js, animaciones con Framer Motion y estructura modular para facilitar el mantenimiento.",
    },
    {
      position: "Desarrollador Freelance – Web para PyME",
      duration: "2023",
      description:
        "Lideré el desarrollo de una página corporativa moderna y responsive para una empresa local. Implementación con HTML, Tailwind y despliegue optimizado en Vercel.",
    },
  ],
};

const education = {
  title: "Formación y Aprendizaje Continuo",
  description:
    "Mi crecimiento como ingeniero de software combina formación académica formal, especializaciones prácticas en plataformas de educación tecnológica y una mentalidad de aprendizaje autodidacta. Cada curso, cada proyecto y cada reto han sido parte de mi evolución como profesional integral.",

  items: [
    {
      institution: "Universidad del Cauca",
      degree: "Ingeniería en Electrónica y Telecomunicaciones",
      duration: "2014 - 2021",
      description:
        "Formación integral en sistemas embebidos, redes de comunicación, electrónica digital y fundamentos de programación. A lo largo de la carrera, desarrollé pensamiento lógico, capacidad analítica y habilidades en resolución de problemas complejos. Esta base técnica me permite entender la tecnología desde sus fundamentos físicos hasta su implementación en software.",
    },
    
    {
      institution: "Platzi",
      degree: "Escuela de Desarrollo Web + Ruta de Backend con Node.js",
      duration: "2022 - 2024",
      description:
        "Más de 50 cursos completados sobre frontend, backend, diseño de APIs, testing, arquitectura de software, liderazgo técnico y soft skills. Educación aplicada con enfoque laboral.",
    },
    {
      institution: "Coursera & Meta",
      degree: "Certificación Profesional: Front-End Developer",
      duration: "2023",
      description:
        "React, testing, diseño accesible, animaciones e integración con APIs REST. Certificación orientada a proyectos reales.",
    },
    {
      institution: "Udemy",
      degree: "Curso de Docker y Kubernetes para Desarrolladores",
      duration: "2023",
      description:
        "Fundamentos de contenedorización, orquestación y despliegue en la nube. Aplicación práctica en proyectos personales.",
    },
    {
      institution: "Udemy",
      degree: "Curso de Git y GitHub para Desarrolladores",
      duration: "2023",
      description:
        "Dominio de control de versiones, ramas, pull requests y colaboración en proyectos open source. Mejora continua en gestión de código.",
    },
    {
      institution: "Aprendizaje autodidacta",
      degree: "Proyectos personales, documentación oficial y comunidades",
      duration: "Constante",
      description:
        "Complemento mi formación explorando nuevas tecnologías, leyendo libros técnicos (Clean Code, The Pragmatic Programmer), contribuyendo en GitHub y participando en comunidades como Dev.to, Stack Overflow y Discord Tech.",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-20"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-12 xl:px-6 xl:h-[582px]"
        >
          {/* Navegación lateral */}
          <TabsList className="flex flex-col w-full max-w-xs mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="about">Sobre mí</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Formación</TabsTrigger>
          </TabsList>

          {/* Contenido dinámico */}
          <div className="w-full min-h-[25vh]">
            {/* ABOUT TAB */}
            <TabsContent value="about">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3 text-accent">Quién soy</h3>
                  <p className="p mt-2 text-white/80 leading-relaxed">
                    Soy un ingeniero de software con base en ingeniería electrónica y telecomunicaciones,
                    especializado en soluciones digitales de alto impacto. Transformo ideas en productos usables, escalables y con propósito.
                  </p>
                </div>

                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {about.info.map(({ fieldName, fieldValue }) => (
                      <li key={fieldName} className="bg-secondary p-6 rounded-xl flex flex-col items-center lg:items-start">
                        <span className="text-accent uppercase text-xs tracking-wide">{fieldName}</span>
                        <p className="text-base text-white/80 font-medium tracking-wide">{fieldValue}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS TAB */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3">{skills.title}</h3>
                  <p className="p mt-2">{skills.description}</p>
                  <p className="text-white/60 text-sm mt-2">
                    Mis herramientas no son solo técnicas, son estratégicas. Seleccionadas para escalar, adaptarse y entregar resultados concretos.
                  </p>
                </div>

                {skills.skillGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-accent font-semibold uppercase tracking-wide text-sm mb-4">{group.category}</h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6 mb-10">
                      {group.skills.map(({ name, icon }) => (
                        <li key={name}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                aria-label={`Tecnología: ${name}`}
                                className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group focus:outline-none focus:ring-2 focus:ring-accent"
                              >
                                <div className="text-5xl group-hover:text-accent transition-all duration-300">{icon}</div>
                                <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all text-white/80 text-center px-2">{name}</p>
                              </TooltipTrigger>
                              <TooltipContent className="hidden xl:block bg-black text-white border border-white/10 shadow-lg text-sm">
                                <p>{name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <p className="text-white/40 text-sm italic mt-8">
                  Mi stack es una caja de herramientas seleccionada con intención: rendimiento, diseño, escalabilidad y propósito.
                </p>
              </div>
            </TabsContent>

            {/* EXPERIENCE TAB */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p mt-2">{experience.description}</p>
                  <p className="text-white/60 text-sm mt-2">
                    He contribuido a startups, proyectos personales y colaboraciones abiertas, siempre con foco en generar impacto con tecnología bien pensada.
                  </p>
                </div>

                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map(({ position, duration, description }) => (
                      <li key={position + duration} className="bg-secondary p-6 rounded-xl flex flex-col gap-2 items-center lg:items-start shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <span className="text-accent text-sm font-medium">{duration}</span>
                        <h3 className="text-lg font-semibold text-white/90 text-center lg:text-left">{position}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                          <p className="text-white/60 text-sm">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>

                <p className="text-white/40 text-sm italic mt-8">
                  Cada línea de código y cada decisión técnica tienen una historia. La mía está escrita en valor entregado.
                </p>
              </div>
            </TabsContent>

            {/* EDUCATION TAB */}
            <TabsContent value="education">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3">{education.title}</h3>
                  <p className="p mt-2">{education.description}</p>
                  <p className="text-white/60 text-sm mt-2">
                    Combiné formación universitaria con educación autodidacta para mantenerme siempre actualizado en un mundo que cambia a cada segundo.
                  </p>
                </div>

                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map(({ institution, degree, duration }) => (
                      <li key={degree + duration} className="bg-secondary p-6 rounded-xl flex flex-col gap-2 items-center lg:items-start hover:shadow-lg transition-all">
                        <span className="text-accent text-sm font-medium">{duration}</span>
                        <h3 className="text-lg font-semibold text-white/90 text-center lg:text-left">{degree}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                          <p className="text-white/60 text-sm">{institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>

                <p className="text-white/40 text-sm italic mt-8">
                  Aprender no es un evento, es un hábito. La evolución constante es parte de mi práctica profesional.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
        

export default About;

