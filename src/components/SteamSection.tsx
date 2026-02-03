"use client";

import Link from "next/link";

export default function SteamSection() {
  return (
    <>
      <section className="section" id="steam-section">
        <div className="imageWide">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/eonsAwayBg.png" alt="Eons Away Background" />
          <div className="imageWide__content">
            <Link href="https://store.steampowered.com/app/2164820/Eons_Away/" target="_blank">
              <h2>WISHLIST NOW</h2>
              <svg className="wishlist" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="293.5px" height="88.5px" viewBox="0 0 293.5 88.5">
                <title>Wishlist on Steam</title>
                <path
                  className="logo-fill"
                  fill="currentColor"
                  d="M44.1 0C20.8 0 1.8 17.9 0 40.7l23.7 9.8c2-1.4 4.4-2.2 7-2.2h.7L42 33.1v-.2c0-9.2 7.5-16.7 16.7-16.7s16.7 7.5 16.7 16.7-7.5 16.7-16.7 16.7h-.4l-15 10.7v.6a12.5 12.5 0 01-24.8 2.4l-17-7a44.27 44.27 0 0042.6 32.2c24.4 0 44.2-19.8 44.2-44.2C88.3 19.8 68.5 0 44.1 0z"
                />
                <path
                  className="logo-fill"
                  fill="currentColor"
                  d="M27.7 67.1l-5.4-2.2c1 2 2.6 3.7 4.8 4.6 4.8 2 10.3-.3 12.3-5.1 1-2.3 1-4.9 0-7.2s-2.8-4.1-5.1-5.1-4.8-.9-6.9-.1l5.6 2.3c3.5 1.5 5.2 5.5 3.7 9a6.8 6.8 0 01-9 3.8zM69.8 32.8c0-6.1-5-11.1-11.1-11.1a11.14 11.14 0 000 22.3c6.1 0 11.1-5 11.1-11.2zm-19.5 0c0-4.6 3.7-8.4 8.4-8.4 4.6 0 8.4 3.7 8.4 8.4 0 4.6-3.7 8.3-8.4 8.3a8.3 8.3 0 01-8.4-8.3z"
                />
                <path
                  className="logo-fill"
                  fill="currentColor"
                  d="M135.6 30.3l-3 5.2c-2.3-1.6-5.4-2.6-8.1-2.6-3.1 0-5 1.3-5 3.6 0 2.8 3.4 3.4 8.4 5.2 5.4 1.9 8.5 4.2 8.5 9.1 0 6.8-5.3 10.6-13 10.6-3.7 0-8.3-1-11.7-3.1l2.2-5.8c2.8 1.5 6.2 2.4 9.2 2.4 4.1 0 6-1.5 6-3.7 0-2.5-2.9-3.3-7.7-4.9-5.4-1.8-9.1-4.2-9.1-9.7 0-6.2 5-9.8 12.1-9.8 4.9.2 8.9 1.8 11.2 3.5zM158.7 33.6v27.3h-7V33.6h-10.1v-6h27.2v6h-10.1zM183.5 33.5V41h13.4v6h-13.4v7.8H199v6h-22.5V27.6H199v6h-15.5zM214.6 54.4l-2.2 6.5h-7.3l12.5-33.3h7l12.8 33.3h-7.6l-2.3-6.5h-12.9zm6.5-18.9l-4.5 13.3h9.2l-4.7-13.3zM273.3 40.5L264.2 60h-3.9l-9-19.3V61h-6.7V27.6h6.7l11.2 24.1 10.8-24.1h6.7v33.3h-6.7V40.5zM293.5 31.8c0 2.9-2.1 4.6-4.6 4.6-2.5 0-4.6-1.8-4.6-4.6 0-2.9 2.2-4.6 4.6-4.6a4.4 4.4 0 014.6 4.6zm-8.5 0c0 2.4 1.7 3.9 3.8 3.9 2.1 0 3.8-1.5 3.8-3.9s-1.7-3.9-3.8-3.9a3.7 3.7 0 00-3.8 3.9zm3.9-2.4c1.2 0 1.6.6 1.6 1.3 0 .6-.4 1-.8 1.3l1.1 2h-.9l-.9-1.8h-1V34h-.7v-4.6h1.6zm-.8 2.1h.8c.5 0 .8-.3.8-.7 0-.4-.2-.7-.8-.7h-.8v1.4z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="edgeImage" src="/assets/img/edge.png" alt="" width={600} />
    </>
  );
}
