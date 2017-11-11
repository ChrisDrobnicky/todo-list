// Actions
const ADD_TODO = 'ADD_TODO';

const initialState = {
  todos: [],
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newState = Object.assign({}, state, { todos: [...state.todos, action.payload] })
      return newState
    default:
      return state;
  }
}

// Action Creators
