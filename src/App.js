import { Component } from "react";
import TodoForm from "./components/TodoForm";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    todos: [],
  };

  createTodo = (data) => {
    const newTodo = {
      id: nanoid(),
      title: data,
      completed: false,
    };

    this.setState((prev) => ({
      todos: [newTodo, ...prev.todos],
    }));
    console.log("todos", this.state.todos);
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  // handleCheckCompleted = id => {
  //   this.setState((prev) => ({
  //     todos: prev.todos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed
  //         }
  //       }
  //       return todo
  //     })
  //   }))
  // }

  handleCheckCompleted = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoForm createTodo={this.createTodo} />
        <TodoList
          todos={todos}
          removeTodo={this.removeTodo}
          handleCheckCompleted={this.handleCheckCompleted}
        />
      </>
    );
  }
}
