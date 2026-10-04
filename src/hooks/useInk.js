import { useState } from 'react';

export const INKS = ['paper', 'night'];

function applyInk(ink) {
  if (ink === INKS[0]) document.documentElement.removeAttribute('data-ink');
  else document.documentElement.setAttribute('data-ink', ink);
}

/** Toggles light and dark ink by stamping data-ink on <html>; CSS does the rest. */
export function useInk() {
  const [ink, setInk] = useState(INKS[0]);

  // Applied here rather than in an effect: the canvas specimen reads the ink CSS
  // variables inside its own effect, and child effects run before the parent's.
  const nextInk = () => {
    const next = INKS[(INKS.indexOf(ink) + 1) % INKS.length];
    applyInk(next);
    setInk(next);
  };

  return [ink, nextInk];
}
