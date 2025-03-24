"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const routeName = pathname === "/" ? "home" : pathname.substring(1);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* Top Transition Bar */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-40 rounded-b-[100px]"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Route Name Overlay */}
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white text-6xl sm:text-8xl font-extrabold uppercase tracking-tight">
            {routeName}
          </span>
        </motion.div>

        {/* Bottom Transition Bar */}
        <motion.div
          className="fixed bottom-0 left-0 w-full h-screen bg-black z-30 rounded-t-[100px]"
          initial={{ height: "140vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
          }}
        />

        {/* Page Content */}
        <div className="min-h-screen">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
