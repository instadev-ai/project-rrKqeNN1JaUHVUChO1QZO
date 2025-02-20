import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Scene from "@/components/Scene";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={targetRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Animated background glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-[100px]"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400 rounded-full filter blur-[100px]"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "1s" }}
      />

      {/* 3D Scene Background */}
      <motion.div 
        className="absolute inset-0 opacity-50"
        style={{ opacity, scale }}
      >
        <Scene />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex items-center justify-center min-h-screen"
        style={{ y }}
      >
        <motion.div
          className="container px-4 mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            variants={containerVariants}
          >
            <motion.h2
              className="text-sm font-semibold text-purple-600 tracking-widest uppercase"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              Welcome to the Future
            </motion.h2>
            
            <motion.h1
              className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              Experience{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Innovation
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Discover the perfect blend of design and technology with our
              cutting-edge 3D animations and smooth transitions.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              <motion.div 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-lg px-8 py-6 rounded-2xl relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={false}
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  Get Started
                </Button>
              </motion.div>

              <motion.div 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 text-lg px-8 py-6 rounded-2xl relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10"
                    initial={false}
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-purple-600 rounded-full p-1">
          <motion.div
            className="w-2 h-2 bg-purple-600 rounded-full mx-auto"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;