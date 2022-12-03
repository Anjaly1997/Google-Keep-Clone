import {Fab,Zoom } from '@mui/material'
import {Add} from '@mui/icons-material'
import React, { useState } from 'react'

function CreateArea({addNote}) {
    const [isExpanded, setisExpanded] = useState(false) ;
    const expand = () =>{
        setisExpanded(true);
    }

    const [note, setNote] = useState({
        title:"",
        content: ""
    })

    const handleChange =(event)=>{
        const {name,value}= event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
                 [name] :value,
            };
        });
        };
        // console.log(note);
        const submitNote=(event)=>{
            addNote(note);
            setNote({
                title: "",
                content: ""
            })
        }
  return (
    <div>
        <form className='create-note'>
            {isExpanded && <input name='title' placeholder='Title' value={note.title} onChange={handleChange}/>}
            <textarea placeholder='Take a Note...' name='content'  rows={isExpanded?3:1} onClick={expand} value={note.content} onChange={handleChange}/>
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <Add/>
                </Fab>
            </Zoom>
        </form>
    </div>
  )
}

export default CreateArea