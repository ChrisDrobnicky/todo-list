// Actions
const ADD_TODO = 'ADD_TODO';

const initialState = {
  todos: [],
  name: 'kupa'
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [ ...state.todos, action.payload ]
      const newState = Object.assign(
        {},
        state,
        { todos: newTodos}
      )
      return newState;
    default:
      return state;
  }
}

// Action Creators
export function addTodoActionCreator(dispatch, todo) {
  dispatch({ type: ADD_TODO, payload: todo })
}
