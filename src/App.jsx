import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 className='display-4 m-3 text-center text-white'>Very Simple Todo App</h1>
        <hr></hr>
        <div className='row'>
          <div className='col-4'>            
            <NewTodo/>
          </div>
          <div className='col-8'>
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
