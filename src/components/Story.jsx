import Rubric from './Rubric.jsx';
import { factFile } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Story() {
  const [textRef, textClass] = useReveal();
  const [quoteRef, quoteClass] = useReveal();
  const [factRef, factClass] = useReveal();

  return (
    <section id="story" className="plate story">
      <Rubric no="01" title="How I Work" />

      <div className="story__grid">
        <div ref={textRef} className={`story__text ${textClass}`}>
          <p className="dropcap">
            Backend is where I settled. Most of my time goes on the parts that decide whether a
            system holds up: schemas with real constraints, service layers that keep their shape,
            endpoints that do one thing. I like the part of the job where an ill-defined idea gets
            pinned down into tables and contracts, because that is where most of the arguing
            actually happens.
          </p>
          <p>
            That has meant building for other people, not just for marks. A gym in the North East
            needed its membership payments to stop being a spreadsheet problem, so I built them a
            site that issues every member their own standing order reference, plus a tool that
            reconciles the bank statements against it. Restrum is a full marketplace, Laravel over
            MySQL and Elasticsearch with a React front end, live at restrum.uk.
          </p>
          <p>
            I came to computing after a music degree and finished the MSc with a Distinction. I
            build the front end too, React and usually Vite, because a backend nobody can touch is
            just a very confident hypothesis.
          </p>
        </div>

        <blockquote ref={quoteRef} className={`pullquote ${quoteClass}`}>
          “The data model is the argument. Everything after it is just typing.”
        </blockquote>

        <div ref={factRef} className={`factfile ${factClass}`}>
          <h3 className="factfile__title">FACT FILE</h3>
          <ul>
            {factFile.map(([key, value]) => (
              <li key={key}>
                <span>{key}</span>
                <i />
                <b>{value}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
