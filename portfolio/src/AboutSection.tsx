import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Poem sections with their content and mood
  const poemSections = [
    {
      id: "opening",
      content: "There was always something off.",
      mood: "unsettled",
    },
    {
      id: "clarification",
      content: "Not wrong—off.",
      mood: "unsettled",
    },
    {
      id: "frequency",
      content:
        "As if the world had tuned itself to a frequency just outside my hearing.",
      mood: "disconnected",
    },
    {
      id: "sterile",
      content: "Too sterile. Too rehearsed. Too muted.",
      mood: "disconnected",
    },
    {
      id: "tired",
      content: "I didn't grow up angry. I grew up tired.",
      mood: "exhausted",
    },
    {
      id: "sadness",
      content:
        "Sad in ways I couldn't name, wearing a mask that even I believed most days.",
      mood: "masked",
    },
    {
      id: "voice",
      content:
        "Somewhere inside, a small voice pushed back—speaking in riddles, testing the edges—",
      mood: "resistance",
    },
    {
      id: "unheard",
      content: "but no one ever seemed to hear the language.",
      mood: "isolated",
    },
    {
      id: "opposite",
      content: "People thought I was disconnected. But I was the opposite.",
      mood: "awakening",
    },
    {
      id: "sawEverything",
      content: "I saw everything.",
      mood: "hyperaware",
    },
    {
      id: "details",
      content:
        "The twitch in the corner of someone's lip. The subtle quake in a voice pretending not to shake.",
      mood: "hyperaware",
    },
    {
      id: "eyes",
      content:
        "The way someone's eyes said \"I'm fine\" even as their soul begged otherwise.",
      mood: "empathetic",
    },
    {
      id: "spaces",
      content:
        "I lived in the space between facial muscles, in the tilt of a shoulder, in the breath held too long.",
      mood: "empathetic",
    },
    {
      id: "trained",
      content: "Not because I was trained. But because I felt them.",
      mood: "raw",
    },
    {
      id: "pieces",
      content:
        "And in each of them, I saw pieces of myself—fractured, desperate, hoping to be seen.",
      mood: "vulnerable",
    },
    {
      id: "performance",
      content: "Stillness wasn't peace. It was performance.",
      mood: "trapped",
    },
    {
      id: "script",
      content: "And I hated the script.",
      mood: "rebellion",
    },
    {
      id: "adapt",
      content: "I tried to adapt. To blur myself.",
      mood: "struggle",
    },
    {
      id: "pretend",
      content:
        "Tried to laugh at jokes that weren't funny, accept answers that didn't answer,",
      mood: "struggle",
    },
    {
      id: "system",
      content: "live in a system that sold stillbirth as safety.",
      mood: "trapped",
    },
    {
      id: "itch",
      content: "But the itch was always there.",
      mood: "resistance",
    },
    {
      id: "quiet",
      content: "That quiet rebellion against the gray.",
      mood: "resistance",
    },
    {
      id: "whisper",
      content: "That voice that whispered, No. This is not enough.",
      mood: "defiant",
    },
    {
      id: "birth",
      content: "I wasn't born in suffering. I was born in defiance.",
      mood: "powerful",
    },
    {
      id: "love",
      content: "My love was too fierce to fit in their frames.",
      mood: "powerful",
    },
    {
      id: "dreams",
      content: "My dreams too loud for their logic.",
      mood: "powerful",
    },
    {
      id: "breaking",
      content: "And when the weight of pretending finally broke me,",
      mood: "breaking",
    },
    {
      id: "whiteRoom",
      content: "when I stood in the white room, nameless and emptied,",
      mood: "void",
    },
    {
      id: "notDeath",
      content: "it wasn't death I met—but silence.",
      mood: "void",
    },
    {
      id: "silenceWhisper",
      content: "And in that silence, a whisper:",
      mood: "revelation",
    },
    {
      id: "oneThing",
      content: '"There\'s only one thing left to do."',
      mood: "revelation",
    },
    {
      id: "changeWorld",
      content: '"Change the world."',
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
      content: "until the mask cracks,",
      mood: "truth",
    },
    {
      id: "finalTruth",
      content: "and the truth stares back.",
      mood: "truth",
    },
  ];

  // Navigation functions
  const goToNext = useCallback(() => {
    setCurrentSection((prev) =>
      prev < poemSections.length - 1 ? prev + 1 : prev,
    );
  }, [poemSections.length]);

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

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (showIntro && (isLeftSwipe || isRightSwipe)) {
      setShowIntro(false);
      return;
    }

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
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

  const currentMood = poemSections[currentSection]?.mood || "unsettled";
  const progress = (currentSection + 1) / poemSections.length;

  return (
    <div
      ref={containerRef}
      className={`${styles.aboutContainer} ${styles[`mood_${currentMood}`]} ${showIntro ? styles.showingIntro : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      {/* Navigation Intro */}
      {showIntro && (
        <div className={styles.navigationIntro}>
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
                  <div className={styles.instructionItem}>
                    <span className={styles.instructionKey}>↑ ↓ ← →</span>
                    <span className={styles.instructionAction}>
                      Arrow key navigation
                    </span>
                  </div>
                  <div className={styles.instructionItem}>
                    <span className={styles.instructionKey}>SPACE</span>
                    <span className={styles.instructionAction}>Next line</span>
                  </div>
                  <div className={styles.instructionItem}>
                    <span className={styles.instructionKey}>SWIPE</span>
                    <span className={styles.instructionAction}>
                      Touch navigation
                    </span>
                  </div>
                  <div className={styles.instructionItem}>
                    <span className={styles.instructionKey}>ESC</span>
                    <span className={styles.instructionAction}>
                      Return to this menu
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.introFooter}>
              <div className={styles.startPrompt}>PRESS ENTER TO BEGIN</div>
              <div className={styles.lineCount}>
                {poemSections.length} LINES
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky header */}
      <div className={styles.stickyHeader}>
        <div className={styles.sectionInfo}>
          <span className={styles.sectionNumber}>01</span>
          <span className={styles.sectionTitle}>SELF-PORTRAIT</span>
        </div>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className={styles.positionInfo}>
          {currentSection + 1} / {poemSections.length}
        </div>
      </div>

      {/* Sticky poem content */}
      <div className={styles.stickyContent}>
        <div className={styles.poemText} key={currentSection}>
          {poemSections[currentSection]?.content}
        </div>
      </div>

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
