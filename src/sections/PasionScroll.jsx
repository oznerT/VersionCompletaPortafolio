import { useEffect } from 'react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

import { Model as Robot } from "../models/Robot";
import { Model as Camera } from "../models/Camera";
import { Model as SoccerBall } from "../models/SoccerBall";

const Section = ({ title, subtitle, children }) => (
  <section className="h-screen flex flex-col justify-center items-center text-center relative">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-white mb-4"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg text-white-600 max-w-xl px-5"
    >
      {subtitle}
    </motion.p>
    <div className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        {children}
      </Canvas>
    </div>
  </section>
);

const PassionScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="bg-black text-white">
      <Section title="My Three Passions" subtitle="A journey through what drives me">
        <></>
      </Section>

      <Section title="Programming" subtitle="Solving problems and building the future">
        <Robot position={[0, -2, 0]} scale={100} />
      </Section>

      <Section title="Cinema" subtitle="Telling stories that move people">
        <Camera position={[0, -1, 0]} scale={1.5} />
      </Section>

      <Section title="Sports" subtitle="Discipline, passion and teamwork">
        <SoccerBall position={[0, -1.5, 0]} scale={1.5} />
      </Section>

      <Section title="The Dream" subtitle="Bringing all three together to create something meaningful">
        <></>
      </Section>
    </main>
  );
};

export default PassionScroll;
