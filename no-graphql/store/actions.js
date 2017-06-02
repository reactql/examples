export function addToDo(todo) {
  return {
    type: 'ADD_TODO',
    todo,
  };
}

export function removeToDo(todo) {
  return {
    type: 'REMOVE_TODO',
    todo,
  };
}
