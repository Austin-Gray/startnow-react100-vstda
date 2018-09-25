import React from 'react';
import Octicon, {Trashcan, Pencil} from '@githubprimer/octicons-react'

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.todo, { isEditing: false, isComplete: false });
        this.handleChange   = this.handleChange.bind(this);
        this.handleEdit     = this.handleEdit.bind(this);
        this.handleDelete   = this.handleDelete.bind(this);
        this.handleSave     = this.handleSave.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    getColor(todo){
        switch (!todo.isComplete && todo.priority) {
            case false:
                return '';
                break;
            case '1':
                return 'list-group-item-success';
                break;
            case '2':
                return 'list-group-item-warning';
                break;
            case '3':
                return 'list-group-item-danger';
                break;
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleEdit() {
        let newState = Object.assign({}, this.state, {isEditing: !this.state.isEditing});
        this.setState({isEditing: !this.state.isEditing})
        this.props.editTodo(newState)
    }

    handleDelete() {
        this.props.deleteTodo(this.state);
    }

    handleSave() {
        let newState = Object.assign({}, this.state, {isEditing: false});
        this.setState({isEditing: false});
        this.props.editTodo(newState);
    }

    handleComplete(){
        let newState = Object.assign({}, this.state, {isComplete: !this.state.isComplete});
        this.setState({isComplete: !this.state.isComplete})
        this.props.editTodo(newState);
    }

    render() {
        if (this.state.isEditing === true) {
            return (
                <div className='NewTodo card'>
                    <li key={this.props.todo.id} className={`list-group-item ${this.getColor(this.props.todo)} d-flex`}>
                        <input type='checkbox' onChange={this.handleComplete}/>
                        {this.props.todo.item}
                        <button className='edit-todo btn octicon ml-auto' onClick={this.handleEdit}>
                            <Octicon icon={Pencil}/>
                        </button>
                        <button className='delete-todo btn octicon' onClick={this.handleDelete}>
                            <Octicon icon={Trashcan}/>
                        </button>
                    </li>
                    <div className='card-body'>
                        <label>I want to...</label>
                        <textarea name='item' className='update-todo-text' onChange={this.handleChange}></textarea>
                        <label>How much of a priority is this?</label>
                        <select className='update-todo-priority form-control form-control-sm' value={this.props.todo.item} name='priority' onChange={this.handleChange}
                            placeholder='Select a Priority' required>
                            <option disabled>Select a Priority</option>
                            <option value='1'>Low</option>
                            <option value='2'>Medium</option>
                            <option value='3'>High</option>
                        </select>
                        <button className='update-todo btn btn-primary mt-3 ml-auto' onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            )
        } else {
            return (
                <li key={this.props.todo.id} className={`list-group-item ${this.getColor(this.props.todo)} d-flex`}>
                    <input type='checkbox' onChange={this.handleComplete}/>
                    {this.props.todo.item}
                    <button className='edit-todo btn octicon ml-auto' onClick={this.handleEdit}>
                        <Octicon icon={Pencil}/>
                    </button>
                    <button className='delete-todo btn octicon' onClick={this.handleDelete}>
                        <Octicon icon={Trashcan}/>
                    </button>
                </li>
            )
        };
    };
};

export default ListItem;