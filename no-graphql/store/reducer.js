// Custom reducers.  We'll create a simple to-do list handler.

export default function reducer(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_TODO':
      if (action.todo && !state.includes(action.todo)) {
        return [...state, action.todo];
      }
      break;
    case 'REMOVE_TODO':
      return state.filter(todo => action.todo !== todo);
  }
  return state;
}
