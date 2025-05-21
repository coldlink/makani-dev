---
title: "Projects"
description: "Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. Here you can find non-professional/personal projects I've worked on."
---

Here you can find non-professional/personal projects I've worked on. Most of the
code for these projects can be found on my
[GitHub](https://github.com/coldlink).

For hosting this website, and other projects unless otherwise stated, I use the
following: [DigitalOcean](https://www.digitalocean.com),
[CapRover](https://caprover.com), [Docker](https://www.docker.com),
[Nginx](https://www.nginx.com)

## Personal Website

#### About

This website, which you are current on, is a personal website that I built to
showcase my work and projects. It is built using the
[Deno Fresh](https://fresh.deno.dev) framework, which is a modern web framework
built on top of Deno, a runtime for JavaScript and TypeScript. It provides a
fast, simple, and highly optimized approach to building web applications,
especially for server-side rendering (SSR). Fresh emphasizes zero-config
deployment, TypeScript-first development, and performance out of the box.
Styling is done using [Tailwind CSS](https://tailwindcss.com), a utility-first
CSS framework.

It is currently a work in progress, currently only used to showcase my work and
projects, as well as contact information. In the works is a photography gallery,
to showcase my photography work, as well as a tech blog.

#### Technologies/Platforms

[Deno Fresh](https://fresh.deno.dev), [Deno](https://deno.land),
[TypeScript](https://www.typescriptlang.org/),
[Tailwind CSS](https://tailwindcss.com)

## The Fight Lab - Fighting Game Community

I&apos;ve been a member of the Fighting Game Community since 2012. I partake in,
and help run events which promote the social and competitive nature of fighting
games such as Street Fighter, Tekken, Guilty Gear etc. I also help co-run local
events in Brighton and London, and have even run events at VSFighting, the
UK&apos;s largest fighting game tournament.

[GitHub - The Fight Lab](https://github.com/fightlab)

### Fightlab Fighting Game Community Stream Tool

#### November 2019 - Present

#### About

[Client](https://github.com/fightlab/hbk-stream-front) |
[Server](https://github.com/fightlab/hbk-stream-server)

The Fight Lab stream tool allows us to control and manage overlays (e.g
scoreboard/cameras) and text displayed on those overlays in real timeand from
anywhere for a live stream on Twitch using tools such as OBS. This was built to
help us run our tournaments and events, and to make it easier to manage the
stream.

The client side is built using React.js, and is split between the views and the
management tool. The views are the actual overlays that are displayed on the
stream, and the management tool is the tool that allows us to control the views.
The client side interfaces with the server side using websockets, which manages
the data and state on each scene. The server side is built using Node.js and
Express.js, and is responsible for managing the websockets, current state of the
data, and the API to control the data.

We've been using the tool for over 5 years now, and it has been a great help in
managing our streams. We've even had other communities use it for their streams,
and have had great feedback from them.

### [Habrewken - Brighton Fighting Game Community Website](https://hbk.gg)

#### October 2012 - March 2020 | Brighton, UK

#### About

The Brighton Fighting Game Community Website and Resource is a one stop shop for
every event and tournament we’ve ever run. As well as statistics on players and
games that we play.

The web site was a major passion project, and a love letter to specifically the
Brighton Fighting Game Community. It primarily uses React.js on the client side,
and uses Redux to maintain the global state making it really easy to manipulate
data around the website. Using the awesome
[Challonge API](https://challonge.com) (the platform we use to manage the
tournaments) we can get information on every tournament we’ve ever run, down to
every round in a game that has been played. This was implemented on our open
server API based on Express.js to combine all this information together.

The website is no longer updated, as events with the Brighton Fighting Game
community stopped in March 2020 with the onset of the Covid-19 pandemic.

#### Technologies/Platforms

[React.js](https://reactjs.org/), [Redux](https://redux.js.org/),
[Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/),
[Express.js](https://expressjs.com/), [Challonge API](https://challonge.com)

### Bracketor for Challonge

#### December 2015 - March 2016

#### About

A mobile app communicating with the [Challonge API](https://challonge.com)
making it easy to manage tournaments on a phone. The idea came about due to the
open nature of the Challonge API, and the fact that the frontend of the
Challonge website was not mobile friendly when I had begun work on this (circa
2016).

Since then though the Challonge website has massively improved their mobile view
making this app redundant and have since taken it down from the App Store and
Google Play Store, but at the time this was a very useful app to work on and
use.

#### Technologies/Platforms

[Ionic](https://ionicframework.com/), [Angular.js](https://angularjs.org/),
[Cordova](https://cordova.apache.org/),
[Android SDK](https://developer.android.com/studio),
[iOS SDK](https://developer.apple.com/ios/)
