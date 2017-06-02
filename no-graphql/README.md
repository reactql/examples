<img src="https://reactql.org/docs/images/reactql-logo.svg" alt="ReactQL" width="278" height="77" />

# ReactQL: No GraphQL, Just Redux example

ReactQL's core purpose is to offer a fast, general-purpose front-end starter kit that combines awesome tooling for React and GraphQL.

But, there are times when you might not want or need GraphQL. Maybe you're connecting to a legacy REST endpoint, or you just want to prototype a quick front-end that offers fast single-page apps in the browser, and server-side rendering on the server.

On those occasions, there's no need to forego ReactQL -- you can pull GraphQL from the project, and enjoy the same flexible Webpack build pipeline, SSR, React and Redux.

This example shows you how.

## Features

In this project, we yank GraphQL and add a quick 'to-do list' example that stores global state in Redux.

All of the pieces are already in place, whether or not you use GraphQL -- we've just added a sample `todo` reducer to handle our to-dos.

If you run the server example ([http://localhost:8081](http://localhost:8081)), you'll see that a to-do has been added for yo.

This demonstrates the flexibility of updating state on the server, and 'inheriting' that state automatically in the browser.

## Kit version

Built using ReactQL [Javascript kit](https://github.com/reactql/kit), [v1.5.1](https://github.com/reactql/kit/releases/tag/1.5.1)

## Running locally

First, install NPM packages with `npm i` or `yarn`.

Then, run:

`npm start`

You can then navigate to [http://localhost:8080](http://localhost:8080) to see a hot-reloading browser version, [http://localhost:8081](http://localhost:8081) for a development web server with full [server-side rendering](https://reactql.org/docs/ssr), and [http://localhost:8081/graphql](http://localhost:8081/graphql) for the GraphiQL utility to test GraphQL queries.

For more build options, see the [root examples README](https://github.com/reactql/examples)
