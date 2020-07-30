import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import { DB_CONFIG } from './config/config';
import 'firebase/database';

import Note from './components/Note/Note';
import NoteForm from './components/NoteForm/NoteForm';

class App extends Component {

constructor(){
  super();
  this.state={
    notes:[
      /*{noteId:1,noteContent:'note1' },
      {noteId:2,noteContent:'note2' }*/
    ]
  };

  
  this.addNote = this.addNote.bind(this);
  this.removeNote=this.removeNote.bind(this);

  //conexion db
  this.app=firebase.initializeApp(DB_CONFIG);
  this.db=this.app.database().ref().child('notes')

}

componentDidMount(){
   const { notes }= this.state;

   this.db.on('child_added',snap =>{
     notes.push({
       noteId:snap.key,
       noteContent:snap.val().noteContent
     })
     this.setState({notes});
   });


   this.db.on('child_removed', snap => {
    for(let i = 0; i < notes.length; i++) {
      if(notes[i].noteId === snap.key) {
        notes.splice(i , 1);
      }
    }
    console.log(notes);
    this.setState({notes});
  });



}



addNote(note){
console.log("agregar nota app -> "+note);

 // let { notes } = this.state;
 //  notes.push({
 //    noteId:notes.length+1,
 //    noteContent:note
 //  });
  //actualizar estado
 //this.setState({notes});
 this.db.push().set({noteContent: note});


}

removeNote(noteId){
  this.db.child(noteId).remove();
}


  render() {
    return (
      <div className="notesContainer">
         <div className="notesHeader">
            <h1>React Notes</h1>
         </div>
         <div className="notesBody">
           <ul>
            {
              this.state.notes.map(note =>{
                return(
                 
                  <Note
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                  removeNote={this.removeNote}
                   />
                 )
              })
            }
           </ul>
         </div>

         <div className="notesFooter">
           <NoteForm addNote={this.addNote}/>
         </div>

      </div>
    );
  }
}

export default App;
