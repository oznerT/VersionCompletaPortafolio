import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../components/Developer.jsx';

const SmoothSection = () => {
  const containerRef = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <Canvas className="pointer-events-none">
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 2, 5]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Developer position-y={-3} scale={3} animationName="idle" />
        </Canvas>
      </div>

      <div className="absolute top-[120vh] w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center max-w-xl px-5"
        >
          <h2 className="text-4xl font-bold mb-4">Creative Scroll Experience</h2>
          <p className="text-lg text-white-600">
            As you scroll, I appear like magic ✨. This smooth experience is powered by Lenis + Three.js + Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SmoothSection;
