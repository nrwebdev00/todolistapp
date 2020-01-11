import React from 'react';
import PropTypes from 'prop-types';
import TaskName from '../components/TaskName';

const Task = props => 
    <li>
        <TaskName 
            isEditing={props.isEditing}
            handleNameEdits={e => props.setName(e.target.value)}>
            {props.name}
        </TaskName>
        <label>
            <input 
                type="checkbox" 
                checked={props.isCompleted} 
                onChange={props.handleCompleted}
            />Completed
        </label>
        <button onClick={props.handleToggleEditing}>
            {props.isEditing ? "save" : "edit" }
        </button>
        <button className="warning" onClick={props.handleRemove}>Remove</button>
    </li>

    Task.propTypes = {
        name: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
        isEditing: PropTypes.bool.isRequired,
        handleCompleted: PropTypes.func.isRequired,
        handleToggleEditing: PropTypes.func.isRequired,
        setName: PropTypes.func.isRequired
    }

export default Task