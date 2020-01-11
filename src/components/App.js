import React, { Component } from 'react';

import '../css/App.css';
import Counter from '../components/Counter'
import TaskList from './TaskList';

class App extends Component {

  state = {
    isFiltered: false,
    pendingTask: "",
    task: [
      {
        name: "Clean kitchen",
        isCompleted: true,
        isEditing: false
      }
    ]
  }

  toggleTaskPropertyAt = (property, indexToChange) =>
    this.setState({
      task: this.state.task.map((task, index) =>{
        if(index === indexToChange) {
          return {
            ...task,
            [property]: !task[property]
          };
        }
        return task;
      })
    })
  
  toggleCompletedAt = index =>
    this.toggleTaskPropertyAt("isCompleted", index);

  toggleEditingAt = index =>
    this.toggleTaskPropertyAt("isEditing", index);

  removeTaskAt = index =>
    this.setState({
      task: [
        ...this.state.task.slice(0, index),
        ...this.state.task.slice(index +1)
      ]
    })
  
    setNameAt = (name, indexToChange) =>
    this.setState({
      task: this.state.task.map((task, index) => {
        if (index === indexToChange) {
          return {
            ...task,
            name
          };
        }
        return task;
      })
    });

    toggleFilter = () =>
      this.setState({ isFiltered: !this.state.isFiltered });
  
    handleNameInput = e =>
      this.setState({ pendingTask: e.target.value});

    newTaskSubmitHandler = e => {
      e.preventDefault();
      this.setState({
        task: [
          {
            name: this.state.pendingTask,
            isCompleted: false,
            isEditing: false
          },
          ...this.state.task
        ],
        pendingTask: ''
      })
    }

  //get total task
  getTotaltask = () => this.state.task.length;

  getCompletedTask = () =>
    this.state.task.reduce(
      (total, task) => task.isCompleted ? total +1 : total,
      0
    );

  //get uncomplted task 

  render(){
    const totalTask = this.getTotaltask();
    const numberCompleted = this.getCompletedTask();
    const numberUnCompleted = totalTask - numberCompleted;
    return (
      <div className="App">
        <header>
          <h1>To Do List</h1>
          <p>By: Nathon Reed</p>
          <form onSubmit={this.newTaskSubmitHandler}>
            <input 
              type="text" 
              onChange={this.handleNameInput}
              value={this.state.pendingTask}
              placeholder="New Task"

            />
            <button type="submit" name="submit" value="submit">Add New Task</button>
          </form>
        </header>
        <div className="main">
          <div className="main-top">
            <div className="hide-task">
              <h2>To Do Task</h2>
              <label>
                  <input 
                    type="checkbox" 
                    onChange={this.toggleFilter}
                    checked={this.state.isFiltered}  
                  />Hide Completed Task
              </label>
            </div>
            <Counter 
              numberTotal={totalTask}
              numberCompleted={numberCompleted}
              numberUncompleted={numberUnCompleted}
            />
          </div>
          <div className="main-body">
            <TaskList 
              tasks={this.state.task}
              toggleCompletedAt={this.toggleCompletedAt}
              toggleEditingAt={this.toggleEditingAt}
              setNameAt={this.setNameAt}
              isFiltered={this.state.isFiltered}
              removeTaskAt={this.removeTaskAt}
              pendingTask={this.state.pendingTask}
            />
          </div>
        </div>
      </div>
     );
   }
  }
export default App;