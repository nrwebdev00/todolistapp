import React from 'react';

function AddTask(){
    return(
        <form>
        <input type="text" placeholder="New Task" />
        <button type="submit" name="submit" value="submit">Add New Task</button>
       </form>
    )
}
export default AddTask