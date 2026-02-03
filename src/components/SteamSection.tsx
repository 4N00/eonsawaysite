"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SteamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/eonsAwayBg.png"
          alt="Eons Away Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative edge image - left side */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full opacity-50 lg:block">
        <Image
          src="/assets/img/edge.png"
          alt=""
          width={150}
          height={600}
          className="h-full w-auto object-cover"
        />
      </div>

      {/* Decorative edge image - right side */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full opacity-50 lg:block">
        <Image
          src="/assets/img/edge.png"
          alt=""
          width={150}
          height={600}
          className="h-full w-auto rotate-180 object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="https://store.steampowered.com/app/2164820/Eons_Away/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 transition-transform hover:scale-105"
          >
            <h2 className="font-['Josefin_Sans'] text-[32px] font-light tracking-[7.04px] text-white">
              WISHLIST NOW
            </h2>

            {/* Steam Logo */}
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 256 259"
                className="h-12 w-12 md:h-16 md:w-16"
                fill="white"
              >
                <path d="M127.779 0C60.227 0 5.252 52.126.584 118.707l68.545 28.336c5.849-4.017 12.906-6.376 20.521-6.376.685 0 1.362.02 2.031.058l30.69-44.461v-.624c0-26.937 21.915-48.852 48.86-48.852 26.938 0 48.86 21.915 48.86 48.86 0 26.937-21.922 48.852-48.86 48.852h-1.133l-43.71 31.203c0 .563.031 1.133.031 1.703 0 20.24-16.442 36.674-36.682 36.674-17.892 0-32.828-12.832-35.998-29.79L4.18 158.685C18.783 214.443 68.922 255.28 128.221 259c70.663 0 127.779-57.108 127.779-127.779C256 58.482 198.442 0 127.779 0" />
                <path d="M81.281 225.107l-15.533-6.42c2.756 5.704 7.298 10.596 13.158 13.436 12.674 6.132 27.883.736 34.015-11.946 2.973-6.143 3.146-12.979.482-19.238-2.657-6.26-7.612-11.051-13.955-14.024-6.256-2.929-12.859-2.849-18.755-.454l16.06 6.64c9.34 3.865 13.772 14.472 9.908 23.812-3.864 9.333-14.472 13.765-23.812 9.907l-.007.007-.007.007-.554-.224.007-.007-.007.007zM220.116 145.489c0-17.953-14.607-32.56-32.567-32.56-17.96 0-32.567 14.607-32.567 32.56 0 17.96 14.607 32.568 32.567 32.568 17.96 0 32.567-14.607 32.567-32.568zm-57.107.048c0-13.558 10.999-24.557 24.556-24.557 13.558 0 24.557 10.999 24.557 24.557 0 13.558-11 24.556-24.557 24.556-13.557 0-24.556-10.998-24.556-24.556z" />
              </svg>
              <span className="font-['Open_Sans'] text-[32px] font-normal text-white">
                STEAM<sup className="text-sm">®</sup>
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
