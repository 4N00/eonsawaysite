"use client";

import { useEffect, useState, useRef } from "react";

const DOT_IMAGE = "/assets/img/dot (1).png";

const KEYFRAMES = `
@keyframes dotFloat {
  0%   { opacity: 0; transform: translate(0, 0); }
  15%  { opacity: var(--dot-o, 0.5); }
  75%  { opacity: var(--dot-o, 0.5); }
  100% { opacity: 0; transform: translate(var(--dot-dx, 0px), var(--dot-dy, 0px)); }
}
`;

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  dx: number;
  dy: number;
  opacity: number;
}

let nextDotId = 0;

function createDot(maxX: number, maxY: number): Dot {
  const angle = Math.random() * Math.PI * 2;
  const distance = 15 + Math.random() * 40;
  return {
    id: nextDotId++,
    x: Math.random() * maxX,
    y: Math.random() * maxY,
    size: 2 + Math.random() * 6,
    duration: 4 + Math.random() * 6,
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance,
    opacity: 0.3 + Math.random() * 0.5,
  };
}

export default function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [pageHeight, setPageHeight] = useState(0);
  const [mounted, setMounted] = useState(false);
  const spawnedRef = useRef(false);

  useEffect(() => setMounted(true), []);

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

  useEffect(() => {
    if (!mounted || pageHeight === 0 || spawnedRef.current) return;
    spawnedRef.current = true;

    let alive = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const spawnDot = () => {
      if (!alive) return;
      const maxY = document.documentElement.scrollHeight;
      const maxX = window.innerWidth;
      const dot = createDot(maxX, maxY);
      setDots((prev) => [...prev, dot]);

      const t = setTimeout(() => {
        if (!alive) return;
        setDots((prev) => prev.filter((d) => d.id !== dot.id));
        spawnDot();
      }, (dot.duration + 0.5) * 1000);
      timeouts.push(t);
    };

    // ~1 dot per 150px of page height, max 50
    const count = Math.min(Math.floor(pageHeight / 150), 50);
    for (let i = 0; i < count; i++) {
      const t = setTimeout(spawnDot, i * 200 + Math.random() * 300);
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
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            style={{
              position: "absolute",
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              ["--dot-dx" as string]: `${dot.dx}px`,
              ["--dot-dy" as string]: `${dot.dy}px`,
              ["--dot-o" as string]: dot.opacity,
              animation: `dotFloat ${dot.duration}s ease-in-out forwards`,
            }}
          >
            <img
              src={DOT_IMAGE}
              alt=""
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
