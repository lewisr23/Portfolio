import { useCallback, useEffect, useRef } from 'react';
import videoSrc from '../assets/staticgrind.mp4?url';
import posterSrc from '../assets/staticgrind-poster.jpg?url';

/** Actual StaticGrind output, looping as the specimen for that exhibit. */
export default function GlitchVideo() {
  const videoRef = useRef(null);

  // Set muted the moment the node exists: React does not reliably render the
  // attribute, and an unmuted video gets its autoplay blocked outright.
  const attachVideo = useCallback((node) => {
    videoRef.current = node;
    if (node) node.muted = true;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.controls = true;
      video.pause();
      return;
    }

    const isOnScreen = () => {
      const rect = video.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Start it here rather than leaving it to the observer, so playback never
    // depends on an IntersectionObserver callback arriving.
    if (isOnScreen()) video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="glitch-box">
      <video
        ref={attachVideo}
        src={videoSrc}
        poster={posterSrc}
        loop
        playsInline
        autoPlay
        muted
        preload="metadata"
        aria-label="Output from StaticGrind: a hand breaking up into channel-shifted glitch smears"
      />
      <figcaption>FIG. 1 / STATICGRIND OUTPUT / SLICE, SHIFT, CHANNEL OFFSET</figcaption>
    </figure>
  );
}
