// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import PropTypes from 'prop-types';

// Routing
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';

// @connect decorator to inject store state and dispatching
import { connect } from 'react-redux';

/* Local */

// Actions to add to-do
import { addToDo, removeToDo } from 'store/actions';

// NotFound 404 handler for unknown routes
import { NotFound, Redirect } from 'kit/lib/routing';

// Styles
import './styles.global.css';
import css from './styles.css';
import sass from './styles.scss';
import less from './styles.less';

// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
import logo from './reactql-logo.svg';

// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = () => (
  <h1>You&apos;re on the home page - click another link above</h1>
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
);

// Create a route that will be displayed when the code isn't found
const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
const Stats = () => {
  const info = [
    ['Environment', process.env.NODE_ENV],
  ];

  return (
    <ul className={css.data}>
      {info.map(([key, val]) => (
        <li key={key}>{key}: <span>{val}</span></li>
      ))}
    </ul>
  );
};

// Example of CSS, SASS and LESS styles being used together
const Styles = () => (
  <ul className={css.styleExamples}>
    <li className={css.example}>Styled by CSS</li>
    <li className={sass.example}>Styled by SASS</li>
    <li className={less.example}>Styled by LESS</li>
  </ul>
);

// To-do components.  This will demonstrate Redux at work.

// Add a new to-do
@connect() class AddToDo extends React.PureComponent {
  setRef = ref => { this.ref = ref; }
  addToDo = () => {
    this.props.dispatch(addToDo(this.ref.value));
    this.ref.value = '';
  };
  render() {
    return (
      <div>
        <input ref={this.setRef} type="text" />
        <button onClick={this.addToDo}>Add to-do</button>
      </div>
    );
  }
}

// List the to-dos
@connect(state => ({ todos: state.todos }))
class ListToDos extends React.PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }

  // Return a thunk that dispatches the `removeToDo`
  removeToDo = todo => () => {
    this.props.dispatch(
      removeToDo(todo),
    );
  }

  render() {
    const { todos } = this.props;
    let inner;

    if (!todos.length) {
      inner = (
        <h4>No to-dos yet. Add one.</h4>
      );
    } else {
      inner = (
        <ul>
          {todos.map(todo => (
            <li key={todo}>
              {todo}
              <button onClick={this.removeToDo(todo)}>Remove</button>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div className={css.todos}>
        {inner}
      </div>
    );
  }
}

const ToDoHandler = () => (
  <div>
    <AddToDo />
    <ListToDos />
  </div>
);

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <div className={css.hello}>
      <img src={logo} alt="ReactQL" className={css.logo} />
    </div>
    <hr />
    <ToDoHandler />
    <hr />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page/about">About</Link></li>
      <li><Link to="/page/contact">Contact</Link></li>
      <li><Link to="/old/path">Redirect from /old/path &#8594; /new/path</Link></li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page/:name" component={Page} />
      <Redirect from="/old/path" to="/new/path" />
      <Route component={WhenNotFound} />
    </Switch>
    <hr />
    <p>Runtime info:</p>
    <Stats />
    <hr />
    <p>Stylesheet examples:</p>
    <Styles />
  </div>
);
