import { useReveal } from '../hooks/useReveal.js';

export default function Rubric({ no, title, inverted = false }) {
  const [ref, revealClass] = useReveal();

  return (
    <div ref={ref} className={`rubric${inverted ? ' rubric--inv' : ''} ${revealClass}`}>
      <span className="rubric__no">§ {no}</span>
      <h2 className="rubric__title">{title}</h2>
      <span className="rubric__rule" />
    </div>
  );
}
