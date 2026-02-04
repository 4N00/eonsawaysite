"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/assets/img/bg1.png", alt: "Eons Away Gameplay" },
  { src: "/assets/img/eonsAwayBg.png", alt: "The World of Orya" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="gallery-section" id="gallery" ref={ref}>
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Screenshots</span>
          <h2>Glimpses of Orya</h2>
          <p>Hand-drawn visuals that bring the world to life.</p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              className="gallery-item"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => setActiveImage(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Trailer Section */}
        <motion.div
          className="trailer-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h3>Watch the Trailer</h3>
          <motion.div
            className="trailer-wrapper"
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <iframe
              src="https://www.youtube.com/embed/XOA8u7t_PHs"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Eons Away Trailer"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {activeImage !== null && (
            <motion.div
              className="lightbox"
              onClick={() => setActiveImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                />
                <button
                  className="lightbox-close"
                  onClick={() => setActiveImage(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
