import { Fragment } from 'react';

function Group({ items, mark, hidden }) {
  return (
    <div className="ticker__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <b>{mark}</b>
        </Fragment>
      ))}
    </div>
  );
}

export default function Ticker({ items, variant = 'a', mark = '✦', reverse = false }) {
  return (
    <div className={`ticker ticker--${variant}`}>
      <div className={`ticker__track${reverse ? ' ticker__track--rev' : ''}`}>
        <Group items={items} mark={mark} />
        {/* duplicated so the loop has no seam */}
        <Group items={items} mark={mark} hidden />
      </div>
    </div>
  );
}
