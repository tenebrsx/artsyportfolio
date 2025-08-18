import React, { useState } from "react";
import styles from "./FavoriteSection.module.css";

const FavoriteSection: React.FC = () => {
  const [spoilerRevealed, setSpoilerRevealed] = useState(false);

  const handleSpoilerClick = () => {
    setSpoilerRevealed(true);
  };

  return (
    <div className={styles.favoriteContainer}>
      {/* GEOMETRIC ELEMENTS */}
      <div className={styles.blueBlock} />
      <div className={styles.redTriangle} />
      <div className={styles.blackSquare} />
      <div className={styles.whiteCircle} />
      <div className={styles.yellowStripe} />
      <div className={styles.cyanAccent} />
      <div className={styles.diagonalLine1} />
      <div className={styles.diagonalLine2} />

      {/* SECTION IDENTIFIER */}
      <div className={styles.sectionNumber}>02</div>
      <div className={styles.sectionLabel}>FAVORITE</div>

      {/* MAIN CONTENT */}
      <div className={styles.contentContainer}>
        <div className={styles.disclaimer}>
          <span className={styles.disclaimerText}>NOT A MOVIE BUT;</span>
        </div>

        <h2 className={styles.mainHeading}>
          <span className={styles.headingLine1}>TWIN</span>
          <span className={styles.headingLine2}>PEAKS</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.mainText}>
            When I first started Twin Peaks, I thought I knew what I was
            watching. A small-town mystery, quirky characters, coffee, and pie
            repeated like a ritual. It felt safe, familiar, almost comforting.
          </p>

          <p className={styles.mainText}>
            But that comfort was a setup. Lynch built the surface I trusted,
            then shattered it. What seemed like humour soured into dread. A
            smile lasted too long, and suddenly it wasn't funny anymore. A
            hallway stretched wider than it should, and suddenly it wasn't just
            a hallway. And then came the mirror —{" "}
            {spoilerRevealed ? (
              <span>
                Leland's face splitting open to reveal BOB staring back
              </span>
            ) : (
              <button
                className={styles.spoilerButton}
                onClick={handleSpoilerClick}
                aria-label="Click to reveal Twin Peaks spoiler"
              >
                [SPOILER - Click to Reveal]
              </button>
            )}
            . That moment branded itself onto me: horror not as spectacle, but
            as infection, crawling out of the screen and into my reflection.
          </p>

          <div className={styles.emphasizedQuote}>
            "THE OWLS ARE NOT WHAT THEY SEEM"
          </div>

          <p className={styles.mainText}>
            What hooked me wasn't the darkness itself, but the way it rewired
            the familiar. A lamp, a silence, the slant of light across a face —
            everything felt charged, alive, dangerous. For days after that
            scene, I hesitated in front of my mirrors. Even the most familiar
            spaces stopped feeling safe. That's what I carry with me most: Agent
            Cooper's conviction that nothing is wasted. He listens to stray
            words, dreams, shivers of brightness as if they're all part of the
            message.
          </p>

          <p className={styles.highlightText}>
            I DON'T CHASE ONE TONE. IF JOY IS TRUE, I WANT TO CAPTURE JOY. IF
            DREAD IS GENUINE, I'LL FOLLOW DREAD. WHIMSY AND DREAD CAN COEXIST,
            COLLIDING AND BLEEDING INTO EACH OTHER.
          </p>

          <p className={styles.mainText}>
            What lingers with me isn't the murder, or even the mystery — it's
            the atmosphere that seeps into everything around it. Twin Peaks made
            me suspicious of the everyday, reverent of the uncanny, attuned to
            the strangeness humming beneath daily life. And that's what I want
            my films to be: not windows you peer through from a distance, but
            rooms you're pulled into without warning. Rooms that trap you, shift
            the air around you, and leave you wondering — when you walk back out
            — if the world you thought was safe has already begun to crack.
          </p>
        </div>

        {/* TECHNICAL ELEMENTS */}
        <div className={styles.technicalGrid}>
          <div className={styles.techItem}>
            <span className={styles.techLabel}>ATMOSPHERE</span>
            <span className={styles.techValue}>100%</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techLabel}>MYSTERY</span>
            <span className={styles.techValue}>∞</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techLabel}>SURREALISM</span>
            <span className={styles.techValue}>MAXIMUM</span>
          </div>
        </div>
      </div>

      {/* SIDE ELEMENTS */}
      <div className={styles.sideNote}>
        DAVID
        <br />
        LYNCH
        <br />
        INFLUENCE
      </div>

      <div className={styles.yearLabel}>1990-1991</div>

      <div className={styles.cornerInfo}>
        SECTION 02 × FAVORITE × TWIN PEAKS × LYNCH
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className={styles.redDot} />
      <div className={styles.blackBar} />
    </div>
  );
};

export default FavoriteSection;
