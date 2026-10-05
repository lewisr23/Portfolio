import { useReveal } from '../hooks/useReveal.js';

export default function Rubric({ title, inverted = false }) {
  const [ref, revealClass] = useReveal();

  return (
    <div ref={ref} className={`rubric${inverted ? ' rubric--inv' : ''} ${revealClass}`}>
      <h2 className="rubric__title">{title}</h2>
      <span className="rubric__rule" />
    </div>
  );
}
