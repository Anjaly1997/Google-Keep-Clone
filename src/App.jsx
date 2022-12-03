import React,{useState} from 'react';
import CreateArea from './CreateArea';
import Header from './Header';
import Note from './Note';
import "./App.css";

const App = () => {

  const [notes, setNotes] = useState([]);
  function addNote(newNote){
    setNotes((prevNotes)=>{
      return[...prevNotes,newNote]
    });
  }

// deleting note from array
function deleteNotes(id){
  setNotes((prevNotes)=>{
    return prevNotes.filter((item,index)=>{
      return index !==id;
    });
  });
}

  return (
    <div>
      <Header/>
      <CreateArea addNote={addNote}/>
      {
        notes.map((noteItem,index)=>{
          return(
           <Note key={index} title={noteItem.title} content={noteItem.content} deleteNotes={deleteNotes} id={index}/>
          )
        })
      }
    </div>
  )
}

export default App
