import { Head } from "$fresh/runtime.ts";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";
import { ProseSection } from "../../components/ProseSection.tsx";

export default function Work() {
    return (
        <>
            <Head>
                <title>Mahesh Makani | Work Experience</title>
                <meta
                    name="description"
                    content="Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. Here you can find my professional work experience."
                />
            </Head>
            <ProseSection>
                <h1>Work Experience</h1>
                <h2>
                    The Guardian
                </h2>
                <h3 class="flex flex-row space-x-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://theguardian.com"
                        title="Website | The Guardian"
                    >
                        <IoGlobe />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/guardian"
                        title="GitHub | The Guardian"
                    >
                        <IoLogoGithub />
                    </a>
                </h3>
                <h4>
                    Senior Software Developer | April 2022 - Present | London,
                    UK
                </h4>
                <h4>
                    Full Stack Software Engineer | September 2019 - April 2022 |
                    London, UK
                </h4>
                <h3>Identity Team</h3>
                <h4>About</h4>
                <p>
                    Technical lead on the Identity & Trust team within the
                    Product and Engineering department at the Guardian. The team
                    manages the authentication and identity systems at the
                    Guardian, which includes sign in, account creation, account
                    recover, and user data management.
                </p>
                <p>
                    The team is responsible for the health and performance of
                    the identity system, ensuring that it is secure, scalable,
                    and reliable. We work closely with the editorial and
                    commercial teams to provide a seamless experience for our
                    users to help them get the most out of what the Guardian
                    offers.
                </p>
                <p>
                    During my time on the team, I have worked on a large scale
                    migration from our in-house legacy identity platform to a
                    hybrid model where the backend services and data store is
                    provided by a third party identity-as-a-service provider,
                    while keeping the user interfaces and interactions between
                    the reader and the Guardian in house. This work is being
                    done to modernise the identity platform, improve security
                    around reader data, and enhance the reader experience for
                    our readers.
                </p>
                <p>
                    I've also helped to implement key identity standards with
                    Guardian systems which include OAuth 2.0, and OpenID
                    Connect, migrating our user facing applications away from a
                    legacy in-house non-standard authentication system to these
                    industry standards. This allows us to provide a more secure
                    and reliable authentication system for our readers, and
                    improving the developer experience for our internal teams
                    when building new applications.
                </p>
                <p>
                    I also am the top contributor to the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://profile.theguardian.com/guardian/gateway"
                    >
                        Gateway
                    </a>{" "}
                    project, which is the full-stack identity portal that
                    facilitates user authentication and identity interactions
                    between the reader and the Guardian, and allows applications
                    to authenticate and authorise users using the OpenID Connect
                    standard. Gateway is primarily a TypeScript, React, and
                    Express.js application, utilising the Guardian Source Design
                    System components, and Emotion CSS-in-JS library for
                    UI/design. We use Jest for unit testing, and Cypress for
                    integration tests and E2E tests.
                </p>
                <p>
                    Alongside Identity related projects, I have also worked on
                    the main Guardian website, the discussion platform, and
                    contributed to numerous libraries and services that are used
                    across the Guardian&apos;s digital products.
                </p>
                <p>
                    I featured in an 2021{"  "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.theguardian.com/info/2021/jan/13/a-day-in-the-life"
                        title="Mahesh Makani | A Day in the Life | The Guardian"
                    >
                        engineering blog post
                    </a>{" "}
                    where I reflected on my career and experience at the
                    Guardian.
                </p>
                <h4>Technologies/Platforms</h4>
                <p>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.typescriptlang.org/"
                    >
                        TypeScript
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://reactjs.org/"
                    >
                        React.js
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://nodejs.org/"
                    >
                        Node.js
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.scala-lang.org/"
                    >
                        Scala
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.postgresql.org/"
                    >
                        PostgreSQL
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://varnish-cache.org/docs/trunk/users-guide/vcl.html"
                    >
                        VCL
                    </a>
                    <br />
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://aws.amazon.com/"
                    >
                        AWS
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.fastly.com/"
                    >
                        Fastly
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/guardian"
                    >
                        GitHub
                    </a>
                </p>
                <h2>Net Natives</h2>
                <h3 class="flex flex-row space-x-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://netnatives.com"
                        title="Website | Net Natives"
                    >
                        <IoGlobe />
                    </a>
                </h3>
                <h4>
                    Software Developer | September 2015 - September 2019 |
                    Brighton/Portsmouth, UK
                </h4>
                <h3>Edurank</h3>
                <h4>About</h4>
                <p>
                    Edurank was the source for social media analytics in the
                    education sector. Institutions use Edurank to view their
                    social activity as well as their competitors’ to benchmark
                    themselves against the sector. The paid for Enterprise SaaS
                    version allows institutions to get a deep dive into their
                    data by comparing their social media metrics down to an
                    hours granularity against any number of competitors and
                    sectors.
                </p>
                <p>
                    The client side uses Angular JS to build the application
                    which connects to an API server built using Express.js with
                    a MongoDB database. I am the lead software developer on
                    Edurank, and worked on the full stack, developing much of
                    the client and server side, as well as any backend
                    applications such as workers and databases.
                </p>
                <h4>Technologies/Platforms</h4>
                <p>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://angularjs.org/"
                    >
                        AngularJs (1.X)
                    </a>
                    ,{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://nodejs.org/"
                    >
                        Node.js
                    </a>
                    ,{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.mongodb.com/"
                    >
                        MongoDB
                    </a>
                    ,{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://expressjs.com/"
                    >
                        Express.js
                    </a>
                    ,{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://redis.io/"
                    >
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
                    ,{" "}
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://aws.amazon.com/"
                    >
                        AWS
                    </a>
                </p>
                <h4>Other Work</h4>
                <p>
                    Alongside leading the development of Edurank, I’ve worked on
                    a number of projects within Natives. Some notable projects
                    are described below.
                </p>
                <h3>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://akerolabs.com"
                        title="Website | Akero"
                    >
                        Akero
                    </a>
                </h3>
                <p>
                    Akero is used by education marketers to convert more student
                    enquires into enrollments. A unique combination of features
                    that creates the perfect advertising infrastructure. So we
                    can track and report on all the data that matters, from
                    impressions to the individual whilst improving conversions
                    through personalisation and A/B testing.
                </p>
                <p>
                    One of the main components I&apos;ve contributed to the
                    product is a &ldquo;Social Performance Analytic&rdquo;
                    feature, allowing our users to compare social media
                    statistics from Facebook, Twitter, Instagram, and YouTube
                    for themselves and their competitors.
                </p>
                <h4>Netsuite (SuiteScript)</h4>
                <p>
                    Extending functionality of the{" "}
                    <a
                        href="http://www.netsuite.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NetSuite
                    </a>{" "}
                    CRM using it’s{" "}
                    <a
                        href="http://www.netsuite.co.uk/portal/uk/platform/developer/suitescript.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SuiteScript
                    </a>{" "}
                    platform and integrating that within internal processes.
                </p>
                <h4>Google Apps Script &amp; AdWords Script</h4>
                <p>
                    I used{" "}
                    <a
                        href="https://developers.google.com/adwords/scripts/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Adwords Scripting
                    </a>{" "}
                    to improve the workflows of, and provide more information
                    to, our Paid Media Specialists and Advertising Technicians
                    within our company.
                </p>
                <p>
                    Working with{" "}
                    <a href="https://developers.google.com/apps-script/">
                        Google Apps Scripts
                    </a>{" "}
                    to again integrate internal workflows with the Google cloud
                    infrastructure (Google Drive/Sheets/Docs etc.), such as
                    creating an app which syncs data between our CRM and Google
                    Drive.
                </p>
            </ProseSection>
        </>
    );
}
