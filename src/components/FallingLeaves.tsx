"use client";

import { useEffect, useState, useRef } from "react";

const LEAF_IMAGES = [
  "/assets/img/Leave1 (1).png",
  "/assets/img/leave2 (1).png",
  "/assets/img/leave3 (1).png",
  "/assets/img/leave4 (1).png",
  "/assets/img/leave5 (1).png",
];

const KEYFRAMES = `
@keyframes leafDrift {
  0%   { transform: translateX(0); opacity: 0; }
  5%   { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateX(calc(100vw + 120px)); opacity: 0; }
}
@keyframes leafFlutter {
  0%   { transform: translateY(calc(var(--fa) * -1px)); }
  100% { transform: translateY(calc(var(--fa) * 1px)); }
}
@keyframes leafSpin {
  0%   { transform: rotate(0deg) rotateY(0deg); }
  100% { transform: rotate(360deg) rotateY(360deg); }
}
`;

interface Leaf {
  id: number;
  image: string;
  startY: number;
  size: number;
  driftDuration: number;
  flutterDuration: number;
  spinDuration: number;
  flutterAmplitude: number;
  opacity: number;
  spinDirection: "normal" | "reverse";
  flutterDelay: number;
}

let nextId = 0;

function createLeaf(maxY: number): Leaf {
  return {
    id: nextId++,
    image: LEAF_IMAGES[Math.floor(Math.random() * LEAF_IMAGES.length)],
    startY: Math.random() * maxY,
    size: 13 + Math.random() * 22,
    driftDuration: 14 + Math.random() * 18,
    flutterDuration: 1.5 + Math.random() * 2.5,
    spinDuration: 3 + Math.random() * 7,
    flutterAmplitude: 20 + Math.random() * 50,
    opacity: 1,
    spinDirection: Math.random() > 0.5 ? "normal" : "reverse",
    flutterDelay: Math.random() * -4,
  };
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [pageHeight, setPageHeight] = useState(0);
  const [mounted, setMounted] = useState(false);
  const spawnedRef = useRef(false);

  useEffect(() => setMounted(true), []);

  // Track full page height
  useEffect(() => {
    if (!mounted) return;
    const update = () => setPageHeight(document.documentElement.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    window.addEventListener("load", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", update);
    };
  }, [mounted]);

  // Spawn leaves spread across the full page
  useEffect(() => {
    if (!mounted || pageHeight === 0 || spawnedRef.current) return;
    spawnedRef.current = true;

    let alive = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const spawnLeaf = () => {
      if (!alive) return;
      const maxY = document.documentElement.scrollHeight;
      const leaf = createLeaf(maxY);
      setLeaves((prev) => [...prev, leaf]);

      const t = setTimeout(() => {
        if (!alive) return;
        setLeaves((prev) => prev.filter((l) => l.id !== leaf.id));
        spawnLeaf();
      }, (leaf.driftDuration + 1) * 1000);
      timeouts.push(t);
    };

    // ~1 leaf per 220px of page height, max 35
    const count = Math.min(Math.floor(pageHeight / 220), 35);
    for (let i = 0; i < count; i++) {
      const t = setTimeout(spawnLeaf, i * 400);
      timeouts.push(t);
    }

    return () => {
      alive = false;
      timeouts.forEach(clearTimeout);
    };
  }, [mounted, pageHeight]);

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: pageHeight > 0 ? pageHeight : "100%",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            style={{
              position: "absolute",
              left: -60,
              top: leaf.startY,
              animation: `leafDrift ${leaf.driftDuration}s linear forwards`,
            }}
          >
            <div
              style={{
                ["--fa" as string]: leaf.flutterAmplitude,
                animation: `leafFlutter ${leaf.flutterDuration}s ease-in-out ${leaf.flutterDelay}s infinite alternate`,
              }}
            >
              <div
                style={{
                  width: leaf.size,
                  height: leaf.size,
                  opacity: leaf.opacity,
                  animation: `leafSpin ${leaf.spinDuration}s linear infinite`,
                  animationDirection: leaf.spinDirection,
                }}
              >
                <img
                  src={leaf.image}
                  alt=""
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
