import Rubric from './Rubric.jsx';
import { ledger } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';

export default function Ledger() {
  const [ref, revealClass] = useReveal();

  return (
    <section id="ledger" className="plate ledger">
      <Rubric no="05" title="Ledger" />

      <table ref={ref} className={`ledger__table ${revealClass}`}>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Entry</th>
            <th scope="col">Institution</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          {ledger.map(({ year, entry, place, note, chip }) => (
            <tr key={entry}>
              <td className="yr">{year}</td>
              <td><b>{entry}</b></td>
              <td>{place}</td>
              <td>{chip ? <span className={`chip chip--${chip}`}>{note}</span> : note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
