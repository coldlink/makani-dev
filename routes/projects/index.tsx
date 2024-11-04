import { Head } from "$fresh/runtime.ts";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Mahesh Makani | Projects</title>
                <meta
                    name="description"
                    content="Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. Here you can find non-professional/personal projects I've worked on."
                />
            </Head>
            <section class="prose sm:prose-sm md:prose-md lg:prose-lg prose-stone dark:prose-invert">
                <h1>Projects</h1>
                <h2>
                    The Fight Lab - Fighting Game Community
                </h2>
                <h3 class="flex flex-row space-x-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fightlab"
                        title="GitHub | The Fight Lab"
                    >
                        <IoLogoGithub />
                    </a>
                </h3>
                <h3>Habrewken - Brighton Fighting Game Community Website</h3>
                <h4>
                    October 2012 - March 2020 | Brighton, UK
                </h4>
                <h4 class="flex flex-row space-x-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://hbk.gg"
                        title="Website | Habrewken - Brighton Fighting Game Community"
                    >
                        <IoGlobe />
                    </a>
                </h4>
                <h4>About</h4>
                <p>
                    I&apos;ve been a member of the Fighting Game Community since
                    2012. I partake in, and help run events which promote the
                    social and competitive nature of fighting games such as
                    Street Fighter, Tekken, Blazblue etc. I also help co-run
                    events in Brighton. The Brighton Fighting Game Community
                    Website and Resource is a one stop shop for every event and
                    tournament we’ve ever run. As well as statistics on players
                    and games that we play.
                </p>
                <p>
                    The web site was a major passion project, and a love letter
                    to specifically the Brighton Fighting Game Community. It
                    primarily uses React.js on the client side, and uses Redux
                    to maintain the global state making it really easy to
                    manipulate data around the website. Using the awesome{" "}
                    <a
                        href="http://challonge.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Challonge
                    </a>{" "}
                    API (the platform we use to manage the tournaments) we can
                    get information on every tournament we’ve ever run, down to
                    every round in a game that has been played. This was
                    implemented on our open server API based on Express.js to
                    combine all this information together.
                </p>
                <p>
                    The website is no longer updated, as events with the
                    Brighton Fighting Game community stopped in March 2020 with
                    the onset of the Covid-19 pandemic.
                </p>
                <h4>Technologies/Platforms</h4>
                <p>
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
                        href="https://redux.js.org/"
                    >
                        Redux
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
                        href="https://www.mongodb.com/"
                    >
                        MongoDB
                    </a>
                    ,{" "}
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
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://caprover.com/"
                    >
                        CapRover
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.docker.com/"
                    >
                        Docker
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.nginx.com/"
                    >
                        Nginx
                    </a>
                    ,{" "}
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
                <h4 class="flex flex-row space-x-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/coldlink/bracketorv2"
                        title="GitHub | Bracketor for Challonge"
                    >
                        <IoLogoGithub />
                    </a>
                </h4>
                <h4>About</h4>
                <p>
                    A mobile app communicating with the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://challonge.com/"
                    >
                        Challonge
                    </a>{" "}
                    API making it easy to manage tournaments on a phone. The
                    idea came about due to the open nature of the Challonge API,
                    and the fact that the frontend of the Challonge website was
                    not mobile friendly when I had begun work on this (circa
                    2016). Since then though the Challonge website has massively
                    improved their mobile view making this app redundant and
                    have since taken it down from the App Store and Google Play
                    Store, but at the time this was a very useful app to work on
                    and use.
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ionicframework.com/"
                    >
                        Ionic
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://angularjs.org/"
                    >
                        Angular.Js
                    </a>
                    ,{" "}
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
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://developer.apple.com/ios/"
                    >
                        iOS SDK
                    </a>
                </p>
            </section>
        </>
    );
}
