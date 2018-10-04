import React,{Component} from 'react';
import './Note.css';

class Note extends Component{

	constructor(props){
   super(props);
	 this.noteContent=props.noteContent;
	 this.noteId=props.noteId;
  }
	handleRemove(id){
		console.log(id);

	}

  render(){
		//()=> para no perder scope /bind
		return(
			<div className="Note">
			  <span
         onClick={()=>this.handleRemove(this.noteId)}
				>&times;</span>
				<p>{this.noteContent}</p>
			</div>
		)
  }


}

export default Note;
