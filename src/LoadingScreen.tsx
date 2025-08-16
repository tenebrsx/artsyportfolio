import React, { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const text1 = "HI, I'M ANGEL";
  const text2 = "I LIKE CREATING STUFF ;)";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Start typing first line
    const typeFirstLine = () => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= text1.length) {
          setDisplayText1(text1.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setShowCursor1(false);

          // Wait a bit, then start second line
          timeoutId = setTimeout(() => {
            setShowCursor2(true);
            typeSecondLine();
          }, 500);
        }
      }, 100);
    };

    // Type second line
    const typeSecondLine = () => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= text2.length) {
          setDisplayText2(text2.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setShowCursor2(false);
          setIsComplete(true);

          // Wait a moment then fade out
          timeoutId = setTimeout(() => {
            onLoadingComplete();
          }, 1200);
        }
      }, 80);
    };

    // Start the sequence
    const startTimeout = setTimeout(typeFirstLine, 800);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [onLoadingComplete]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.typewriterContainer}>
          <div className={styles.messageLine1}>
            {displayText1}
            {showCursor1 && <span className={styles.cursor}>|</span>}
          </div>
          <div className={styles.messageLine2}>
            {displayText2}
            {showCursor2 && <span className={styles.cursor}>|</span>}
          </div>
        </div>

        {isComplete && (
          <div className={styles.completionIndicator}>
            <div className={styles.completionDot}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
