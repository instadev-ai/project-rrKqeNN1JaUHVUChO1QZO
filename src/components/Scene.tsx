import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import { useRef } from 'react';

const AnimatedSphere = () => {
  const sphereRef = useRef();

  return (
    <Float
      speed={4}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <motion.mesh
        ref={sphereRef}
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotateX: Math.PI * 2,
          rotateY: Math.PI * 2
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          rotateX: {
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          },
          rotateY: {
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#9333ea"
          speed={5}
          distort={0.3}
          radius={1}
        />
      </motion.mesh>
    </Float>
  );
};

const AnimatedTorus = () => {
  const torusRef = useRef();

  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={1}
    >
      <motion.mesh
        ref={torusRef}
        initial={{ scale: 0, x: -2 }}
        animate={{
          scale: 1,
          rotateZ: Math.PI * 2,
          x: -2
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
          rotateZ: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <meshPhongMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={['#ec4899', '#9333ea']}
            size={1024}
          />
        </meshPhongMaterial>
      </motion.mesh>
    </Float>
  );
};

const AnimatedCube = () => {
  const cubeRef = useRef();

  return (
    <Float
      speed={2}
      rotationIntensity={3}
      floatIntensity={1}
    >
      <motion.mesh
        ref={cubeRef}
        initial={{ scale: 0, x: 2 }}
        animate={{
          scale: 1,
          rotateX: Math.PI * 2,
          rotateY: Math.PI * 2,
          x: 2
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          rotateX: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          },
          rotateY: {
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#3b82f6"
          speed={2}
          distort={0.2}
          radius={0.5}
        />
      </motion.mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesCount = 100;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{ height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    >
      <color attach="background" args={['#080808']} />
      <fog attach="fog" args={['#080808', 5, 15]} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <ParticleField />
      <AnimatedSphere />
      <AnimatedTorus />
      <AnimatedCube />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Scene;