"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ANIMATION = {
  delay: 1.5,
  duration: 1.2,
};

const IMAGE_SIZE = {
  base: "200px",
  xl: "350px",
};

const CIRCLE_SIZE = {
  base: "380px",
  xl: "500px",
};

const Photo = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      role="img"
      aria-label="Retrato de Kevin Andrés"
    >
      {/* Imagen de perfil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: ANIMATION.delay,
            duration: ANIMATION.duration,
            ease: "easeInOut",
          },
        }}
        className="relative z-10 overflow-hidden rounded-full shadow-2xl border-2 border-white/10"
        style={{
          width: `clamp(${IMAGE_SIZE.base}, 30vw, ${IMAGE_SIZE.xl})`,
          height: `clamp(${IMAGE_SIZE.base}, 30vw, ${IMAGE_SIZE.xl})`,
        }}
      >
        <Image
          src="/assets/Hero.jpg"
          alt="Foto de perfil de Kevin Andrés"
          priority
          quality={100}
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 768px) 50vw, 300px"
        />
      </motion.div>

      {/* Círculo animado */}
      <motion.svg
        className="absolute opacity-30"
        style={{
          width: `clamp(${CIRCLE_SIZE.base}, 25vw, ${CIRCLE_SIZE.xl})`,
          height: `clamp(${CIRCLE_SIZE.base}, 25vw, ${CIRCLE_SIZE.xl})`,
        }}
        fill="none"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#57ebd7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "5 5 0 0" }}
          animate={{
            strokeDasharray: ["10 60 10 10", "25 60 70 50", "5 200 5 5"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
