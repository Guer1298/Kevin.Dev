"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";
import WorkflowSection from "@/components/WorkflowSection";
import ContactSection from "@/components/ContactSection";






const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex flex-col justify-center xl:justify-between py-12 xl:py-0"
    >
      <section className="bg-black text-white py-16 px-6">
  <div className="container mx-auto max-w-[1280px] flex flex-col xl:flex-row items-center gap-16">
    {/* Foto */}
    <div className="w-full xl:w-1/2 flex justify-center">
      <Photo />
    </div>

    {/* Texto */}
    <div className="w-full xl:w-1/2 flex flex-col gap-6 text-center xl:text-left">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
        HELLO, I'M <br />
        <span className="text-accent font-extrabold tracking-widest">
          KEVIN ANDRÉS
        </span>
      </h1>
      <p className="text-white/80">
    Ingeniero de software con mentalidad creativa y enfoque en resultados. Transformo ideas en experiencias digitales funcionales, modernas y escalables.
  </p>

  <p className="text-sm italic text-white/60 leading-relaxed">
    Con más de 3 años de experiencia desarrollando soluciones web, desde landing pages hasta sistemas complejos. Apasionado por el diseño intuitivo, la eficiencia en el código y la evolución constante como desarrollador.
  </p>

  <h3 className="text-xl font-medium text-white/90">
    ¿Tienes una visión? Yo la convierto en producto. Diseñemos algo que marque la diferencia.
  </h3>

      {/* Acciones */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <a href="/assets/CVKABG12.pdf" download>
          <Button
            variant="outline"
            size="md"
            className="uppercase flex items-center gap-2 px-6 py-3 hover:bg-accent hover:text-black transition-colors"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </a>
        <Social />
      </div>
    </div>
  </div>
</section>


<motion.section
    id="about"
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-[#0a0a0a] py-28 px-6  "
  >
    <AboutMe />
  </motion.section>

  <motion.section
    id="projects"
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-black py-28 px-6"
  >
    <Projects />
  </motion.section>

  <motion.section
    id="blog"
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-[#0a0a0a] py-28 px-6"
  >
    <BlogSection />
  </motion.section>

  <motion.section
    id="workflow"
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-black py-28 px-6"
  >
    <WorkflowSection />
  </motion.section>

  <motion.section
    id="contact"
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="bg-[#0a0a0a] py-28 px-6"
  >
    <ContactSection />
  </motion.section>
</motion.div>
  );
};

export default Home;
