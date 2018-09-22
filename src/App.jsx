import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos})
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
