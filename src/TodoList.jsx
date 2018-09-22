import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <div className='NewTodo card'>
                <div className='card-header text-dark font-weight-bold'>View Todos</div>
                <div className=''>
                    <ul className='list-group'>
                        {this.props.todos.map(todo => (
                            <li key={todo.id} className='list-group-item'>
                                <input type='checkbox'/>
                                {todo.item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;