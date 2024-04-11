import { Component } from "react";

export default class TodoForm extends Component {
  state = {
    todo: "",
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.state;
    this.props.createTodo(todo);
    this.resetForm()
  };

  resetForm = () => {
    this.setState({
      todo: "",
    });
  };

  render() {
    const { todo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={this.handleChange}
          required
        />
        <button type="submit">create</button>
      </form>
    );
  }
}
