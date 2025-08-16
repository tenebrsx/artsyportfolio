import React from "react";
import styles from "./TechnicalPortfolioCTA.module.css";

const TechnicalPortfolioCTA: React.FC = () => {
  const handleRedirect = () => {
    window.open(
      "https://angelportfolio1.netlify.app",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={styles.ctaContainer}>
      {/* GEOMETRIC ELEMENTS */}
      <div className={styles.blackBlock} />
      <div className={styles.yellowTriangle} />
      <div className={styles.redCircle} />
      <div className={styles.whiteAccent} />

      {/* SECTION IDENTIFIER */}
      <div className={styles.sectionNumber}>06</div>
      <div className={styles.sectionLabel}>TECHNICAL</div>

      {/* MAIN CONTENT */}
      <div className={styles.contentContainer}>
        <div className={styles.questionText}>WANNA GET A LAYER DEEPER?</div>

        <h2 className={styles.mainHeading}>
          <span className={styles.headingLine1}>VIEW MY</span>
          <span className={styles.headingLine2}>TECHNICAL</span>
          <span className={styles.headingLine3}>PORTFOLIO!</span>
        </h2>

        <div className={styles.descriptionText}>
          CODE × DESIGN × ENGINEERING × INNOVATION
        </div>

        {/* CTA BUTTON */}
        <button
          className={styles.ctaButton}
          onClick={handleRedirect}
          aria-label="View Technical Portfolio"
        >
          <span className={styles.buttonText}>EXPLORE NOW</span>
          <div className={styles.buttonArrow}>→</div>
        </button>

        <div className={styles.linkText}>angelportfolio1.netlify.app</div>
      </div>

      {/* SIDE ELEMENTS */}
      <div className={styles.sideNote}>
        TECHNICAL
        <br />
        SKILLS
        <br />
        SHOWCASE
      </div>

      <div className={styles.cornerInfo}>
        SECTION 06 × TECHNICAL × PORTFOLIO × EXTERNAL LINK
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className={styles.floatingSquare} />
      <div className={styles.diagonalLine} />
    </div>
  );
};

export default TechnicalPortfolioCTA;
