import React, { useState, useEffect, useRef } from "react";
import styles from "./MusicPlayer.module.css";

interface Track {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  mood: string;
  description?: string;
}

interface MusicPlayerProps {
  isVisible: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isVisible, onToggle }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef<any>(null);

  // CURATED PLAYLIST - UPDATE WITH YOUR YOUTUBE VIDEOS
  const playlist: Track[] = [
    {
      id: "01",
      title: "ATMOSPHERIC INSPIRATION",
      artist: "YOUR CHOICE",
      youtubeId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      mood: "ATMOSPHERIC",
      description: "Sets the creative mood for ideation",
    },
    {
      id: "02",
      title: "CINEMATIC VISION",
      artist: "YOUR CHOICE",
      youtubeId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      mood: "CINEMATIC",
      description: "Inspires visual storytelling",
    },
    {
      id: "03",
      title: "CREATIVE FLOW",
      artist: "YOUR CHOICE",
      youtubeId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      mood: "CREATIVE",
      description: "Perfect for deep work sessions",
    },
    {
      id: "04",
      title: "DREAMY LANDSCAPES",
      artist: "YOUR CHOICE",
      youtubeId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      mood: "DREAMY",
      description: "Lynch-inspired ethereal sounds",
    },
    {
      id: "05",
      title: "ARTISTIC ENERGY",
      artist: "YOUR CHOICE",
      youtubeId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
      mood: "INSPIRING",
      description: "Fuels the artistic child within",
    },
  ];

  const currentTrack = playlist[currentTrackIndex];

  // YouTube API Integration
  useEffect(() => {
    // Load YouTube API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (document.getElementById("youtube-player")) {
        playerRef.current = new window.YT.Player("youtube-player", {
          height: "0",
          width: "0",
          videoId: currentTrack.youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            playlist: currentTrack.youtubeId,
          },
          events: {
            onReady: () => {
              if (playerRef.current) {
                playerRef.current.setVolume(volume);
                setIsLoading(false);
              }
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                nextTrack();
              }
            },
          },
        });
      }
    };

    // If API is already loaded, initialize immediately
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  // Update video when track changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(currentTrack.youtubeId);
      if (isPlaying) {
        setTimeout(() => {
          playerRef.current.playVideo();
        }, 500);
      }
    }
  }, [currentTrackIndex]);

  // Update volume when changed
  useEffect(() => {
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(volume);
    }
  }, [volume]);

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length,
    );
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    if (isPlaying && playerRef.current) {
      setTimeout(() => {
        playerRef.current.playVideo();
      }, 500);
    }
  };

  // Simple brutalist loading component
  const LoadingMessage: React.FC = () => (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>
        LOADING
        <br />
        MUSIC PLAYER
      </div>
      <div className={styles.loadingBar}>
        <div className={styles.loadingFill}></div>
      </div>
    </div>
  );

  if (!isVisible) {
    return (
      <div className={styles.playerToggle} onClick={onToggle}>
        <div className={styles.toggleIcon}>
          <div className={styles.musicBars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
        <div className={styles.toggleText}>MUSIC</div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.musicPlayer} ${isExpanded ? styles.expanded : ""}`}
    >
      {/* Hidden YouTube Player */}
      <div id="youtube-player" style={{ display: "none" }} />

      {/* LOADING STATE */}
      {isLoading && <LoadingMessage />}

      {/* CONTROL BUTTONS */}
      <button
        className={styles.closeButton}
        onClick={onToggle}
        title="Close Music Player"
      >
        ✕
      </button>

      <button
        className={styles.expandButton}
        onClick={() => setIsExpanded(!isExpanded)}
        title={isExpanded ? "Collapse Playlist" : "Expand Playlist"}
      >
        {isExpanded ? "▼" : "▲"}
      </button>

      {/* COMPACT PLAYER */}
      <div className={styles.compactPlayer}>
        <div className={styles.trackInfo}>
          <div className={styles.trackTitle}>{currentTrack.title}</div>
          <div className={styles.trackArtist}>{currentTrack.artist}</div>
          <div className={styles.trackMood}>{currentTrack.mood}</div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.controlButton}
            onClick={prevTrack}
            title="Previous Track"
          >
            ◀
          </button>
          <button
            className={styles.playButton}
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            className={styles.controlButton}
            onClick={nextTrack}
            title="Next Track"
          >
            ▶
          </button>
        </div>
      </div>

      {/* EXPANDED PLAYLIST */}
      {isExpanded && (
        <div className={styles.expandedPlayer}>
          <div className={styles.playlistHeader}>
            <span className={styles.playlistTitle}>CREATIVE SOUNDTRACK</span>
            <span className={styles.playlistSubtitle}>
              CURATED FOR CREATION
            </span>
          </div>

          <div className={styles.playlist}>
            {playlist.map((track, index) => (
              <div
                key={track.id}
                className={`${styles.playlistItem} ${
                  index === currentTrackIndex ? styles.activeTrack : ""
                }`}
                onClick={() => selectTrack(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    selectTrack(index);
                  }
                }}
              >
                <div className={styles.trackNumber}>{track.id}</div>
                <div className={styles.trackDetails}>
                  <div className={styles.trackName}>{track.title}</div>
                  <div className={styles.trackArtistName}>{track.artist}</div>
                  {track.description && (
                    <div className={styles.trackDescription}>
                      {track.description}
                    </div>
                  )}
                </div>
                <div className={styles.trackMoodTag}>{track.mood}</div>
              </div>
            ))}
          </div>

          <div className={styles.volumeContainer}>
            <span className={styles.volumeLabel}>VOLUME</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className={styles.volumeSlider}
              title="Adjust Volume"
            />
            <span className={styles.volumeValue}>{volume}%</span>
          </div>

          <div className={styles.playerFooter}>
            <div className={styles.currentMood}>
              CURRENT MOOD: {currentTrack.mood}
            </div>
            <div className={styles.trackDescription}>
              {currentTrack.description}
            </div>
          </div>
        </div>
      )}

      {/* GEOMETRIC ACCENTS */}
      <div className={styles.playerAccent1} />
      <div className={styles.playerAccent2} />
    </div>
  );
};

// YouTube API type declarations
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default MusicPlayer;
