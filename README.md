# Hello!

This is the **Arcade Coding Challenge**. This repository contains a scaffold using [NextJS](https://nextjs.org/), TypeScript, React, and [Tailwind](https://tailwindcss.com/). Your task will be to implement a new feature. Read on...

## The goal

Your goal is to implement a new feature. Write your new feature in a new branch then submit a pull request. After you've submitted the PR, schedule a meeting with your interviewer. We'll discuss your code and your approach to the problem and spend a little bit of time expanding on your solution during the call.

Time's ticking... you have 48 hours to complete the challenge. If you need more time, please let us know. This is a challenge, not a test. We want to see how you work and how you approach problems. We're not looking for a perfect solution, we're looking for a solution that works and that you're proud of.

## The feature

The feature we'd like you to build is a simple viewer page. As you know, Arcade's interactive demo platform centers around [a dynamic viewer](https://app.arcade.software/share/EcSd6j19SG7f1bHQPxTT) that users can interact with in order to progress through a demo. You're going to build a much more simplified version of this.

In the `data/arcade` directory, you'll find a sample JSON file that represents an Arcade. An Arcade consists of the following:

```
arcade
└── steps (1 or more)
    └── image (1 or more)
        └── hotspot (1 or more)
    ...
    └── video (1 or more)
```

Your viewer will show the contents of an Arcade and allow the user to navigate from one step to the next. Image steps will have a `hotspot` that allows a user to click to navigate to the next step. Video steps don't have hotspots. Instead, they should autoplay then when done, navigate to the next step. When there are no more steps, you can either stop the viewer or loop it back to the beginning.

There are TypeScript types defined in `src/types.ts` which describe the schema of the included fixture. Feel free to add additional properties that might help you as you build this out.

Feel free to get creative, but time-box your work -- you only have 48hrs.

## What's in the box?

For this coding challenge, everything you need is in the box. You'll find a scaffolded NextJS application with a basic GET resource and a simple page. There's no need for a database... feel free to just create fixture data. There's already one included.

```
data                   // Fixture data
└── arcades
    └── 123.json       // An example arcade you can use to test your code
pages
├── _app.tsx           // NextJS app wrapper
├── api                // REST API endpoints
│   └── arcades
│       └── [id].ts    // A GET endpoint that returns a sample from ./data/arcades/[id].json
└── index.tsx          // The homepage
public                 // Static assets
src                    // Components, libs, etc.
└── types.ts           // TypeScript types
styles
└── globals.css        // Global styles
```

## Getting Started

First, install the dependencies:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
