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
            <div className={styles.projectImagePlaceholder}>
              <div className={styles.placeholderText}>PROJECT IMAGE</div>
              <div className={styles.placeholderSubtext}>VISUAL PREVIEW</div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>CINEMOOD</h3>
              <p className={styles.projectDescription}>
                A revolutionary web platform that discovers films based on
                emotions rather than genres. CINEMOOD bridges the gap between
                how we feel and what we want to watch, creating an intuitive
                connection between mood and cinema. This project showcases my
                understanding of user experience and emotional storytelling.
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.metaItem}>MEDIUM: WEB APPLICATION</span>
                <span className={styles.metaItem}>YEAR: 2024</span>
                <span className={styles.metaItem}>STATUS: COMPLETED</span>
              </div>
            </div>
          </div>

          {/* PROJECT 02 */}
          <div className={styles.projectCard}>
            <div className={styles.projectNumber}>02</div>
            <div className={styles.projectImagePlaceholder}>
              <div className={styles.placeholderText}>PROJECT IMAGE</div>
              <div className={styles.placeholderSubtext}>VISUAL PREVIEW</div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>MAGNAWEB</h3>
              <p className={styles.projectDescription}>
                My personal web design agency focused on creating bold,
                impactful digital experiences. MAGNAWEB represents my
                entrepreneurial spirit and technical expertise, combining
                creative vision with business acumen. This venture demonstrates
                my ability to lead projects from concept to execution.
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.metaItem}>
                  MEDIUM: WEB DESIGN AGENCY
                </span>
                <span className={styles.metaItem}>YEAR: 2024</span>
                <span className={styles.metaItem}>STATUS: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* PROJECT 03 */}
          <div className={styles.projectCard}>
            <div className={styles.projectNumber}>03</div>
            <div className={styles.projectImagePlaceholder}>
              <div className={styles.placeholderText}>PROJECT IMAGE</div>
              <div className={styles.placeholderSubtext}>VISUAL PREVIEW</div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>PROJECT THREE</h3>
              <p className={styles.projectDescription}>
                This space is reserved for my next creative breakthrough. While
                I'm still exploring the perfect medium and concept, this project
                will represent the evolution of my artistic voice and
                demonstrate my growth throughout my film education journey at
                Chavon.
              </p>
              <div className={styles.projectMeta}>
                <span className={styles.metaItem}>
                  MEDIUM: TO BE DETERMINED
                </span>
                <span className={styles.metaItem}>YEAR: 2024-2025</span>
                <span className={styles.metaItem}>STATUS: CONCEPTUALIZING</span>
              </div>
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

      <div className={styles.progressIndicator}>
        <div className={styles.progressLabel}>PORTFOLIO PROGRESS</div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
        <div className={styles.progressText}>75% COMPLETE</div>
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
