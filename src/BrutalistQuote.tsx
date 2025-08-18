import React from "react";
import styles from "./BrutalistQuote.module.css";

const BrutalistQuote: React.FC = () => {
  return (
    <div className={styles.brutalistContainer}>
      {/* Large geometric elements like in references */}
      <div className={styles.redBlock} />
      <div className={styles.blueCircle} />

      {/* Side typography element */}
      <div className={styles.sideText}>
        ANGEL
        <br />
        PORTFOLIO
        <br />
        2024
      </div>

      {/* Corner info text */}
      <div className={styles.cornerText}>FILM UNIVERSITY APPLICATION</div>

      {/* Main quote container */}
      <div className={styles.quoteContainer}>
        <h1 className={styles.mainQuote}>
          <span className={styles.line1}>I MAY NOT</span>
          <span className={styles.line2}>COME FROM</span>
          <span className={styles.line3}>AN ARTISTIC</span>
          <span className={styles.line4}>BACKGROUND,</span>
          <span className={styles.line5}>BUT...</span>
        </h1>

        <p className={styles.subtitle}>
          My intuition tells me I'm meant to create worlds.
        </p>
      </div>
    </div>
  );
};

export default BrutalistQuote;
