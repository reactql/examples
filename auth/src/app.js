// Entry point to our "Users, sessions and auth" app

// ----------------------
// IMPORTS

/* ReactQL */

// Config API, for adding reducers and configuring our ReactQL app
import config from 'kit/config';

/* App */

// Main component -- i.e. the 'root' React component in our app
import Main from 'src/components/main';

// Init global styles.  We'll import the Semantic UI framework here
// (https://semantic-ui.com) for the heck of it
import './styles.global.css';

// ----------------------

// Enable a built-in GraphQL server.  We'll define the schema for it in
// the `SERVER` block below, to avoid bloating our client-side browser bundle
config.enableGraphQLServer();

// Set our server config, by checking `SERVER` -- this code path will be
// eliminated by Webpack in the browser, so we can safely add this.

if (SERVER) {
  /* DATABASE */

  // In this demo app, we're using a SQLite database to build two tables --
  //
  // 1. `users` = to hold an e-mail, password and name of our sample website users
  // 2. `sessions` = to store session data server-side, so that we can check
  // whether a user is logged in, and expire sessions remotely
  //
  // By importing `src/db/fixtures`, this will init the DB on the server and
  // insert a couple of sample users
  require('src/db/fixtures');

  // Connect relationships between tables
  require('src/db/relationships');

  /* GRAPHQL */

  // Set the GraphQL schema.  Only our server needs to know what this is --
  // the client can request type information if it needs it, but otherwise will
  // be able to make queries to the GraphQL server without knowing the schema
  //
  // This contains all the types we need to represent a user,
  // session, JWT token, etc -- and the mutations we need to login
  config.setGraphQLSchema(require('src/graphql').default);

  /* MIDDLEWARE */

  // Add an `Authorization` parser that will store any passed JWT tokens in
  // Koa's request context, so that we can subsequently pass it along to any
  // GraphQL requests that require it (like the { session } shaped query)
  config.addMiddleware(async (ctx, next) => {
    // Check the Authorization:` header or cookie for the JWT
    const authHeader = ctx.get('authorization') || ctx.cookies.get('reactQLJWT');

    if (authHeader) {
      // Strip out the `Bearer` prefix, so we're left with just the JWT and
      // store it on Koa's `ctx.state``.  At this point, it's unverified, but
      // we'll leave it to the relevant GraphQL query to do the validation
      // at the time of the data request, rather than taking up extra CPU cycles
      ctx.state.jwt = authHeader.replace(/^bearer\s*/i, '');
    }
    return next();
  });
} else {
  /* BROWSER ONLY */

  // We don't bother running this stuff on the server, before it's simply
  // not relevant in that environment and/or could cause clashes (for example,
  // with Apollo middleware)

  // Set the Apollo CORS config, so that we can interpret `Set-Cookie`
  // headers for subsequent requests back to the SSR version
  config.setApolloNetworkOptions({
    credentials: 'include',
  });

  // Add Apollo request middleware to use the latest JWT token on every
  // request, so that our previously logged in state can be 'remembered'
  config.addApolloMiddleware((req, next) => {
    const jwt = localStorage.getItem('reactQLJWT');
    req.options.headers = {
      ...req.options.headers,
      authorization: jwt || null,
    };
    next();
  });
}

// In app.js, we need to export the root component we want to mount as the
// starting point to our app.  We'll just export the `<Main>` component.
export default Main;
