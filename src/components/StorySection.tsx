"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
      <div className="edgeImageRotate" />
      <section className="story-section" id="story" ref={ref}>
      <div className="story-container">
        <motion.div
          className="story-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A Journey Through Time
          </motion.h2>
          <motion.div
            className="story-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              When rifts of darkness tear open and plunge the world into chaos, your younger
              brother is pulled into one before your eyes. With nothing left to lose, you leap
              into another rift, desperate to bring him back.
            </p>
            <p>
              You awaken in the same place—unknowingly <strong>a thousand years in the future</strong>.
              The world is no longer familiar. Determined to reunite with your brother, you set out
              on a journey across this strange new era.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="story-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="story-image-wrapper">
            <img src="/assets/img/eonsAwayBg.png" alt="The world of Orya" />
            <div className="story-image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
