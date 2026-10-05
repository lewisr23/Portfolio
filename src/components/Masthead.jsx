const NAV = [
  ['About', 'about'],
  ['Client', 'client'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

export default function Masthead({ ink, onSwapInk }) {
  return (
    <header className="masthead">
      <a className="monogram" href="#top">LR</a>
      <p className="masthead__meta">
        PORTFOLIO
      </p>
      <nav className="masthead__nav">
        {NAV.map(([label, id]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
      <button className="ink-swap" type="button" onClick={onSwapInk}>
        {ink === 'night' ? '◐ LIGHT MODE' : '◐ DARK MODE'}
      </button>
    </header>
  );
}
