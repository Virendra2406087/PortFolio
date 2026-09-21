import React, { useRef } from "react";
import Header from "../Header/Header";
import HeroSection from "../Hero/HeroSection";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function MovingStars() {
  const starsRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      starsRef.current.rotation.x = elapsedTime * 0.01;
      starsRef.current.rotation.y = elapsedTime * 0.01;
    }
  });

  // return <Stars ref={starsRef} radius={50} count={2000} factor={4} fade />;
}

function Home() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen bg-purple-200 dark:bg-gray-900 overflow-hidden"
    >
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <MovingStars />
        </Canvas>
      </div> */}
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
    </motion.section>
  );
}

export default Home;