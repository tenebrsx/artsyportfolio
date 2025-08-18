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
      <div className={styles.sectionLabel}>INTENTION LETTER</div>

      {/* MAIN CONTENT */}
      <div className={styles.contentContainer}>
        <h2 className={styles.mainHeading}>
          <span className={styles.headingLine1}>INTENTION</span>
          <span className={styles.headingLine2}>LETTER</span>
          <span className={styles.headingLine3}>ESSAY</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.mainText}>
            Film just makes sense to me. Not because it "saved me," not because
            I grew up dreaming of cameras, but because no other art form can do
            what film does. It's the only place where everything collides —
            writing, sound, philosophy, design, business, comedy, tragedy. Every
            frame demands all of it at once. No shortcuts, no hiding.
          </p>

          <p className={styles.mainText}>
            I don't want to be only a filmmaker. I'll build other things in my
            life — businesses, ideas, experiments. But nothing challenges me the
            way film does. Business school feels like toddler math. Writing is
            only one tool. Philosophy stays abstract. Film swallows them whole,
            fuses them, and spits them back out as something alive. It's the
            closest thing to total art.
          </p>

          <div className={styles.emphasizedBlock}>
            <span className={styles.emphasisLabel}>OBSESSION:</span>
            <span className={styles.emphasisText}>
              THE DETAILS PEOPLE DON'T EVEN REALIZE ARE SHAPING THEM
            </span>
          </div>

          <p className={styles.mainText}>
            What fascinates me most are the details people don't even realize
            are shaping them. A curve in a frame. A shadow where it shouldn't
            be. The weight of silence. A shot held two seconds too long. Shapes,
            light, rhythm — they bypass logic and cut straight into the
            subconscious. That's not theory for me; it's obsession.
          </p>

          <p className={styles.mainText}>
            Sometimes that obsession comes out in strange ways. Once, I made a
            skit with nothing but shoes in my closet. I kept moving them around
            until they started to feel like characters, arguing over space. It
            was ridiculous. But it taught me something: film doesn't need scale
            to create meaning. Even a closet full of shoes has drama if you look
            hard enough.
          </p>

          <div className={styles.transitionBox}>
            <div className={styles.transitionText}>
              FILM IS WHERE MY INSTINCTS, CURIOSITY, AND DEFIANCE COLLIDE INTO
              SOMETHING THAT ACTUALLY MAKES SENSE
            </div>
          </div>

          <p className={styles.mainText}>
            If I had a camera tomorrow, I'd point it at a white room. Not one
            you walk into, but one you carry in your head — a place where time
            thickens, where silence presses like weight. The white room is the
            psyche stripped bare: no distractions, no masks, just the pressure
            of being forced to see yourself. To me, that's cinema at its rawest
            — not showing people what to look at, but trapping them in a space
            where they have no choice but to feel.
          </p>

          <p className={styles.finalText}>
            That's why I want to study it. Not to repeat what's already been
            done, but to sharpen the way I see, to turn that raw awareness into
            something deliberate. Film won't be the only way I try to make
            something meaningful. But it's the one place where my instincts, my
            curiosity, and my defiance actually make sense. Film just makes
            sense to me. It always has.
          </p>
        </div>
      </div>

      {/* SIDE ELEMENTS */}
      <div className={styles.sideNote}>
        INTENTION
        <br />
        LETTER
        <br />
        ESSAY
      </div>

      <div className={styles.inspirationText}>
        "FILM JUST MAKES SENSE TO ME"
      </div>

      <div className={styles.cornerInfo}>
        SECTION 03 × INTENTION LETTER × FILM PASSION × CREATIVE VISION
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className={styles.floatingDot} />
      <div className={styles.verticalLine} />
    </div>
  );
};

export default LookingForSection;
