import React from 'react'

function HideTask() {
    return (
        <div className="hide-task">
            <h2>To Do Task</h2>
            <label>
                <input type="checkbox" />Hide Completed Task
            </label>
        </div>
    )
}

export default HideTask