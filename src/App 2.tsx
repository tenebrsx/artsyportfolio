import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import LoadingScreen from "./LoadingScreen";
import SimpleCursor from "./SimpleCursor";
import MusicPlayer from "./MusicPlayer";
import AboutSection from "./AboutSection";
import BrutalistQuote from "./BrutalistQuote";
import FavoriteSection from "./FavoriteSection";
import LookingForSection from "./LookingForSection";
import ArtisticWorkSection from "./ArtisticWorkSection";
import MoviesImpactSection from "./MoviesImpactSection";
import TechnicalPortfolioCTA from "./TechnicalPortfolioCTA";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicPlayerVisible, setIsMusicPlayerVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Handle music player toggle
  const toggleMusicPlayer = () => {
    setIsMusicPlayerVisible(!isMusicPlayerVisible);
  };

  // Track scroll progress for Lynch-inspired effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply scroll-based effects to document
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scroll-progress",
      scrollProgress.toString(),
    );

    // Progressive darkness effect
    const darkness = Math.min(scrollProgress * 1.2, 1);
    document.documentElement.style.setProperty(
      "--darkness-level",
      darkness.toString(),
    );

    // Add body classes based on scroll depth
    const body = document.body;
    body.classList.remove(
      "surface",
      "shadows",
      "twin-peaks",
      "chavon",
      "artistic",
      "movies",
      "void",
    );

    if (scrollProgress < 0.15) {
      body.classList.add("surface");
    } else if (scrollProgress < 0.3) {
      body.classList.add("shadows");
    } else if (scrollProgress < 0.45) {
      body.classList.add("twin-peaks");
    } else if (scrollProgress < 0.6) {
      body.classList.add("chavon");
    } else if (scrollProgress < 0.75) {
      body.classList.add("artistic");
    } else if (scrollProgress < 0.9) {
      body.classList.add("movies");
    } else {
      body.classList.add("void");
    }
  }, [scrollProgress]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      {/* Custom Cursor */}
      <SimpleCursor />

      {/* Music Player */}
      <MusicPlayer
        isVisible={isMusicPlayerVisible}
        onToggle={toggleMusicPlayer}
      />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Main Content - The Descent */}
      <main className="main-content">
        {/* SURFACE LEVEL - Bright & Clean */}
        <section className="surface-section">
          <div className="hero-container">
            <h1 className="main-title">
              <span className="title-line-1">ANGEL</span>
              <span className="title-line-2">ARTISTIC</span>
              <span className="title-line-3">PORTFOLIO</span>
            </h1>
            <p className="hero-subtitle">
              A DESCENT INTO THE CREATIVE UNCONSCIOUS
            </p>
            <div className="hero-scroll-indicator">
              <span>SCROLL TO DESCEND</span>
              <div className="arrow-down">↓</div>
            </div>
          </div>
        </section>

        {/* FIRST SHADOWS - About */}
        <AboutSection />

        {/* Brutalist Quote Transition */}
        <BrutalistQuote />

        {/* TWIN PEAKS - Lynch Territory */}
        <FavoriteSection />

        {/* CHAVON - Deeper Mystery */}
        <LookingForSection />

        {/* ARTISTIC WORK - Surreal Dreams */}
        <ArtisticWorkSection />

        {/* MOVIES IMPACT - The Abyss */}
        <MoviesImpactSection />

        {/* TECHNICAL CTA - The Void */}
        <TechnicalPortfolioCTA />

        {/* The Final Descent */}
        <section className="void-section">
          <div className="void-content">
            <h2 className="void-title">THE END IS THE BEGINNING</h2>
            <p className="void-text">
              "In the end, we all become stories. Make yours worth telling."
            </p>
            <div className="void-signature">— ANGEL</div>
          </div>
        </section>
      </main>

      {/* Depth indicator */}
      <div className="depth-indicator">
        <div className="depth-text">
          DEPTH: {Math.round(scrollProgress * 100)}%
        </div>
        <div className="depth-level">
          {scrollProgress < 0.15 && "SURFACE"}
          {scrollProgress >= 0.15 && scrollProgress < 0.3 && "SHADOWS"}
          {scrollProgress >= 0.3 && scrollProgress < 0.45 && "TWIN PEAKS"}
          {scrollProgress >= 0.45 && scrollProgress < 0.6 && "CHAVON"}
          {scrollProgress >= 0.6 && scrollProgress < 0.75 && "ARTISTIC"}
          {scrollProgress >= 0.75 && scrollProgress < 0.9 && "MOVIES"}
          {scrollProgress >= 0.9 && "THE VOID"}
        </div>
      </div>
    </div>
  );
};

export default App;
