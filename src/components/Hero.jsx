import { Fragment } from 'react';
import { profile, contactStrip } from '../data/content.jsx';
import cvUrl from '../assets/Lewis_Robinson_CV_web.docx?url';

export default function Hero() {
  return (
    <section className="hero">
      <p className="dateline">
        {profile.dateline.map((item, i) => (
          <Fragment key={item}>
            <span>{item}</span>
            {i < profile.dateline.length - 1 && <b>✦</b>}
          </Fragment>
        ))}
      </p>

      <h1 className="mega">
        {profile.name.map((line, i) => (
          <span
            key={line}
            className={`mega__line${i === 1 ? ' mega__line--b' : ''}`}
            data-text={line}
          >
            {line}
          </span>
        ))}
      </h1>

      <div className="hero__body">
        <div className="hero__col">
          <p className="lede">
            Software engineer working across Java and Spring Boot, Python and FastAPI, React and
            Laravel. I care about clean, secure, well-tested code, and I take things from the first
            conversation about requirements all the way to something live.
          </p>
          <p className="hero__p">
            MSc with Distinction, AWS Developer Associate certified, and four things shipped this
            year: a paid client site handling member payments, a live marketplace at restrum.uk, a
            team build, and a browser tool with a couple of hundred users.
          </p>
          <div className="hero__cta">
            <a className="slab slab--fill" href="#work">SEE THE WORK ↓</a>
            <a className="slab" href={cvUrl} download="Lewis_Robinson_CV.docx">DOWNLOAD CV</a>
          </div>
        </div>

        <aside className="stamp-wrap">
          <div className="stamp">
            <span className="stamp__top">OPEN TO</span>
            <strong className="stamp__mid">GRAD &amp;<br />JUNIOR<br />ROLES</strong>
            <span className="stamp__bot">★ UK / REMOTE ★</span>
          </div>

          <ul className="contact-strip">
            {contactStrip.map(({ label, value, href }) => (
              <li key={label}>
                <span>{label}</span>
                <i />
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
