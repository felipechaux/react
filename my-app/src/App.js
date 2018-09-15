import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import {tasks} from './tasks.json';

// subcomponents
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';


class App extends Component {

  constructor(){
    super();
    this.state={
      tasks
    }

    this.handleAddTask = this.handleAddTask.bind(this);

  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    console.log("render");
    console.log(this.state.tasks)
    const tasks=this.state.tasks.map((task,i) =>  {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
             <div className="card-header">
                <h3> {task.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
                </span>
             </div>
             <div className="card-body">
                <p> {task.descripcion}</p>
                <p><mark> {task.responsable}</mark></p>
             </div>
          </div>
        </div>
      )

    })

//console.log(tasks.length)
    return (

    <div className="App">
          <Navigation titulo="Tasks" total={tasks.length}  />

          <div className="container">
              <div className="row mt-4">

                <div className="col-md-3">
                  <img src={logo} className="App-logo" alt="logo" />
                  <TaskForm onAddTask={this.handleAddTask}/>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    {tasks}
                  </div>
                </div>
              </div>

          </div>
    </div>

    );

  }


}

export default App;
