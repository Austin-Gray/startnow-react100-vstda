import React from 'react';
import ListItem from './ListItem';

class TodoList extends React.Component {
    render() {
        return (
            <div className='NewTodo card'>
                <div className='card-header text-dark font-weight-bold'>View Todos</div>
                <div className=''>
                    <ul className='list-group'>
                        {this.props.todos.map(todo => (
                            <ListItem
                                key = {todo.id}
                                todo = {todo}
                                editTodo = {this.props.editTodo}
                                deleteTodo = {this.props.deleteTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;