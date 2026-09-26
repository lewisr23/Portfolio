const NAV = ['Story', 'Client', 'Work', 'Spec', 'Ledger', 'Contact'];

export default function Masthead({ onSwapInk }) {
  return (
    <header className="masthead">
      <a className="monogram" href="#top">LR</a>
      <p className="masthead__meta">
        PORTFOLIO
      </p>
      <nav className="masthead__nav">
        {NAV.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </nav>
      <button className="ink-swap" type="button" onClick={onSwapInk}>◐ SWAP INK</button>
    </header>
  );
}
