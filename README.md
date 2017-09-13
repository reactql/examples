<img src="https://reactql.org/reactql/logo.svg" alt="ReactQL" width="278" height="77" />

# ReactQL - example projects

## New: Projects for kit v2.x!

[ReactQL](https://github.com/reactql/cli) is a starter kit for building React + GraphQL front-ends.

It's written as an [ES6 Javascript kit](https://github.com/reactql/kit), and has a [CLI tool](https://github.com/reactql/cli) for quickly spawning new projects on Windows, Mac or Linux.

It features a universal code base, that runs both in the browser and server-side, and offers a built-in web server with server-side rendering. Check out the [full feature list](https://github.com/reactql/kit).

This flexibility makes the kit ideal for a variety of use cases -- from building rich, single page web and mobile apps, to running your own GraphQL or even REST server with full server-side React.js.

This repo features a growing list of runnable examples to demonstrate how ReactQL can be used.

## Projects

Current example projects:

* ### [Users, sessions and auth](https://github.com/reactql/example-auth)

Build a monolithic GraphQL app that accepts user/passwords, validates against an in-memory SQLite DB, and returns a JWT via cookies and stored in the browser in `localStorage` for stateful and stateless future requests.

## How to run

Each project appears in its own Github repo.

Clone the relevant repo then run:

`npm i`

... to install the required packages for that particular project.

Finally, run `npm start` to spawn a hot-reloading Webpack dev server on [http://localhost:8080](http://localhost:8080) and a full server-side rendering capable web server on [http://localhost:8081](http://localhost:8081) -- both environments will rebuild automatically on code changes.

## To run in 'production' mode

Run:

`npm run build-run`

And navigate to [http://localhost:4000](http://localhost:4000)

## Want to start your own project?

See the **[CLI tool](https://github.com/reactql/cli)** for easily deploying this starter kit on Mac, Windows or Linux.

## PRs welcome!

If you have your own examples to share, check out the [contribution guidelines](CONTRIBUTING.md).

## Need help?

### Complete documentation @ **https://reactql.org**

Or [open an issue](https://github.com/reactql/examples/issues) on Github.
