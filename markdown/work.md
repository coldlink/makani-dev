---
title: "Work Experience"
description: "Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. Here you can find my professional work experience."
---

This is a summary of my professional work experience, and the projects I have
worked on.

## [The Guardian](https://theguardian.com)

#### Senior Software Developer | April 2022 - Present | London, UK

#### Full-stack Software Engineer | September 2019 - April 2022 | London, UK

### Developer Experience | E2E Team | May 2025 - Present

#### About

I am part of a cross-functional Developer Experience team within the Product and
Engineering department at the Guardian. The End-to-End (E2E) team is responsible
for improving the developer experience for all engineers at the Guardian by
building and maintaining tools, libraries, and services that streamline
development workflows and enhance productivity.

I'm currently working on a design system and component library for internal
editorial tools,
[`@guardian/stand`](https://www.npmjs.com/package/@guardian/stand), specifically
designed to reduce cognitive and delivery load on Guardian engineers, designers
and editorial staff. The aim is to create a unified and consistent internal
design system that provides a shared set of components, patterns, and
foundations across internal tools. The system is built with accessibility and
ease of use in mind.

It pioneers the use of [design tokens](https://www.designtokens.org/) and the
[DTCG standard](https://www.designtokens.org/tr/2025.10/). This makes it easy to
share design properties, such as colours, spacing, typography, and more, across
different platforms and technologies as well as establishing a shared language
between design and code.

Since many internal tools are built using different frameworks and technologies,
the library is designed to be framework agnostic, allowing it to be used in a
variety of contexts. We use [Style Dictionary](https://styledictionary.com/) to
build the design tokens for CSS and JavaScript/TypeScript consumption with
consumption guidelines. These tokens are exposed via the npm package for easy
integration into different projects. This includes the base foundations for
application design. The component library itself is based on
[React Aria](https://react-aria.adobe.com/), which is an unstyled component
library that provides the interactivity and accessibility features needed for
building custom components. The design system is utilised to add styles on top
of the React Aria components. Again this is exposed via the `@guardian/stand`
npm package.

This means that engineers building internal tools can either leverage the full
component library, or just use the CSS/JS design tokens within their tool while
still maintaining consistency with the overall design system.

The E2E team is also responsible for maintaining
[csnx](https://github.com/guardian/csnx), which is a monorepo for user-facing
Guardian UI libraries. This includes the
[`@guardian/source`](https://github.com/guardian/csnx/tree/main/libs/@guardian/source)
UI library which contains the design foundations and robust, accessible React
components from the Guardian's
[Source Design System](https://theguardian.design/).

### Identity Team | September 2019 - May 2025

#### About

I was the technical lead on the Identity & Trust team within the Product and
Engineering department at the Guardian. The team manages the authentication and
identity systems at the Guardian, which includes sign-in, account creation,
account recovery, and user data management.

The team is responsible for the health and performance of the identity system,
ensuring that it is secure, scalable, and reliable. We work closely with the
editorial and commercial teams to provide a seamless experience for our users to
help them get the most out of what the Guardian offers.

During my time on the team, I have worked on a large-scale migration from our
in-house legacy identity platform to a hybrid model where the backend services
and data store is provided by a third-party identity-as-a-service provider,
while keeping the user interfaces and interactions between the reader and the
Guardian in-house. This work is being done to modernise the identity platform,
improve security around reader data, and enhance the reader experience.

I've also helped to implement key identity standards with Guardian systems which
include OAuth 2.0, and OpenID Connect, migrating our user-facing applications
away from a legacy in-house non-standard authentication system to these industry
standards. This allows us to provide a more secure and reliable authentication
system for our readers, and improving the developer experience for our internal
teams when building new applications.

Part of this work involved implementing frictionless passwordless authentication
flows using one-time passcodes sent via email, which led to 82% of readers now
using passwordless authentication. This can be read about in more detail either
on the
[Guardian Engineering Blog](https://theguardian.engineering/blog/the-end-of-password-pain-building-frictionless-authentication-at-the-guardian)
or in
[my blog](/blog/the-end-of-password-pain-building-frictionless-authentication-at-the-guardian).

I am also the top contributor to the
[Gateway](https://profile.theguardian.com/guardian/gateway) project, which is
the full-stack identity portal that facilitates user authentication and identity
interactions between the reader and the Guardian, and allows applications to
authenticate and authorise users using the OpenID Connect standard. Gateway is
primarily a TypeScript, React, and Express.js application, utilising the
Guardian Source Design System components, and Emotion CSS-in-JS library for
UI/design. We use Jest for unit testing, and Cypress for integration tests and
E2E tests.

Alongside Identity-related projects, I have also worked on the main Guardian
website, the discussion platform, and contributed to numerous libraries and
services that are used across the Guardian's digital products.

I featured in a 2021
[engineering blog post](https://www.theguardian.com/info/2021/jan/13/a-day-in-the-life)
where I reflected on my career and experience at the Guardian.

### Technologies/Platforms

[GitHub - The Guardian](https://github.com/guardian)

[TypeScript](https://www.typescriptlang.org/), [React.js](https://reactjs.org/),
[Node.js](https://nodejs.org/), [Scala](https://www.scala-lang.org/),
[PostgreSQL](https://www.postgresql.org/),
[VCL](https://varnish-cache.org/docs/trunk/users-guide/vcl.html),
[AWS](https://aws.amazon.com/), [Fastly](https://www.fastly.com/),
[Design Tokens](https://www.designtokens.org/),
[Style Dictionary](https://styledictionary.com/)

## [Net Natives](https://netnatives.com)

#### Software Developer | September 2015 - September 2019 | Brighton/Portsmouth, UK

### Edurank

#### About

Edurank was the source for social media analytics in the education sector.
Institutions use Edurank to view their social activity as well as their
competitors’ to benchmark themselves against the sector. The paid for Enterprise
SaaS version allows institutions to get a deep dive into their data by comparing
their social media metrics down to hour-level granularity against any number of
competitors and sectors.

The client side uses AngularJS to build the application which connects to an API
server built using Express.js with a MongoDB database. I am the lead software
developer on Edurank, and worked on the full stack, developing much of the
client and server side, as well as any backend applications such as workers and
databases.

#### Technologies/Platforms

[AngularJS (1.X)](https://angularjs.org/), [Node.js](https://nodejs.org/),
[MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/),
[Redis](https://redis.io/)\
[Heroku](https://www.heroku.com/), [AWS](https://aws.amazon.com/)

#### Other Work

Alongside leading the development of Edurank, I’ve worked on a number of
projects within Natives. Some notable projects are described below.

### [Akero](https://akerolabs.com)

Akero is used by education marketers to convert more student enquiries into
enrolments. A unique combination of features that creates the perfect
advertising infrastructure. So we can track and report on all the data that
matters, from impressions to the individual whilst improving conversions through
personalisation and A/B testing.

One of the main components I've contributed to the product is a “Social
Performance Analytic” feature, allowing our users to compare social media
statistics from Facebook, Twitter, Instagram, and YouTube for themselves and
their competitors.

#### Netsuite (SuiteScript)

Extending functionality of the [NetSuite](http://www.netsuite.com/) CRM using
its
[SuiteScript](http://www.netsuite.co.uk/portal/uk/platform/developer/suitescript.shtml)
platform and integrating that within internal processes.

#### Google Apps Script and AdWords Script

I used
[Google AdWords Scripting](https://developers.google.com/adwords/scripts/) to
improve the workflows of, and provide more information to, our Paid Media
Specialists and Advertising Technicians within our company.

Working with [Google Apps Scripts](https://developers.google.com/apps-script/)
to again integrate internal workflows with the Google cloud infrastructure
(Google Drive/Sheets/Docs etc.), such as creating an app which syncs data
between our CRM and Google Drive.
