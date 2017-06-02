/*
Custom Redux store creation.  Instead of using the default Apollo store,
we'll create our own for each request so that we can easily layer in our
own reducers for store state outside of Apollo
*/

// ----------------------
// IMPORTS

/* NPM */

// Redux tools
import { createStore, combineReducers, compose } from 'redux';

/* Local */

// Get the custom reducer
import todos from 'store/reducer';

// ----------------------

export default function createNewStore() {
  const store = createStore(
    // Put your reducers here
    combineReducers({
      todos,
    }),
    // Initial server state, provided by the server.  Only relevant in the
    // browser -- on the server, we'll start with a blank object
    // eslint-disable-next-line no-underscore-dangle
    !SERVER ? window.__STATE__ : {}, // initial state
    compose(
        // Enable Redux Devtools on the browser, for easy state debugging
        // eslint-disable-next-line no-underscore-dangle
        (!SERVER && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );

  return store;
}
