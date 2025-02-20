import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useRef } from "react";

const Index = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="min-h-screen" ref={targetRef}>
      {/* Hero Section with 3D animations */}
      <Hero />

      {/* Features Section */}
      <motion.div
        className="container mx-auto px-4 py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ scale, opacity }}
      >
        {/* Background Elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="text-center mb-20"
          variants={featureVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
          variants={containerVariants}
        >
          {[
            {
              title: "Lightning Fast",
              description: "Experience blazing-fast performance with our optimized architecture.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              title: "Modern Design",
              description: "Stunning visuals and intuitive interfaces that make you stand out.",
              icon: "M4 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z",
              gradient: "from-pink-500 to-purple-500"
            },
            {
              title: "Rock Solid",
              description: "Built with security and reliability at its core for peace of mind.",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              gradient: "from-blue-500 to-purple-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="relative overflow-hidden border-0 bg-white/70 backdrop-blur-lg">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                  whileHover={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
                <CardContent className="pt-8 p-6">
                  <motion.div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-semibold mb-3 text-gray-900"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;