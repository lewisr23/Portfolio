import GlitchVideo from './GlitchVideo.jsx';
import { schemaDiagram, mandateDiagram, pipelineDiagram } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';

function Visual({ kind }) {
  if (kind === 'schema') {
    return (
      <pre className="schema" aria-label="Simplified entity diagram">{schemaDiagram}</pre>
    );
  }
  if (kind === 'mandate') {
    return (
      <pre className="schema" aria-label="Standing order reference format">{mandateDiagram}</pre>
    );
  }
  if (kind === 'pipeline') {
    return (
      <pre className="schema" aria-label="Claim and checkout pipeline">{pipelineDiagram}</pre>
    );
  }
  if (kind === 'glitch') return <GlitchVideo />;
  return null;
}

export default function Exhibit({ exhibit }) {
  const { id, letter, tint, title, sub, prose, checks, link, specimen, visual } = exhibit;
  const [headRef, headClass] = useReveal();
  const [bodyRef, bodyClass] = useReveal();

  return (
    <article id={id} className={`exhibit exhibit--${tint}`}>
      <header ref={headRef} className={`exhibit__head ${headClass}`}>
        <span className="exhibit__letter">{letter}</span>
        <div>
          <h3 className="exhibit__title">{title}</h3>
          <p className="exhibit__sub">{sub}</p>
        </div>
      </header>

      <div ref={bodyRef} className={`exhibit__body ${bodyClass}`}>
        <div className="exhibit__prose">
          <p>{prose}</p>
          <ul className="checks">
            {checks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
          {link && (
            <a className="slab slab--fill" href={link.href} target="_blank" rel="noopener">
              {link.label}
            </a>
          )}
        </div>

        <div className="exhibit__aside">
          <dl className="specimen">
            {specimen.map(({ k, v, chip, chipVariant }) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>
                  {chip ? (
                    <span className={`chip${chipVariant ? ` chip--${chipVariant}` : ''}`}>{v}</span>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <Visual kind={visual} />
        </div>
      </div>
    </article>
  );
}
