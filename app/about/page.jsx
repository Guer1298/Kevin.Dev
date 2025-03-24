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

// Datos
const about = {
  title: "About me",
  description:
    "Soy un ingeniero de software orientado a soluciones, con fuerte enfoque en usabilidad, escalabilidad y calidad de código. Me motiva crear productos que mejoran la vida de las personas, combinando tecnología y propósito.",
  info: [
    { fieldName: "Name", fieldValue: "Kevin Andres" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Phone", fieldValue: "(+57) 323 590 2681" },
    { fieldName: "Email", fieldValue: "kevinbermudez@unicauca.edu.co" },
    { fieldName: "Location", fieldValue: "Popayan, Colombia" },
    { fieldName: "Languages", fieldValue: "English, Spanish, Portuguese" },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Especializado en el ecosistema JavaScript, domino herramientas modernas como React, Next.js y Node para construir aplicaciones web rápidas, accesibles y centradas en el usuario.",
  skillList: [
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiDocker />, name: "Docker" },
  ],
};

const experience = {
  title: "My experience",
  description:
    "Experiencia integral en frontend y backend, participando en todas las etapas del ciclo de vida del desarrollo de software: desde el diseño de interfaces hasta la implementación de APIs y despliegue en producción.",
  items: [
    { position: "Built a full-stack web application.", duration: "2024", description: "Bootcamp Project" },
    { position: "Contributed to an open-source project.", duration: "2024", description: "Grammerhub" },
    { position: "Implemented a portfolio website.", duration: "2023", description: "Personal Project" },
    { position: "Developed a small business website.", duration: "2023", description: "Freelance" },
  ],
};

const education = {
  title: "My education",
  description:
    "Formación sólida en ciencias de la computación complementada con certificaciones prácticas que avalan mis habilidades técnicas y compromiso con el aprendizaje continuo.",
  items: [
    { institution: "Coursera", degree: "Meta Front-End Developer Certificate", duration: "2023" },
    { institution: "Miami Dade College", degree: "Associate Degree in Computer Science", duration: "2016 - 2018" },
    { institution: "Miami Dade College", degree: "PHI THETA KAPPA Honor Society", duration: "2015" },
    { institution: "UCI (Cuba)", degree: "Engineering in Computer Science", duration: "2010 - 2013" },
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
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-12 xl:px-6 xl:h-[582px]">
          <TabsList className="flex flex-col w-full max-w-xs mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[25vh]">
            {/* ABOUT TAB */}
            <TabsContent value="about">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3">{about.title}</h3>
                  <p className="p mt-2">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {about.info.map(({ fieldName, fieldValue }) => (
                      <li
                        key={fieldName}
                        className="bg-secondary p-6 rounded-xl flex flex-col items-center lg:items-start"
                      >
                        <span className="text-accent uppercase text-sm">{fieldName}</span>
                        <p className="text-base text-white/80 font-medium uppercase">{fieldValue}</p>
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
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
                  {skills.skillList.map(({ name, icon }) => (
                    <li key={name}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            aria-label={`Technology: ${name}`}
                            className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group focus:outline-none focus:ring-2 focus:ring-accent"
                          >
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">
                              {icon}
                            </div>
                            <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all">
                              {name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent className="hidden xl:block">
                            <p>{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* EXPERIENCE TAB */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3">{experience.title}</h3>
                  <p className="p mt-2">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map(({ position, duration, description }) => (
                      <li
                        key={position + duration}
                        className="bg-secondary p-6 rounded-xl flex flex-col gap-2 items-center lg:items-start"
                      >
                        <span className="text-accent text-sm">{duration}</span>
                        <h3 className="text-lg font-semibold text-white/90 text-center lg:text-left">
                          {position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION TAB */}
            <TabsContent value="education">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <div>
                  <h3 className="h3">{education.title}</h3>
                  <p className="p mt-2">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px] pr-2">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map(({ institution, degree, duration }) => (
                      <li
                        key={degree + duration}
                        className="bg-secondary p-6 rounded-xl flex flex-col gap-2 items-center lg:items-start"
                      >
                        <span className="text-accent text-sm">{duration}</span>
                        <h3 className="text-lg font-semibold text-white/90 text-center lg:text-left">
                          {degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">{institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;

