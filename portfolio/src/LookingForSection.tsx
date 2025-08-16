import React from "react";
import styles from "./LookingForSection.module.css";

const LookingForSection: React.FC = () => {
  return (
    <div className={styles.lookingContainer}>
      {/* GEOMETRIC ELEMENTS */}
      <div className={styles.greenBlock} />
      <div className={styles.orangeCircle} />
      <div className={styles.blackTriangle} />
      <div className={styles.purpleAccent} />

      {/* SECTION IDENTIFIER */}
      <div className={styles.sectionNumber}>03</div>
      <div className={styles.sectionLabel}>LOOKING FOR</div>

      {/* MAIN CONTENT */}
      <div className={styles.contentContainer}>
        <h2 className={styles.mainHeading}>
          <span className={styles.headingLine1}>WHY</span>
          <span className={styles.headingLine2}>CHAVON</span>
          <span className={styles.headingLine3}>FILM?</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.mainText}>
            Chavon isn't just a film school—it's where Latin American
            storytelling meets global cinema excellence. This unique cultural
            bridge is exactly what my creative vision needs to flourish into
            something extraordinary and authentic.
          </p>

          <div className={styles.emphasizedBlock}>
            <span className={styles.emphasisLabel}>WHY CHAVON:</span>
            <span className={styles.emphasisText}>
              A SCHOOL THAT VALUES DIVERSE PERSPECTIVES AND NURTURES
              UNCONVENTIONAL CREATIVE PATHS
            </span>
          </div>

          <p className={styles.mainText}>
            Chavon's intimate class sizes and hands-on approach align perfectly
            with how I learn best. The school's emphasis on both technical
            excellence and personal artistic development creates the ideal
            environment for someone like me—unconventional background, but
            burning creative vision.
          </p>

          <div className={styles.wishList}>
            <div className={styles.wishItem}>
              <span className={styles.wishNumber}>01</span>
              <span className={styles.wishText}>
                DOMINICAN CULTURAL IMMERSION
              </span>
            </div>
            <div className={styles.wishItem}>
              <span className={styles.wishNumber}>02</span>
              <span className={styles.wishText}>BILINGUAL STORYTELLING</span>
            </div>
            <div className={styles.wishItem}>
              <span className={styles.wishNumber}>03</span>
              <span className={styles.wishText}>INDUSTRY CONNECTIONS</span>
            </div>
            <div className={styles.wishItem}>
              <span className={styles.wishNumber}>04</span>
              <span className={styles.wishText}>INTERNATIONAL PERSPECTIVE</span>
            </div>
          </div>

          <p className={styles.finalText}>
            Chavon will transform me into a filmmaker who understands both
            global cinema language and Latin American soul. Someone who can
            create stories that resonate across cultures while staying true to
            authentic human experience.
          </p>
        </div>
      </div>

      {/* SIDE ELEMENTS */}
      <div className={styles.sideNote}>
        CHAVON
        <br />
        FILM
        <br />
        SCHOOL
      </div>

      <div className={styles.inspirationText}>
        "THE PERFECT CULTURAL BRIDGE FOR MY CREATIVE VISION"
      </div>

      <div className={styles.cornerInfo}>
        SECTION 03 × WHY CHAVON × FILM SCHOOL × PERFECT MATCH
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className={styles.floatingDot} />
      <div className={styles.verticalLine} />
    </div>
  );
};

export default LookingForSection;
