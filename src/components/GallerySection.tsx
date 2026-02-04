"use client";

import { useState } from "react";

const galleryImages = [
  { src: "/assets/img/bg1.png", alt: "Eons Away Gameplay" },
  { src: "/assets/img/eonsAwayBg.png", alt: "The World of Orya" },
];

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-label">Screenshots</span>
          <h2>Glimpses of Orya</h2>
          <p>Hand-drawn visuals that bring the world to life.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setActiveImage(index)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Trailer Section */}
        <div className="trailer-section">
          <h3>Watch the Trailer</h3>
          <div className="trailer-wrapper">
            <iframe
              src="https://www.youtube.com/embed/XOA8u7t_PHs"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Eons Away Trailer"
            ></iframe>
          </div>
        </div>

        {/* Lightbox */}
        {activeImage !== null && (
          <div className="lightbox" onClick={() => setActiveImage(null)}>
            <div className="lightbox-content">
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
