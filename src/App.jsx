import Masthead from './components/Masthead.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import Story from './components/Story.jsx';
import Exhibit from './components/Exhibit.jsx';
import Rubric from './components/Rubric.jsx';
import Spec from './components/Spec.jsx';
import Ledger from './components/Ledger.jsx';
import Contact from './components/Contact.jsx';
import { useInk } from './hooks/useInk.js';
import { commissions, exhibits, tickerA, tickerB } from './data/content.jsx';

export default function App() {
  const [, nextInk] = useInk();

  return (
    <>
      <div className="reg-marks" aria-hidden="true">
        <span className="reg reg--tl" />
        <span className="reg reg--tr" />
        <span className="reg reg--bl" />
        <span className="reg reg--br" />
      </div>

      <Masthead onSwapInk={nextInk} />

      <main id="top">
        <Hero />

        <Ticker items={tickerA} variant="a" mark="✦" />

        <Story />

        <section id="client" className="plate work">
          <Rubric no="02" title="Commissioned" />
          {commissions.map((commission) => (
            <Exhibit key={commission.id} exhibit={commission} />
          ))}
        </section>

        <section id="work" className="plate work">
          <Rubric no="03" title="Exhibits A to C" />
          {exhibits.map((exhibit) => (
            <Exhibit key={exhibit.id} exhibit={exhibit} />
          ))}
        </section>

        <Ticker items={tickerB} variant="b" mark="●" reverse />

        <Spec />
        <Ledger />
        <Contact />
      </main>

      <footer className="colophon">
        <p>
          <b>COLOPHON</b>. Set in Anton, Newsreader and IBM Plex Mono. Built with React, Vite and a
          small amount of canvas.
        </p>
        <p>© {new Date().getFullYear()} Lewis Robinson · Newcastle upon Tyne</p>
      </footer>
    </>
  );
}
