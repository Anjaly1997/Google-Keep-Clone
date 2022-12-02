import { Delete } from '@mui/icons-material'
import React from 'react'

const Note = ({title,content,deleteNotes,id}) => {
  return (
    <div className='note'>
    <h1>{title}</h1>
    <p>{content}</p>
    <button>
        <Delete onClick={()=>deleteNotes(id)}/>
    </button>
    </div>
  )
}

export default Note