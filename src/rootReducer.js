const INITIAL_STATE = {
  todos: [{
    id: 1,
    todo: "addTodos"
  }]
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  };
};

export default rootReducer;