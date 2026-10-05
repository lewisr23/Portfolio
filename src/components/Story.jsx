import Rubric from './Rubric.jsx';
import { factFile } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Story() {
  const [textRef, textClass] = useReveal();
  const [factRef, factClass] = useReveal();

  return (
    <section id="story" className="plate story">
      <Rubric no="01" title="How I Work" />

      <div className="story__grid">
        <div ref={textRef} className={`story__text ${textClass}`}>
          <p className="dropcap">
            I work wherever the problem is: a data model, an API, a real-time rendering pipeline or
            the interface someone actually clicks. What stays the same is the approach. Pin down
            what the thing has to do, build it in whatever fits, and prove it with tests rather
            than assume it works.
          </p>
          <p>
            That has meant building for other people, not just for marks. A gym in the North East
            needed its membership payments to stop being a spreadsheet problem, so I built them a
            site that issues every member their own standing order reference, plus a tool that
            reconciles the bank statements against it. Restrum is a full marketplace, Laravel over
            MySQL and Elasticsearch with a React front end, live at restrum.uk.
          </p>
          <p>
            I came to computing after a music degree and finished the MSc with a Distinction. Since
            then I have written Java, Python, TypeScript and PHP for real users, and picked the
            language to suit the job rather than the other way round.
          </p>
        </div>

        <div ref={factRef} className={`factfile ${factClass}`}>
          <h3 className="factfile__title">INFO</h3>
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
