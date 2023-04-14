export const selectAllTodos = (state) => {
  const { todosReducer } = state;
  return todosReducer.todos;
};

export const selectActiveTodos = (state) => {
  const { todosReducer } = state;
  return todosReducer.todos.filter((todo) => todo.completed === false);
};

export const selectCompletedTodos = (state) => {
  const { todosReducer } = state;
  return todosReducer.todos.filter((todo) => todo.completed === true);
};

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      const { todosReducer } = state;
      return todosReducer.todos;
    }

    case 'active': {
      const { todosReducer } = state;
      return todosReducer.todos.filter((todo) => !todo.completed);
    }

    case 'completed': {
      const { todosReducer } = state;
      return todosReducer.todos.filter((todo) => todo.completed);
    }

    default: {
      const { todosReducer } = state;
      return todosReducer.todos;
    }
  }
};
