<img src="https://reactql.org/reactql/logo.svg" alt="ReactQL" width="278" height="77" />

# ReactQL - example projects

[ReactQL](https://github.com/reactql/cli) is a starter kit for building React + GraphQL front-ends.

It comes in [Javascript](https://github.com/reactql/kit) and [Typescript](https://github.com/reactql/kit.ts) flavours, and has a [CLI tool](https://github.com/reactql/cli) for quickly spawning new projects on Windows, Mac or Linux.

It features a universal code base, that runs both in the browser and server-side, and offers a built-in web server with [server-side rendering](https://reactql.org/docs/ssr).

This flexibility makes the kit ideal for a variety of use cases -- from building rich, single page web and mobile apps, to running your own GraphQL server from the same code base.

This repo features a growing list of runnable examples to demonstrate how ReactQL can be used.

## Projects

Current example projects:

* ### [GraphQL Server (graphql-server)](./graphql-server)

Swaps out the [Graphcool](https://graph.cool) service for your own GraphQL server, running alongside the built-in Koa web server. Demonstrates a monolithic application, where the GraphQL endpoint 'lives' next to your front-end code.

* ### [No GraphQL, Just Redux (no-graphql)](./no-graphql)

ReactQL makes an awesome general purpose front-end, even if you're not using GraphQL. This example rips out GraphQL, and demos a simple to-do component that uses Redux stores to manage state globally.

## How to run

Each project appears in its own folder.

Clone this repo, `cd` into your preferred example directory, then run:

`npm i`

... to install the required packages for that particular project.

Then run `npm start` to spawn a hot-reloading Webpack dev server on [http://localhost:8080](http://localhost:8080) and a full server-side rendering capable web server on [http://localhost:8081](http://localhost:8081) -- both environments will rebuild automatically on code changes.

## To run in 'production' mode

Run:

`npm run build-run`

And navigate to [http://localhost:4000](http://localhost:4000)

## To build a bundle you can host statically

If you want to build any example and host it statically - say, via S3, Github pages, Netlify or anywhere else - you can build a static version by running:

`npm run build`

Then just copy over your `dist/public` folder to any host.

To run it locally after building, run `npm run static` (or combine the above two commands with `npm run build-static-run`)

## Want to start your own project?

See the **[CLI tool](https://github.com/reactql/cli)** for easily deploying this starter kit on Mac, Windows or Linux.

## PRs welcome!

If you have your own examples to share, check out the [contribution guidelines](CONTRIBUTING.md).

## Need help?

### Complete documentation @ **https://reactql.org**

Or [open an issue](https://github.com/reactql/examples/issues) on Github.
