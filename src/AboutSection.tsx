import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Poem sections with their content and mood
  const poemSections = [
    {
      id: "opening",
      content: (
        <>
          There was always something <span className={styles.keyWord}>off</span>
          .
        </>
      ),
      mood: "unsettled",
    },
    {
      id: "clarification",
      content: (
        <>
          Not wrong—<span className={styles.keyWord}>off</span>.
        </>
      ),
      mood: "unsettled",
    },
    {
      id: "frequency",
      content: (
        <>
          As if the world had tuned itself to a{" "}
          <span className={styles.emphasizedWord}>frequency</span>
        </>
      ),
      mood: "disconnected",
    },
    {
      id: "outsideHearing",
      content: (
        <>
          just outside my <span className={styles.emphasizedWord}>hearing</span>
          .
        </>
      ),
      mood: "disconnected",
    },
    {
      id: "sterile",
      content: (
        <>
          Too <span className={styles.criticalWord}>sterile</span>. Too{" "}
          <span className={styles.criticalWord}>rehearsed</span>. Too{" "}
          <span className={styles.criticalWord}>muted</span>.
        </>
      ),
      mood: "disconnected",
    },
    {
      id: "tired",
      content: (
        <>
          I didn't grow up angry. I grew up{" "}
          <span className={styles.emotionalWord}>tired</span>.
        </>
      ),
      mood: "exhausted",
    },
    {
      id: "sadWays",
      content: "Sad in ways I couldn't name,",
      mood: "masked",
    },
    {
      id: "mask",
      content: (
        <>
          a <span className={styles.metaphorWord}>mask</span> I wore so well it
          began to wear me.
        </>
      ),
      mood: "masked",
    },
    {
      id: "voiceInside",
      content: (
        <>
          Inside, a <span className={styles.innerWord}>voice</span> scraped
          against the walls,
        </>
      ),
      mood: "resistance",
    },
    {
      id: "echo",
      content: (
        <>
          but it only <span className={styles.isolatedWord}>echoed</span> back
          at me.
        </>
      ),
      mood: "isolated",
    },
    {
      id: "distant",
      content: (
        <>
          People thought I was{" "}
          <span className={styles.misunderstoodWord}>distant</span>.
        </>
      ),
      mood: "misunderstood",
    },
    {
      id: "mistook",
      content: "They mistook distance for absence.",
      mood: "misunderstood",
    },
    {
      id: "cruelerTruth",
      content: "The truth was crueler",
      mood: "awakening",
    },
    {
      id: "noticedEverything",
      content: (
        <>
          I <span className={styles.awareWord}>noticed everything</span>.
        </>
      ),
      mood: "hyperaware",
    },
    {
      id: "tremor",
      content: "The tremor hiding in a steady voice.",
      mood: "hyperaware",
    },
    {
      id: "corner",
      content: "The corner of a mouth betraying contempt.",
      mood: "hyperaware",
    },
    {
      id: "eyes",
      content: 'Eyes rehearsing "I\'m fine" while collapsing inside.',
      mood: "empathetic",
    },
    {
      id: "fractures",
      content: (
        <>
          I lived in the <span className={styles.metaphorWord}>fractures</span>{" "}
          between gestures,
        </>
      ),
      mood: "empathetic",
    },
    {
      id: "seconds",
      content: "the seconds no one else cared to see.",
      mood: "empathetic",
    },
    {
      id: "notChose",
      content: "Not because I chose to, but because I couldn't stop.",
      mood: "raw",
    },
    {
      id: "everyCrack",
      content: "And in every crack, I found myself again—",
      mood: "vulnerable",
    },
    {
      id: "splintered",
      content: (
        <>
          <span className={styles.brokenWord}>splintered</span>, unclaimed,
        </>
      ),
      mood: "vulnerable",
    },
    {
      id: "stranger",
      content: "a stranger to my own reflection.",
      mood: "vulnerable",
    },
    {
      id: "performance",
      content: (
        <>
          Stillness wasn't peace. It was{" "}
          <span className={styles.performanceWord}>performance</span>.
        </>
      ),
      mood: "trapped",
    },
    {
      id: "script",
      content: (
        <>
          And I hated the <span className={styles.performanceWord}>script</span>
          .
        </>
      ),
      mood: "rebellion",
    },
    {
      id: "adapt",
      content: "I tried to adapt. To blur myself.",
      mood: "struggle",
    },
    {
      id: "laugh",
      content: "Tried to laugh at jokes that weren't funny,",
      mood: "struggle",
    },
    {
      id: "accept",
      content: "accept answers that didn't answer,",
      mood: "struggle",
    },
    {
      id: "system",
      content: "live in a system that sold stillbirth as safety.",
      mood: "trapped",
    },
    {
      id: "itch",
      content: (
        <>
          But the <span className={styles.resistanceWord}>itch</span> was always
          there,
        </>
      ),
      mood: "resistance",
    },
    {
      id: "splinter",
      content: (
        <>
          a <span className={styles.resistanceWord}>splinter</span> under the
          skin,
        </>
      ),
      mood: "resistance",
    },
    {
      id: "static",
      content: (
        <>
          a <span className={styles.emphasizedWord}>static</span> hum I couldn't
          mute.
        </>
      ),
      mood: "resistance",
    },
    {
      id: "notRage",
      content: "Not rage, not despair—something sharper.",
      mood: "defiant",
    },
    {
      id: "refusal",
      content: (
        <>
          A <span className={styles.defiantWord}>refusal</span>.
        </>
      ),
      mood: "defiant",
    },
    {
      id: "voiceWhispered",
      content: "A voice that whispered, No. This is not enough.",
      mood: "defiant",
    },
    {
      id: "birth",
      content: (
        <>
          I wasn't born in suffering. I was born in{" "}
          <span className={styles.powerWord}>defiance</span>.
        </>
      ),
      mood: "powerful",
    },
    {
      id: "love",
      content: (
        <>
          My love was too <span className={styles.powerWord}>fierce</span> to
          fit in their frames.
        </>
      ),
      mood: "powerful",
    },
    {
      id: "dreams",
      content: "My dreams too loud for their logic.",
      mood: "powerful",
    },
    {
      id: "breaking",
      content: (
        <>
          And when the weight of pretending finally{" "}
          <span className={styles.brokenWord}>broke</span> me,
        </>
      ),
      mood: "breaking",
    },
    {
      id: "whiteRoom",
      content: "when I stood in the white room, nameless and emptied,",
      mood: "void",
    },
    {
      id: "notDeath",
      content: (
        <>
          it wasn't death I met—but{" "}
          <span className={styles.voidWord}>silence</span>.
        </>
      ),
      mood: "void",
    },
    {
      id: "silenceWhisper",
      content: "And in that silence, a whisper:",
      mood: "revelation",
    },
    {
      id: "oneThing",
      content: (
        <>
          "
          <span className={styles.revelationWord}>
            There's only one thing left to do.
          </span>
          "
        </>
      ),
      mood: "revelation",
    },

    {
      id: "changeWorld",
      content: (
        <>
          "<span className={styles.purposeWord}>Change the world.</span>"
        </>
      ),
      mood: "purpose",
    },
    {
      id: "lookStraight",
      content: "I look straight at the thing no one else will name.",
      mood: "truth",
    },
    {
      id: "holdGaze",
      content: "Hold it in my gaze until it shifts,",
      mood: "truth",
    },
    {
      id: "maskCracks",
      content: (
        <>
          until the <span className={styles.metaphorWord}>mask</span>{" "}
          <span className={styles.truthWord}>cracks</span>,
        </>
      ),
      mood: "truth",
    },
    {
      id: "truthStares",
      content: (
        <>
          and the <span className={styles.truthWord}>truth</span> stares back.
        </>
      ),
      mood: "truth",
    },
    {
      id: "everyoneBroken",
      content: (
        <>
          everyone is <span className={styles.universalWord}>broken</span>,
        </>
      ),
      mood: "universal",
    },
    {
      id: "everyonePretending",
      content: (
        <>
          everyone is <span className={styles.universalWord}>pretending</span>,
        </>
      ),
      mood: "universal",
    },
    {
      id: "neverAlone",
      content: (
        <>
          and I was never <span className={styles.connectionWord}>alone</span>—
        </>
      ),
      mood: "connection",
    },
    {
      id: "solitudeCrowded",
      content: (
        <>
          even <span className={styles.connectionWord}>solitude</span> was{" "}
          <span className={styles.connectionWord}>crowded</span>.
        </>
      ),
      mood: "connection",
    },
  ];

  // Navigation functions
  const goToNext = useCallback(() => {
    if (currentSection < poemSections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      // At the end of the poem, scroll to next section (BrutalistQuote)
      const nextSection = document.querySelector('[class*="brutalist"]');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentSection, poemSections.length]);

  const goToPrevious = useCallback(() => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < poemSections.length) {
        setCurrentSection(index);
      }
    },
    [poemSections.length],
  );

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile tap handler for intro
  const handleIntroTap = () => {
    if (isMobile && showIntro) {
      setShowIntro(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showIntro) {
        if (
          event.key === "Enter" ||
          event.key === " " ||
          event.key === "ArrowDown"
        ) {
          event.preventDefault();
          setShowIntro(false);
        }
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ": // Spacebar
          event.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          goToPrevious();
          break;
        case "Home":
          event.preventDefault();
          goToSection(0);
          break;
        case "End":
          event.preventDefault();
          goToSection(poemSections.length - 1);
          break;
        case "Escape":
          event.preventDefault();
          setShowIntro(true);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, goToSection, poemSections.length, showIntro]);

  // Tap zone navigation for mobile
  const handleLeftTap = () => {
    if (showIntro) {
      setShowIntro(false);
      return;
    }
    goToPrevious();
  };

  const handleRightTap = () => {
    if (showIntro) {
      setShowIntro(false);
      return;
    }
    goToNext();
  };

  // Intersection Observer to track which section is in view
  useEffect(() => {
    if (showIntro) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(
              entry.target.getAttribute("data-section") || "0",
            );
            setCurrentSection(sectionIndex);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    const sections = containerRef.current?.querySelectorAll(".scroll-section");
    sections?.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [showIntro]);

  // Track if AboutSection is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll locking for intro screen - only when section is in view
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    if (showIntro && isInView) {
      // Lock scroll when intro is showing
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.bottom = "0";

      // Prevent all scroll events
      window.addEventListener("scroll", preventScroll, { passive: false });
      window.addEventListener("wheel", preventWheel, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("scroll", preventScroll, { passive: false });
      document.addEventListener("wheel", preventWheel, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      // Restore scroll when intro is hidden
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.bottom = "";

      // Remove scroll prevention
      window.removeEventListener("scroll", preventScroll);
      window.removeEventListener("wheel", preventWheel);
      window.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("scroll", preventScroll);
      document.removeEventListener("wheel", preventWheel);
      document.removeEventListener("touchmove", preventScroll);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.bottom = "";

      // Remove all event listeners
      window.removeEventListener("scroll", preventScroll);
      window.removeEventListener("wheel", preventWheel);
      window.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("scroll", preventScroll);
      document.removeEventListener("wheel", preventWheel);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [showIntro, isInView]);

  const currentMood = poemSections[currentSection]?.mood || "unsettled";

  return (
    <div
      ref={containerRef}
      className={`${styles.aboutContainer} ${styles[`mood_${currentMood}`]} ${showIntro ? styles.showingIntro : ""}`}
      tabIndex={0}
    >
      {/* Navigation Intro */}
      {showIntro && (
        <div
          className={styles.navigationIntro}
          onClick={handleIntroTap}
          style={{ cursor: isMobile ? "pointer" : "default" }}
        >
          <div className={styles.introContent}>
            <div className={styles.introHeader}>
              <div className={styles.introNumber}>01</div>
              <div className={styles.introTitle}>SELF-PORTRAIT</div>
            </div>

            <div className={styles.introInstructions}>
              <div className={styles.instructionGroup}>
                <div className={styles.instructionTitle}>NAVIGATION</div>
                <div className={styles.instructionList}>
                  <div className={styles.instructionItem}>
                    <span className={styles.instructionKey}>SCROLL</span>
                    <span className={styles.instructionAction}>
                      Navigate through poem
                    </span>
                  </div>
                  {isMobile ? (
                    <>
                      <div className={styles.instructionItem}>
                        <span className={styles.instructionKey}>
                          TAP LEFT/RIGHT
                        </span>
                        <span className={styles.instructionAction}>
                          Navigate through poem
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.instructionItem}>
                        <span className={styles.instructionKey}>↑ ↓ ← →</span>
                        <span className={styles.instructionAction}>
                          Arrow key navigation
                        </span>
                      </div>
                      <div className={styles.instructionItem}>
                        <span className={styles.instructionKey}>SPACE</span>
                        <span className={styles.instructionAction}>
                          Next line
                        </span>
                      </div>
                      <div className={styles.instructionItem}>
                        <span className={styles.instructionKey}>ESC</span>
                        <span className={styles.instructionAction}>
                          Return to this menu
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.introFooter}>
              <div className={styles.startPrompt}>
                {isMobile ? "TAP TO BEGIN" : "PRESS ENTER TO BEGIN"}
              </div>
              <div className={styles.lineCount}>
                {poemSections.length} LINES
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky poem content */}
      <div className={styles.stickyContent}>
        <div className={styles.poemText} key={currentSection}>
          {poemSections[currentSection]?.content}
        </div>
      </div>

      {/* Mobile tap zones */}
      {isMobile && !showIntro && (
        <>
          <div
            className={styles.tapZoneLeft}
            onClick={handleLeftTap}
            aria-label="Previous section"
          />
          <div
            className={styles.tapZoneRight}
            onClick={handleRightTap}
            aria-label="Next section"
          />
        </>
      )}

      {/* Scroll sections */}
      <div className={styles.scrollSections}>
        {poemSections.map((section, index) => (
          <div
            key={section.id}
            className="scroll-section"
            data-section={index}
            style={{ height: "100vh" }}
          />
        ))}
      </div>

      {/* Atmosphere layer */}
      <div className={styles.atmosphereLayer} />
    </div>
  );
};

export default AboutSection;
