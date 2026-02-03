"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image (shows first, then video covers it) */}
        <Image
          src="/assets/img/bg1.png"
          alt="Eons Away Background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Vimeo Video Background */}
        <div className="absolute inset-0 z-[1]">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/814183658?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  style={{
                    width: '100vw',
                    height: '56.25vw',
                    minHeight: '100vh',
                    minWidth: '177.78vh',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-[2] bg-black/20" />
      </div>

      {/* Header with Social Links */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-20 flex justify-center p-8"
      >
        <div className="flex">
          <Link
            href="https://twitter.com/eonsawaygame/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[54px] w-[54px] items-center justify-center transition-transform hover:scale-110"
          >
            <Image
              src="/assets/img/twitter.png"
              alt="Follow us on Twitter"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://www.instagram.com/eonsawaygame/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[54px] w-[54px] items-center justify-center transition-transform hover:scale-110"
          >
            <Image
              src="/assets/img/instagram.png"
              alt="Connect with us on Instagram"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://discord.gg/4Z8QZ9Z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[50px] w-[50px] items-center justify-center transition-transform hover:scale-110"
          >
            <Image
              src="/assets/img/discord.png"
              alt="Join us on Discord"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=""
        >
          <Image
            src="/assets/img/EonsAwayLogo.png"
            alt="Eons Away Logo"
            width={384}
            height={306}
            className="h-auto w-[280px] md:w-[340px] lg:w-[384px]"
            priority
          />
        </motion.div>

        {/* Wishlist Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Link
            href="https://store.steampowered.com/app/2164820/Eons_Away/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated inline-block border border-white px-4 py-[13.6px] text-[18px] tracking-[3.96px] text-white transition-all hover:bg-white/10"
          >
            Wishlist
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="animate-bounce-slow block text-white"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
