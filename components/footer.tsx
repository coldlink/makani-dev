import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faFire } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import Konami from 'react-konami-code';

export default function Footer() {
  return (
    <footer>
      <nav>
        <Konami>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tinder.com/@coldlink"
            title="Tinder"
          >
            <FontAwesomeIcon icon={faFire} />
          </a>
        </Konami>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contact@makani.dev"
              title="Email"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mahesh-makani-9798a8108/"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/coldlink"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/coldlink_"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
