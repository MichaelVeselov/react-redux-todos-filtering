import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/actions/todosActions';
import { selectVisibleTodos } from '../store/selectors/todosSelectors';
import { selectActiveFilter } from '../store/selectors/filtersSelectors';

const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none' }}>
      {!!todos.length &&
        todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.title}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
