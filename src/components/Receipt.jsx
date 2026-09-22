import { receiptEndpoints } from '../data/content.jsx';

export default function Receipt() {
  return (
    <div className="receipt">
      <p className="receipt__head">
        WHISTLESTOP COFFEE HUT
        <br />
        <small>ENDPOINTS, SERVED HOT</small>
      </p>
      <ul>
        {receiptEndpoints.map(([method, path]) => (
          <li key={path}>
            <span>{method}</span>
            <i />
            <b>{path}</b>
          </li>
        ))}
      </ul>
      <p className="receipt__total">
        <span>TEAM</span>
        <i />
        <b>5 · AGILE</b>
      </p>
    </div>
  );
}
