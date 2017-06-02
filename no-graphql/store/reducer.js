// Custom reducers.  We'll create a simple to-do list handler.

export default function reducer(state = [], action) {
  // Create a new Array of to-dos
  let todos = [...state];

  // Push the new to-do onto the stack
  if (action.type === 'ADD_TODO') {
    if (action.todo && !todos.includes(action.todo)) {
      todos.push(action.todo);
    }
  } else if (action.type === 'REMOVE_TODO') {
    todos = todos.filter(todo => action.todo !== todo);
  }

  return todos;
}
