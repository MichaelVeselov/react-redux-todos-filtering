import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todosActions';

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoContent = event.target.title.value;
    dispatch(addTodo(todoContent));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='new todo' />
      <input type='submit' value='Add Todo' />
    </form>
  );
};

export default NewTodo;
