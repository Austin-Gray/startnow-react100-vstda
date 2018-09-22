import React from 'react';

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: 'low',
            item: '',
            id: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick() {
        let todo = {
            item: this.state.item,
            priority: this.state.priority,
            id: this.state.id,
        }
        this.setState({id: todo.id+1})
        this.props.addTodo(todo);
    }

    render() {
        return (
            <div className='NewTodo card'>
                <div className='card-header text-dark font-weight-bold'>Add a New To-Do</div>
                <div className='card-body'>
                    <label className='font-weight-bold'>I want to...</label>
                    <textarea name='item' onChange={this.handleChange}></textarea>
                    <label className='font-weight-bold'>How much of a priority is this?</label>
                    <select className='form-control form-control-sm' name='priority' onChange={this.handleChange}
                        placeholder='Select a Priority' required>
                        <option disabled>Select a Priority</option>
                        <option value='low'>Low</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-block btn-primary' onClick={this.handleClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default NewTodo;