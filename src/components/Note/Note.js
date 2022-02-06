
import React, { useState } from 'react';
import './Note.css'
function Note(props) {
  const  [showBody, setShowBody] = useState(true);
    const toggle = () => {
      setShowBody(!showBody)
    }
  return (
    <div className = "wrapper">
            <div className ="note">
                <div className="noteTitle" onClick ={()=> toggle()}>{props.title}</div>
                {showBody && (
                <div className="noteBody" > {props.body}</div>
                )}
            <div className = "wrapperButtons">
                <div className = "nope"></div>
                <div className = "delNote">delete</div>
                <div className = "editNote">edit</div>
            </div>
        </div>
    </div>

   )
}

export default Note;