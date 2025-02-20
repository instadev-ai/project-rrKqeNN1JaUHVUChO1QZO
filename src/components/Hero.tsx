import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Scene from "@/components/Scene";

const Hero = () => {
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-50">
        <Scene />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
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
            >
              Welcome to the Future
            </motion.h2>
            
            <motion.h1
              className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900"
              variants={itemVariants}
            >
              Experience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Innovation
              </span>
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
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-lg px-8 py-6 rounded-2xl"
                >
                  Get Started
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 text-lg px-8 py-6 rounded-2xl"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
        animate={{
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Hero;