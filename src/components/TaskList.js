import React from 'react';
import PropTypes from 'prop-types';

import Task from '../components/Task'
import PendingTask from '../components/PendingTask'

const TaskList = props =>
    <ul>
        <PendingTask
            name={props.pendingTask}
        />
        {props.tasks
        .filter(task => !props.isFiltered || !task.isCompleted )
        .map((task, index) =>
            <Task 
                key={index}
                name={task.name}
                isCompleted={task.isCompleted}
                isEditing={task.isEditing}
                handleCompleted={ () => props.toggleCompletedAt(index) }
                handleToggleEditing={ () => props.toggleEditingAt(index) }
                setName={text => props.setNameAt(text, index)}
                handleRemove={() => props.removeTaskAt(index)}
            />
        )}
    </ul>;

    TaskList.propTypes = {
        tasks: PropTypes.array.isRequired,
        toggleCompletedAt: PropTypes.func.isRequired,
        toggleEditingAt: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool.isRequired,
        pendingTask: PropTypes.string.isRequired
    }

export default TaskList;