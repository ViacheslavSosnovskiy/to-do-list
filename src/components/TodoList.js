import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, handleCheckCompleted }) => {
  return (
    <ul>
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} removeTodo={removeTodo} handleCheckCompleted={handleCheckCompleted}/>
      ))}
    </ul>
  );
};

export default TodoList;
