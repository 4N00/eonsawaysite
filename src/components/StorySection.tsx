"use client";

export default function StorySection() {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        <div className="story-content">
          <span className="section-label">The Story</span>
          <h2>A Journey Through Time</h2>
          <div className="story-text">
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
          </div>
        </div>
        <div className="story-visual">
          <div className="story-image-wrapper">
            <img src="/assets/img/eonsAwayBg.png" alt="The world of Orya" />
            <div className="story-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
