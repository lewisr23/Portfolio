import Rubric from './Rubric.jsx';
import { profile } from '../data/content.jsx';
import { useReveal } from '../hooks/useReveal.js';
import cvUrl from '../assets/Lewis_Robinson_CV_web.docx?url';

export default function Contact() {
  const [mailRef, mailClass] = useReveal();
  const [linksRef, linksClass] = useReveal();

  return (
    <section id="contact" className="plate contact">
      <Rubric no="06" title="Get In Touch" inverted />

      <p className="contact__intro">
        Open to graduate and junior backend or full-stack roles. Quickest route is email, and I
        answer everything.
      </p>

      <a ref={mailRef} className={`contact__mail ${mailClass}`} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <ul ref={linksRef} className={`contact__links ${linksClass}`}>
        <li><a href={profile.github} target="_blank" rel="noopener">GITHUB ↗</a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noopener">LINKEDIN ↗</a></li>
        <li><a href={cvUrl} download="Lewis_Robinson_CV.docx">CV ↓</a></li>
      </ul>

      <div className="postmark" aria-hidden="true">
        <span>NEWCASTLE</span>
        <strong>NE1</strong>
        <span>UPON TYNE</span>
      </div>
    </section>
  );
}
