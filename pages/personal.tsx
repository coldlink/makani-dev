import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';

export default function Personal() {
  return (
    <Layout title="Personal" subheading="Personal Experience">
      <h3>Fight Lab Brighton</h3>
      <nav>
        <ul className="in-article">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fightlab"
              title="GitHub | Fight Lab Brighton"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
        </ul>
      </nav>
      <h4>November 2017 - Present | Brighton, UK</h4>
      <h5>Habrewken - Brighton Fighting Game Community</h5>
      <nav>
        <ul className="in-article">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hbk.gg"
              title="Website | Habrewken"
            >
              <FontAwesomeIcon icon={faGlobeEurope} />
            </a>
          </li>
        </ul>
      </nav>
      <h6>About</h6>
      <p>
        I&apos;ve been a member of the Fighting Game Community since 2012. I
        partake in, and help run events which promote the social and competitive
        nature of fighting games such as Street Fighter, Tekken, Blazblue etc. I
        also help co-run events in Brighton. The Brighton Fighting Game
        Community Website and Resource is a one stop shop for every event and
        tournament we’ve ever run. As well as statistics on players and games
        that we play.
      </p>
      <p>
        This was a major passion project, and a love letter to specifically the
        Brighton Fighting Game Community. It primarily uses React.js on the
        client side, and uses Redux to maintain the global state making it
        really easy to manipulate data around the website. Using the awesome{' '}
        <a
          href="http://challonge.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Challonge
        </a>{' '}
        API (the platform we use to manage the tournaments) we can get
        information on every tournament we’ve ever run, down to every round in a
        game that has been played. This was implemented on our open server API
        based on Express.js to combine all this information together.
      </p>
      <h6>Technologies/Platform</h6>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          React.js
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://redux.js.org/"
        >
          Redux
        </a>
        ,{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">
          Node.js
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mongodb.com/"
        >
          MongoDB
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://expressjs.com/"
        >
          Express.js
        </a>
        <br></br>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://digitalocean.com/"
        >
          DigitalOcean
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://caprover.com/"
        >
          CapRover
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.docker.com/"
        >
          Docker
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.nginx.com/"
        >
          Nginx
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cloudflare.com/"
        >
          Cloudflare
        </a>
      </p>
      <h3>Bracketor for Challonge</h3>
      <h4>December 2015 - March 2016</h4>
      <h5>App Development</h5>
      <nav>
        <ul className="in-article">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/coldlink/bracketorv2"
              title="GitHub | Bracketor"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>
        </ul>
      </nav>
      <h6>About</h6>
      <p>
        A mobile app communicating with the{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://challonge.com/"
        >
          Challonge
        </a>{' '}
        API making it easy to manage tournaments on a phone. The idea came about
        due to the open nature of the Challonge API, and the fact that the
        frontend of the Challonge website was not mobile friendly when I had
        begun work on this (circa 2016). Since then though the Challonge website
        has massively improved their mobile view making this app redundant and
        have since taken it down from the App Store and Google Play Store, but
        at the time this was a very useful app to work on and use.
      </p>
      <h6>Technologies/Platform</h6>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/"
        >
          Ionic
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://angularjs.org/"
        >
          Angular.Js
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://cordova.apache.org/"
        >
          Cordova
        </a>
        <br></br>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.android.com/studio/"
        >
          Android SDK
        </a>
        ,{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.apple.com/ios/"
        >
          iOS SDK
        </a>
      </p>
    </Layout>
  );
}
