import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';
// subcomponents
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }


  render() {
    const todos = this.state.todos.map((todos, i) => {
      return (
        <div className="col-md-4 text-center" key={i}>
          <div className="card mt-4">
            <div className="card-header ">
              <h3>{todos.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todos.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todos.description}</p>
              <p> <mark>{todos.resposible}</mark> </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
