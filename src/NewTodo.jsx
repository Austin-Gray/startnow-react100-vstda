import React from 'react';

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: '',
            item: '',
            id: 0,
            isEditing: false,
            isComplete: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleClick() {
        this.props.addTodo(this.state);
        this.setState({
            id: this.state.id+1,
            item: '',
            priority: '',
        })
    }

    render() {
        return (
            <div className='NewTodo card'>
                <div className='card-header text-dark font-weight-bold'>Add a New To-Do</div>
                <div className='card-body'>
                    <label>I want to...</label>
                    <textarea name='item' className='create-todo-text' value={this.state.item} onChange={this.handleChange}></textarea>
                    <label>How much of a priority is this?</label>
                    <select className='create-todo-priority form-control form-control-sm' name='priority' value={this.state.priority} onChange={this.handleChange}
                        placeholder='Select a Priority' required>
                        <option value='' disabled>Select a Priority</option>
                        <option value='1'>Low</option>
                        <option value='2'>Medium</option>
                        <option value='3'>High</option>
                    </select>
                </div>
                <div className='card-footer'>
                    <button className='create-todo btn btn-block btn-primary' onClick={this.handleClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default NewTodo;