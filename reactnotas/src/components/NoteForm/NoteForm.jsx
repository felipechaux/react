import React,{Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component{

	constructor(){
     super();
   this.addNote=this.addNote.bind(this);
  }

  addNote(){
     console.log(this.textInput.value);
     this.props.addNote(this.textInput.value);
     this.textInput.value="";
     this.textInput.focus();
  }

  render(){
		return(

     <div className="NoteForm">
        <input
        ref={input=>{this.textInput=input;}}
        placeholder="escribe una nota"
        type="text"/>
        <button
         onClick={this.addNote}
        >
        Add note
        </button>
     </div>

		)
  }


}

export default NoteForm;
