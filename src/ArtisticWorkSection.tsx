import React from "react";
import styles from "./ArtisticWorkSection.module.css";

const ArtisticWorkSection: React.FC = () => {
  return (
    <div className={styles.artisticContainer}>
      {/* GEOMETRIC ELEMENTS */}
      <div className={styles.redBlock} />
      <div className={styles.redStripe} />
      <div className={styles.blackTriangle} />
      <div className={styles.whiteSquare} />
      <div className={styles.blackBlock} />
      <div className={styles.whiteCircle} />
      <div className={styles.yellowAccent} />

      {/* SECTION IDENTIFIER */}
      <div className={styles.sectionNumber}>04</div>
      <div className={styles.sectionLabel}>ARTISTIC WORK</div>

      {/* MAIN CONTENT */}
      <div className={styles.contentContainer}>
        <h2 className={styles.mainHeading}>
          <span className={styles.headingLine1}>MY</span>
          <span className={styles.headingLine2}>ARTISTIC</span>
          <span className={styles.headingLine3}>WORK</span>
        </h2>

        <div className={styles.introText}>
          THREE PROJECTS THAT DEFINE MY CREATIVE VISION AND ARTISTIC JOURNEY
        </div>

        {/* PROJECT GRID */}
        <div className={styles.projectGrid}>
          {/* PROJECT 01 */}
          <div className={styles.projectCard}>
            <div className={styles.projectNumber}>01</div>
            <div className={styles.projectImage}>
              <img
                src="/Nighthawks_by_Edward_Hopper_1942.jpg"
                alt="Edward Hopper's Nighthawks - Iconic painting of a late-night diner scene depicting cinematic mood and atmosphere"
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>CINEMOOD</h3>
              <p className={styles.projectDescription}>
                Ever find yourself endlessly scrolling through Letterboxd,
                knowing exactly how you feel but unable to find the film that
                matches that mood? CINEMOOD was born from that frustration.
                Instead of browsing by genre or rating, it connects you to films
                through emotion—because sometimes you need something
                melancholic, not just 'drama.' It's film discovery that actually
                understands how cinema works: through feeling first, everything
                else second.
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.metaItem}>MEDIUM: WEB APPLICATION</span>
                <span className={styles.metaItem}>YEAR: 2025</span>
                <span className={styles.metaItem}>STATUS: COMPLETED</span>
              </div>
              <button
                className={styles.projectButton}
                aria-label="View CINEMOOD live demo"
              >
                VIEW LIVE DEMO
              </button>
            </div>
          </div>

          {/* PROJECT 02 */}
          <div className={styles.projectCard}>
            <div className={styles.projectNumber}>02</div>
            <div className={styles.projectImage}>
              <img
                src="/composition-8.jpg"
                alt="Kandinsky's Composition 8 - Abstract geometric artwork with vibrant colors and dynamic forms"
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>MAGNAWEB</h3>
              <p className={styles.projectDescription}>
                This is my workshop. MAGNAWEB isn't just a design agency — it's
                where I practice, experiment, and push myself to master the
                craft of web design. Every project teaches me something new, and
                together they build toward a style that feels uniquely mine.
                It's less about selling websites and more about staying in
                motion: learning how design breathes, how it communicates, and
                how it shapes the way people see the world.
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.metaItem}>
                  MEDIUM: WEB DESIGN AGENCY
                </span>
                <span className={styles.metaItem}>YEAR: 2025</span>
                <span className={styles.metaItem}>STATUS: ACTIVE</span>
              </div>
              <button
                className={styles.projectButton}
                aria-label="View MAGNAWEB website"
                onClick={() =>
                  window.open(
                    "https://www.magnaweb.net/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                VIEW WEBSITE
              </button>
            </div>
          </div>

          {/* PROJECT 03 */}
          <div className={styles.projectCard}>
            <div className={styles.projectNumber}>03</div>
            <div className={styles.projectImage}>
              <img
                src="/Escher's_Relativity.jpg"
                alt="Escher's Relativity - M.C. Escher's lithograph showing impossible staircases and perspectives"
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>IS FREE WILL AN ILLUSION?</h3>
              <p className={styles.projectDescription}>
                This essay confronts the most uncomfortable question in
                philosophy: Are we truly free, or just sophisticated prisoners
                of our own conditioning? Rather than dismissing free will as
                illusion, I argue it's something rarer—a capacity that must be
                earned through conscious interruption of unconscious patterns.
                Using neuroscience research and personal reflection, I explore
                why most people live reactively, and what it means to wake up
                enough that your choices become genuinely yours. It's not just
                philosophy—it's a challenge. Because once you see the edge of
                real freedom, you can't unsee it.
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.metaItem}>
                  MEDIUM: PHILOSOPHICAL ESSAY
                </span>
                <span className={styles.metaItem}>YEAR: 2025</span>
                <span className={styles.metaItem}>STATUS: COMPLETED</span>
              </div>
              <button
                className={styles.projectButton}
                aria-label="Read Free Will essay"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/1nsUPMxKdAK5iT6njAm7ayX2EbBFUE6hkShywMyIw8DM/edit?usp=sharing",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                READ ESSAY
              </button>
            </div>
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className={styles.closingStatement}>
          <div className={styles.statementText}>
            "EACH PROJECT IS A STEPPING STONE TOWARD MY ULTIMATE GOAL: CREATING
            WORLDS THAT MATTER"
          </div>
        </div>
      </div>

      {/* SIDE ELEMENTS */}
      <div className={styles.sideNote}>
        CREATIVE
        <br />
        PORTFOLIO
        <br />
        SHOWCASE
      </div>

      <div className={styles.cornerInfo}>
        SECTION 04 × ARTISTIC WORK × THREE PROJECTS × CREATIVE VISION
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className={styles.decorativeSquare} />
      <div className={styles.decorativeLine} />
    </div>
  );
};

export default ArtisticWorkSection;
