import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

const AnimatedSphere = () => {
  return (
    <Float
      speed={4} // Animation speed
      rotationIntensity={1} // Rotation intensity
      floatIntensity={2} // Float intensity
    >
      <motion.mesh
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <motion.meshStandardMaterial
          roughness={0.4}
          metalness={0.7}
          color="#9333ea"
        >
          <gradientTexture
            attach="map"
            stops={[0, 1]} // Gradient stops
            colors={['#9333ea', '#ec4899']} // Purple to pink gradient
          />
        </motion.meshStandardMaterial>
      </motion.mesh>
    </Float>
  );
};

const AnimatedTorus = () => {
  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={1}
    >
      <motion.mesh
        initial={{ scale: 0, rotation: [0, 0, 0] }}
        animate={{ scale: 1, rotation: [0, THREE.MathUtils.degToRad(45), 0] }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        position={[-2, 0, 0]}
      >
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <motion.meshStandardMaterial
          roughness={0.3}
          metalness={0.8}
          color="#ec4899"
        />
      </motion.mesh>
    </Float>
  );
};

const AnimatedCube = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={3}
      floatIntensity={1}
    >
      <motion.mesh
        initial={{ scale: 0, rotation: [0, 0, 0] }}
        animate={{ scale: 1, rotation: [THREE.MathUtils.degToRad(45), 0, THREE.MathUtils.degToRad(45)] }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
        position={[2, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <motion.meshStandardMaterial
          roughness={0.3}
          metalness={0.8}
          color="#3b82f6"
        />
      </motion.mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{ height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <AnimatedSphere />
      <AnimatedTorus />
      <AnimatedCube />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene;