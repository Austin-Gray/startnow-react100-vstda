import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo    = this.addTodo.bind(this);
    this.editTodo   = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todo) {
    let todos = [...this.state.todos];
    todos.push(todo);
    this.setState({todos})
  }

  editTodo(todo) {
    let todos = [...this.state.todos];
    let index = todos.map(function(item) { return item.id; }).indexOf(todo.id);
    todos.splice(index, 1, todo);
    this.setState({todos});
  }

  deleteTodo(todo) {
    let todos = [...this.state.todos];
    let index = todos.map(function(todo) { return todo.id; }).indexOf(todo.id);
    todos.splice(index,1);
    this.setState({todos});
  }

  render() {
    return (
      <div className='container'>
        <h1 className='display-4 m-3 text-center text-white'>Very Simple To-Do App</h1>
        <hr></hr>
        <div className='row'>
          <div className='col-4'>       
            <NewTodo addTodo={this.addTodo}/>
          </div>
          <div className='col-8'>
            <TodoList
              todos={this.state.todos}
              editTodo={this.editTodo}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
