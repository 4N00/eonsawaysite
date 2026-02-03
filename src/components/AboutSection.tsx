"use client";

export default function AboutSection() {
  return (
    <>
      <section className="aboutSection" id="section">
        <h1>About Eons Away</h1>
        <p>
          Eons Away is an RPG focused on turn-based combat and progression. Explore Orya, a vibrant handpainted world full of mysteries and an incredible story. Every decision is important, be it how you fight your battles, the quests you take, or the friends/enemies you make. Choose your path wisely.
        </p>
      </section>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="edgeImageRotate" src="/assets/img/edge.png" alt="" width={600} />
    </>
  );
}
