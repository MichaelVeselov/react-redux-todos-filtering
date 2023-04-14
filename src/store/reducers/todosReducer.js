import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../constants/todosConstants';

const initialState = {
  todos: [
    { id: 1, title: 'Learn HTML', completed: true },
    { id: 2, title: 'Learn CSS', completed: false },
    { id: 3, title: 'Learn JS', completed: true },
    { id: 4, title: 'Learn React', completed: false },
    { id: 5, title: 'Learn Redux', completed: true },
    { id: 6, title: 'Learn TypeScript', completed: false },
    { id: 7, title: 'Learn Node JS', completed: false },
  ],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title } = action;
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), title, completed: false }],
      };

    case REMOVE_TODO: {
      const { id } = action;
      const { todos } = state;
      return { ...state, todos: todos.filter((todo) => todo.id !== id) };
    }

    case TOGGLE_TODO: {
      const { id } = action;
      const { todos } = state;
      const toggledTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return { ...state, todos: toggledTodos };
    }
    default: {
      return state;
    }
  }
};
