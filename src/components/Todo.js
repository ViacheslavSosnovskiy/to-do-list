const Todo = ({ id, title, completed, removeTodo, handleCheckCompleted }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleCheckCompleted(id)}
      />
      <h3>{title}</h3>
      <button onClick={() => removeTodo(id)}>remove</button>
    </li>
  );
};

export default Todo;
