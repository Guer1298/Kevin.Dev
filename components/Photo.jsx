"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ANIMATION_DELAY = 1.5;
const ANIMATION_DURATION = 1.2;
const IMAGE_SIZE = {
  default: "200px",
  xl: "350px",
};
const CIRCLE_SIZE = {
  default: "380px",
  xl: "500px",
};

const Photo = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-full"
      aria-labelledby="profile-photo"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: ANIMATION_DELAY, duration: ANIMATION_DURATION, ease: "easeInOut" },
        }}
        className={`relative z-10 rounded-full overflow-hidden shadow-xl `}
        style={{
          width: `clamp(${IMAGE_SIZE.default}, 30vw, ${IMAGE_SIZE.xl})`,
          height: `clamp(${IMAGE_SIZE.default}, 30vw, ${IMAGE_SIZE.xl})`,
        }}
      >
        <Image
          src="/assets/KABGO.png"
          alt="Kevin Andrés profile photo"
          priority
          quality={100}
          sizes="(max-width: 100px) 50vw, (max-width: 900px) 45vw, 300px"
          className="object-cover rounded-full shadow-lg border-2 border-gray-200"
          fill
        />
      </motion.div>

      {/* Circular Animation */}
      <motion.svg
        className="absolute opacity-60"
        style={{
          width: `clamp(${CIRCLE_SIZE.default}, 25vw, ${CIRCLE_SIZE.xl})`,
          height: `clamp(${CIRCLE_SIZE.default}, 25vw, ${CIRCLE_SIZE.xl})`,
        }}
        fill="transparent"
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
          initial={{
            strokeDasharray: "5 5 0 0",
          }}
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



