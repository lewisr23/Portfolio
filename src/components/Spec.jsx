import Rubric from './Rubric.jsx';
import { skills } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Spec() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="spec" className="plate spec">
      <Rubric no="04" title="Technical Specification" />

      <div ref={ref} className={`label ${revealClass}`}>
        <h3 className="label__title">TECHNICAL SPECIFICATION</h3>
        <p className="label__serving">Serving size: 1 engineer · Per portfolio</p>
        <div className="rule rule--thick" />
        <p className="label__daily"><b>Amount per discipline</b></p>
        <div className="rule" />

        <dl className="label__rows">
          {skills.map(([discipline, detail]) => (
            <div key={discipline}>
              <dt>{discipline}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>

        <div className="rule rule--thick" />
        <p className="label__foot">
          Not a significant source of framework tourism. Percentages based on a diet of one paying
          client, one marketplace, one team project and one thing shipped for the fun of it.
        </p>
      </div>
    </section>
  );
}
