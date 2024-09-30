import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import Projects from './Projects';
import Main from './Main'; 
import Study from './Study';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div style={{ x }} className="flex h-full">
          <Main />
          <Projects />
          <Study />
        </motion.div>
      </div>
    </section>
  );
};
export default HorizontalScrollCarousel