import React from "react";
import styles from "./FavoriteSection.module.css";

const FavoriteSection: React.FC = () => {
  return (
    <div className={styles.favoriteContainer}>
      {/* GEOMETRIC ELEMENTS */}
      <div className={styles.blueBlock} />
      <div className={styles.redTriangle} />
      <div className={styles.blackSquare} />
      <div className={styles.whiteCircle} />

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
            David Lynch's Twin Peaks isn't just television—it's a masterclass in atmospheric storytelling that transcends conventional narrative structures. This surreal mystery series taught me that the most powerful stories live in the spaces between reality and dream.
          </p>

          <div className={styles.emphasizedQuote}>
            "THE OWLS ARE NOT WHAT THEY SEEM"
          </div>

          <p className={styles.mainText}>
            Lynch creates meaning through mood, through the pregnant pause, through the deliberate discomfort of the unknown. Every frame is composed with the precision of a painter, every sound designed to crawl under your skin and stay there.
          </p>

          <p className={styles.highlightText}>
            THIS IS THE KIND OF STORYTELLING I WANT TO CREATE—WORK THAT HAUNTS, THAT LINGERS, THAT REFUSES TO BE FORGOTTEN.
          </p>

          <p className={styles.mainText}>
            Twin Peaks showed me that cinema can be poetry, that narrative can be impressionistic, and that the most profound truths often come wrapped in mystery. It's not about giving answers—it's about asking the right questions.
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
