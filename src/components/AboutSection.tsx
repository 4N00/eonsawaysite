"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-[70vh] flex-col items-center justify-center bg-black px-[86px] pb-0 pt-16"
    >
      {/* Decorative edge image - right side rotated */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-30 lg:block">
        <Image
          src="/assets/img/edge.png"
          alt=""
          width={200}
          height={400}
          className="rotate-180"
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-center font-['Josefin_Sans'] text-[48px] font-light tracking-[0.2em] text-white"
      >
        About Eons Away
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-left font-['Open_Sans'] text-[16px] leading-[27.2px] text-white/90"
      >
        Eons Away is an RPG focused on turn-based combat and progression. Explore Orya, a vibrant handpainted world full of mysteries and an incredible story. Every decision is important, be it how you fight your battles, the quests you take, or the friends/enemies you make. Choose your path wisely.
      </motion.p>
    </section>
  );
}
