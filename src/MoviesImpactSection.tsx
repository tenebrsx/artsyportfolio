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
      {/* SECTION IDENTIFIER */}a <div className={styles.sectionNumber}>05</div>
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
              <h3 className={styles.movieTitle}>FANTASTIC MR. FOX</h3>
              <div className={styles.movieYear}>2009 × WES ANDERSON</div>
              <p className={styles.movieDescription}>
                Yeah, I know — a kids' movie. But it's really more than that.
                Fantastic Mr. Fox is the first film that made me realize how
                much precision can still feel alive. Every frame is arranged —
                the symmetry, the color, the rhythm of the cuts — and yet it
                never feels stiff. It breathes. Beneath the cleverness and the
                comedy, there's a melancholy that sneaks up on you: the hunger
                for more, the restlessness that drives Mr. Fox even when he has
                enough. That duality — joy on the surface, ache underneath — is
                what shaped me. It showed me that style doesn't have to be
                decoration; it can be expression. Even a stop-motion fox can
                carry existential weight. After watching it, I found myself
                obsessing over details in other films: how a pause is held, how
                color shifts meaning, how rhythm itself tells a story. That
                balance — playful and profound — is exactly what I crave in
                cinema.
              </p>
              <div className={styles.impactStatement}>
                "TAUGHT ME THAT STYLE CAN BE EXPRESSION, NOT JUST DECORATION"
              </div>
            </div>
          </div>

          {/* MOVIE 02 */}
          <div className={styles.movieCard}>
            <div className={styles.movieNumber}>02</div>
            <div className={styles.movieContent}>
              <h3 className={styles.movieTitle}>DEAD POETS SOCIETY</h3>
              <div className={styles.movieYear}>1989 × PETER WEIR</div>
              <p className={styles.movieDescription}>
                Everyone warned me this one would wreck me. Watching Dead Poets
                Society felt like stepping into air I hadn't breathed before. At
                first, it was exhilarating — discovery, poetry, the thrill of
                seeing young people set free by art. It made rebellion feel
                alive, like the walls around them might actually give way. But
                then came the ending, and the ground collapsed. Neil's fate
                paralyzed me. I sat frozen, realizing the same story that had
                just offered freedom could also devastate without mercy. That's
                what shaped me: the understanding that art doesn't owe us
                comfort. It can inspire, but it can also wound. It can breathe
                life into you, then rip the air back out. Dead Poets Society
                taught me to respect that duality. Film isn't just about leaving
                the theater uplifted — sometimes its greatest gift is leaving
                you shaken, unable to move, staring at the weight of what you've
                just seen.
              </p>
              <div className={styles.impactStatement}>
                "SHOWED ME ART CAN INSPIRE AND DEVASTATE IN EQUAL MEASURE"
              </div>
            </div>
          </div>

          {/* MOVIE 03 */}
          <div className={styles.movieCard}>
            <div className={styles.movieNumber}>03</div>
            <div className={styles.movieContent}>
              <h3 className={styles.movieTitle}>BEAUTIFUL BOY</h3>
              <div className={styles.movieYear}>
                2018 × FELIX VAN GROENINGEN
              </div>
              <p className={styles.movieDescription}>
                I wasn't prepared for how quiet devastation could be. Beautiful
                Boy unsettled me in ways I didn't expect. It isn't loud, it
                doesn't lean on spectacle — it's quiet, patient, unbearably
                human. Watching a father and son pulled in opposite directions
                by love and addiction was more painful than any chaos-driven
                story. What stayed with me wasn't the relapse itself, but the
                waiting: the endless cycle of hope, disappointment, forgiveness,
                collapse. It captured something I've seen too closely in real
                life — that recovery isn't a straight line, and love doesn't
                guarantee rescue. It gripped me so hard that, for the first time
                ever, I bought the book that inspired it — Nic Sheff's memoir —
                just to stay in that world a little longer. That moment told me
                something about myself: when a film matters, I don't let it go.
                Beautiful Boy proved that cinema can carry unbearable tenderness
                alongside unbearable pain, and sometimes its greatest power is
                refusing to look away.
              </p>
              <div className={styles.impactStatement}>
                "SHOWED ME CINEMA'S POWER TO CARRY TENDERNESS AND PAIN TOGETHER"
              </div>
            </div>
          </div>
        </div>

        {/* SYNTHESIS STATEMENT */}
        <div className={styles.synthesisSection}>
          <div className={styles.synthesisTitle}>CINEMATIC DNA</div>
          <div className={styles.synthesisText}>
            These cinematic experiences shaped my artistic DNA: Anderson's
            meticulous craft that makes every frame breathe with intention,
            Tarantino's fearless approach to genre-blending storytelling that
            refuses to compromise, and Lynch's mastery of psychological depth
            that finds beauty in darkness. Each represents a facet of the
            filmmaker I aspire to become—someone who values precision,
            authenticity, and the courage to explore uncomfortable truths.
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
        <div className={styles.directorItem}>ANDERSON</div>
        <div className={styles.directorItem}>TARANTINO</div>
        <div className={styles.directorItem}>LYNCH</div>
      </div>
      <div className={styles.cornerInfo}>
        SECTION 05 × MOVIES × IMPACT × CINEMATIC INFLUENCES
      </div>
      {/* DECORATIVE ELEMENTS */}
      <div className={styles.filmStrip} />
      <div className={styles.projectorBeam} />
    </div>
  );
};

export default MoviesImpactSection;
