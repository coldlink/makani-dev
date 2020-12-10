import Layout from '../components/layout';

export default function Work() {
  return (
    <Layout title="Work" subheading="Work Experience">
      <h3>The Guardian</h3>
      <h4>Full Stack Software Engineer | September 2019 - Present</h4>
      <h5>Identity Team</h5>
      <h6>About</h6>
      <p>
        Member of the Identity team who manage the sign-in and registration
        systems at The Guardian. Key results include identifying and creating
        features to increase the scale and experience of signed in users,
        improving the health of the identity system by implementing modern
        security recommendations, and migrating legacy systems to a modern
        codebase.
      </p>
      <h6>Technologies/Platforms</h6>
      <p>
        TypeScript/JavaScript (React | Node), Scala, PostgreSQL, VCL
        <br />
        AWS, Fastly, GitHub
      </p>
      <h3>Net Natives</h3>
      <h4>Software Developer | September 2015 - September 2019</h4>
      <a href="https://edurank.net" target="_blank" rel="noopener noreferrer">
        <h5>Edurank</h5>
      </a>
      <h6>About</h6>
      <p>
        Edurank is the source for social media analytics in the education
        sector. Institutions use Edurank to view their social activity as well
        as their competitors’ to benchmark themselves against the sector. The
        paid for Enterprise SAAS version allows institutions to get a deep dive
        into their data by comparing their social media metrics down to an hours
        granularity against any number of competitors and sectors.
      </p>
      <p>
        The client side uses Angular JS to build the application which connects
        to an API server built using Express.js with a MongoDB database. I am
        the lead software developer on Edurank, and worked on the full stack,
        developing much of the client and server side, as well as any backend
        applications such as workers and databases.
      </p>
      <h6>Technologies/Platforms</h6>
      <p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://angularjs.org/"
        >
          AngularJs (1.X)
        </a>
        ,{' '}
        <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/">
          Node.js
        </a>
        ,{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.mongodb.com/"
        >
          MongoDB
        </a>
        ,{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://expressjs.com/"
        >
          Express.js
        </a>
        ,{' '}
        <a rel="noopener noreferrer" target="_blank" href="https://redis.io/">
          Redis
        </a>
        <br></br>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.heroku.com/"
        >
          Heroku
        </a>
        ,{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://aws.amazon.com/"
        >
          AWS
        </a>
      </p>
      <h5>Other Work</h5>
      <p>
        Alongside leading the development of Edurank, I’ve worked on a number of
        projects within Natives. Some notable projects are described below.
      </p>
      <a href="https://akerolabs.com" target="_blank" rel="noopener noreferrer">
        <h6>Akero</h6>
      </a>
      <p>
        Akero is used by education marketers to convert more student enquires
        into enrolments. A unique combination of features that creates the
        perfect advertising infrastructure. So we can track and report on all
        the data that matters, from impressions to the individual whilst
        improving conversions through personalisation and A/B testing.
      </p>
      <p>
        One of the main components I&apos;ve contributed to the product is a
        &ldquo;Social Performance Analytic&rdquo; feature, allowing our users to
        compare social media statistics from Facebook, Twitter, Instagram, and
        YouTube for themselves and their competitors.
      </p>
      <h6>Netsuite (SuiteScript)</h6>
      <p>
        Extending functionality of the{' '}
        <a
          href="http://www.netsuite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NetSuite
        </a>{' '}
        CRM using it’s{' '}
        <a
          href="http://www.netsuite.co.uk/portal/uk/platform/developer/suitescript.shtml"
          target="_blank"
          rel="noopener noreferrer"
        >
          SuiteScript
        </a>{' '}
        platform and integrating that within internal processes.
      </p>
      <h6>Google Apps Script &amp; AdWords Script</h6>
      <p>
        I used{' '}
        <a
          href="https://developers.google.com/adwords/scripts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Adwords Scripting
        </a>{' '}
        to improve the workflows of, and provide more information to, our Paid
        Media Specialists and Advertising Technicians within our company.
      </p>
      <p>
        Working with{' '}
        <a href="https://developers.google.com/apps-script/">
          Google Apps Scripts
        </a>{' '}
        to again integrate internal workflows with the Google cloud
        infrastructure (Google Drive/Sheets/Docs etc.), such as creating an app
        which syncs data between our CRM and Google Drive.
      </p>
    </Layout>
  );
}
