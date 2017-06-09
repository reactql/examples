<img src="https://reactql.org/reactql/logo.svg" alt="ReactQL" width="278" height="77" />

# ReactQL: GraphQL server example

In this example, we swap out the [Graphcool](https://www.graph.cool/) GraphQL server, and instead run our own - directly within your bundled ReactQL web server.

This use case might be useful if:

* You want to build a monolithic application (i.e. keep everything under one code base)
* You want to own the GraphQL infrastructure, end-to-end
* You want to call internal server-side functions, as a means to replace REST

## Kit version

Built using ReactQL [Javascript kit](https://github.com/reactql/kit), [v1.5.1](https://github.com/reactql/kit/releases/tag/1.5.1)

## Running locally

First, install NPM packages with `npm i` or `yarn`.

Then, run:

`npm start`

You can then navigate to [http://localhost:8080](http://localhost:8080) to see a hot-reloading browser version, [http://localhost:8081](http://localhost:8081) for a development web server with full [server-side rendering](https://reactql.org/docs/ssr), and [http://localhost:8081/graphql](http://localhost:8081/graphql) for the GraphiQL utility to test GraphQL queries.

For more build options, see the [root examples README](https://github.com/reactql/examples)
