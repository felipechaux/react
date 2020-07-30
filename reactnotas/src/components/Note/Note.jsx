import React,{Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';



class Note extends Component{

	 constructor(props){
     super(props);
	 this.noteContent=props.noteContent;
	 this.noteId=props.noteId;
  }
    handleRemoveNote(id) {
	   const response =window.confirm('¿Estas seguro de eliminar la nota?')
	   if(response){
         	this.props.removeNote(id);
	   }
	   return;
    }

	render(props) {
		return (
			<div className="Note">
				<span
                    alt="a"
					className="btn-close"
					onClick={() => this.handleRemoveNote(this.noteId)}
				>
					<ion-icon name="close-circle-outline"></ion-icon>
				</span>
				<p>{this.noteContent}</p>
			</div>
		)
	}	


}

Note.PropTypes = {
	noteContent: PropTypes.String	
};

export default Note;
