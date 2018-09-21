import React from 'react';

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='NewTodo card'>
                <div className='card-header text-dark'>Add a New To-Do</div>
                <div className='card-body'>
                    <label>I want to...</label>
                    <textarea></textarea>
                    <label>How much of a priority is this?</label>
                    <select className='form-control form-control-sm'
                        placeholder='Select a Priority' required>
                        <option value ='' disabled>Select a Priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-block btn-primary'>Add</button>
                </div>
            </div>
        );
    }
}

export default NewTodo;