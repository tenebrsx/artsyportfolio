import React from "react";
import styles from "./MoviesImpactSection.module.css";

const MoviesImpactSection: React.FC = () => {
  return (
    <div className={styles.moviesContainer}>
      {/* GEOMETRIC ELEMENTS */}
      <div className={styles.purpleBlock} />
      <div className={styles.whiteTriangle} />
      <div className={styles.redSquare} />
      <div className={styles.blackCircle} />

      {/* SECTION IDENTIFIER */}
      <div className={styles.sectionNumber}>06</div>
      <div className={styles.sectionLabel}>FILMS THAT SHAPED ME</div>

      {/* MAIN CONTENT */}
      <div className={styles.contentContainer}>
        <h2 className={styles.mainHeading}>
          <span className={styles.headingLine1}>MOVIES</span>
          <span className={styles.headingLine2}>THAT</span>
          <span className={styles.headingLine3}>SHAPED</span>
          <span className={styles.headingLine4}>ME</span>
        </h2>

        <div className={styles.introText}>
          THREE CINEMATIC EXPERIENCES THAT DEFINED MY ARTISTIC VISION
        </div>

        {/* MOVIES GRID */}
        <div className={styles.moviesGrid}>
          {/* MOVIE 01 */}
          <div className={styles.movieCard}>
            <div className={styles.movieNumber}>01</div>
            <div className={styles.movieContent}>
              <h3 className={styles.movieTitle}>BLADE RUNNER 2049</h3>
              <div className={styles.movieYear}>2017 × DENIS VILLENEUVE</div>
              <p className={styles.movieDescription}>
                Villeneuve's masterpiece taught me that science fiction can be
                poetry. Every frame is a painting, every sound design choice
                deliberate. The way it builds atmosphere through silence and
                space showed me how cinema can transcend dialogue to speak
                directly to the soul.
              </p>
              <div className={styles.impactStatement}>
                "SHOWED ME HOW VISUAL STORYTELLING CAN BE PURE EMOTION"
              </div>
            </div>
          </div>

          {/* MOVIE 02 */}
          <div className={styles.movieCard}>
            <div className={styles.movieNumber}>02</div>
            <div className={styles.movieContent}>
              <h3 className={styles.movieTitle}>THE GRAND BUDAPEST HOTEL</h3>
              <div className={styles.movieYear}>2014 × WES ANDERSON</div>
              <p className={styles.movieDescription}>
                Anderson's obsessive attention to symmetry and color palette
                precision revealed how every visual element can serve narrative.
                The meticulous production design doesn't just support the
                story—it IS the story. This film taught me that style and
                substance aren't opposites.
              </p>
              <div className={styles.impactStatement}>
                "PROVED THAT VISUAL OBSESSION CAN CREATE EMOTIONAL DEPTH"
              </div>
            </div>
          </div>

          {/* MOVIE 03 */}
          <div className={styles.movieCard}>
            <div className={styles.movieNumber}>03</div>
            <div className={styles.movieContent}>
              <h3 className={styles.movieTitle}>PARASITE</h3>
              <div className={styles.movieYear}>2019 × BONG JOON-HO</div>
              <p className={styles.movieDescription}>
                Bong Joon-ho's masterwork demonstrated how cinema can be both
                entertaining and socially conscious without sacrificing either.
                The spatial metaphors, the genre-bending narrative, the way
                architecture becomes character—this film expanded my
                understanding of what movies can accomplish.
              </p>
              <div className={styles.impactStatement}>
                "TAUGHT ME CINEMA CAN CHANGE HOW PEOPLE SEE THE WORLD"
              </div>
            </div>
          </div>
        </div>

        {/* SYNTHESIS STATEMENT */}
        <div className={styles.synthesisSection}>
          <div className={styles.synthesisTitle}>CINEMATIC DNA</div>
          <div className={styles.synthesisText}>
            These three films represent the filmmaker I aspire to become: someone
            who combines Villeneuve's atmospheric mastery, Anderson's visual
            precision, and Bong's social consciousness. Each director proved that
            personal vision and technical excellence can coexist.
          </div>
        </div>
      </div>

      {/* SIDE ELEMENTS */}
      <div className={styles.sideNote}>
        CINEMATIC
        <br />
        INFLUENCES
        <br />
        ANALYSIS
      </div>

      <div className={styles.directorList}>
        <div className={styles.directorItem}>VILLENEUVE</div>
        <div className={styles.directorItem}>ANDERSON</div>
        <div className={styles.directorItem}>BONG JOON-HO</div>
      </div>

      <div className={styles.cornerInfo}>
        SECTION 06 × MOVIES × IMPACT × CINEMATIC INFLUENCES
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className={styles.filmStrip} />
      <div className={styles.projectorBeam} />
    </div>
  );
};

export default MoviesImpactSection;
