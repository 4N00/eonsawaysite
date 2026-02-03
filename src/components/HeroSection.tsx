"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="top-hero">
      {/* Video Background */}
      <div className="video-background">
        <div className="video-foreground">
          <div className="video-ratio-wrapper">
            <iframe
              id="topHeroVideo"
              title="background"
              src="https://player.vimeo.com/video/814183658?background=1&quality=1080p"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay"
              className="fade-in-slower"
            />
            <Image
              className="bgHero fade-in"
              src="/assets/img/bg1.png"
              alt="background"
              fill
              priority
            />
          </div>
        </div>
        <div className="overlay" />
      </div>

      {/* Header */}
      <header className="header fade-in">
        <div className="social-media">
          <Link href="https://twitter.com/eonsawaygame/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/twitter.png" alt="Follow us on Twitter" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/eonsawaygame/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/instagram.png" alt="Connect with us on Instagram" width={30} height={30} />
          </Link>
          <Link href="https://discord.gg/4Z8QZ9Z" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/img/discord.png" alt="Join us on Discord" width={30} height={30} />
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="top-hero-content fade-in-slow">
        <div className="logo">
          <img src="/assets/img/EonsAwayLogo.png" alt="logo" width={500} />
        </div>
        <div className="button-wrapper fade-in-delay">
          <Link
            href="https://store.steampowered.com/app/2164820/Eons_Away/"
            target="_blank"
            className="btn btn-sm animated-button thar-two"
          >
            Wishlist
          </Link>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="top-hero__button-wrapper">
        <Link href="#section" className="top-hero__button" id="down-arrow" aria-label="Go down">
          <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="0.646447" x2="8.85354" y2="9.14644" stroke="white" />
            <line x1="8.14646" y1="9.14645" x2="16.6464" y2="0.646456" stroke="white" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
