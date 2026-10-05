import Rubric from './Rubric.jsx';
import { skills } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Spec() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="skills" className="plate spec">
      <Rubric title="Skills" />

      <div ref={ref} className={`label ${revealClass}`}>
        <dl className="label__rows">
          {skills.map(([discipline, detail]) => (
            <div key={discipline}>
              <dt>{discipline}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
