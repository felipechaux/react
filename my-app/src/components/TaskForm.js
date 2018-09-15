import React, { Component } from 'react';

class TaskForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsable: '',
      descripcion: '',
      priority: 'low'
    };
		//vinvular funcion
		this.handleInput=this.handleInput.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
  }

	handleSubmit(e){
	  	e.preventDefault();

	  this.props.onAddTask(this.state);
		console.log("enviando datos");
		console.log(this.state);

	}

   handleInput(e){
     const {value,name}=e.target;
		 this.setState({
      [name]:value
		});
	//	 console.log(this.state);
    //console.log(e.target.value,e.target.name);
	 }




  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body" >
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
							onChange={this.handleInput}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
							onChange={this.handleInput}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
							onChange={this.handleInput}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
								onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TaskForm;
